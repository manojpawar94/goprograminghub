import Link from "next/link";

export default function PostNav({ index, posts }) {
    return (
        <>
            <div className="row justify-content-between p-2">
                {index > 1 && (
                    <Link href={posts[index - 2].permalink}>
                        <a
                            className="btn btn-primary btn-sm col-4 col-sm-2 col-md-1"
                            role="button"
                            aria-pressed="true"
                        >
                            Previous
                        </a>
                    </Link>
                )}

                {index < posts.length && (
                    <Link href={posts[index].permalink}>
                        <a
                            className="btn btn-primary btn-sm col-4 col-sm-2 col-md-1"
                            role="button"
                            aria-pressed="true"
                        >
                            Next
                        </a>
                    </Link>
                )}
            </div>
        </>
    );
}
