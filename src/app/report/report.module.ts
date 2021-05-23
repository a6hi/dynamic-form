import { Inject, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Config, ReportConfig, REPORT_CONFIG } from './config';
import { ParameterService } from './prameter.service';
import { ReportParameterDirective } from './report-parameter.directive';

@NgModule({
  declarations: [ReportComponent, ReportParameterDirective],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ReportComponent],
})
export class ReportModule {
  static forRoot(config: Config = {}): ModuleWithProviders<ReportModule> {
    return {
      ngModule: ReportModule,
      providers: [
        { provide: REPORT_CONFIG, useValue: config, multi: true },
        ReportConfig,
        ParameterService,
      ],
    };
  }
  constructor(
    private reportConfig: ReportConfig,
    @Inject(REPORT_CONFIG) configs: Config[] = []
  ) {
    if (configs) {
      configs.forEach((config) => this.reportConfig.addConfig(config));
    }
  }
}
