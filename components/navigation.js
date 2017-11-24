import Link  from 'next/link'
import { PURPLE } from '../config/colors'
export default () => (
    <nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
        <style jsx>{
            `
            nav {
                display:flex;
                align-items: center;
                justify-content: space-between;
                width:250px;
                padding:5px
                z-index:10;
                
            }
            a{
                text-decoration: none;
                color: ${PURPLE};
            }
            `
        }
        </style>
    </nav>
)