import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Title(props) {
  return (
    <h1 className="login-title">Prello</h1>
  );
}
function CreateAccount(props) {
  return (
    <div className="reg-login">
        <h2>Create Account</h2>
        <form id="create-account">
            Username
            <input className='textbox' type="text" name="username" required />
            Email
            <input className='textbox' type="email" name="email" required />
            Password
            <input className='textbox' id="password-create" type="password" name="password" />
            Confirm Password
            <input className='textbox' id="confirm-create" type="password" name="confirm" />
            <input className='green-button' type="submit" />
        </form>
    </div>
  );
}
function LogIn(props) {
  return (
    <div className="reg-login">
    <h2>Login</h2>
    <form id="login" action='/create/signin' method='POST'>
        Username
        <input className='textbox' id='login-user' type="text" name="username" required />
        Password
        <input className='textbox' id='login-pass' type="password" name="password" required />
        <input className='green-button' type="submit" />
</form>
<form>
    <button id='forgot-btn' formaction="/forgotpassword" formmethod="GET">Forgot Password..</button>
</form>
</div>
  );
}
export class LoginComponents extends React.Component {
  componentDidMount
  render() {
  return (
    <div>
      <Title />
      <div className='user-form'>
        <CreateAccount />
        <LogIn />
      </div>
    </div>
  );
}
}

// ReactDOM.render(
//   <LoginComponents />,
//   document.getElementById('root')
// );
