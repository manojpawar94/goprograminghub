
import PostsLayout from "../../../components/PostsLayout";
import { getAllPosts, getAuthorBySlug } from "../../../lib/api";

export default function Posts({ posts }) {
  return <PostsLayout title="Problem Solving Examples" posts={posts} />;

}

export function getStaticProps() {
  return {
    props: {
      posts: getAllPosts("/_problemsolving").map((post) => ({
        ...post,
        author: getAuthorBySlug(post.author),
      })),
    },
  };
}
