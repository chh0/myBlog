```javascript
{
"title":"webgl学习日志（一）",
"category":"笔记",
"tags":["webgl","3D"],
"date":["2022","5","17"]
}
```

由于某些不可抗力因素，从一周前开始学习webgl相关的知识，但期间作业一堆，还有两三天时间搞产品宣传视频到凌晨，于是学习进度也并不怎么样...

webgl毕竟已经十年以上了，网上的资料、教程什么的也确实不少，但遇到跑不通的demo和奇奇怪怪的js依赖文件还是挺头疼的。到今天想想不如找本比较全面的书来看，熟悉了一些之后再看网上的代码比较好。

这里先做一个阶段性的总结，主要分为几大块吧，但每一块到现在也就学了个皮毛。一是计算机图形学的基础，二是webgl的原理和基础操作方法，三是webgl上的交互和动画。至于其他已经封装好的库，稍微看了看，但没做重点，也就跑通了xeogl的本地展示demo。

# 计算机图形学基础

首先是计算机对三维物体的呈现问题，计算机只能通过像素显示栅格化之后的点、线、面，（实际上说全是面也可以，毕竟毕竟目前用webgl也不能保证支持改变线的粗细，想要画出不同粗细的线还是得用面来处理）。也就是说一个物体具体要怎么画还是得告诉电脑才行。

一开始觉得绘制复杂物体本身会很难，但实际上原理层面也没有非常复杂，更加困难的还是在处理光学问题上，比如环境光、打光、阴影，或是说次表面、反射等等。

首先是**坐标系**问题，webgl是一个(x,y,z)都**在[-1,1]范围内的右手坐标系**（一般使用的过程中），所以用一个三维向量来表示位置，用三个点一组表示一个面。（vec4中表示为x, y, z, w，其中最后的w默认取1，实际上对于webgl而言最后传入的vec4位置会转为x/w, y/w, z/w。）

其次是变换矩阵，位移、旋转、缩放通过矩阵表示是相对方便而且高效率的方式，将它们按照**正确的顺序相乘**即可得到所谓的转换矩阵，用来表示物体的变换，当然也可以直接用来处理坐标系的转换，这一点及其重要。

然后是具体的三维显示问题。首先要明确的一点是，我们的屏幕是二维的（废话），也就是说对于最终用于绘制的点的三维坐标而言，只有x, y是切切实实被用于确定屏幕上点的位置的，z和w并不能直接起作用，这两个值只有在处理透视和上色之前才能起到作用。

关于三维显示的透视问题。如果是正交视图，即没有任何透视关系，那么不需要额外处理，否则还需要**让x,y与z的大小相关**，以满足近大远小的关系，这一部分也可以用上述的矩阵完成。如果考虑相机位置的话还需要另写一个矩阵，还需要考虑长宽比、视距等等，这些内容有很多相关的库可以帮助处理这些矩阵的建立、变换等。

讲完了点还有面，面的绘制大概有以下几点。一是**面全都是以三个点一组进行描述的**，也就是说对于一个正方体，6个正方形面共12个三角形，每个三角形3个顶点，对于计算机而言需要当作36个顶点来处理。二是面分正反，三点顺序**顺时针为反、逆时针为正**，如果保证朝向外面的都是正三角形，那么可以减少面的绘制数量提升效率。（终于知道mc卡到方块里面为什么可以看到地下矿洞了，方块内部往外看都是反面压根就没渲染）三是遮挡关系需要使用z坐标处理，如果一个像素渲染时发现该位置有个z更大的已渲染像素，则直接跳过。

之后就是打光和材质了，只是上贴图也就是改变一下面绘制时的颜色获取，但涉及到高光贴图、法线贴图、镜面效果、漫反射效果、次表面效果等等就比较麻烦了，打光方面点光、平行光、环境光、其他物体的反光，光晕、高亮，雾气、丁达尔效果等等每一个都有不同的算法，再考虑效果的叠加处理和性能的提升......（能做mme的都是大佬啊）

