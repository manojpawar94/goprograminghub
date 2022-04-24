import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.json'
import '../styles/globals.css'
import 'highlight.js/styles/github-dark.css'
import { useEffect } from 'react'

import hljs from 'highlight.js'
import python from 'highlight.js/lib/languages/python'
import shell from 'highlight.js/lib/languages/shell'
import go from 'highlight.js/lib/languages/go'
hljs.registerLanguage('python', python)
hljs.registerLanguage('shell', shell)
hljs.registerLanguage('go', go)

function GoProgrammingHubApp({ Component, pageProps }) {

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle")
    }, []);

    return <Component {...pageProps} />
}

export default GoProgrammingHubApp