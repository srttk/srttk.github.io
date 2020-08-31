import React from 'react';
import { Page } from '@geist-ui/react';
import Head from 'next/head';

const Layout:React.FC<{ title?: string }> = ({title="Sarath :: Fullstack Javascript Developer",children }) => {
    return (
        <Page>
            <Head>
                <title>{ title }</title>
            </Head>
           <Page.Content>{ children }</Page.Content>
           <Page.Footer>&copy; Sarath</Page.Footer>
        </Page>
    );
}

export default Layout;
