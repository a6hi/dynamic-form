import {
  ComponentFactoryResolver,
  Directive,
  forwardRef,
  Input,
  ViewContainerRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ParameterComponent } from './parameter.component';
import { ParameterService } from './prameter.service';
import { ReportParam } from './report-metadata';

@Directive({
  selector: 'report-parameter',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ReportParameterDirective),
    },
  ],
})
export class ReportParameterDirective implements ControlValueAccessor {
  @Input() param!: ReportParam;
  private actualParam!: ParameterComponent;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private parameterFactoy: ParameterService
  ) {}

  writeValue(obj: any): void {
    if (this.actualParam) {
      this.actualParam.writeValue(obj);
    }
  }
  registerOnChange(fn: any): void {
    if (this.actualParam) {
      this.actualParam.registerOnChange(fn);
    }
  }
  registerOnTouched(fn: any): void {
    if (this.actualParam) {
      this.actualParam.registerOnTouched(fn);
    }
  }

  ngOnInit() {
    if (this.param) {
      const reportParameter = this.parameterFactoy.getComponent(
        this.param.type
      );
      const factory =
        this.componentFactoryResolver.resolveComponentFactory(reportParameter);
      const ref =
        this.viewContainerRef.createComponent<ParameterComponent>(factory);
      this.actualParam = ref.instance;
    }
  }
}
