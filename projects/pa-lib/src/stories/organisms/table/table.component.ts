import {Component, computed, Input, OnChanges, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {formatAsRgb, RGB} from "../../../lib/rgb";

export const TableCellType = {
  STRING: 'STRING',
  NUMBER: 'NUMBER',
  COLOR_PREVIEW: 'COLOR_PREVIEW',
} as const;

export type TableCell =
  | TableCellOfString
  | TableCellOfNumber
  | TableCellOfColorPreview

export type TableCellOfString = {
  type: typeof TableCellType.STRING,
  value: string
}

export type TableCellOfNumber = {
  type: typeof TableCellType.NUMBER,
  value: number
}

export type TableCellOfColorPreview = {
  type: typeof TableCellType.COLOR_PREVIEW,
  rgb: RGB
}

export type TableRow<I extends readonly string[]> = {
  [id in I[number]]: TableCell;
}

export type TableHeaders<I extends readonly string[]> = {
  [id in I[number]]: {
    title: string,
  }
}

export type Table<I extends readonly string[]> = {
  headers: TableHeaders<I>,
  rows: TableRow<I>[],
};

@Component({
  selector: 'pal-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent<I extends readonly string[]> implements OnChanges {
  @Input({required: true}) dataSource!: Table<I>;
  readonly headers = signal<TableHeaders<I> | undefined>(undefined)
  readonly rows = signal<TableRow<I>[]>([])
  readonly columnKeys = computed<string[]>(() => Object.keys(this.headers() ?? {}));
  protected readonly TableCellType = TableCellType;
  protected readonly formatAsRgb = formatAsRgb;

  ngOnChanges(): void {
    this.headers.set(this.dataSource.headers)
    this.rows.set(this.dataSource.rows)
  }
}
