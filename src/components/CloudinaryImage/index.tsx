"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { CSSProperties, useState } from "react";
import Lightbox from "react-image-lightbox";

import "react-image-lightbox/style.css";

interface AspectRatio {
  width: number;
  height: number;
}

interface CloudinaryImageProps
  extends React.ComponentPropsWithoutRef<"figure"> {
  fullUrl: string;
  height: string | number;
  width: string | number;
  alt: string;
  title?: string;
  className?: string;
  preview?: boolean;
  noStyle?: boolean;
  aspect?: AspectRatio;
  mdx?: boolean;
  style?: CSSProperties;
  scale?: boolean;
}

const CloudinaryImage: React.FC<CloudinaryImageProps> = ({
  fullUrl,
  height,
  width,
  alt,
  title,
  className,
  preview = true,
  noStyle = false,
  mdx = false,
  style,
  aspect,
  scale = false,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const urlBlurred = `${fullUrl}?e_blur:1000,q_1`;
  const url = fullUrl;

  return (
    <figure
      className={clsx(className, {
        "overflow-hidden rounded shadow dark:shadow-none": !noStyle,
        "mx-auto w-full": mdx && +width <= 800,
      })}
      style={{
        ...(mdx && +width <= 800 ? { maxWidth: width } : {}),
        ...style,
        width,
        height,
      }}
      {...rest}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          cursor: preview ? "zoom-in" : "default",
        }}
        onClick={preview ? () => setIsOpen(true) : undefined}
      >
        {!isLoaded && (
          <div
            className="img-blur"
            style={{
              position: "absolute",
              inset: 0,
              filter: "blur(20px)",
              backgroundImage: `url(${urlBlurred})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              zIndex: 0,
            }}
          />
        )}
        <div className={clsx("absolute inset-0", scale ? "scale-150" : "")}>
          <Image
            width={+width}
            height={+height}
            unoptimized
            src={url}
            alt={alt}
            title={title || alt}
            className={clsx(scale ? "scale-150" : "")}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
            onLoadingComplete={() => setIsLoaded(true)}
          />
        </div>
      </div>
      {isOpen && (
        <Lightbox mainSrc={url} onCloseRequest={() => setIsOpen(false)} />
      )}
    </figure>
  );
};

export default CloudinaryImage;
