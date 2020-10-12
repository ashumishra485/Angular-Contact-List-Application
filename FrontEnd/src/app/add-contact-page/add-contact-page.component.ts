import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'providers/authentication.service';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { Toast } = Plugins;

@Component({
  selector: 'app-add-contact-page',
  templateUrl: './add-contact-page.component.html',
  styleUrls: ['./add-contact-page.component.css']
})
export class AddContactPageComponent implements OnInit {
  formData: any = new FormData();
  contactForm: FormGroup;

  constructor(
    private _authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      phonetype: ['', Validators.required],

    });
  }

  get f() { return this.contactForm.controls; }

  async onSubmit() {

    if (this.contactForm.invalid) {
      return;
    }

    let register = {
      firstName: this.f.firstName.value,
      lastName: this.f.lastName.value,
      email: this.f.email.value,
      address: this.f.address.value,
      phone: this.f.phone.value,
      phonetype: this.f.phonetype.value,
    };


    await this._authService.registerContact(register)
      .subscribe(async response => {
        console.log('response.token', response);
        console.log('created sucessfully');
        this.router.navigate(['/contactlist']);
      },
        async () => {
          console.log('Error in creating project');
          await Toast.show({
            text: 'Something Went Wrong!'
          });

        })

  }
  navBack(){
    this.router.navigateByUrl('contactlist');
  }

}
