import Link from "next/link";

export default function RelatedArticle({ articles, moreLink }) {
  return (
    <>
      <h4 className="text-center mt-2 mb-1">Related Articles</h4>
      <ul className="recent-article">
        {articles.slice(0, 15).map((article, index) => (
          <li key={index}>
            <Link href={article.permalink}>
              <a className="text-decoration-none">{article.title}</a>
            </Link>
          </li>
        ))}
        {moreLink && articles.length > 15 && (
          <li key={"MoreLink"}>
            <Link href={moreLink}>
              <a className="text-decoration-none">More Articles... </a>
            </Link>
          </li>
        )}
      </ul>
    </>
  );
}
