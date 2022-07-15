interface Props {
    image: string;
    fullImage: string;
    alt: string;
    credit: string;
}
const GalleryEntry = (props: Props) => {
    return (
        <a
            className="GalleryEntry"
            href={props.fullImage}
            target="_blank"
            rel="noreferrer"
        >
            <img src={props.image} alt={props.alt} />
            <div>{props.credit}</div>
        </a>
    );
};

export default GalleryEntry;
