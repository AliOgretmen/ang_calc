import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { DisplayComponent } from './components/display/display.component';
import { CalcFieldComponent } from './components/calc-field/calc-field.component';
import { CalculateService } from './services/calculate.service';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DisplayComponent,
    CalcFieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CalculateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
