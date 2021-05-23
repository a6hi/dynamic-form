import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReportMetadata, ReportParam } from './report-metadata';

@Component({
  selector: 'report',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <ng-template ngFor let-param [ngForOf]="params">
        <report-parameter
          [param]="param"
          [formControlName]="param.name"
        ></report-parameter>
      </ng-template>
      <button type="submit">Submit</button>
    </form>
  `,
  styles: [``],
})
export class ReportComponent implements OnInit {
  @Input() metadata!: ReportMetadata;
  params: ReportParam[] = [];

  form = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
    this.updateFields();
  }

  updateFields() {
    this.metadata.params.forEach((param) => {
      let ctrl = new FormControl();
      this.form.addControl(param.name, ctrl);
      this.params.push(param);
    });
  }

  onSubmit() {
    alert(JSON.stringify(this.form.value));
  }
}
