"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

export default function FallbackImage(props: ImageProps) {
  const { src, alt, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      onError={() =>
        setImgSrc("https://placehold.co/600x400/000000/FFFFFF?text=Notos+Life")
      }
    />
  );
}
