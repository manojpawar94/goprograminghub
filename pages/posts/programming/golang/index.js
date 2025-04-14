
import PostsLayout from "../../../../components/PostsLayout";
import { getAllPosts, getAuthorBySlug } from "../../../../lib/api";

export default function Posts({ posts }) {
  return <PostsLayout title="Golang Tutorial" posts={posts} />;
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
