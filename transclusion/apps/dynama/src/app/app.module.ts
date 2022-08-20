import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from '@transclusion/shared';
import { CalendarModule } from '@transclusion/calendar';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedModule, CalendarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
