import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
email!: string;
password!: string;

formSubmission(event: Event): void {
  if(vaildEmail())
  {

  }
}

validEmail()
{
  
}
}
