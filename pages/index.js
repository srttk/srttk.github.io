import Meta from '../components/meta'
import Screen from '../components/screen'
export default () => (
    <div>
        <Meta title="Saraths Github Page"/>
        <Screen>
            <div className="flash-page">
                <img style={{width:100}} src="/static/sarath-avatarsticker.png"/>
                <h1> > Hey, I'm Sarath</h1>
                <p>Software Developer from India!</p>

                <style jsx>{`
                .flash-page {
                display:flex;
                flex-direction: column;
                flex-grow: 1;
                justify-content: center;
                align-items: center;
                height: 100vh;
                }
            `}</style>
            </div>
        </Screen>
        
    </div>
)

