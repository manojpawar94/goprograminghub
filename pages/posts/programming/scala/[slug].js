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
      title="Scala Tutorial"
      post={post}
      posts={posts}
      index={index}
      moreLink="/posts/programming/scala"
    />
  );
}

export function getStaticProps({ params }) {
  const post = getPostBySlug("/_programming/scala", params.slug);
  const author = getAuthorBySlug(post.author);
  const posts = getAllPosts("/_programming/scala");
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
    paths: getAllPosts("/_programming/scala").map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
  };
}
