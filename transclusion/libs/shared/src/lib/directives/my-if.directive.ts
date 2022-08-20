import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[myIf]',
})
export class MyIfDirective implements OnInit {
  private _myIf!: boolean;

  @Input()
  set myIf(condition: boolean) {
    this._myIf = condition;
    this._updateView();
  }

  constructor(
    private _viewContainer: ViewContainerRef,
    private _templateRef: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    console.log('testing');
  }

  _updateView() {
    if (this._myIf) {
      this._viewContainer.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainer.clear();
    }
  }
}
