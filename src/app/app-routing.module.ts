import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoesBrowserModule } from './shoes-browser/shoes-browser.module';

const routes: Routes = [
    { path: '', redirectTo: '/shoes', pathMatch: 'full' },
    { path: 'shoes', pathMatch: 'full', loadChildren: () => import('./shoes-browser/shoes-browser.module').then(m => m.ShoesBrowserModule) },
    // { path: 'upload', component: ShoeUploadComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
