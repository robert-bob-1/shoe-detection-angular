import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoeCardListComponent } from './components/shoe-card-list/shoe-card-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'shoes', component: ShoeCardListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
