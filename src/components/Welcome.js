const Welcome = () => {
    return (
            <div className="frontface sect">
                <div className="frontImg"></div>
                <div className="frontTitle px-3">
                    <h1 className="text-white" style={{marginLeft: "auto", marginRight: "auto", marginBottom: "10px", textAlign: "center"}}>
                        Welcome to the
                        School
                        Of Athens!</h1>
                    <p className="lead container"
                        style={{color: "white", fontWeight: "normal", marginLeft: "auto", marginRight: "auto", maxWidth: "1000px"}}>The
                        School of Athens is a fresco by the
                        Italian Renaissance artist Raphael. It depicts a congregation of philosophers, mathematicians, and
                        scientists
                        from Ancient Greece, including Plato, Aristotle, Pythagoras, Archimedes, and Heraclitus.</p>
                    <p className="lead">
                        <a href="404" className="btn btn-lg btn-light border-white bg-white">Learn more</a>
                    </p>
                </div>
            </div>
        
    );
}

export default Welcome;