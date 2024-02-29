import { useState } from 'react';
import './login.scss';
import { Link } from "react-router-dom";
const Login = () => {
    [form, setform] = useState({username:"",
    password:""})

    function inputHandle(event){
        console.log(form);
        setform({
            ...form,
            [event.target.name]:event.target.value})
    }
  return (
    <div className="login">
        <div className="card">
        <div className="left">
            <h1>Welcome Swiggy.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam voluptatem nostrum tempore inventore eveniet illo veritatis explicabo voluptate saepe temporibus sit nam, nisi deleniti. Minima fugiat consequuntur veniam a omnis!</p>
            <span>Don't you have account?</span>
            <Link to="/register">
                <button>Register</button>
            </Link>
        </div>
        <div className="right-card">
            <h1>Login</h1>
            <form action="">
                <input type="text" placeholder='username' name="username" onChange={inputHandle} value={form.username}/>
                <input type="password" placeholder='password' autoComplete="on" name="password" onChange={inputHandle} value={form.password}/>
               <button>Login</button>
            </form>
           
        </div>
        </div>
    </div>
  )
}

export default Login;