# WebGL部分

从理论到落地无论在什么工程领域都有着或大或小的鸿沟，从图形学到WebGL也不例外，原以为看懂原理就可以很快上手WebGL，是我天真了。

WebGL最核心的部分就是它的渲染管线，如图：

![WebGL渲染管线](blogPics/220517-1.jpg)

这是整个webgl的核心内容，其中绿色的部分为我们可以操作的部分，深蓝色的两块是电脑自动进行操作的部分。简单来说就是，你先告诉电脑有哪些点，打算怎么组装（顶点着色器），之后电脑就会把这些点分好组，把每个要渲染的像素位置找到，再一个一个像素传到片元着色器中用颜色填充（片元/像素着色器）。

## Hello World

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>
    <canvas id="canvas"></canvas>
</body>
</html>
<script>
    const canvas=document.getElementById('canvas');
    const gl=canvas.getContext('webgl');
    canvas.width="100";
    canvas.height="100";
    gl.clearColor(0,0,0,1);
    gl.clear(gl.COLOR_BUFFER_BIT);
</script>
```
这就是最简单的webgl程序，首先在html中创建一块画布，这里需要用元素的长宽而非css的长宽来控制画布大小，然后用js获取画布后绑定webgl的上下文，用不透明纯黑清空画布。

这里涉及到了webgl的`clearColor()`和`clear`接口，以及关键字`COLOR_BUFFER_BIT`。webgl中有巨多的接口和关键字，但为了能看懂上层封装的各类webgl库，这些还是有必要了解的...

## 基本操作

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>利用索引绘制矩形</title>
</head>

<body>
    <canvas id="canvas"></canvas>
    <script type="shader-source" id="vertexShader">
        precision mediump float; //浮点数设置为中等精度
        attribute vec2 a_Position; //接收 JavaScript 传递过来的点的坐标（X, Y）
        attribute vec2 a_Screen_Size; // 接收canvas的尺寸。
        attribute vec4 a_Color;
        varying vec4 v_Color;
        void main(){
            vec2 position = (a_Position / a_Screen_Size) * 2.0 - 1.0; // 将 canvas 的坐标值 转换为 [-1.0, 1.0]的范围
            position = position * vec2(1.0, -1.0); // canvas的 Y 轴坐标方向和设备坐标系的相反
            gl_Position = vec4(position, 0.0, 1.0); // 最终的顶点坐标
            v_Color = a_Color; // 将顶点颜色传递给片元着色器
        }
    </script>
    <script type="shader-source" id="fragmentShader">
        precision mediump float; //浮点数设置为中等精度
        varying vec4 v_Color; //全局变量，用来接收 JavaScript传递过来的颜色
        void main(){
            vec4 color = v_Color / vec4(255, 255, 255, 1); // 将颜色处理成 GLSL 允许的范围[0， 1]
            gl_FragColor = color; //确定最终颜色
        }
    </script>
    <script src="../utils/webgl-helper.js"></script>
    <script>
    // 在helper里面对一些功能进行了简单封装，以下几个部分就是简单调用
    let canvas = getCanvas('#canvas');
    resizeCanvas(canvas);
    let gl = getContext(canvas);
    let program = createSimpleProgramFromScript(gl, 'vertexShader', 'fragmentShader');
    gl.useProgram(program);

    // 获取 canvas 尺寸
    let a_Screen_Size = gl.getAttribLocation(program, 'a_Screen_Size');
    // 将 canvas 尺寸传递给顶点着色器
    gl.vertexAttrib2f(a_Screen_Size, canvas.width, canvas.height);

    // 定义组成矩形的两个三角形，共计六个顶点，每个顶点包含2个坐标分量和4个颜色分量。
    let positions = [
        30, 30, 255, 0, 0, 1,//V0
        30, 300, 0, 255, 0, 1, //V1
        300, 300, 0, 255, 0, 1, //V2
        300, 30, 0, 0, 255, 1//V3
    ];

    let a_Position = gl.getAttribLocation(program, 'a_Position');
    let a_Color = gl.getAttribLocation(program, 'a_Color');

    gl.enableVertexAttribArray(a_Position);
    gl.enableVertexAttribArray(a_Color);
    // 创建缓冲区
    let buffer = gl.createBuffer();
    // 绑定缓冲区为当前缓冲
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    // 设置 a_Position 属性从缓冲区读取数据方式
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 24, 0);
    // 设置 a_Color 属性从缓冲区读取数据方式
    gl.vertexAttribPointer(a_Color, 4, gl.FLOAT, false, 24, 8);
    // 向缓冲区传递数据
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    //定义绘制索引数组，012和023两个面组成正方形
    //接下来将顶点信息写入缓冲区
    let indices = [0, 1, 2, 0, 2, 3];
    //创建索引缓冲区
    let indicesBuffer = gl.createBuffer();
    //绑定索引缓冲区
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indicesBuffer);
    //向索引缓冲区传递索引数据
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    gl.clearColor(0, 0, 0, 1);

    function render(gl) {
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
    }
    render(gl);
    </script>
</body>
</html>
```
结果如下：

