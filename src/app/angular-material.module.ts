import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    exports: [
        MatProgressSpinnerModule,
        MatIconModule,    
        MatRadioModule,
        MatButtonModule,
        MatDialogModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatSelectModule,
        MatCardModule,
        MatAutocompleteModule,
        MatInputModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatExpansionModule

    ]
})

export class AngularMaterial {

}