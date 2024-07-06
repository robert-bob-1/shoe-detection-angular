import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoesEvaluatorComponent } from './shoes-evaluator.component';
import { ShoesEvaluatorRoutingModule } from './shoes-evaluator-routing.module';
import { ShoeUploadComponent } from './components/shoe-upload/shoe-upload.component';
import { SharedModule } from '../shared/shared.module';
import { ShoesBrowserModule } from '../shoes-browser/shoes-browser.module';



@NgModule({
    declarations: [
        ShoesEvaluatorComponent,
        ShoeUploadComponent
    ],
    imports: [
        CommonModule,
        ShoesEvaluatorRoutingModule,
        SharedModule,
        ShoesBrowserModule
    ]
})
export class ShoesEvaluatorModule { }