![绘制彩色正方形](blogPics/220518-1.jpg)

有一说一，这么一个简单的功能，只是确定了四个点的位置和颜色，然后组装成两个三角形，就得用到如此复杂的代码，而且渲染器那部分已经封装得很简单了，反正就挺离谱的...

稍微讲讲原理，顶点着色器负责将js给出的canvas位置转化为[-1,1]的范围，并将顶点颜色赋给varying类型的变量用于给片元着色器调用。对于片元着色器而言，拿到了顶点的颜色后会自动插值范围内的其他非顶点，形成渐变效果（也就是说，在三点颜色一致时，这个面就是纯色）。

至于如何做到用js将值传入顶点着色器，这就需要用js给顶点着色器定义的全局变量和属性变量进行赋值。这里有以下两种方法，一是获取变量的位置直接赋值，如上面的`a_Screen_Size`变量，还有一部分采用的是缓冲区，就是先建立一个特定的大数组，按顺序存好所有的数据，再存到如`ELEMENT_ARRAY_BUFFER`这种特定的缓冲区里面，再规定变量从缓冲区读入的方式，即可正常使用。

不得不说，有太多内容都需要进一步封装才能较好使用...

## 交互和动画

这部分代码全放上来太长了，只放部分反正也没法跑通，不如先讲讲思路。

交互方面，实际上都是js基础的内容了，包括在画布上捕获鼠标事件，在特定条件下（如点击响应，拖拽响应等等）触发变量重新计算赋值，然后重新绘制界面。但与具体绘制的内容交互，如点击某一个部分等，一个简单的思路在于让不同的部分在点击那一个瞬间重绘成不同的纯色，根据颜色查表得到不同的部位，在下一个瞬间再绘制正常的颜色。而对于表示框这种会跟着某个部位运动的部位，可以取部位上的一个点，在js中直接对该点矩阵运算得出在画布上的位置，然后就可以建立一个悬浮的html元素始终跟随。

动画的话，这块还没了解太多，包括后面的帧缓冲区之类的内容。这里讲讲已知的内容好了。首先是js的定时器函数`setInterval`是一个异步函数，并不能保证时间间隔，你设置了10ms的时间间隔，结果这个函数光排队都不止10ms也是有可能发生的...所以可以的话还是用新的`requestAnimationFrame`函数处理比较好，性能也会好一些，不会占用浏览器太多资源。然后就是动画实际上就是一帧一帧画内容而已，一般情况下整张画布重新画是最方便也是最常用的方法，当然如果画面变化不大，为了提升性能也可以只画有变化的地方。

至于打光渲染什么的就没有过多了解了，只是知道个大概实现原理，等需要的时候再学也完全来得及（手上有本《WebGL编程指南》这种书方便多了，很多东西网上真的不太好找...）

参考部分：
[初识 WebGL ：渲染管线](https://zhuanlan.zhihu.com/p/438742595)