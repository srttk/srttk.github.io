import Link  from 'next/link'
import { PURPLE, BLACK } from '../config/colors'
export default (props) => console.log('>',props) || (
    <nav>
        <div className="logo"> > SARATH</div>
        <div className="right-nav">
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
            <Link href="https://standardresume.co/sarath"><a>Resume</a></Link>
        </div>
       
        <style jsx>{
            `
            nav {
                display:flex;
                align-items: center;
                justify-content: space-between;
                padding:5px
                z-index:10;
                box-sizzing: border-box;
                
                
            }
            nav > div.logo {
                font-weight: 600;
            }
            nav > div.right-nav {
                margin-left: auto;
            }
            a{
                text-decoration: none;
                color: ${BLACK};
                display: inline-block;
                padding: 2px 10px;
                text-transform: uppercase;
                font-size: 15px;
                border-bottom: 2px solid #fff;
            }
            a:last-child {
                padding: 2px 0px 2px 10px;
            }
            a:hover, a:active {
                border-bottom: 2px solid ${PURPLE};
            }
            `
        }
        </style>
    </nav>
)