import {Component, computed, Input, OnChanges, signal} from '@angular/core';
import {CommonModule} from '@angular/common';

export type TableCell =
  | TableCellOfString
  | TableCellOfNumber

export type TableCellOfString = {
  type: 'string'
  value: string
}

export type TableCellOfNumber = {
  type: 'number'
  value: number
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

  ngOnChanges(): void {
    this.headers.set(this.dataSource.headers)
    this.rows.set(this.dataSource.rows)
  }
}
