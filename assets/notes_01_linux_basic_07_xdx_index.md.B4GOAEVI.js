import{_ as s,c as i,o as a,a6 as e}from"./chunks/framework.Ngk3QDFU.js";const l="/linux/assets/1.k5ch3m_8.png",n="/linux/assets/2.6EUWB0my.png",t="/linux/assets/3.DdEUhGvS.png",p="/linux/assets/4.B5M8E6Li.png",h="/linux/assets/5.DMnIk8it.png",d="/linux/assets/6.BpQjaP6k.gif",r="/linux/assets/7.CjDlY1rV.gif",c="/linux/assets/8.ENd9owRc.gif",k="/linux/assets/9.Bku4z8hK.gif",o="/linux/assets/10.DeqJtSXG.gif",u="/linux/assets/11.D_G5OFq9.gif",g="/linux/assets/12.BOxcttG7.gif",b="/linux/assets/13.DJtTTvPa.gif",m="/linux/assets/14.DY7VreC1.gif",F="/linux/assets/15.3YRBunpk.gif",v="/linux/assets/16.1WMkUy0f.gif",y="/linux/assets/17.DiZwxtbX.gif",C="/linux/assets/18.DKeA6uXL.gif",B="/linux/assets/19.BAgOCwMU.gif",E="/linux/assets/20.BePfsxat.gif",_="/linux/assets/21.OyMGygNV.gif",x="/linux/assets/22.BUzBYVek.gif",D="/linux/assets/23.C96a7IsA.gif",L=JSON.parse('{"title":"第一章：标准输入输出（标准 IO）","description":"","frontmatter":{},"headers":[],"relativePath":"notes/01_linux_basic/07_xdx/index.md","filePath":"notes/01_linux_basic/07_xdx/index.md","lastUpdated":1710148007000}'),q={name:"notes/01_linux_basic/07_xdx/index.md"},A=e('<h1 id="第一章-标准输入输出-标准-io" tabindex="-1">第一章：标准输入输出（标准 IO） <a class="header-anchor" href="#第一章-标准输入输出-标准-io" aria-label="Permalink to &quot;第一章：标准输入输出（标准 IO）&quot;">​</a></h1><h2 id="_1-1-概述" tabindex="-1">1.1 概述 <a class="header-anchor" href="#_1-1-概述" aria-label="Permalink to &quot;1.1 概述&quot;">​</a></h2><ul><li>程序，通常指的是一系列指令的集合，这些指令是为了完成特定的任务或解决特定的问题而编写的。在计算机科学中，程序是软件的一部分，它包含了计算机执行的一系列操作，这些操作可以是数据处理、信息检索、自动化任务等。程序通常用一种或多种编程语言编写，然后通过编译或解释的方式转换成计算机能够执行的形式。</li><li>总之，<code>程序</code> = <code>指令</code> + <code>数据</code>；其中，对于程序来说，可以读入数据（input），也可以由程序处理完之后，形成输出数据（output），即：</li></ul><p><img src="'+l+'" alt="image-20240306153639360"></p><blockquote><p>注意⚠️：</p><ul><li>① 在冯·诺依曼体系结构中的 5 大部件中包含了：输入设备和输出设备；</li><li>② 输入设备和输出设备在现代操作系统中是由键盘和显示器（终端）来充当的，所以标准输入一般指的是键盘，而标准输出一般指的是显示器（终端）。</li></ul></blockquote><ul><li>在 Linux 中，一切皆文件，输入设备和输出设备也是文件；并且，当打开一个文件、目录、管道、套接字、……的时候，系统会为其分配一个<code>文件描述符（File Descriptor）</code>，这些描述符在进程的生命周期内保持有效，如：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tail</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/log/secure</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+n+'" alt="image-20240306155244777"></p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ll</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /proc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> `</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pidof</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tail`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+t+'" alt="image-20240306155315648"></p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ll</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /proc/7355/fd</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+p+'" alt="image-20240306155401883"></p><ul><li>我们会发现有 <code>0</code>、<code>1</code>、<code>2</code>、<code>3</code>、<code>4</code> 等这样的文件描述符；其中，<code>0</code> 、<code>1</code> 、<code>2</code> 是 Linux 中的<code>标准文件描述符</code>，即： <ul><li><code>0</code> (stdin)：标准输入文件描述符，通常用于读取输入，默认接收键盘的输入。</li><li><code>1</code> (stdout)：标准输出文件描述符，通常用于输出数据到终端，默认输出到终端。</li><li><code>2</code> (stderr)：标准错误文件描述符，用于输出错误信息，默认输出到终端。</li></ul></li></ul><p><img src="'+h+'" alt="image-20240207081941447"></p><ul><li>当然，我们也可以通过下面的命令来证明：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ll</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+d+'" alt=""></p><h2 id="_1-2-io-重定向" tabindex="-1">1.2 IO 重定向 <a class="header-anchor" href="#_1-2-io-重定向" aria-label="Permalink to &quot;1.2 IO 重定向&quot;">​</a></h2><ul><li>所谓的 IO 重定向就是改变标准输入（stdin）、标准输出（stdout）和标准错误（stderr）的默认流向；在 Linux 中，很多命令都有标准输出，如：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hostname</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 默认显示到终端</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+r+'" alt=""></p><ul><li>也可以输出到其它的终端，如：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hostname</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/pts/1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+c+'" alt=""></p><ul><li>甚至，可以输出到文件中，如：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hostname</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hostname.txt</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+k+`" alt=""></p><ul><li>其实，在 Linux 中有很多 IO 重定向语法：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将 inputfile 的内容作为 command 的标准输入。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">command</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> inputfile</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将 command 的标准输出写入 outputfile</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">command</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> outputfile</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将 command 的标准输出追加到 outputfile</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">command</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> outputfile</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将 command 的标准错误输出到 errorfile</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">command</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 2&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> errorfile</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将 command 的标准输出和标准错误都写入 outputfile</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> outputfile</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>需要注意的是，上面的标准输出语法其实是一种简写，即：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将 command 的标准输出写入 outputfile，省略写法</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">command</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> outputfile</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将 command 的标准输出追加到 outputfile，省略写法</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">command</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> outputfile</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>和下面的写法是等价的，即：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将 command 的标准输出写入 outputfile</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">command</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 1&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> outputfile</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将 command 的标准输出追加到 outputfile</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">command</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 1&gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> outputfile</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>示例：标准输出重定向到指定的文件（会产生覆盖现象）</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">date</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> abc.log</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+o+'" alt=""></p><ul><li>示例：标准输出追加重定向到指定文件</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/passwd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> abc.log</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+u+'" alt=""></p><ul><li>示例：标准错误重定向到指定文件（会产生覆盖现象）</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">abc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 2&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> abc.log</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+g+'" alt=""></p><ul><li>示例：标准输出和标准错误追加重定向到指定文件</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/passwd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> abc.log</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">abc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> abc.log</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+b+'" alt=""></p><ul><li>示例：标准输出追加重定向到指定文件，标准错误追加重定向到另一个文件</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ll</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/passwd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/xxx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a.log</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 2&gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> b.log</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+m+'" alt=""></p><ul><li>示例：标准输出和标准错误重定向到指定文件</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ll</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/passwd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/xxx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> abc.log</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 2&gt;&amp;1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+F+`" alt=""></p><ul><li>示例：标准输入重定向到文件</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &lt;&lt;EOF 表示多行重定向，表示从键盘将多行重定向到 stdin ，直到 EOF 位置的所有文本都发送给 stdin ，专业称为就地文本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.txt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">2</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">3</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">4</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">5</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xargs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.txt</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+v+'" alt=""></p><h1 id="第二章-管道" tabindex="-1">第二章：管道 <a class="header-anchor" href="#第二章-管道" aria-label="Permalink to &quot;第二章：管道&quot;">​</a></h1><h2 id="_2-1-概述" tabindex="-1">2.1 概述 <a class="header-anchor" href="#_2-1-概述" aria-label="Permalink to &quot;2.1 概述&quot;">​</a></h2><ul><li>管道（<code>|</code>）可以用来连接命令，如：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">命令1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 命令2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 命令3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>管道的功能：将 <code>命令1</code> 的 <code>stdout</code> 发送给 <code>命令2</code> 的 <code>stdin</code>，将 <code>命令2</code> 的 <code>stdout</code> 发送给 <code>命令3</code> 的 <code>stdin</code> 。</li></ul><blockquote><p>注意⚠️：</p><ul><li>① <code>stderr</code> 默认是不能通过管道转发的，可以利用 <code>2&gt;&amp;1</code> 或 <code>|&amp;</code> 实现。</li><li>② 最后一个命令会在当前 shell 进程的子 shell 进程中完成。</li></ul></blockquote><h2 id="_2-2-案例" tabindex="-1">2.2 案例 <a class="header-anchor" href="#_2-2-案例" aria-label="Permalink to &quot;2.2 案例&quot;">​</a></h2><ul><li><p>需求：将 seq 产生的数字由列转为行。</p></li><li><p>示例：通过中间文件来实现</p></li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">seq</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> abc.log</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;\\n&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39; &#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> abc.log</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+y+'" alt=""></p><ul><li>示例：通过管道实现</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">seq</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;\\n&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39; &#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+C+'" alt=""></p><h2 id="_2-3-tee" tabindex="-1">2.3 tee <a class="header-anchor" href="#_2-3-tee" aria-label="Permalink to &quot;2.3 tee&quot;">​</a></h2><ul><li>命令：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">命令1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tee</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [-a] 文件名 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 命令2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>功能：将 <code>命令1</code> 的 <code>stdout</code> 通过 <code>tee</code> 命令的 <code>-a</code> 选项写入到文件中，并作为 <code>命令2</code> 的 <code>stdin</code>。</li></ul><blockquote><p>注意⚠️： tee 命令类似于英文中的 T ，表示可以将标准输入流向到两个方向：标准输出（终端）和文件（一个或多个文件）。</p></blockquote><ul><li><p>应用场景：</p><ul><li>① 保存不同阶段的输出。</li><li>② 复杂管道的故障排除。</li><li>③ 同时查看和记录输出。</li></ul></li><li><p>示例：tee 命令的原始功能</p></li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tee</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+B+'" alt=""></p><ul><li>示例：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> abc.log</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+E+'" alt=""></p><ul><li>示例：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tee</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> abc.log</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+_+'" alt=""></p><ul><li>示例：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ping</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> baidu.com</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> output.log</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+x+`" alt=""></p><ul><li>示例：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -pv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/docker</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/docker/daemon.json</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;exec-opts&quot;: [&quot;native.cgroupdriver=systemd&quot;],	</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;registry-mirrors&quot;: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;https://du3ia00u.mirror.aliyuncs.com&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;https://docker.m.daocloud.io&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;https://hub-mirror.c.163.com&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;https://mirror.baidubce.com&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;https://docker.nju.edu.cn&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;https://docker.mirrors.sjtug.sjtu.edu.cn&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;live-restore&quot;: true,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;log-driver&quot;:&quot;json-file&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;log-opts&quot;: {&quot;max-size&quot;:&quot;500m&quot;, &quot;max-file&quot;:&quot;3&quot;},</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;max-concurrent-downloads&quot;: 10,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;max-concurrent-uploads&quot;: 5,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;storage-driver&quot;: &quot;overlay2&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><img src="`+D+'" alt=""></p>',97),f=[A];function w(O,P,I,T,j,S){return a(),i("div",null,f)}const U=s(q,[["render",w]]);export{L as __pageData,U as default};