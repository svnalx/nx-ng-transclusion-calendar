import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlexIfDirective } from './directives/alex-if.directive';

@NgModule({
  declarations: [AlexIfDirective],
  imports: [CommonModule],
  exports: [AlexIfDirective],
})
export class SharedModule {}
