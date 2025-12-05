import React from 'react'
import { Wrapper,Content } from './home.style'

import Section from './Section'
import Header from './Header';
import Footer from './Footer';

function Home() {

    document.title = "纯电动车、太阳能和清洁能源 | Tesla";
    return (
        <>
        <Header/>
        <Wrapper>
            <Content>
                <Section title="Model 3" desc="支持线上下订 " link="无接触交付" leftbtn="自定义订购" rightbtn="现车库存" backgroundImg="model-3.jpg" arrow="true"/>
            </Content>
            <Content>
                <Section title="Model Y" desc="支持线上下订 " link="无接触交付" leftbtn="自定义订购" rightbtn="现车库存" backgroundImg="model-y.jpg"/>
            </Content>
            <Content>
                <Section title="Model S" desc="支持线上下订 " link="无接触交付" leftbtn="自定义订购" rightbtn="现车库存" backgroundImg="model-s.jpg"/>
            </Content>
            <Content>
                <Section title="Model X" desc="支持线上下订 " link="无接触交付" leftbtn="自定义订购" rightbtn="现车库存" backgroundImg="model-x.jpg"/>
            </Content>
            <Content>
                <Section title="太阳能板" desc="中国市场更具性价比的太阳能方案" leftbtn="立即订购" rightbtn="了解更多" backgroundImg="solar-panel.jpg"/>
            </Content>
            <Content>
                <Section title="太阳能屋顶" desc="从屋顶直接生产清洁能源" leftbtn="立即订购" rightbtn="了解更多" backgroundImg="solar-roof.jpg"/>
            </Content>
            <Content>
                <Section title="配件" leftbtn="立即选购" backgroundImg="accessories.jpg"/>
                <Footer/>
            </Content>
        </Wrapper>
        </>
    )
}

export default Home