import React from 'react';
import Head from 'next/head';

const Layout:React.FC<{ title?: string }> = ({title="Sarath :: Fullstack Javascript Developer",children }) => {
    return (
        <div className="main__container">
            <Head>
                <title>{ title }</title>
            </Head>
            <header>
                <h1 className="brand__title">Sarath ⚡️</h1>
            </header>
           <main className="flex-grow px-2 py-2">{ children }</main>
           <footer>&copy; Sarath</footer>
        </div>
    );
}

export default Layout;
