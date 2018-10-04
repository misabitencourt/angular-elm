import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar';
import { HomeRouteComponent } from './screens/home';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeRouteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
