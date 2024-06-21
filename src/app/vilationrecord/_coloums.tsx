import { ColumnDef } from "@tanstack/react-table";

import { CellAction } from "./_cell-action";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "NAMA PENGEMUDI",
  },
  {
    accessorKey: "hullNum",
    header: "NOMOR LAMBUNG",
  },
  {
    accessorKey: "date",
    header: "TANGGAL",
    cell: ({ row }) => new Date(row.original.date).toLocaleDateString("id-ID"),
  },
  {
    accessorKey: "violationName",
    header: "JENIS PELANGGARAN",
  },
  {
    header: "ACTION",
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
