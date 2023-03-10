

export default function({ article }) {

        return (
            <div className="col">
                <div className="card">
                    <img className="card-img-top" src="https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fimages%2Facropolis_of_athens.jpg?alt=media&token=0d3b78b9-07b4-4493-8287-f8c4364eb138" width="300" height="225" style={{objectFit: "cover"}} />
                    <div className="card-body">
                        <p className="card-text">{article.title}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">
                                publish date is not available
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        );
    }