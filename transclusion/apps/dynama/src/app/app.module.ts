import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from '@transclusion/shared';
import { MyIfDirective } from 'libs/shared/src/lib/directives/my-if.directive';

@NgModule({
  declarations: [AppComponent, MyIfDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
