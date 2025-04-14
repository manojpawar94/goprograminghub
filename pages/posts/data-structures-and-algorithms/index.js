import PostsLayout from "../../../components/PostsLayout";
import { getAllPosts, getAuthorBySlug } from "../../../lib/api";

export default function Posts({ posts }) {
  return <PostsLayout title="Data Structure and Algorithms" posts={posts} />;
}

export function getStaticProps() {
    return {
        props: {
            posts: getAllPosts("/_data-structures-and-algorithms").map(
                (post) => ({
                    ...post,
                    author: getAuthorBySlug(post.author),
                })
            ),
        },
    };
}
