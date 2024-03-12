export function Navigate() {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-info text-light mb-5">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">React Learning</a>
                    <a href="/first" className="nav-link active">First Page</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                        aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarID">
                        <div className="navbar-nav">
                            <a href="/reactForms" className="nav-link active" aria-current="page" >Forms Example</a>
                        </div>
                    </div>
                    <a href="/" className="nav-link active">Default App</a>
                </div>
            </nav>
        </>
    );
}