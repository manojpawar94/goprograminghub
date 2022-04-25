import Head from 'next/head'

import ArticleCard from '../components/ArticleCard'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SectionHeader from '../components/SectionHeader'

import { getAllPosts, getAuthorBySlug } from "../lib/api"

export default function Home({ pythonPosts, golangPosts }) {
  return (
    <>
      <Head>
        <title>GoProgrammingHub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className='container mt-2'>
        <SectionHeader title={`Python Articles`} margin={`mt-2 mb-2`} />
        <div className="row">
          {pythonPosts.slice(0, 3).map((pythonPost, index) =>
            <div className="col-md-4 d-flex align-items-stretch" key={index}>
              <ArticleCard post={pythonPost} />
            </div>)}
        </div>
        <SectionHeader title={`Go Language Articles`} margin={`mt-2 mb-2`} />
        <div className="row">
          {golangPosts.slice(0, 3).map((golangPost, index) =>
            <div className="col-md-4  d-flex align-items-stretch" key={index}>
              <ArticleCard post={golangPost} />
            </div>)}
        </div>
      </main>
      <Footer />
    </>
  )
}

export function getStaticProps() {
  return {
    props: {
      pythonPosts: getAllPosts("/_python").map(post => ({
        ...post,
        author: getAuthorBySlug(post.author),
      })),
      golangPosts: getAllPosts("/_golang").map(post => ({
        ...post,
        author: getAuthorBySlug(post.author),
      })),
    }
  }
}
