import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoadingMaskComponent } from './components/loading-mask/loading-mask.component';
import { ShoeCardComponent } from './components/shoe-card/shoe-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
    declarations: [
        LoadingMaskComponent,
        ShoeCardComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatProgressSpinnerModule,
    ],
    exports: [
        LoadingMaskComponent,
        ShoeCardComponent
    ]
})
export class SharedModule { }
