import React from "react";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";

export default function AboutPage() {
  const students = [
    {
      name: "Agus Rasi Doanta Ginting",
      nim: "5024211018",
      image: "/gusting.png",
    },
    {
      name: "Rifki Qolby Furqan",
      nim: "5024211058",
      image: "/rifki.png",
    },
  ];
  return (
    <main className="mx-48">
      <PageTitle title="Meet Our Team" />
      <div className="grid grid-cols-2 gap-20 pt-20">
        {students.map((student, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center space-y-2 text-center"
          >
            <h2 className="font-bold text-3xl pb-2">{student.name}</h2>
            <Image
              src={student.image}
              height={206}
              width={206}
              alt={student.name}
            />
            <p className="text-xl text-center">Computer Engineering</p>
            <p className="text-xl text-center">{student.nim}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
