import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ParameterComponent } from '../report/parameter.component';

@Component({
  selector: 'mat-text-prameter',
  template: `
    <mat-form-field class="example-full-width">
      <mat-label>Label</mat-label>
      <input #inp matInput type="text" (input)="onBlur($event)" />
    </mat-form-field>
  `,
  styles: [],
})
export class MatTextPrameterComponent implements ParameterComponent {
  @ViewChild('inp')
  private inp!: ElementRef;

  onChanged: any = () => {};
  onTouched: any = () => {};

  constructor(private _renderer: Renderer2) {}

  ngOnInit(): void {}

  public writeValue(value: any): void {
    if (this.inp) {
      this._renderer.setValue(this.inp.nativeElement, value);
    }
  }
  public registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this._renderer.setProperty(this.inp.nativeElement, 'disabled', isDisabled);
  }

  onBlur(event: any) {
    this.onTouched();
    this.onChanged(event.target.value);
  }
}
