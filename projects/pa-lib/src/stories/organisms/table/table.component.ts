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

export function match<T>(
  cell: TableCell,
  ifString: (cell: TableCellOfString) => T,
  ifNumber: (cell: TableCellOfNumber) => T,
  ifColorPreview: (cell: TableCellOfColorPreview) => T
): T {
  switch (cell.type) {
    case TableCellType.STRING:
      return ifString(cell);
    case TableCellType.NUMBER:
      return ifNumber(cell);
    case TableCellType.COLOR_PREVIEW:
      return ifColorPreview(cell);
    default:
      const _: never = cell;
      throw new Error(_);
  }
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
  readonly headers = signal<TableHeaders<string[]> | undefined>(undefined)
  readonly rows = signal<TableRow<string[]>[]>([])
  readonly columnKeys = computed<string[]>(() => Object.keys(this.headers() ?? {}));
  protected readonly TableCellType = TableCellType;
  protected readonly formatAsRgb = formatAsRgb;
  protected readonly tableCellOfString = tableCellOfString;
  protected readonly tableCellOfNumber = tableCellOfNumber;
  protected readonly tableCellOfColorPreview = tableCellOfColorPreview;

  ngOnChanges(): void {
    this.headers.set(this.dataSource.headers)
    this.rows.set(this.dataSource.rows)
  }
}

function tableCellOfString(cell: TableCell): TableCellOfString {
  return match(
    cell,
    a => a,
    () => {throw new Error()},
    () => {throw new Error()}
  )
}

function tableCellOfNumber(cell: TableCell): TableCellOfNumber {
  return match(
    cell,
    () => {throw new Error()},
    a => a,
    () => {throw new Error()}
  )
}

function tableCellOfColorPreview(cell: TableCell): TableCellOfColorPreview {
  return match(
    cell,
    () => {throw new Error()},
    () => {throw new Error()},
    a => a,
  )
}
