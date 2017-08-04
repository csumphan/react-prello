import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

var serverURL = 'http://localhost:3001';

function Title(props) {
  return (
    <h1 className="login-title">Prello</h1>
  );
}

class CreateAccount extends React.Component {

  handleCreateAcc(e) {
    e.preventDefault();
    console.log(this.username.value);
    fetch(serverURL+'/login', {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify({
        username: this.username.value,
        password: this.password.value,
        email: this.email.value
      }),
      headers: new Headers({'Content-Type': 'application/json'})
    })
      .then(function(data) {
        console.log(data);
      })
      .catch(function(err){
        console.log(err);
      });

  }
  render() {
    return (
      <div className="reg-login" onSubmit={this.handleCreateAcc.bind(this)}>
          <h2>Create Account</h2>
          <form id="create-account">
              Username
              <input
                className='textbox'
                type="text"
                name="username"
                required
                ref={(ref) => this.username = ref}
              />
              Email
              <input className='textbox' type="email" name="email" ref={(ref) => this.email = ref} required />
              Password
              <input className='textbox' id="password-create" type="password" ref={(ref) => this.password= ref} name="password" />
              Confirm Password
              <input className='textbox' id="confirm-create" type="password" ref={(ref) => this.confirmPass = ref} name="confirm" />
              <input className='green-button' type="submit" />
          </form>
      </div>
    );
  }
  }

class LogIn extends React.Component {
  render() {
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
}

export class LoginComponents extends React.Component {
  componentDidMount
  render() {
  return (
    <div className='login-page'>
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
