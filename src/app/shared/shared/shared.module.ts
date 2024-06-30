import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoadingMaskComponent } from '../components/loading-mask/loading-mask.component';



@NgModule({
    declarations: [
        LoadingMaskComponent
    ],
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
    ],
    exports: [
        LoadingMaskComponent
    ]
})
export class SharedModule { }
