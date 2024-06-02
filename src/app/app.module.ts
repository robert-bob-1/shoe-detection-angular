import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ShoeCardComponent } from './components/shoe-card/shoe-card.component';
import { ShoeCardListComponent } from './components/shoe-card-list/shoe-card-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ShoeScrollDirective } from './directives/shoe-scroll.directive';
import { LoadingMaskComponent } from './components/loading-mask/loading-mask.component';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        ShoeCardComponent,
        ShoeCardListComponent,
        ShoeScrollDirective,
        LoadingMaskComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
