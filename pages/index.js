import Head from "next/head";

import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import ImageBgCard from "../components/ImageBgCard";
import Navbar from "../components/Navbar";
import SectionHeader from "../components/SectionHeader";

import { getAllPosts, getAuthorBySlug } from "../lib/api";

export default function Home({ dsaPosts, problemSolvingPosts }) {
  return (
    <>
      <Head>
        <title>GoProgrammingHub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container mt-2">
        <SectionHeader
          title={`Welcome to GoProgrammingHub!`}
          margin={`mt-2 mb-2`}
          link={`#`}
        />
        <div className="row">
          <div className="col-md-4">
            <a href="/posts/bigdata/apache-spark">
              <ImageBgCard
                title={`Apache Spark`}
                bgImageUrl={`/images/apaches-spark-bg.webp`}
                content={""}
                height="180px"
              />
            </a>
          </div>
          <div className="col-md-4">
            <a href="/posts/programming/python">
              <ImageBgCard
                title={`Python Programming`}
                bgImageUrl={`/images/python-bg.png`}
                content={""}
                height="180px"
              />
            </a>
          </div>
          <div className="col-md-4">
            <a href="/posts/programming/golang">
              <ImageBgCard
                title={`Go Lang Programming`}
                bgImageUrl={`/images/golang-bg.jpg`}
                content={""}
                height="180px"
              />
            </a>
          </div>
        </div>
        <div className="row"></div>
        {/*
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
       */}
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
      </main>
      <Footer />
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      /* dsaPosts: getAllPosts("/_data-structures-and-algorithms").map((post) => ({
        ...post,
        author: getAuthorBySlug(post.author),
      })),*/
      problemSolvingPosts: getAllPosts("/_problemsolving").map((post) => ({
        ...post,
        author: getAuthorBySlug(post.author),
      })),
    },
  };
}
