import React,{ useState } from "react";
import { Content, Wrapper } from "./signup.style";
import Footer from "../Footer";

import { Link,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LanguageIcon from '@mui/icons-material/Language';

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { login } from "../../features/userSlice";



const Signup = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signUp = (e) =>{
        e.preventDefault();

        {!fname && alert('请输入您的名字')}

        createUserWithEmailAndPassword(auth,email,password).then((userCreds)=> {
                updateProfile(userCreds.user, {
                    displayName: fname,
            }).then(()=>{
                dispatch(login({
                    email: userCreds.user.email,
                    uid: userCreds.user.uid,
                    displayName: fname,
                }))
            })
            navigate('/teslaaccount')
        }).catch((error) =>  {
            error.message.replace(".", "");
            alert(error.message + " (" + error.code + ")");
            document.getElementById("password").value = "";
        })

    }

    document.title='Tesla 账户 - 注册'
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
                <h1>创建账户</h1>
                <form>
                    <label htmlFor="text" >名</label>
                    <input type='text' id='fname' value={fname} onChange={(e)=> setFname(e.target.value)} />
                    <label htmlFor="text" >姓</label>
                    <input type='text' id='lname' value={lname} onChange={(e)=> setLname(e.target.value)} />
                    <label htmlFor="email" >电子邮件地址</label>
                    <input type='email' id="email" value={email} onChange={(e)=> setEmail(e.target.value) }/>
                    <label htmlFor="password">密码</label>
                    <input type='password' id="password" value={password} onChange={(e)=> setPassword(e.target.value) }/>

                    <button type="submit" onClick={signUp}>创建账户</button>
                </form>
                <div className="line" >
                    <hr/><span>或</span><hr/>
                </div>

                <div>
                <Link to='/login'>
                    <button>登录</button>
                </Link>
                </div>
            </Content>
        </Wrapper>
        <Footer/>
        </>
    )
}

export default Signup