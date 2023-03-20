
import { entryOfKingOthon, acropolisAtAthens, bazarOfAthens } from "../../../data/projectFiles";

export default function () {
    return (
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true"
                    aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={entryOfKingOthon} />
                    <div className="container">
                        <div className="carousel-caption text-start">
                            <h1>Join Us</h1>
                            <p>Some representative placeholder content for the first slide of the carousel.</p>
                            <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                <img src={acropolisAtAthens} />
                    <div className="container">
                        <div className="carousel-caption">
                            <h1>Read Our Story</h1>
                            <p>Some representative placeholder content for the second slide of the carousel.</p>
                            <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                <img src={bazarOfAthens} />
                    <div className="container">
                        <div className="carousel-caption text-end">
                            <h1>Learn About the Development Process</h1>
                            <p>Some representative placeholder content for the third slide of this carousel.</p>
                            <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}