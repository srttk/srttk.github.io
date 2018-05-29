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
    </nav>
)