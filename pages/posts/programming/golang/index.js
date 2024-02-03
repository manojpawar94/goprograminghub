
import Navbar from "../../../../components/Navbar";
import SectionHeader from "../../../../components/SectionHeader";
import ArticleCard from "../../../../components/ArticleCard";

import { getAllPosts, getAuthorBySlug } from "../../../../lib/api";
import Footer from "../../../../components/Footer";
import AppHead from "../../../../components/AppHead";

export default function Posts({ posts }) {
  return (
    <>
      <AppHead title={`Golang Tutorial`} />
      <Navbar />
      <main className="container mt-2 pb-4">
        <SectionHeader title={`Golang Programming`} margin={`mt-2 mb-2`} />
        <div className="row">
          {posts.map((post, index) => (
            <div className="col-md-4 d-flex align-items-stretch" key={index}>
              <ArticleCard post={post} />
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
      posts: getAllPosts("/_programming/golang").map((post) => ({
        ...post,
        author: getAuthorBySlug(post.author),
      })),
    },
  };
}
