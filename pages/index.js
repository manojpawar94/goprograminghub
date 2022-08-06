import Head from "next/head";

import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionHeader from "../components/SectionHeader";

import { getAllPosts, getAuthorBySlug } from "../lib/api";

export default function Home({
  dsaPosts,
  pythonPosts,
  golangPosts,
  problemSolvingPosts,
}) {
  return (
    <>
      <Head>
        <title>GoProgrammingHub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container mt-2">
        <SectionHeader
          title={`Data Structure And Algorithms`}
          margin={`mt-2 mb-2`}
          link={`/posts/data-structures-and-algorithms`}
        />
        <div className="row">
          {dsaPosts.slice(0, 3).map((dsaPost, index) => (
            <div className="col-md-4 d-flex align-items-stretch" key={index}>
              <ArticleCard post={dsaPost} />
            </div>
          ))}
        </div>
        <SectionHeader
          title={`Problem Solving`}
          margin={`mt-2 mb-2`}
          link={`/posts/problemsolving`}
        />
        <div className="row">
          {problemSolvingPosts.slice(0, 3).map((dsaPost, index) => (
            <div className="col-md-4 d-flex align-items-stretch" key={index}>
              <ArticleCard post={dsaPost} />
            </div>
          ))}
        </div>
        <SectionHeader
          title={`Python Programming`}
          margin={`mt-2 mb-2`}
          link={`/posts/python`}
        />
        <div className="row">
          {pythonPosts.slice(0, 3).map((pythonPost, index) => (
            <div className="col-md-4 d-flex align-items-stretch" key={index}>
              <ArticleCard post={pythonPost} />
            </div>
          ))}
        </div>
        <SectionHeader
          title={`Go Lang Programming`}
          margin={`mt-2 mb-2`}
          link={`/posts/golang`}
        />
        <div className="row">
          {golangPosts.slice(0, 3).map((golangPost, index) => (
            <div className="col-md-4  d-flex align-items-stretch" key={index}>
              <ArticleCard post={golangPost} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      pythonPosts: getAllPosts("/_programming/python").map((post) => ({
        ...post,
        author: getAuthorBySlug(post.author),
      })),
      golangPosts: getAllPosts("/_programming/golang").map((post) => ({
        ...post,
        author: getAuthorBySlug(post.author),
      })),
      dsaPosts: getAllPosts("/_data-structures-and-algorithms").map((post) => ({
        ...post,
        author: getAuthorBySlug(post.author),
      })),
      problemSolvingPosts: getAllPosts("/_problemsolving").map((post) => ({
        ...post,
        author: getAuthorBySlug(post.author),
      })),
    },
  };
}
