import React from 'react'
import { Link } from "react-router-dom";
import "../style/About.css"

function About() {
    return (
      <div id="about">
        <h1>关于chh的小站~</h1>
        <div className='md'>
          <p>虽然这个小站还是比较简陋，甚至还有目前不好解决的bug，但能力有限，还请见谅~</p>
          <p>这里是我记录一些我认为值得一记的东西的地方，不定期更新，主要取决于我懒不懒咯。</p>
          <p>什么，你问我是谁？我就是——<code>一个只会瞎折腾的家伙啦~</code>除了喜欢看番和不善言辞之外好像也没什么特点...哦对，如果算上不戴眼镜的话就有三个特点了...</p>
          <p>你问座右铭？好像没有，非要说的话也只能是<code>想要成为一个能独当一面的人</code>咯... 虽然但是，毕竟有趣的事情还有那么多不知道，果然还是不想长大啊。</p>
          <p><del>反正也不会有多少人看，这一页不然就先到这了吧</del></p>
        </div>
      </div>
    );
  }

  export default About;