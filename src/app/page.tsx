"use client";
import Image from "next/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"; // Make sure to import the CSS

export default function Home() {
  const images = [{ name: "1.png" }, { name: "2.png" }, { name: "3.png" }];

  return (
    <main className="min-h-screen flex items-center justify-center bg-white ">
      <div className="grid grid-cols-2 w-full mx-24 gap-20">
        <div>
          <h1 className="text-7xl font-extrabold drop-shadow-2xl [text-shadow:_0_5px_0_rgb(0_0_0_/_40%)]">
            Safety Drive
          </h1>
          <p className="text-lg pt-16 text-justify">
            The high rate of fatal accidents is caused by a lack of driving
            equipment such as using a seatbelt, as well as non-compliance with
            driving regulations which are difficult to monitor thoroughly. The
            solution is to create a tool in the form of a camera that is able to
            detect driver violations which is designed to reduce the accident
            rate.
          </p>
          <div className="flex flex-row w-full justify-between pt-20">
            {images.map((image, index) => (
              <Image
                src={`/${image.name}`}
                alt={`Image ${index + 1}`}
                width={120}
                height={90}
                className="h-[110px] w-[119px]"
              />
            ))}
          </div>
        </div>
        <LiteYouTubeEmbed
          id="6wm3ekAlFmk"
          poster="default"
          title="Hexcape Features"
          noCookie={true}
          muted
        />
      </div>
    </main>
  );
}
