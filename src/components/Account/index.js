import React from "react";

import { Wrapper,Navbar,Content } from "./account.style";

import Header from "../Header";

// Icons
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PaymentIcon from '@mui/icons-material/Payment';
import BoltIcon from '@mui/icons-material/Bolt';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser,logout } from "../../features/userSlice";
import { auth } from "../firebase";

const Account = () =>{

    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const SignOut = () =>{
        auth.signOut().then(()=>{
            dispatch(logout())
            navigate('/')
        })
        .catch((error) => alert(error.message))
    }

    document.title='Tesla 账户 | Tesla';
    return(
        <>
        <Header/>
        <Wrapper>
            <Navbar>
                <div className="row" >
                    <div className="main home">
                        <HomeIcon className="logo" />
                    </div>
                    <div className="text high" >
                        <h2><a>控制面板</a></h2>
                    </div>
                </div>
                <div className="row" >
                    <div className="main">
                        <PermIdentityIcon className="logo"/>
                    </div>
                    <div className="text">
                        <h2><a>个人资料</a></h2>
                    </div>
                </div>
                <div className="row" >
                    <div className="main">
                        <PaymentIcon className="logo"/>
                    </div>
                    <div className="text">
                        <h2><a>支付方式</a></h2>
                    </div>
                </div>
                <div className="row" >
                    <div className="main">
                        <BoltIcon className="logo"/>
                    </div>
                    <div className="text">
                        <h2><a>充电服务</a></h2>
                    </div>
                </div>
                <div className="row" >
                    <div className="main">
                        <AllInboxIcon className="logo"/>
                    </div>
                    <div className="text">
                        <h2><a>奖励宝箱</a></h2> 
                        {/* Tesla Rewards / Loot Box 的官方中文 */}
                    </div>
                </div>
                <div className="row" >
                    <div className="main">
                        <HistoryIcon className="logo"/>
                    </div>
                    <div className="text">
                        <h2><a>订单记录</a></h2>
                    </div>
                </div>
                <div className="row" onClick={SignOut}>
                    <div className="main">
                        <LogoutIcon className="logo"/>
                    </div>
                    <div className="text">
                        <h2><a href="/" >退出登录</a></h2>
                    </div>
                </div>
            </Navbar>
            <Content>
                <h1>{user?.displayName + " 的控制面板"}</h1>
                <div className="container" >
                    <div className="box box1" >
                        <div className="desc" >
                            <h3>订购太阳能产品</h3>
                            <p>为你的特斯拉生活提供能源</p>
                            <a href="#" >了解太阳能</a>
                        </div>
                    </div>
                    <div className="box box2">
                        <div className="desc" >
                            <h3>预订车辆</h3>
                            <p>浏览所有车型</p>
                            <Link to='/'>立即选购</Link>
                        </div>
                    </div>
                    <div className="box_fade" >
                        <div className="box3" ></div>
                        <div className="desc fade" >
                            <h3>从第三方购车？</h3>
                            <a href="#">添加车辆</a>
                        </div>
                    </div>
                </div>
            </Content>
        </Wrapper>
        </>
    )
}

export default Account
