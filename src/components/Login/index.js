import React, { useState } from "react";
import LanguageIcon from '@mui/icons-material/Language';
import { signInWithEmailAndPassword } from "firebase/auth";

import { Wrapper,Content } from "./login.style";
import Footer from "../Footer";
import { Link,useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

const Login = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signIn = (e) =>{
        e.preventDefault() //Doesn't reload page after click on button

        signInWithEmailAndPassword(auth,email,password).then((userAuth)=>{
            dispatch(
                login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                })
            )
            navigate('/teslaaccount')
        })
        .catch((error) => {
            alert(error.code + error.message)
            document.getElementById("password").value = "";
        })
    }

    document.title = 'Tesla SSO - Sign In'
    return(
        <>
        <Wrapper>
            <div className="header" >
                <div>
                    <Link to='/'>
                        <img src="/images/logo.svg" alt="logo"/>
                    </Link>
                </div>
                <div className="lang" >
                    <LanguageIcon/> <span>zh-CN</span>
                </div>
            </div>

            <Content>
                <h1>登录</h1>
                <form>
                    <label htmlFor="email" >电子邮箱地址</label>
                    <input type='email' id="email" value={email} onChange={(e)=> setEmail(e.target.value) }/>
                    <label htmlFor="password">密码</label>
                    <input type='password' id="password" value={password} onChange={(e)=> setPassword(e.target.value) }/>

                    <button type="submit" onClick={signIn}>下一步</button>
                </form>
                <div className="line" >
                    <hr/><span>或</span><hr/>
                </div>

                <div>
                <Link to='/signup'>
                    <button>创建账户</button>
                </Link>
                </div>
            </Content>
        </Wrapper>
        <Footer/>
        </>
    )
}

export default Login;