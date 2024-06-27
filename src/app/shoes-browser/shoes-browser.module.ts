import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoesBrowserComponent } from './shoes-browser.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LoadingMaskComponent } from './components/loading-mask/loading-mask.component';
import { ShoeCardListComponent } from './components/shoe-card-list/shoe-card-list.component';
import { ShoeCardComponent } from './components/shoe-card/shoe-card.component';
import { ShoeUploadComponent } from './components/shoe-upload/shoe-upload.component';
import { ShoeScrollDirective } from './directives/shoe-scroll.directive';
import { ShoesBrowserRoutingModule } from './shoes-browser-routing.module';



@NgModule({
    declarations: [
        ShoesBrowserComponent,
        ShoeCardComponent,
        ShoeCardListComponent,
        ShoeScrollDirective,
        LoadingMaskComponent,
        ShoeUploadComponent

    ],
    imports: [
        CommonModule,
        ShoesBrowserRoutingModule,
        HttpClientModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
    ]
})
export class ShoesBrowserModule { }
