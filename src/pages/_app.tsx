import { GeistProvider, CssBaseline } from '@geist-ui/react'
import Layout from '@/components/Layout'

export default function MyApp({ Component, pageProps}) {

    return (
        <GeistProvider>
            <CssBaseline/>
            <Layout>
                <Component {...pageProps} />
            </Layout>

        </GeistProvider>
    )
}