import React from 'react'
import { Wrapper,ContentTop,ContentMid,Content } from './section.style'

function Section({ title,desc,backgroundImg,link,leftbtn,rightbtn,arrow,range,speed,hp,top }) {

    return (
        <Wrapper bg={backgroundImg} >
            <ContentTop>
                <h1>{title}</h1>
                <p>{desc} <a href='#'>{link}</a></p>
            </ContentTop>

            <div>
                <ContentMid className={arrow ? '' : 'buttons'} >
                    {leftbtn &&
                    <div className='left'>
                        <button>{leftbtn}</button>
                    </div>
                    }
                    {rightbtn && 
                        <div className='right'>
                            <button>{rightbtn}</button>
                        </div>
                    }
                </ContentMid>
                {range && 
                <Content>
                    <div className="Info-bar">
                        <div className="Specs" >
                            <h2>{(range * 1.60934).toFixed(0)} km</h2>
                            <p>续航里程（EPA 估算）</p>
                        </div>
                        <div className="Specs" >
                            <h2>{speed}s</h2>
                            <p>0-60 英里加速*</p>
                        </div>
                        <div className="Specs" >
                            <h2>{(top * 1.60934).toFixed(0)} km/h</h2>
                            <p>最高车速</p>
                        </div>
                        {hp && 
                        <div className="Specs hp" >
                            <h2>{hp} hp</h2>
                            <p>峰值功率</p>
                        </div>
                        }
                        <div className="order_btn">
                            <button> 立即订购 </button>
                        </div>
                    </div>
                </Content>
                }
                {arrow && 
                    <div className='arrow'>
                        <img src='/images/down-arrow.svg' alt='arrow'/>
                    </div>
                }
            </div>
        </Wrapper>
    )
}

export default Section
