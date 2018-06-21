import Head from 'next/head'
import { YELLOW } from '../config/colors';
import '../styles/index.scss';
export default ({ title }) => (
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500" rel="stylesheet"/>
      <link rel="stylesheet" href={`${process.env.ASSET_PREFIX}_next/static/style.css`} />

     
      {/*  <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.trackerID}`}></script>
      <script dangerouslySetInnerHTML={{__html:` window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','${process.env.trackerID}');`}}/>
      
    </Head>
)