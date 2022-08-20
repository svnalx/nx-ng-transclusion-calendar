import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyIfDirective } from './directives/my-if.directive';

@NgModule({
  declarations: [MyIfDirective],
  imports: [CommonModule],
})
export class SharedModule {}
