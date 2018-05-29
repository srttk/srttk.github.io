import React from 'react'
import Meta from '../components/meta'
import Screen from '../components/screen'
import Navigation from '../components/navigation'
import classnames from 'classnames'
import fetch from 'isomorphic-fetch'

import { YELLOW, PURPLE } from '../config/colors'
import consoleBanner from '../config/banner'
export default class Index extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            animateAvatar: false
        }

        this.timeOut = null;

    }

    static async getInitialProps({req}) {
        //const userAgent = req ? req.headers['user-agent'] : navigator.userAgent

        // var res =  await fetch(`https://api.github.com/users/saratonite`)
        // var user = await res.json()
        // user.bio = JSON.parse( JSON.stringify( user.bio ) )
        return { user: {bio: '🔥 Aspiring rebel, Indie Hacker 😜'} }
    }

    componentDidMount() {
        // Console Banner

        console.log(consoleBanner)

        this.timeOut = setTimeout(()=> {

            this.setState({ animateAvatar: true});
            clearTimeout(this.timeOut)

        },2000)

        

    }

    componentWillUnmount() {

    }

    render()
    {
     return (
         <Screen>
         <Meta title="Saraths Github Page"/>
                <div className="container">
                    <header>
                        <h1 className={classnames("main-title")}> > Hey, I'm Sarath</h1>

                        <p className="sub-title">{ this.props.user.bio }</p>

                        <div className="contact__box">
                            <a href="https://github.com/saratonite">Github</a> / &nbsp;
                            <a href="https://twitter.com/sarathtvmala">Twitter</a> / &nbsp;
                            <a href="https://linkedin.com/in/sarath-k-0a614727">LinkedIn</a> / &nbsp;
                            <a href="https://saratonite.github.io/resume">Resume</a>
                        </div>
                    </header>
                    
                    

                </div>
            </Screen>
    )
    }
}

