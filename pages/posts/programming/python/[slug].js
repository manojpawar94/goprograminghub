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
      title="Python Tutorial"
      post={post}
      posts={posts}
      index={index}
      moreLink="/posts/programming/python"
    />
  );
}

export function getStaticProps({ params }) {
  const post = getPostBySlug("/_programming/python", params.slug);
  const author = getAuthorBySlug(post.author);
  const posts = getAllPosts("/_programming/python");
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
    paths: getAllPosts("/_programming/python").map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
  };
}
