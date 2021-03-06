import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'

export function getAllPosts(topic) {
    const postsDirectory = path.join(process.cwd(), `_posts${topic}`)
    const filenames = fs.readdirSync(postsDirectory)

    return filenames.map(filename => {
        const file = fs.readFileSync(path.join(process.cwd(), `_posts${topic}`, filename), "utf8")

        // get frontmatter
        const { data } = matter(file)

        // get slug from filename
        const slug = filename.replace(/\.md$/, "")

        // return combined frontmatter and slug; build permalink
        return {
            ...data,
            permalink: `/posts${topic.length >= 2 ? "/" + topic.substring(2, topic.length) : topic}/${slug}`,
            slug,
        }
    })
}


export function getPostBySlug(topic, slug) {
    const file = fs.readFileSync(path.join(process.cwd(), `_posts${topic}`, `${slug}.md`), "utf8")

    const {
        content,
        data,
    } = matter(file)

    const body = remark()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument)
        .use(rehypeFormat)
        .use(rehypeStringify)
        .processSync(content).toString()

    return {
        ...data,
        body,
        slug,
    }
}

export function getAllAuthors() {
    const authorsDirectory = path.join(process.cwd(), '_authors')
    const filenames = fs.readdirSync(authorsDirectory)

    return filenames.map(filename => {
        const file = fs.readFileSync(path.join(process.cwd(), '_authors', filename), 'utf8')

        // get data
        const data = JSON.parse(file)

        // get slug from filename
        const slug = filename.replace(/\.json/, '')

        // return combined frontmatter and slug; build permalink
        return {
            ...data,
            permalink: `/authors/${slug}`,
            profilePictureUrl: `/${slug}.jpg`,
            slug,
        }
    })
}

export function getAuthorBySlug(slug) {
    const file = fs.readFileSync(path.join(process.cwd(), '_authors', `${slug}.json`), 'utf8')

    const data = JSON.parse(file)

    return {
        ...data,
        permalink: `/authors/${slug}`,
        profilePictureUrl: `/images/${slug}.jpg`,
        slug,
    }
}