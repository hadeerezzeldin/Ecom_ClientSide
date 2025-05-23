import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { provideHttpClient } from '@angular/common/http';
import { ShopComponent } from './shop/shop.component';
import { ShopModule } from './shop/shop.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ShopModule,
    FormsModule
   
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
