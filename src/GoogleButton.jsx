import React, { useState } from "react";
import { GoogleLogout, GoogleLogin } from "./Button";

const clientId =
  "797401886567-9cumct9mrt3v2va409rasa7fa6fq02hh.apps.googleusercontent.com";

const success = (response) => {
  console.log(response); // eslint-disable-line
};

const error = (response) => {
  console.error(response); // eslint-disable-line
  console.log("puta");
};

// const loading = () => {
//   console.log("loading"); // eslint-disable-line
// };

const logout = () => {
  console.log("logout"); // eslint-disable-line
};

const MountTest = () => {
  const [showButton, toggleShow] = useState(true);

  if (showButton) {
    return (
      <GoogleLogin
        onSuccess={(res) => {
          toggleShow(false);
          success(res);
        }}
        onFailure={error}
        clientId={clientId}
      >
        Auth then Hide button
      </GoogleLogin>
    );
  }

  return <button onClick={() => toggleShow(true)}>show button</button>;
};

export default () => (
  <div>
    <MountTest />
    {/* Analytics
    <br />
    <br />
    <GoogleLogin
      clientId={clientId}
      scope="https://www.googleapis.com/auth/analytics"
      onSuccess={success}
      onFailure={error}
      onRequest={loading}
      offline={false}
      approvalPrompt="force"
      responseType="id_token"
      isSignedIn
      theme="dark"
      disabled
      prompt="consent"
      className="button"
      style={{ color: "red" }}
    >
      <span>Analytics</span>
    </GoogleLogin> */}
    {/*  Adwords
    <br />
    <br />
    <GoogleLogin
      clientId={clientId}
      scope="https://www.googleapis.com/auth/adwords"
      onSuccess={success}
      onFailure={error}
      onRequest={loading}
      approvalPrompt="force"
      responseType="code"
      uxMode="redirect"
      redirectUri="http://google.com"
      disabled
      prompt="consent"
      className='button'
      style={{ color: 'red' }}
    > 
      <span>Adwords</span>
    </GoogleLogin> 
    <br />
    <br /> */}
    {/* Simple 
    <GoogleLogin onSuccess={success} onFailure={error} clientId={clientId} />
    <br />
    <br /> 
    <GoogleLogin
      theme="dark"
      onSuccess={success}
      onFailure={error}
      clientId={clientId}
    />
    <br />
    <br /> */}
    <GoogleLogin
      theme="dark"
      style={{ background: "blue" }}
      onSuccess={success}
      onFailure={error}
      clientId={clientId}
    />
    <br />
    <br />
    <GoogleLogout buttonText="Logout" onLogoutSuccess={logout} />
  </div>
);
