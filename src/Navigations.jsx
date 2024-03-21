export function Navigate() {
    return (
        <>
            <nav className='navbar navbar-expand-sm navbar-light bg-info text-light mb-5'>
                <div className='container-fluid'>
                    <a href='/' className='navbar-brand'>
                        React Learning
                    </a>
                    <div className='navbar-nav'>
                        <a href='/first' className='nav-link active'>
                            First Page
                        </a>
                    </div>
                    <div className='navbar-nav'>
                        <a href='/training' className='nav-link active'>
                            Training
                        </a>
                    </div>
                    <div className='navbar-nav'>
                        <a href='/state' className='nav-link active'>
                            State Example
                        </a>
                    </div>
                    <div className='navbar-nav'>
                        <a href='/useReducerFn' className='nav-link active'>
                            Use Reducer
                        </a>
                    </div>
                    <div className='navbar-nav'>
                        <a href='/calculator' className='nav-link active'>
                            Calculator
                        </a>
                    </div>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-toggle='collapse'
                        data-target='#navbarID'
                        aria-controls='navbarID'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarID'>
                        <div className='navbar-nav'>
                            <a
                                href='/reactForms'
                                className='nav-link active'
                                aria-current='page'
                            >
                                Forms Example
                            </a>
                        </div>
                    </div>
                    <a href='/' className='nav-link active'>
                        Default App
                    </a>
                </div>
            </nav>
        </>
    );
}
