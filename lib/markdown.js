import { remark } from "remark";

import prism from "remark-prism";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";

export default function markdownToHtml(markdown) {
  const result = remark()
    .use(remarkParse)
    .use(remarkHtml)
    .use(prism, {
      plugins: [
        "autolinker",
        "command-line",
        "data-uri-highlight",
        "diff-highlight",
        "inline-color",
        "keep-markup",
        "line-numbers",
        "show-invisibles",
        "treeview",
      ],
      transformInlineCode: true,
    })
    .use(remarkGfm) // Support GFM (tables, autolinks, tasklists, strikethrough).
    .use(remarkRehype, { allowDangerousHtml: true }) // Turn it into HTML
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeStringify, { allowDangerousHtml: true }) // Serialize HTML.
    .processSync(markdown);
  return result.toString();
}
