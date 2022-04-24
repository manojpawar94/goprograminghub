import Head from 'next/head'
import { useEffect } from 'react'

import Navbar from '../../components/Navbar'
import SectionHeader from '../../components/SectionHeader'
import ArticleAuthor from '../../components/ArticleAuthor'

import hljs from 'highlight.js'

import { getAllPosts, getAuthorBySlug, getPostBySlug } from '../../lib/api'

export default function Post({ post }) {

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
            <main className='container'>
                <div className='row'>
                    <div className='col-sm-9'>
                        <SectionHeader title={post.title} margin={`mt-2 mb-2`} />
                        <ArticleAuthor name={post.author.name} profilePictureUrl={post.author.profilePictureUrl} date={post.createdAt} />
                        <div className='text-justify' dangerouslySetInnerHTML={{ __html: post.body }} />
                    </div>
                </div>
            </main>
        </>
    )
}

export function getStaticProps({ params }) {
    const post = getPostBySlug("", params.slug)
    const author = getAuthorBySlug(post.author)

    return {
        props: {
            post: {
                ...post,
                author,
            },
        },
    }
}

export function getStaticPaths() {
    return {
        fallback: false,
        paths: getAllPosts("").map(post => ({
            params: {
                slug: post.slug,
            },
        })),
    }
}