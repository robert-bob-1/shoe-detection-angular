import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoesBrowserComponent } from './shoes-browser.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ShoeCardListComponent } from './components/shoe-card-list/shoe-card-list.component';
import { ShoeScrollDirective } from './directives/shoe-scroll.directive';
import { ShoesBrowserRoutingModule } from './shoes-browser-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        ShoesBrowserComponent,
        ShoeCardListComponent,
        ShoeScrollDirective,
        FilterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ShoesBrowserRoutingModule,
        HttpClientModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        MatSliderModule,
        MatToolbarModule,
        SharedModule
    ]
})
export class ShoesBrowserModule { }
