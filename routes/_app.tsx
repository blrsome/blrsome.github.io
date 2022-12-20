import { AppProps } from '$fresh/server.ts'
import { Head } from '$fresh/runtime.ts'

export default function App({ Component }: AppProps) {
    return (<>
        <Head>
            <meta charSet='utf-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <title>Blrsome</title>
            <meta name='title' content='Blrsome' />
            <meta name='description' content='To keep changing and moving forward.' />
            <meta property='og:title' content='Blrso.me' />
            <meta property='og:description' content='To keep changing and moving forward.' />
            <meta property='og:type' content='website' />
            <meta property='og:url' content='https://blrso.me/' />
            <meta name='color-scheme' content='dark' />
            <link rel='shortcut icon' href='icons/favicon.ico' />
            <link rel='manifest' href='manifest.webmanifest'></link>
            <link rel='preconnect' href='https://fonts.googleapis.com'></link>
            <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin=''></link>
            <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'></link>
            <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'></link>
            <link rel='stylesheet' href='app.css' async></link>
            <link rel='stylesheet' href='highlight.min.css' async></link>
            <script src='lib/tailwind.js'></script>
            <script src='lib/typography@0.5.8.js'></script>
            <script src='lib/marked.min.js'></script>
            <script src='lib/highlight.min.js'></script>
            <script src='lib/smooth-scrollbar.js'></script>
            <script src='lib/system-architecture.js'></script>
            <script src='app.js' defer></script>
        </Head>
        <noscript><meta http-equiv="refresh" content="0;url=https://blr.kr" /></noscript>
        <Component />
    </>)
}