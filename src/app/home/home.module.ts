import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WebsiteCardComponent } from './components/website-card/website-card.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { HomeTitleComponent } from './components/home-title/home-title.component';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
    declarations: [
        HomeComponent,
        WebsiteCardComponent,
        HomeContentComponent,
        HomeTitleComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatButtonModule,
        MatCardModule,
        SharedModule
    ]
})
export class HomeModule { }
