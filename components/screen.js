export default ({ children }) => (
    <div className="screen">
        { children }

        <style jsx>{`
    .screen {
        min-height: 100vh;
        max-width: 1024px;
        width:100%;
        margin: 0 auto;
    }
    `}</style>
    </div>
    
)