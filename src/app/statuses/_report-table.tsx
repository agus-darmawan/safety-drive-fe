import DataTable from "@/components/DataTable";

import { columns } from "./_coloums";

type TReportTableProps = {
  report: any;
};

export default function RepportTable({ report }: TReportTableProps) {
  return <>{report && <DataTable columns={columns} data={report} />}</>;
}
