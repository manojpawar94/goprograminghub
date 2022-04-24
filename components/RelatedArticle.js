import Link from "next/link";

export default function RelatedArticle({ articles }) {

    return <>
        <h4 className="text-center mt-2 mb-1">Related Articles</h4>
        <ul className="recent-article">
            {
                articles.map((article, index) =>

                    <li key={index}>
                        <Link href={article.permalink}>
                            <a className="text-decoration-none">{article.title}</a>
                        </Link>
                    </li>

                )
            }
        </ul >
    </>
}