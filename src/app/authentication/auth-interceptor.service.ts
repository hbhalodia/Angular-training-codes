import { AuthService } from './auth.service';
import {HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http'
import { Injectable } from '@angular/core';


@Injectable()
export class AuthInterceptor implements HttpInterceptor{


    constructor(private authservice : AuthService ){}

    intercept(req: HttpRequest<any>, next: HttpHandler ){
        
        const clonedReq = req.clone({
            headers : req.headers.set("Authorization","Bearer "+this.authservice.getToken())
        })
        return next.handle(clonedReq);
    }
}
