import Image from "next/image";

export default function ArticleAuthor({ name, profilePictureUrl, date }) {
    const prettyDate = new Date(date).toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    });

    return (
        <div className="author-container">
            <Image
                className="rounded-circle"
                alt={name}
                src={profilePictureUrl}
                height="40"
                width="40"
            />
            <div className="author">
                <strong>{name}</strong>
                <time dateTime={date}>{prettyDate}</time>
            </div>
        </div>
    );
}
