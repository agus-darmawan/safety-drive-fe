import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
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
    accessorKey: "status",
    header: "STATUS",
  },
];
