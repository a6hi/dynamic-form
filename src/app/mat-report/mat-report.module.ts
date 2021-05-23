import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportModule } from '../report/report.module';
import { Config } from '../report/config';
import { TextPrameterComponent } from './text-prameter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReportComponent } from '../report/report.component';
import { MatTextPrameterComponent } from './mat-text-prameter.component';

const config: Config = {
  types: [
    {
      name: 'text',
      component: TextPrameterComponent,
    },
    {
      name: 'mat-text',
      component: MatTextPrameterComponent,
    }
  ],
};

@NgModule({
  declarations: [MatTextPrameterComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, ReportModule.forRoot(config)],
  exports: [ReportComponent],
})
export class MatReportModule { }
