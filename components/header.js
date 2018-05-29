import Link from 'next/link'

export default () => (
  <header>
  <a>Sarath</a>
    <nav>
        <ul>
            <li><Link href="/"><a>HOME</a></Link></li>
            <li><Link href="/contact"><a>CONTACT</a></Link></li>
        </ul>
    <style jsx>
        {`
            nav {
              padding: 10px 5px;
              float: right;
            }

            ul {
                list-style:none;
                padding:0;
                margin:0;
            }

            li {
                display:inline-block;
            }
            a {
                disolay: inline-block;
                margin-left:5px;
            }
        `}
    </style>
    </nav>
  </header>
)
