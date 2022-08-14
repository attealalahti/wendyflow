import Image from "next/image";

interface ImageData {
  src: string;
  alt: string;
}
interface Props {
  imageData: ImageData;
  text: string;
  link: string;
}
const ExternalLink = (props: Props) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer" className="Link">
      <Image
        src={props.imageData.src}
        alt={props.imageData.alt}
        className="Logo"
        width={45}
        height={45}
        layout="fixed"
      />
      <div>{props.text}</div>
    </a>
  );
};

export default ExternalLink;
