import React,{ useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css";

import { Wrapper,Content } from "./spec.style";

const Specs = () =>{

    useEffect(() => {
        AOS.init({duration: 1400});
        AOS.refresh();
    }, []);


    return(
        <Wrapper>
            <Content>
                <div className="row" >
                    <div className="col" data-aos='fade-right'> 
                        <img src="/images/game.jpg" alt="game"/>
                    </div>
                    <div className="col text" data-aos='fade-left'>
                        <h3> 随时随地畅玩游戏 </h3>
                        <p> 最高可达 10 万亿次浮点运算性能，带来媲美最新游戏主机的车载游戏体验。支持无线手柄，从任意座位即可畅玩。 </p>
                    </div>
                </div>
                <div className="row" >
                    <div className="col text1" data-aos='fade-right'>
                        <h3> 时刻保持连接 </h3>
                        <p> 多设备蓝牙、无线充电和 USB-C 接口，为每位乘客提供充足电力，可快速为平板电脑和笔记本电脑充电。 </p>
                    </div>
                    <div className="col" data-aos='fade-left'> 
                        <img src="/images/connected.jpg" alt="connected"/>
                    </div>
                </div>
                <div className="row" >
                    <div className="col" data-aos='fade-right'> 
                        <img src="/images/audio.jpg" alt="audio"/>
                    </div>
                    <div className="col text" data-aos='fade-left'>
                        <h3> 出色的车载音响体验 </h3>
                        <p> 定制化车载音响系统，呈现沉浸式音效，在任何路况下都能享受高品质音乐。 </p>
                    </div>
                </div>
                
            </Content>
        </Wrapper>
    )
}

export default Specs;
