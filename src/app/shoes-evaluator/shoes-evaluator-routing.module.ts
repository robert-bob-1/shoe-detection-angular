import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoesEvaluatorComponent } from './shoes-evaluator.component';


// Import your components here

const routes: Routes = [
    {
        path: '',
        component: ShoesEvaluatorComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoesEvaluatorRoutingModule { }