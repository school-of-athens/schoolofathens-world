export default function () {
    return (
        <section className="py-5 text-center container-fluid forum-title">
            <div className="row">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Forum Romanum</h1>
                    <p className="lead text-muted">This is the platform for discussion and exchange of opinions. Share your
                        stories and personal insights here.</p>
                    <p>
                        <a href="/compose" className="btn btn-primary my-2 me-3">Compose</a>
                        <a href="#" className="btn btn-secondary my-2">Forum Rules</a>
                    </p>
                </div>
            </div>
        </section>
    );
};