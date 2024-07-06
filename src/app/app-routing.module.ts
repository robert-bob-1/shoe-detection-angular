import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', pathMatch: 'full', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
    { path: 'shoes', pathMatch: 'full', loadChildren: () => import('./shoes-browser/shoes-browser.module').then(m => m.ShoesBrowserModule) },
    { path: 'evaluator', pathMatch: 'full', loadChildren: () => import('./shoes-evaluator/shoes-evaluator.module').then(m => m.ShoesEvaluatorModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
