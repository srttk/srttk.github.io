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

        var res =  await fetch(`https://api.github.com/users/saratonite`)
        var user = await res.json()
        user.bio = JSON.parse( JSON.stringify( user.bio ) )
        return { user }
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
                <Navigation/>
                <div>
                    <div style={{width:'6em',marginTop:'2em'}}>
                        <img className={classnames({"img-avatar": true,"animated bounce": this.state.animateAvatar })}  src="/static/sarath-avatarsticker.png"/>  
                    </div>
                
                    <h1 className={classnames("main-title")}> > Hey, I'm Sarath</h1>

                    <p>{ this.props.user.bio }</p>
                    


                    <style jsx>{`

                    .img-avatar {
                        width: 100%;
                        height: auto;
                    }
                    .main-title {
                        padding:5px;
                        transition: background 1s ease;
                        transition: color .5s ease;
                    }
                    .main-title:hover {

                        background: ${YELLOW};

                    }

                    p {
                        font-size: 1.2rem;
                        padding:5px;
                    }

                    /**Animation */
                    .animated { 
                    
                        -webkit-animation-duration: 1s;
                        animation-duration: 1s; 
                        -webkit-animation-fill-mode: both; 
                        animation-fill-mode: both; 
                    }
                    
                    @-webkit-keyframes bounce { 
                        0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);} 
                        40% {-webkit-transform: translateY(-30px);} 
                        60% {-webkit-transform: translateY(-15px);} 
                    } 
                    
                    @keyframes bounce { 
                        0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
                        40% {transform: translateY(-30px);} 
                        60% {transform: translateY(-15px);} 
                    }
                    
                    .bounce { 
                        -webkit-animation-name: bounce; 
                        animation-name: bounce; 
                    }
                `}</style>
                </div>
            </Screen>
    )
    }
}

