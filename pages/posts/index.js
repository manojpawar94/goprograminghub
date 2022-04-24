import Head from "next/head"
import ArticleCard from "../../components/ArticleCard"
import Navbar from "../../components/Navbar"
import SectionHeader from "../../components/SectionHeader"

import { getAllPosts, getAuthorBySlug } from "../../lib/api"

export default function Posts({ posts }) {
    return (
        <>
            <Head>
                <title>Posts | GoProgrammingHub</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="container mt-4 pb-4">
                <SectionHeader title={`Go Programming Language Articles`} margin={`mt-2 mb-2`} />
                <div className="row">
                    {posts.map((post, index) =>
                        <div className="col-md-4" key={index}>
                            <ArticleCard post={post} />
                        </div>)}
                </div>
            </main>

        </>

    )
}

export function getStaticProps() {
    return {
        props: {
            posts: getAllPosts("").map(post => ({
                ...post,
                author: getAuthorBySlug(post.author),
            })),
        }
    }
}