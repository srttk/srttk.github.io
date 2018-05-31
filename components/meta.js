import Head from 'next/head'
import { YELLOW } from '../config/colors';
import '../styles/index.scss';
export default ({ title }) => (
    <Head>
      <title>{ title }</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500" rel="stylesheet"/>
      <link rel="stylesheet" href="/_next/static/style.css" />

     
      {/*  <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-36053418-5"></script>
      <script dangerouslySetInnerHTML={{__html:`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-36053418-5');`}}/>
      
    </Head>
)