import Link from "next/link";

export default function RelatedArticle({
  title = "Related Articles",
  articles,
  moreLink,
}) {
  return (
    <>
      <h4 className="text-center mt-2 mb-1 text-primary">{title}</h4>
      <ul className="recent-article">
        {articles.slice(0, 25).map((article, index) => (
          <li key={index}>
            <Link href={article.permalink}>
              <a className="text-decoration-none nav-link">{article.title}</a>
            </Link>
          </li>
        ))}
        {moreLink && articles.length > 25 && (
          <li key={"MoreLink"}>
            <Link href={moreLink}>
              <a className="text-decoration-none nav-link">More Articles... </a>
            </Link>
          </li>
        )}
      </ul>
    </>
  );
}
