import {Component, Input} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
    selector: 'Custom_input',
    templateUrl:'./Custom_input.component.html', 
    styleUrls: ['./Custom_input.component.css']
    //template :'<h1>Hello world</h1>'
})

export class CustomInputComponent{
    @Input('input-label') label;


}