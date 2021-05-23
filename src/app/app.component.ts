import { Component } from '@angular/core';
import { ReportMetadata } from './report/report-metadata';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello WOrld</h1>
    <p>{{metadata | json}}</p>
    <hr>
    <report *ngIf="metadata" [metadata]="metadata"></report>
  `,
  styles: [``],
})
export class AppComponent {
  title = 'my-app';
  metadata!: ReportMetadata;

  ngOnInit(){
    fetch('../assets/meta-data.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.metadata = data[0]});
  }
}
