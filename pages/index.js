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
        return { user: {bio: '🔥 Fullstack javascript developer 😜'} }
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
         <Meta title="Sarath's Home Page "/>
                <div className="container">
                    <div className="ribbon"></div>
                    <header>
                        <div className="hero__area">
                            <h1 className={classnames("main-title")}> > Hey, I'm Sarath</h1>

                            <p className="sub-title">{ this.props.user.bio }</p>
                        </div>
                        

                        <div className="contact__box">
                            <a target="_blank" className="bg__link--1" href="https://github.com/saratonite?utm_source=sarath.tk">Github</a> / &nbsp;
                            <a target="_blank" className="bg__link--1" href="https://twitter.com/sarathtvmala?utm_source=sarath.tk">Twitter</a> / &nbsp;
                            <a target="_blank" className="bg__link--1" href="https://linkedin.com/in/sarath-k-0a614727?utm_source=sarath.tk">LinkedIn</a> / &nbsp;
                            <a target="_blank" className="bg__link--1" href="https://saratonite.github.io/resume?utm_source=sarath.tk">Resume</a>
                        </div>
                        <div className="header__contact">
                            <button className="btn btn--big">CONTACT ME</button>
                        </div>
                    </header>

                    <section className="section__projects">
                        <h2>Personal Projects</h2>

                        <div className="project__container">
                            <div className="project__item bg__purple--pink">
                                <h3><a target="_blank" href="http://airwaves.ml?utm_source=sarath.tk">Airwaves.ml</a></h3>
                                <p className="text__small margin__top--small">2018</p>
                            </div>
                            <div className="project__item bg__green--dream">
                                <h3><a target="_blank" href="https://asciiartgen.now.sh?utm_source=sarath.tk">ASCII.ART.GENRATOR</a></h3>
                                <p className="text__small margin__top--small">2017</p>
                            </div>
                            <div className="project__item bg__sky">
                                <h3><a target="_blank" href="https://saratonite.github.io/book-search?utm_source=sarath.tk">BOOK SEARCH</a></h3>
                                <p className="text__small margin__top--small">2014</p>
                            </div>
  
                            
                           
                        </div>
                    </section>
                    
                    
                    

                </div>
                
            </Screen>
    )
    }
}

