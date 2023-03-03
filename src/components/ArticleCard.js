import React, { useEffect, useState } from 'react';
import SampleImage from "../assets/images/Athens.jpg";

    function App({ article }) {

        return (
            <div className="col">
                <div className="card shadow-sm">
                    <img class="card-img-top" src={SampleImage} width="300" height="225" style={{objectFit: "cover"}} />
                    <div className="card-body">
                        <p className="card-text">article.title</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">
                                publish date is not available
                            </small>
                            <div className="btn-group">
                                <a style={{ fontSize: '1rem !important' }} href={`/learn/${article.id}`} className="btn btn-sm btn-outline-secondary">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default App;