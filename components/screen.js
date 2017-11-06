export default ({ children }) => (
    <div className="screen">
        { children }

        <style jsx>{`
    .screen {
        min-height: 100vh;
    }
    `}</style>
    </div>
    
)