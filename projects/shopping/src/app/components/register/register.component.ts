import { Component, OnInit } from "@angular/core";
import { CaptchaService } from "../../services/captcha.service";

@Component({
    selector: 'app-register', 
    templateUrl: './register.component.html', 
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit
{
    code:string= '';
    constructor(private captcha: CaptchaService){

    }
    ngOnInit(): void {
        this.code = this.captcha.GenerateCode();
    }
    title:string = "Register User";
}