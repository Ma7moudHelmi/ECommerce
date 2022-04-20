import React from "react";

export default function LoginPage() {
  return (
    <div className="centerMiddle position-absolute top-50 start-50 translate-middle shadow p-3 mb-5 bg-body rounded">
      <form>
          <p className="mt-2 fs-1 fst-italic" style={{textAlign:"center"}}>Login</p>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            Email address
          </label>
          <input
          placeholder="example@gmail.com"
            type="email"
            className="form-control"
            id="inputEmail"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
          />
        </div>

        <button type="submit" className="btn btn-primary col-5" >
          Submit
        </button>
      </form>
    </div>
  );
}
