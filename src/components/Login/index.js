import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Login = ({ setIsAuthenticated }) => {
  const adminEmail = 'admin@example.com';
  const adminPassword = '12345';

  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('12345');
  const [checkvalue,setCheckvalue]= useState(false);

  const handleLogin = e => {
    e.preventDefault();

    if (email === adminEmail && password === adminPassword && checkvalue) {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          localStorage.setItem('is_authenticated', true);
          setIsAuthenticated(true);

          Swal.fire({
            icon: 'success',
            title: 'Successfully logged in!',
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    } else {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          setIsAuthenticated(false);
          let msg ='';
          if(email !== adminEmail){
            msg ="Your email is incorrect"
          }
          else if(password !== adminPassword){
            msg ="Your Password is incorrect"
          }
          else if(!checkvalue){
msg="Accept the Conditions"
          }
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: msg,
            showConfirmButton: true,
          });
        },
      });
    }
  };

  return (
    <div className="small-container">
      <form onSubmit={handleLogin}>
        <h1>Admin Login</h1>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="admin@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="qwerty"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input type="checkbox" 
        value={checkvalue} 
        checked={checkvalue}
        onClick={e => setCheckvalue(e.target.checked) }
        
        /> Accept The Conditions
        <br/><input style={{ marginTop: '12px' }} type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
