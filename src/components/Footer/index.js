import React from "react";

import { Wrapper,Content } from "./footer.syle";

const Footer = ({bottom}) =>{

    return(
        <Wrapper>
            <Content className={bottom} >
                <div>
                    <a href="/" >
                        © 2025 Tesla 中文克隆站（非官方）
                    </a>
                </div>
                {/* <div>
                    <a href="/about" >关于本站</a>
                    <a href="/contact" >联系开发者</a>
                </div> */}
            </Content>
        </Wrapper>
    )
}

export default Footer
