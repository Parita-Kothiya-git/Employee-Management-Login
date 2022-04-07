import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BackendProvider } from '../_helpers';
import { MainRoutingModule } from './main.routing';
import { JwtInterceptor, ErrorInterceptor } from '../_helpers';
import { HomeComponent } from './home';
import { EmployeeComponent } from './employee';
import {MatNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { DateFormatPipe } from '@/_utility/date-format-pipe';
import { HighlightPipe } from '@/_utility/highlight.pipe';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        MainRoutingModule,
        MaterialModule,
        BrowserAnimationsModule,
        MatNativeDateModule,
        CommonModule
    ],
    exports: [], 
    declarations: [
        HomeComponent,
        MainComponent,
        EmployeeComponent,
        DateFormatPipe,
        HighlightPipe
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        BackendProvider
    ],
    bootstrap: [MainComponent]
})
export class MainModule { };