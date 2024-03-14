import React, { useState } from "react";

export function ReactFormsExample() {

    const [userName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [account, setAccount] = useState("");
    const [showNext, setShowNext] = useState(false);

    return (
        <>
            <h4> React Forms Example </h4>
            <form className="input-group " autoComplete="off">
                <label className="input-group-text"> Employee Name </label>
                <input className="form-control" type="text" autoComplete="off" value={userName} onChange={(evt) => setName(evt.target.value)} name="userName" />
                <label className="input-group-text"> Employee Email </label>
                <input className="form-control" type="text" value={email} onChange={(evt) => setEmail(evt.target.value)} name="email" />
                <label className="input-group-text"> Employee Account </label>
                <input className="form-control" type="text" value={account} onChange={(evt) => setAccount(evt.target.value)} name="account" />
            </form>
            <div className="alert input-group mt-3">
                {userName && <div className="alert alert-info input-group-text">Entered Name is : <span className="fw-bold ">{userName}</span></div>}
                {email && <div className="alert alert-warning input-group-text">Entered Email is : <span className="fw-bold">{email}</span></div>}
                {account && <div className="alert alert-primary input-group-text">Entered Account is : <span className="fw-bold ">{account}</span></div>}
            </div>
            <div className="mt-4 mb-3 btn btn-sm btn-outline-info" onClick={() => setShowNext(!showNext)}>{!showNext ? 'Show Next Example' : 'Hide Example'} </div>
            {showNext && <ReactFormsMultipleExample></ReactFormsMultipleExample>}
        </>
    );
}

/**
 * 
 * @returns This component will show the usage of form submit and use state functionality
 */
export function ReactFormsMultipleExample() {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showNext, setShowNext] = useState(false);

    const initialState = {
        name: "",
        email: "",
        account: ""
    }

    const [details, setDetails] = useState(initialState);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDetails((props) => {
            return {
                ...props,
                [name]: value
            };
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    }

    /* const setResetState = (e) => {
        setDetails(initialState);
    } */

    return (
        <>
            <form className="input-group " autoComplete="off" onSubmit={handleSubmit}>
                <label className="input-group-text"> Employee Name </label>
                <input className="form-control" type="text" autoComplete="off" onChange={handleChange} name="name" />
                <label className="input-group-text"> Employee Email </label>
                <input className="form-control" type="text" onChange={handleChange} name="email" />
                <label className="input-group-text"> Employee Account </label>
                <input className="form-control" type="text" onChange={handleChange} name="account" />
                <button className="btn btn-info">Submit </button>
                {/* <div className="btn btn-secondary" onClick={setResetState}>Clear</div> */}
            </form>
            <div><span>{details.value} {details.value} {details.value}</span> </div>
            {isSubmitted &&
                <>
                    <h6>Name : {details.name}</h6>
                    <h6>Email : {details.email}</h6>
                    <h6>Account : {details.account}</h6>
                </>
            }

            <div className="mt-4 mb-3 btn btn-sm btn-outline-info" onClick={() => setShowNext(!showNext)}>{!showNext ? 'Show Next Example' : 'Hide Example'} </div>
            {showNext && <ReactFormsMultipleExample></ReactFormsMultipleExample>}
        </>
    );
}