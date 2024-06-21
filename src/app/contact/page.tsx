import React from "react";
import PageTitle from "@/components/PageTitle";
import { HiOutlineMailOpen, HiOutlineLocationMarker } from "react-icons/hi";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="mx-48">
      <PageTitle title="Contact" />
      <section className="grid grid-cols-2 gap-5 mt-32">
        <div className="flex items-center h-full">
          <div className="">
            <h3 className="text-2xl">CONTACT US</h3>
            <h2 className="text-4xl font-bold [text-shadow:_0_5px_5px_rgb(0_0_0_/_40%)]">
              Let’s talk about <br /> your problem
            </h2>
          </div>
        </div>
        <div className=" bg-[#28BCD0] rounded-3xl p-8">
          <h3 className="font-semibold text-center text-2xl pb-2">
            <HiOutlineMailOpen className="inline-block mr-2" />
            Contact
          </h3>
          <div className="pb-4">
            {[
              { email: "doantaginting22@gmail.com", key: "email1" },
              { email: "rifkifurqan3@gmail.com", key: "email2" },
            ].map((item) => (
              <div key={item.key} className=" text-center">
                <Link
                  href={`mailto:${item.email}`}
                  className="text-lg cursor-pointer text-white"
                >
                  {item.email}
                </Link>
              </div>
            ))}
          </div>
          <h3 className="font-semibold text-center text-2xl pb-4">
            <HiOutlineLocationMarker className="inline-block mr-2" /> Our
            Location
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.6123348628053!2d112.79385567547801!3d-7.284872192722462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa6d308b7b91%3A0xfa255422237d84eb!2sDepartemen%20Teknik%20Komputer!5e0!3m2!1sid!2sid!4v1718947140696!5m2!1sid!2sid"
            loading="lazy"
            className="w-full px-10 h-48"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
