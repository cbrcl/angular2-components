import {Column} from "./column.model";

export class Table{
  title: string;
  desc: string;
  cols: Column[];
  data: Object[];
  stats: Object[];
  footer: string;
  sortBy: string;
}
