import { Link } from "react-router-dom";

export default function () {
    return (
        <section className="page-title py-5">
        <div className="container">
            <div className="mx-auto text-start">
            <h1>Share Your Insights</h1>
                    <p className="lead text-muted">This is the platform for discussion and exchange of opinions. Share your
                        stories and personal insights here.</p>
                    <p>
                    <Link to="/404" className="btn btn-grey my-2 me-3">Forum Rules</Link>
                    <Link to="/learn/compose" className="btn btn-blue my-2g n">Compose</Link>
                </p>
            </div>
        </div>
    </section>
    );
}