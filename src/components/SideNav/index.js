import React from 'react'
import { Wrapper,Content} from './sidenav.style'

import { Link } from 'react-router-dom'

function SideNav({ show }) {

    return (
      <Wrapper show={show}>
        <Content>
          <Link to="/models">
            <li className="half">Model S</li>
          </Link>
          <Link to="/model3">
            <li className="half">Model 3</li>
          </Link>
          <Link to="/modelx">
            <li className="half">Model X</li>
          </Link>
          <Link to="/modely">
            <li className="half">Model Y</li>
          </Link>

          <li className="half">太阳能屋顶</li>
          <li className="half">太阳能板</li>

          <li>现车库存</li>
          <li>二手库存</li>
          <li>车辆置换</li>
          <li>Cybertruck</li>
          <li>Roadster</li>
          <li>Semi</li>
          <li>充电服务</li>
          <li>Powerwall</li>
          <li>商业能源</li>
          <li>能源公用事业</li>
          <li>查找服务中心</li>
          <li>支持</li>
          <li>投资者关系</li>

          <li className="half">商店</li>
          <Link to="/login">
            <li className="half">账户</li>
          </Link>
          <li className="half">更多</li>
        </Content>
      </Wrapper>
    );
}

export default SideNav