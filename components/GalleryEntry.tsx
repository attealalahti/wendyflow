/* eslint-disable @next/next/no-img-element */
import type { StaticImageData } from "next/image";

interface GalleryEntryProps {
  image: StaticImageData;
  fullImage: StaticImageData;
  alt: string;
  credit: string;
}
const GalleryEntry = (props: GalleryEntryProps) => {
  return (
    <a
      className="GalleryEntry"
      href={props.fullImage.src}
      target="_blank"
      rel="noreferrer"
    >
      <img src={props.image.src} alt={props.alt} width={300} height={300} />
      <div>{props.credit}</div>
    </a>
  );
};

export default GalleryEntry;
