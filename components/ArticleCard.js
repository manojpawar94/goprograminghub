import Link from 'next/link'
import ArticleAuthor from './ArticleAuthor'

export default function ArticleCard({ post }) {


    return (
        <article className='card mb-3' key={post.slug}>
            <div className="card-body">
                <h5 className="card-title text-truncate-container">
                    <Link href={post.permalink}>
                        <a className='text-decoration-none text-dark text-truncate-2'>{post.title}</a>
                    </Link>
                </h5>
                <ArticleAuthor name={post.author.name} profilePictureUrl={post.author.profilePictureUrl} date={post.createdAt} />
                <div className="text-truncate-container mb-2">
                    <p className="card-text text-truncate-3">{post.excerpt}</p>
                </div>
                <Link href={post.permalink}>
                    <a className="btn btn-primary btn-sm stretched-link">Read more →</a>
                </Link>
            </div>
        </article>
    )

}