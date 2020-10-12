import { Injectable, HttpException, HttpStatus, Inject, forwardRef } from '@nestjs/common';
import { BaseService } from 'shared/base.service';
import { User } from './models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { ModelType } from 'typegoose';
import { MapperService } from 'shared/mapper/mapper.service';
import { RegisterVm } from './models/view-models/register-vm-model';
import { AuthService } from 'shared/auth/auth.service';

@Injectable()
export class UserService extends BaseService<User> {
    constructor(
        @InjectModel(User.modelName) _userModel: ModelType<User>,
        _mapperService: MapperService,
        @Inject(forwardRef(() => AuthService)) readonly _authService: AuthService,
    ) {
        super();
        this._model = _userModel;
        this._mapper = _mapperService.mapper;
    }


    async addContact(params: RegisterVm): Promise<any> {

        console.log('params in function', params);

        const {
            firstName, lastName, email, address, phone, phonetype
        } = params;

        const newExpenses = new this._model();

        newExpenses.firstName = firstName;
        newExpenses.lastName = lastName;
        newExpenses.email = email;
        newExpenses.address = address;
        newExpenses.phone = phone;
        newExpenses.phonetype = phonetype;

        try {
            const result = await this.create(newExpenses);
            return result.toJSON() as User;
        } catch (e) {
            throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

}