import { Html, Head, Main, NextScript } from 'next/document'

export default function MyDocument() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta name="theme-color" content="#4F3DFE" />
                <link href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <meta name="description" content="16 y/o | Junior Full-stack Developer" />
                <link rel="icon" href="https://r.resimlink.com/apCB0kuo5IKg.jpg" type="image/x-icon"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
