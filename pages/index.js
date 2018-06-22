import React from 'react'
import Meta from '../components/meta'
import Screen from '../components/screen'
import Ribbon from '../components/ribbon'
import Modal from '../components/modal';
import ContactForm from '../components/forms/contactform';
import classnames from 'classnames'
import fetch from 'isomorphic-fetch';
import { getLocation } from '../api/browser-geolocation';
import { db } from '../api/firebaseapp';
import { YELLOW, PURPLE } from '../config/colors'
import consoleBanner from '../config/banner'

export default class Index extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            animateAvatar: false,
            browserGeoLocation: {
                latitude: 0,
                longitude: 0
            },
            settings: {
                availableForHire: null,
                enableGeoLocation: null
            },
            showContactModal: false
        }

        this.timeOut = null;


        this.clickContactMe = this.clickContactMe.bind(this);

        this.hideContactMe = this.hideContactMe.bind(this);

    }

    static async getInitialProps({req}) {
        //const userAgent = req ? req.headers['user-agent'] : navigator.userAgent

        // var res =  await fetch(`https://api.github.com/users/saratonite`)
        // var user = await res.json()
        // user.bio = JSON.parse( JSON.stringify( user.bio ) )
        return { user: {bio: '🔥 Fullstack javascript developer 😜'} }
    }

    componentWillMount() {
        let self = this;
        db.collection('appSettings').doc('sarath.tk')
            .get().then((snapshot) => {
                self.setState({settings: {availableForHire:snapshot.data().availableForHire}})
            })
    }

    componentDidMount() {
        // Console Banner

        console.log(consoleBanner);

        let self = this;

        try {
            getLocation(function(position) {


                self.setState({browserGeoLocation: {latitude:position.coords.latitude, longitude: position.coords.longitude}});

                
            })
        }
        catch(err) {
            console.log('>', err);
        }

        



        

    }

    componentWillUnmount() {

    }

    clickContactMe() {
        this.setState({showContactModal: true});
    }

    hideContactMe() {
        this.setState({ showContactModal: false});
    }

    render()
    {
     return (
         <Screen>
         <main>
         <Meta title="Sarath's Home Page "/>
                <div className="container">
                   <Ribbon status={ this.state.settings.availableForHire }/>
                    <header>
                        <div className="hero__area">
                            <h1 className={classnames("main-title")}> > Hey, I'm Sarath</h1>

                            <p className="sub-title">{ this.props.user.bio }</p>
                        </div>
                        

                        <div className="contact__box">
                            <a target="_blank" className="bg__link--1" href={`https://github.com/saratonite?utm_source=${process.env.REFURL}`}>Github</a> / &nbsp;
                            <a target="_blank" className="bg__link--1" href={`https://twitter.com/sarathtvmala?utm_source=${process.env.REFURL}`}>Twitter</a> / &nbsp;
                            <a target="_blank" className="bg__link--1" href={`https://linkedin.com/in/sarath-k-0a614727?utm_source=${process.env.REFURL}`}>LinkedIn</a> / &nbsp;
                            <a target="_blank" className="bg__link--1" href={`https://saratonite.github.io/resume?utm_source=${process.env.REFURL}`}>Resume</a>
                        </div>
                        <div className="header__contact">
                            <button className="btn btn--big" onClick={ this.clickContactMe }>CONTACT ME</button>
                        </div>
                    </header>
                    <Modal title="Contact Me 😎" closeModal={ this.hideContactMe } show={ this.state.showContactModal } >
                        <ContactForm handleCancel={ this.hideContactMe } browserGeoLocation={ this.state.browserGeoLocation }/>
                    </Modal>
                    <section className="section__projects">
                        <h2>Personal Projects</h2>

                        <div className="project__container">
                            <div className="project__item bg__purple--pink">
                                <h3><a target="_blank" href={`http://airwaves.ml?utm_source=${process.env.REFURL}`}>Airwaves.ml</a></h3>
                                <p className="text__small margin__top--small">2018</p>
                                <div className="project__item--stack">
                                    <span>React</span> / <span>Redux</span> / <span>Firebase</span>
                                </div>
                            </div>
                            <div className="project__item bg__green--dream">
                                <h3><a target="_blank" href={`https://asciiartgen.now.sh?utm_source=${process.env.REFURL}`}>ASCII.ART.GENRATOR</a></h3>
                                <p className="text__small margin__top--small">2017</p>
                                <div className="project__item--stack">
                                    <span>NodeJs</span> / <span>Express</span> 
                                </div>
                            </div>
                            <div className="project__item bg__sky">
                                <h3><a target="_blank" href={`https://saratonite.github.io/book-search?utm_source=${process.env.REFURL}`}>BOOK SEARCH</a></h3>
                                <p className="text__small margin__top--small">2014</p>
                                <div className="project__item--stack">
                                    <span>AngularJs 1.x</span>
                                </div>
                            </div>
  
                            
                           
                        </div>
                    </section>
                    
                    
                    

                </div>
                
            </main>

            <footer className="footer">
                <div className="container">
                &copy; 2018 Sarath, Dont copy me 😎   
                </div>
            </footer>

            </Screen>
            
    )
    }
}

