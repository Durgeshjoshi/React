import './register.scss';
import { Link } from "react-router-dom";
import { useState } from 'react';
const Register = () => {
    [form, setform] = useState({username:"",email:"",
    password:"",name:""})

    function inputHandle(event){
        console.log(form);
        setform({
            ...form,
            [event.target.name]:event.target.value})
    }
  return (
    <div className="register">
        <div className="card">
        <div className="left-card">
            <h1>Register</h1>
            <form action="">
                <input type="text" placeholder='Username' name="username" onChange={inputHandle} value={form.username}/>
                <input type="email" placeholder='Email' name="email" onChange={inputHandle} value={form.email} />
                <input type="password" placeholder='Password' name="password" autoComplete="on" onChange={inputHandle} value={form.password} />
                <input type="text" placeholder='Name' name="name" onChange={inputHandle} value={form.name}/>
               <button>Register</button>
            </form>           
        </div>
        <div className="right-card">
            <h1>Swiggy World.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam voluptatem nostrum tempore inventore eveniet illo veritatis explicabo voluptate saepe temporibus sit nam, nisi deleniti. Minima fugiat consequuntur veniam a omnis!</p>
            <span>Already account created?</span>
            <Link to="/login">
            <button>Login</button>
            </Link>
        </div>
        
        </div>
    </div>
  )
}

export default Register;
