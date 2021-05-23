import { Injectable, Type } from '@angular/core';
import { ReportConfig } from './config';

@Injectable({
  providedIn: 'root',
})
export class ParameterService {
  constructor(private config: ReportConfig) {}

  getComponent(name: string): Type<any> {
    return this.config.getType(name).component;
  }
}
