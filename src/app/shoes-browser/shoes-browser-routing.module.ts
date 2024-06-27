import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoesBrowserComponent } from './shoes-browser.component';

// Import your components here

const routes: Routes = [
    {
        path: '',
        component: ShoesBrowserComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoesBrowserRoutingModule { }