"use client";
import { notFound } from "next/navigation";
import PageTitle from "@/components/PageTitle";
import React, { useEffect, useState } from "react";

import axios from "@/lib/axios";

import { DataTableSkeleton } from "@/components/DataTableSkeleton";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import RepportTable from "./_report-table";

interface Data {
  date: string;
  location: string;
  type: string;
  description: string;
}

interface AdminData {
  data: Data[];
}

const Statistika: React.FC = () => {
  const [data, setData] = useState<AdminData | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/statuses");
        console.log(response.data);
        if (!response.data) {
          notFound();
        } else {
          setData(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch statistics:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="w-screen overflow-hidden">
      <CardHeader>
        <PageTitle title="Device Status" />
      </CardHeader>
      <CardContent className="h-full w-screen mx-auto px-24">
        {!data ? (
          <DataTableSkeleton columnCount={6} rowCount={4} />
        ) : (
          <RepportTable report={data.data} />
        )}
      </CardContent>
    </section>
  );
};

export default Statistika;
