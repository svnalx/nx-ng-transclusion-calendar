import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyIfDirective } from './directives/my-if.directive';
import { AlexIfDirective } from './directives/alex-if.directive';

@NgModule({
  declarations: [MyIfDirective, AlexIfDirective],
  imports: [CommonModule],
  exports: [
    AlexIfDirective
  ],
})
export class SharedModule {}
