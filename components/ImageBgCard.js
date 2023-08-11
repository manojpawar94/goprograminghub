import Image from "next/image";

export default function ImageBgCard({ title, bgImageUrl, content, height }) {
    return (
        <div className="card bg-dark text-white mb-3">
            <Image
                className="rounded-circle"
                alt={title}
                src={bgImageUrl}
                height={height}
                width="100%"
            />
            <div className="card-img-overlay">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
            </div>
        </div>
    );
}
