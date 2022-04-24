import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../../../components/Navbar';
import SectionHeader from '../../../components/SectionHeader';
import ArticleAuthor from '../../../components/ArticleAuthor';

import { getAllPosts, getAuthorBySlug, getPostBySlug } from '../../../lib/api'
import Footer from '../../../components/Footer';
import hljs from 'highlight.js'
import RelatedArticle from '../../../components/RelatedArticle';
export default function Post({ post, posts }) {

    useEffect(() => {
        hljs.initHighlighting();
    }, []);

    return (
        <>
            <Head>
                <title>GoProgrammingHub</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className='container mt-2'>
                <div className='row'>
                    <div className='col-md-9'>
                        <SectionHeader title={post.title} margin={`mt-2 mb-2`} />
                        <ArticleAuthor name={post.author.name} profilePictureUrl={post.author.profilePictureUrl} date={post.createdAt} />
                        <div className='text-justify' dangerouslySetInnerHTML={{ __html: post.body }} />
                    </div>
                    <div className='col-md-3'>
                        <RelatedArticle articles={posts} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export function getStaticProps({ params }) {
    const post = getPostBySlug("/_python", params.slug)
    const author = getAuthorBySlug(post.author)
    const posts = getAllPosts("/_python")


    return {
        props: {
            post: {
                ...post,
                author,
            },
            posts: posts
        },
    }
}

export function getStaticPaths() {
    return {
        fallback: false,
        paths: getAllPosts("/_python").map(post => ({
            params: {
                slug: post.slug,
            },
        })),
    }
}