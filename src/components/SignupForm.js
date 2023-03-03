import logo from "../assets/images/classical-building.png";

export default function () {
    return (
        <div className="text-center" style={{marginTop:"10%"}}>
            <div className="form-signin w-100 m-auto">
                <form>
                    <img className="mb-4" src={logo} alt="" width="72" height="72" />
                        <h1 className="h3 mb-3 fw-normal">Join</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                        </div>

                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                        <p className="mt-5 mb-3 text-muted">The School Of Athens</p>
                </form>
            </div>
        </div>
    );
}