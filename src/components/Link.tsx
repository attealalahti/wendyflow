interface ImageData {
    src: string;
    alt: string;
}
interface Props {
    imageData: ImageData;
    text: string;
    link: string;
}
const Link = (props: Props) => {
    return (
        <a href={props.link} target="_blank" rel="noreferrer" className="Link">
            <img src={props.imageData?.src} alt={props.imageData?.alt} className="Logo" />
            <div>{props.text}</div>
        </a>
    );
};

export default Link;
