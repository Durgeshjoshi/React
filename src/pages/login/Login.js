import {  useContext, useState } from 'react';
import './login.scss';
import { Link } from "react-router-dom";
import {AuthContext} from '../../context/authContext'
const Login = () => {
    [form, setform] = useState({username:"",
    password:""})

  const {login} = useContext(AuthContext);
    
    function inputHandle(event){
        setform({
            ...form,
            [event.target.name]:event.target.value})
    }

    const handleLogin = () => {
        login();
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
               <button onClick={handleLogin}>Login</button>
            </form>
           
        </div>
        </div>
    </div>
  )
}

export default Login;
