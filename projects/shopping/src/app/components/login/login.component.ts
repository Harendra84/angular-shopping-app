import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    template: `
      <h2>{{title}}</h2>
      <dl>
        <dt>User Name</dt>
        <dd><input type="text"></dd>
        <dt>Password</dt>
        <dd><input type="password"></dd>
      </dl>
      <button> Login </button>
    `,
    styles: ['dt{font-weight:bold}','h2{color:green; font-family:Arial}']
})
export class LoginComponent
{
    title:string = 'User Login';
}