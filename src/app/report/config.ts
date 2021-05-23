import { Injectable, InjectionToken } from '@angular/core';

export const REPORT_CONFIG = new InjectionToken<Config[]>('REPORT_CONFIG');

@Injectable({
  providedIn: 'root',
})
export class ReportConfig {
  types: { [name: string]: Type } = {};

  addConfig(config: Config) {
    if (config.types) {
      config.types.forEach((type) => this.setType(type));
    }
  }

  setType(type: Type) {
    this.types[type.name] = type;
  }

  getType(type: string): Type {
    return this.types[type];
  }
}

export interface Type {
  name: string;
  component: any;
}

export interface Config {
  types?: Type[];
}
