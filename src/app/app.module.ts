import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './site/home/home.component';
import { MenuDishComponent } from './site/menu/menu.component';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContactComponent } from './site/contact/contact.component';
import { GalleryComponent } from './site/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuDishComponent,
    MenuComponent,
    FooterComponent,
    ContactComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
