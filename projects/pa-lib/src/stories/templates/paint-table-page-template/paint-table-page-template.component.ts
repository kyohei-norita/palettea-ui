import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Table, TableComponent} from "../../organisms/table/table.component";

const defaultDataSource: Table<['name', 'rgb', 'colorPreview', 'diff']> = {
  headers: {
    name: {title: 'Name'},
    rgb: {title: 'RGB'},
    colorPreview: {title: 'ColorPreview'},
    diff: {title: 'Diff'},
  },
  rows: []
}

@Component({
  selector: 'pal-paint-table-page-template',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './paint-table-page-template.component.html',
  styleUrls: ['./paint-table-page-template.component.css']
})
export class PaintTablePageTemplateComponent {
  @Input() dataSource: Table<['name', 'rgb', 'colorPreview', 'diff']> = defaultDataSource;
}
