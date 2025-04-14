import PostLayout from "../../../../components/PostLayout";
import {
  getAllPosts,
  getAuthorBySlug,
  getPostBySlug,
  getPostIndexBuSlug,
} from "../../../../lib/api";

export default function Post({ index, post, posts }) {
  return (
    <PostLayout
      title="Apache Spark"
      post={post}
      posts={posts}
      index={index}
      moreLink="/posts/bigdata/apache-spark"
    />
  );
}

export function getStaticProps({ params }) {
  const post = getPostBySlug("/_bigdata/apache-spark", params.slug);
  const author = getAuthorBySlug(post.author);
  const posts = getAllPosts("/_bigdata/apache-spark");
  const index = getPostIndexBuSlug(params.slug);

  return {
    props: {
      post: {
        ...post,
        author,
      },
      posts: posts,
      index,
    },
  };
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: getAllPosts("/_bigdata/apache-spark").map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
  };
}
