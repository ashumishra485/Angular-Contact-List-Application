import { ApiModelPropertyOptional } from "@nestjs/swagger";

export class RegisterVm {
    @ApiModelPropertyOptional({ example: 'John' }) firstName?: string;
    @ApiModelPropertyOptional({ example: 'Doe' }) lastName?: string;
    @ApiModelPropertyOptional() email: string;
    @ApiModelPropertyOptional() fullName?: string;
    @ApiModelPropertyOptional() address?: string;
    @ApiModelPropertyOptional() phone?: string;
    @ApiModelPropertyOptional() phonetype?: string;

}