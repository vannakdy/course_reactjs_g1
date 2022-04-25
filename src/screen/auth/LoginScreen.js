import React , {useState} from "react";
import "./LoginScreen.css";
import Input from "../../component/input/Input";
import Button from "../../component/button/Button";
import axios from "axios";
import {useNavigate} from "react-router-dom"
const LoginScreen = () => {
    const usernameTmp = "admin";
    const passwordTmp = "123admin";
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");
    const [loading,setLoading] = useState(false);

    const onChangeUsername = (event) => {
        setUsername(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const onClickLogin = () => {
        // setMessage("");
        // if(username === "" || username === null) {
        //     setMessage("Please fill in username!");
        // }else if(password === "" || password === null){
        //     setMessage("Please fill in password!");
        // }else if(username === usernameTmp && password === passwordTmp){
        //     navigate("/");
        // }else{
        //     setMessage("Username or password incorrect!");
        //     setPassword("")
        //     setUsername("")
        // }
        setLoading(true);
        setMessage("");
        axios({
            method:"POST",
            url:"https://nitc.cleverapps.io/api/auth/login",
            data:{
                "username" : username,
                "password" : password
            }
        }).then(response=>{
            console.log(response)
            setLoading(false);
            var data = response.data;
            if(data.message  && data.message !== ""){
                setMessage(data.message)
            }else{
                // set profile
                navigate("/");
            }
        })
    }

    return (
        <div className="main_container">
           <div className="form_login">
                <div className="txt_login">Login</div>
                <Input 
                    placeholder="Username"
                    type="text"
                    value={username}
                    onChange={onChangeUsername}
                />
                <Input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChangePassword}
                />
                <div className="txt_forgot">
                    <a href="">Forget password</a>
                </div>
                { message !== "" && <div style={{color:"red",marginTop:10,height:30}}>{message}</div>}
                { loading && <div style={{color:"black",marginTop:10,height:30}}>Loading...</div>}
                <Button 
                    onClick={onClickLogin}  
                    title="Login" 
                />
                
           </div>
           
        </div>
    )
}

export default LoginScreen;