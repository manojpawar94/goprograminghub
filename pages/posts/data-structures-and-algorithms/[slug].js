import PostLayout from "../../../components/PostLayout";
import {
    getAllPosts,
    getAuthorBySlug,
    getPostBySlug,
    getPostIndexBuSlug,
} from "../../../lib/api";

export default function Post({ index, post, posts }) {
    return (
        <PostLayout
            title="Data Structure and Algorithms"
            post={post}
            posts={posts}
            index={index}
            moreLink="/posts/data-structures-and-algorithms"
        />
    );
}

export async function getStaticProps({ params }) {
    const post = await getPostBySlug("/_data-structures-and-algorithms", params.slug);
    const author = getAuthorBySlug(post.author);
    const posts = getAllPosts("/_data-structures-and-algorithms");
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
        paths: getAllPosts("/_data-structures-and-algorithms").map((post) => ({
            params: {
                slug: post.slug,
            },
        })),
    };
}
