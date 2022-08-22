import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[alexIf]',
})
export class AlexIfDirective implements OnInit {
  private _alexIf!: boolean;

  @Input()
  set alexIf(condition: boolean) {
    this._alexIf = condition;
    this._updateView();
  }

  constructor(
    private _viewContainer: ViewContainerRef,
    private _templateRef: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    // console.log(
    //   'viewContainer + templateRef',
    //   this._viewContainer,
    //   this._templateRef
    // );
    return;
  }

  _updateView() {
    if (this._alexIf) {
      this._viewContainer.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainer.clear();
    }
  }
}
