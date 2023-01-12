import React from "react";
import style from './Login.module.css'

const Login = () => {
  return (
    <div className={style.login}>
      <form>
        <input type="text" placeholder="Username"/>
        <input type="text" placeholder="Password"/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
