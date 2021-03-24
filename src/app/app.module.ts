import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { FooterComponent } from './ui/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { ItemWorkComponent } from './works/item-work/item-work.component';
import { DetailWorkComponent } from './works/item-work/detail-work/detail-work.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        WorksComponent,
        ContactComponent,
        ItemWorkComponent,
        DetailWorkComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        NgxTypedJsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
