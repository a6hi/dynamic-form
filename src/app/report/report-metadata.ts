export interface ReportParam {
  name: string;
  order: number;
  label: string;
  type: string;
  required: true;
  defaultValue: any;
}

export interface ReportMetadata {
  name: string;
  description: string;
  params: ReportParam[];
}
