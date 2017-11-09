import Head from 'next/head'
import { YELLOW } from '../config/colors'
export default ({ title }) => (
    <div>
    <Head>
      <title>{ title }</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet"/>
    </Head>
    <style jsx global>{`
     *{
          padding:0;
          margin:0;
          box-sizzing: border-box;
      }
      html {
        height: 100%;
      }

      
      body { 
        font: 18px menlo;
        font-family: Inconsolata,monospace;
        height:100%;
      }
      ::-moz-selection { /* Code for Firefox */
          background: yellow;
      }
      
      ::selection {
          background: ${YELLOW};
      }
      .app {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        background: #2e2e4e;
        min-height: 100vh;
      }
    `}</style>
  </div>
)