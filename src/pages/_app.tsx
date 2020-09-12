import { MDXProvider } from '@mdx-js/react';
import Layout from '@/components/Layout';
import '../styles/index.css';
export default function MyApp({ Component, pageProps}) {

    return (
        <MDXProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </MDXProvider>
    )
}