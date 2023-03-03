

const Carousel = () => {
    return (
        <section className="py-5 text-center container-fluid">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Share Your Insights</h1>
                    <p className="lead text-muted">This is the platform for discussion and exchange of opinions. Share your
                        stories and personal insights here.</p>
                    <p>
                        <a href="/compose" className="btn btn-primary my-2 me-3">Compose</a>
                        <a href="/404" className="btn btn-secondary my-2">Forum Rules</a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Carousel;