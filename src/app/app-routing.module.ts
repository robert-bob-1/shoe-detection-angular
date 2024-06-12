import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoeCardListComponent } from './components/shoe-card-list/shoe-card-list.component';
import { ShoeUploadComponent } from './components/shoe-upload/shoe-upload.component';

const routes: Routes = [
    { path: '', redirectTo: '/shoes', pathMatch: 'full' },
    { path: 'shoes', component: ShoeCardListComponent },
    { path: 'upload', component: ShoeUploadComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
