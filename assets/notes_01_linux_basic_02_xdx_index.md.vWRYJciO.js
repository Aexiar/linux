import{_ as s,c as i,o as e,U as l}from"./chunks/framework.Ub3c7c8p.js";const a="/linux/assets/1.oo0jjXjQ.png",d="/linux/assets/2.26qHZmdP.png",n="/linux/assets/3.fRYHbGeP.png",t="/linux/assets/4.GD1gVKjj.png",o="/linux/assets/5.FftLfZIh.png",c="/linux/assets/2.sAZRHJTX.png",p="/linux/assets/7.VorMIGSX.gif",h="/linux/assets/8.P4Vc2DHO.gif",r="/linux/assets/9.IgY_8N-q.gif",u="/linux/assets/10.PWXIFX2i.gif",k="/linux/assets/11.d4BzN4-C.png",g="/linux/assets/12.ngl7Lyvy.png",b="/linux/assets/13.q89vCu4O.png",m="/linux/assets/14.0svOWTwc.gif",F="/linux/assets/15.HTwJC23R.gif",v="/linux/assets/16.uRjXFW8x.png",C="/linux/assets/17.PI2J41A-.png",y="/linux/assets/18.BqAxNJIr.png",_="/linux/assets/19.yJtkzURW.png",x="/linux/assets/20.zpSaIpws.png",B="/linux/assets/21.hSHcz3oa.png",P="/linux/assets/22.sAeCeh5j.gif",q="/linux/assets/23.KXQHvCj8.gif",w="/linux/assets/24.lKYsajUH.gif",E="/linux/assets/25.use7c_Zq.gif",f="/linux/assets/26.PG-K7afF.gif",I="/linux/assets/27.QMzq00Vv.gif",L="/linux/assets/28.O2Q98Cur.gif",A="/linux/assets/29.8-Ij0Q7U.gif",J=JSON.parse('{"title":"第一章：扫清概念（⭐）","description":"","frontmatter":{},"headers":[],"relativePath":"notes/01_linux_basic/02_xdx/index.md","filePath":"notes/01_linux_basic/02_xdx/index.md","lastUpdated":1706442021000}'),T={name:"notes/01_linux_basic/02_xdx/index.md"},D=l('<h1 id="第一章-扫清概念-⭐" tabindex="-1">第一章：扫清概念（⭐） <a class="header-anchor" href="#第一章-扫清概念-⭐" aria-label="Permalink to &quot;第一章：扫清概念（⭐）&quot;">​</a></h1><h2 id="_1-1-ip-地址" tabindex="-1">1.1 IP 地址 <a class="header-anchor" href="#_1-1-ip-地址" aria-label="Permalink to &quot;1.1 IP 地址&quot;">​</a></h2><h3 id="_1-1-1-概述" tabindex="-1">1.1.1 概述 <a class="header-anchor" href="#_1-1-1-概述" aria-label="Permalink to &quot;1.1.1 概述&quot;">​</a></h3><ul><li>在早期，没有<code>即时通讯工具</code>的情况下，如：微信、QQ 等，人们都是使用<code>信件</code>来进行交流的，如下所示：</li></ul><p><img src="'+a+'" alt="image-20240120051139665"></p><blockquote><p>注意⚠️：从上图中，我们可以得知，如果要将信件发送到对方，至少需要知道对方的姓名和<code>家庭地址</code>等。</p></blockquote><ul><li>同理，在信息交流发达的今天，很多设备，如：手机、电脑、平板、手表等，都会接入到互联网上，如下所示：</li></ul><p><img src="'+d+'" alt="2021年工业互联网行业发展研究报告- 21经济网"></p><ul><li>针对互联网上的各种设备，我们如何定位？就是给它们分配一个唯一的 <code>IP</code> 地址；类似于写信的时候，需要填写的<code>家庭地址</code>。</li></ul><blockquote><p>维基百科：</p><ul><li><strong><code>IP地址</code></strong>（英语：IP Address，全称Internet Protocol Address），又译为<strong>网际协议地址</strong>、<strong>互联网协议地址</strong>。是 <code>互联网协议</code> 中用于标识<code>发送</code>或<code>接收</code>数据报的设备的<code>一串数字</code>。</li><li>常见的 IP 地址分为 <code>IPV4</code> 和 <code>IPV6</code>： <ul><li><code>IPV4</code> 为 <code>32</code> 位，通常使用<code>四</code>组<code>十</code>进制数字表示，以点（<code>.</code>）分隔，如：<code>172.16.254.1</code>。</li><li><code>IPV6</code> 为 <code>128</code> 位，通常使用<code>八</code>组<code>十六</code>进制数字表示，以冒号（<code>:</code>）分隔，如：<code>2001:db8:0:1234:0:567:8:1</code>。</li></ul></li></ul></blockquote><h3 id="_1-1-2-ip-地址的分类" tabindex="-1">1.1.2 IP 地址的分类 <a class="header-anchor" href="#_1-1-2-ip-地址的分类" aria-label="Permalink to &quot;1.1.2 IP 地址的分类&quot;">​</a></h3><ul><li>IP 地址可以根据<code>其分配和使用的范围</code>来划分为： <ul><li>① <code>私网 IP（内网 IP）</code></li><li>② <code>公网 IP</code>。</li></ul></li><li>它们之间的区别如下：</li></ul><table><thead><tr><th>IP 分类</th><th>特点</th><th>备注</th></tr></thead><tbody><tr><td>私网 IP（内网 IP）</td><td>私网 IP 地址是在私有网络内部使用的 IP 地址，用于内部通信和资源共享。</td><td>通常由网络设备分配，如：路由器等，一般不固定。</td></tr><tr><td>公网 IP</td><td>公网 IP 地址是可以在公共互联网上进行通信的 IP 地址。</td><td>公网 IP 地址是全球唯一的，可以被其他网络和设备访问到，并且需要购买！！！</td></tr></tbody></table><blockquote><p>注意⚠️：常见的私网 IP 有：<code>10.0.0.0 ~ 10.255.255.255</code>、<code>172.16.0.0 ~ 172.31.255.255</code>、<code>192.168.0.0 ~ 192.168.255.255</code>。</p></blockquote><h2 id="_1-2-端口" tabindex="-1">1.2 端口 <a class="header-anchor" href="#_1-2-端口" aria-label="Permalink to &quot;1.2 端口&quot;">​</a></h2><ul><li>端口（port）是计算机网络中用于<code>标识</code>不同<code>应用程序</code>或<code>服务</code>的<code>数字标识符</code>。在 <code>TCP/IP</code> 协议中，端口号是一个 16 位的数字，范围从 <code>0 ~ 65535</code> 。</li></ul><blockquote><p>注意⚠️：为什么说端口号是一个 16 位的数字？那是因为计算机底层是 2 进制，而 2^16 = 65535 。</p></blockquote><ul><li>端口的作用：是在一个主机上<code>同时</code>运行<code>多个</code>网络应用程序时，通过<code>端口号</code>来<code>区分</code>和<code>定位</code>不同的<code>应用程序</code>或<code>服务</code>。每个应用程序或服务都可以<code>绑定</code>到一个<code>特定</code>的端口号上，以便其他计算机或设备可以通过该<code>端口</code>与该<code>应用程序</code>进行<code>通信</code>。</li></ul><p><img src="'+n+'" alt="image-20240119150435309"></p><ul><li>常见的端口号是一些预留的标准端口，如：<code>HTTP</code> 的端口是 <code>80</code> ，<code>HTTPS</code> 的端口是 <code>443</code>，<code>FTP</code> 的端口是 <code>21</code>，<code>SMTP</code> 的端口是 <code>25</code> 等。</li><li>当然，操作系统在启动之后，为了完成某些功能，也会启动一些应用程序，而这些应用程序会占用一部分端口，其范围是 <code>0 ~ 1023</code> ，如： <ul><li>20 和 21：用于FTP（文件传输协议）数据和控制连接。</li><li><code>22</code>：用于 SSH（安全外壳协议）远程登录和安全文件传输。</li><li>25：用于SMTP（简单邮件传输协议）发送电子邮件。</li><li><code>80</code>：用于 HTTP（超文本传输协议）网页浏览。</li><li><code>443</code>：用于 HTTPS（安全HTTP）加密的网页浏览。</li><li>110：用于 POP3（邮局协议版本3）接收电子邮件。</li><li>143：用于 IMAP（Internet邮件访问协议）接收电子邮件。</li></ul></li></ul><blockquote><p>注意⚠️：上述的端口是通常大家约定的，并不是绝对固定的。某些情况下，操作系统可能使用其他的端口号或动态分配端口号来满足特定的需求。</p></blockquote><ul><li>总而言之，通过<code>端口号</code>，计算机可以将传入的数据包或连接路由到正确的<code>应用程序</code>或<code>服务</code>，实现<code>网络通信</code>和<code>数据交换</code>。端口号在网络编程和网络安全中起着重要的作用，帮助实现应用程序之间的通信和数据传输。</li></ul><h2 id="_1-3-协议" tabindex="-1">1.3 协议 <a class="header-anchor" href="#_1-3-协议" aria-label="Permalink to &quot;1.3 协议&quot;">​</a></h2><ul><li>只有 <code>IP</code> 地址和<code>端口</code>还不行，<code>客户端</code>上的<code>应用程序</code>和<code>服务器</code>的<code>应用程序</code>还必须借助<code>通信协议</code>来进行<code>通信</code>。</li></ul><p><img src="'+t+'" alt="image-20240119151553963"></p><ul><li>在现实生活中，人和人之间的交流必须借助于<code>某种语言</code>：</li></ul><p><img src="'+o+'" alt="image-20240119164006702"></p><ul><li>其实，语言就是一种协议，一种规定，一种标准，一种大家都必须遵守的规则；那么，通信协议是什么？</li></ul><blockquote><p>维基百科：</p><ul><li><code>通信协议</code>是在任何物理介质中允许<code>两个</code>或<code>多个</code>在<code>传输系统</code>中的<code>终端</code>之间传播<code>信息</code>的系统<code>标准</code>，也是指计算机通信或网络设备的共同语言。</li><li>通信协议定义了<code>通信</code> 中的<code>语法学</code>、<code>语义学</code>和<code>同步</code>规则以及可能存在的<code>错误检测与纠正</code>。</li><li>通信协议在<code>硬件</code>、<code>软件</code>或<code>两者之间</code>皆可实现。</li></ul></blockquote><h1 id="第二章-远程连接排错-⭐" tabindex="-1">第二章：远程连接排错（⭐） <a class="header-anchor" href="#第二章-远程连接排错-⭐" aria-label="Permalink to &quot;第二章：远程连接排错（⭐）&quot;">​</a></h1><h2 id="_2-1-概述" tabindex="-1">2.1 概述 <a class="header-anchor" href="#_2-1-概述" aria-label="Permalink to &quot;2.1 概述&quot;">​</a></h2><ul><li><p>远程连接排错，主要分为三步：</p><ul><li>① 确认网络是否通畅。</li><li>② 确认防火墙、SELinux 等。</li><li>③ 确认端口是否开放。</li></ul></li><li><p>目前的架构是这样的：</p></li></ul><p><img src="'+c+'" alt="image-20240118142922421"></p><ul><li>所以，我们是在 <code>win</code> 系统中来进行<code>远程连接</code>排错的。</li></ul><h2 id="_2-2-确认网络是否通畅" tabindex="-1">2.2 确认网络是否通畅 <a class="header-anchor" href="#_2-2-确认网络是否通畅" aria-label="Permalink to &quot;2.2 确认网络是否通畅&quot;">​</a></h2><ul><li>命令：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ping</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 域名</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IP地址</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>示例：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ping</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> www.baidu.com</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+p+'" alt=""></p><ul><li>示例：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ping</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.10.100</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+h+'" alt=""></p><h2 id="_2-3-确认防火墙、selinux" tabindex="-1">2.3 确认防火墙、SELinux <a class="header-anchor" href="#_2-3-确认防火墙、selinux" aria-label="Permalink to &quot;2.3 确认防火墙、SELinux&quot;">​</a></h2><ul><li><p>目前而言，防火墙和 SELinux 不是问题，所以暂时不演示。</p></li><li><p>示例：略。</p></li></ul><h2 id="_2-4-确认端口是否开放" tabindex="-1">2.4 确认端口是否开放 <a class="header-anchor" href="#_2-4-确认端口是否开放" aria-label="Permalink to &quot;2.4 确认端口是否开放&quot;">​</a></h2><ul><li>命令：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">telnet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 域名</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IP地址</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 端口</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>示例：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">telnet</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.68.10</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 22</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+r+'" alt=""></p><ul><li>示例：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">telnet</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 192.168</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.68.10</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 12345</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+u+'" alt=""></p><h1 id="第三章-linux-基础-⭐" tabindex="-1">第三章：Linux 基础（⭐） <a class="header-anchor" href="#第三章-linux-基础-⭐" aria-label="Permalink to &quot;第三章：Linux 基础（⭐）&quot;">​</a></h1><h2 id="_3-1-linux-命令提示符" tabindex="-1">3.1 Linux 命令提示符 <a class="header-anchor" href="#_3-1-linux-命令提示符" aria-label="Permalink to &quot;3.1 Linux 命令提示符&quot;">​</a></h2><ul><li>当通过远程工具，如：xshell 等，连接到远程 Linux 的时候，就会出现<code>命令提示符</code>；如下所示：</li></ul><p><img src="'+k+'" alt="image-20240119155232398"></p><ul><li>我们可以将其分解一下：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[root@almalinux9 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]#</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><p>解释：</p><ul><li><code>root</code> 表示<code>当前登录到 Linux 中的用户</code>，即<code>用户名</code>。</li><li><code>@</code> 没有特殊含义，仅仅用来表示<code>分隔</code>的意思。</li><li><code>almalinux9</code> 表示<code>主机的名称</code>，默认是 <code>localhost</code> 。</li><li><code>~</code> 表示<code>当前所在路径（目录）</code>，其中 <code>~</code> 表示<code>家目录</code>。</li><li><code>#</code> 表示<code>用户身份</code>；如果是<code>管理员</code>，就是 <code>#</code> ；如果是<code>普通用户</code>，就是 <code>$</code>。</li></ul></li><li><p>其对应的图示如下：</p></li></ul><p><img src="'+g+'" alt="image-20240119161036350"></p><h2 id="_3-2-linux-命令格式" tabindex="-1">3.2 Linux 命令格式 <a class="header-anchor" href="#_3-2-linux-命令格式" aria-label="Permalink to &quot;3.2 Linux 命令格式&quot;">​</a></h2><ul><li>Linux 命令格式：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">命令（command）</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 选项</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">参数</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">arguments/parameter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>其命令格式说明：</li></ul><table><thead><tr><th>类别</th><th>说明</th><th>备注</th></tr></thead><tbody><tr><td>命令</td><td>Linux 中通过<code>命令</code>控制整个操作系统。</td><td>通常而言，命令是单词或单词缩写。</td></tr><tr><td>选项</td><td>就是<code>功能</code>，不同的<code>选项</code>对应不同的<code>功能</code>。</td><td>通常而言，选项会使用加上 <code>-</code> 或 <code>--</code> 前缀。</td></tr><tr><td>参数</td><td>命令处理的<code>目标</code></td><td></td></tr></tbody></table><ul><li>其理解如下：</li></ul><p><img src="'+b+'" alt="image-20240119161956688"></p><blockquote><p>注意⚠️：</p><ul><li>在实际交流的时候，我们有的时候，会模糊<code>选项</code>和<code>参数</code>的区别，统一使用<code>参数</code>来<code>代替</code>。</li><li>并不是所有的命令<code>都遵循</code>上述的格式，有些命令就只有命令，而没有选项或参数，如：<code>pwd</code> 等。</li></ul></blockquote><h2 id="_3-3-linux-目录-vs-windows-目录" tabindex="-1">3.3 Linux 目录 VS Windows 目录 <a class="header-anchor" href="#_3-3-linux-目录-vs-windows-目录" aria-label="Permalink to &quot;3.3 Linux 目录 VS Windows 目录&quot;">​</a></h2><ul><li><p>Linux 目录 和 Windows 目录有一些区别：</p><ul><li>① 分隔符： <ul><li>在 Linux 中，目录路径使用正斜杠（<code>/</code>）作为分隔符，例如：<code>/home/user/documents</code>。</li><li>在 Windows 中，目录路径使用反斜杠（<code>\\</code>）作为分隔符，例如：<code>C:\\Users\\user\\Documents</code>。</li></ul></li><li>② 根目录： <ul><li>在 Linux 中，根目录表示整个文件系统的起点，用 <code>/</code> 表示。</li><li>在 Windows 中，每个驱动器都有自己的根目录，例如：<code>C:\\</code>表示 <code>C 驱动器</code>的<code>根目录</code>。</li></ul></li><li>③ 目录命名规则： <ul><li>Linux 对目录和文件的命名是<code>区分大小写</code>的，例如：<code>Documents</code> 和 <code>documents</code> 是<code>不同</code>的目录。</li><li>Windows 对目录和文件的命名是<code>不区分大小写</code>的，例如：<code>Documents</code> 和 <code>documents</code> 被视为<code>相同</code>的目录。</li></ul></li><li>④ 特殊目录： <ul><li>Linux 有一些特殊的目录，如：<code>/bin</code>、<code>/etc</code>、<code>/home</code>、<code>/tmp</code> 等，用于存放系统文件、配置文件、用户主目录和临时文件等。</li><li>Windows 也有一些特殊的目录，如：<code>Program Files</code>、<code>Windows</code>、<code>Users</code> 等，用于存放程序文件、系统文件和用户文件等。</li></ul></li></ul></li><li><p>总体而言，Linux 的目录结构<code>更加统一和规范</code>，而 Windows 的目录结构则<code>更加分散和多样化</code>。</p></li></ul><h1 id="第四章-linux-入门" tabindex="-1">第四章：Linux 入门 <a class="header-anchor" href="#第四章-linux-入门" aria-label="Permalink to &quot;第四章：Linux 入门&quot;">​</a></h1><h2 id="_4-1-查询帮助" tabindex="-1">4.1 查询帮助 <a class="header-anchor" href="#_4-1-查询帮助" aria-label="Permalink to &quot;4.1 查询帮助&quot;">​</a></h2><ul><li>有的时候，我们不知道，一些命令的常规用法，此时就需要查询帮助了。</li><li>总体而言，Linux 提供了如下的两种常用方式，来帮助我们对命令进行查询：</li></ul><table><thead><tr><th>命令帮助方式</th><th>备注</th></tr></thead><tbody><tr><td><code>man 命令</code></td><td>会显示命令的详细信息。使用 <code>q</code> 退出。</td></tr><tr><td><code>命令 --help</code></td><td>会显示命令的精简信息。</td></tr></tbody></table><ul><li><p>当然，也可以使用<a href="https://wangchujiang.com/linux-command/" target="_blank" rel="noreferrer">命令行帮助网站</a>。</p></li><li><p>示例：</p></li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">man</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cd</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+m+'" alt=""></p><ul><li>示例：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+F+'" alt=""></p><h2 id="_4-2-linux-命令行快捷键-⭐" tabindex="-1">4.2 Linux 命令行快捷键（⭐） <a class="header-anchor" href="#_4-2-linux-命令行快捷键-⭐" aria-label="Permalink to &quot;4.2 Linux 命令行快捷键（⭐）&quot;">​</a></h2><h3 id="_4-2-1-概述" tabindex="-1">4.2.1 概述 <a class="header-anchor" href="#_4-2-1-概述" aria-label="Permalink to &quot;4.2.1 概述&quot;">​</a></h3><ul><li>主要<code>目的</code>就是为了提高在命令行中<code>操作</code>的效率。</li><li>光标移动到<code>行首</code>：<code>ctrl + a</code> ；其中 <code>a</code> 是 <code>ahead</code> 的缩写。</li></ul><p><img src="'+v+'" alt="image-20240120052713240"></p><ul><li>光标移动到<code>行尾</code>：<code>ctrl + e</code> ；其中，<code>e</code> 是 <code>end</code> 的缩写。</li></ul><p><img src="'+C+'" alt="image-20240120053407526"></p><ul><li>将<code>光标所在位置</code>到<code>行首</code>的内容<code>剪切（删除）</code>：<code>ctrl + u</code> ；其中，u 来源于 Unix，是 kill-line 的意思，即杀死整行。</li></ul><p><img src="'+y+'" alt="image-20240120055132541"></p><ul><li>将<code>光标所在位置</code>到<code>行尾</code>的内容<code>剪切（删除）</code>：<code>ctrl + k</code> ；其中，k 来源于 Unix，是 kill-line 的意思，即杀死整行。</li></ul><p><img src="'+_+'" alt="image-20240120110630113"></p><ul><li>清屏：<code>ctrl + l</code>；相当于 <code>clear</code> 命令。</li></ul><p><img src="'+x+'" alt="image-20240120110801878"></p><ul><li><code>取消</code>当前的命令：<code>ctrl + c</code> ；其中，<code>c</code> 是 <code>cancel</code> 的缩写。</li></ul><p><img src="'+B+'" alt="image-20240120111056820"></p><h3 id="_4-2-2-案例" tabindex="-1">4.2.2 案例 <a class="header-anchor" href="#_4-2-2-案例" aria-label="Permalink to &quot;4.2.2 案例&quot;">​</a></h3><ul><li>示例：光标移动到<code>行首</code></li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ctrl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+P+'" alt=""></p><ul><li>示例：光标移动到<code>行尾</code></li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ctrl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> e</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+q+'" alt=""></p><ul><li>示例：将<code>光标所在位置</code>到<code>行首</code>的内容<code>剪切（删除）</code></li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ctrl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> u</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+w+'" alt=""></p><ul><li>示例：将<code>光标所在位置</code>到<code>行尾</code>的内容<code>剪切（删除）</code></li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ctrl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> k</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+E+'" alt=""></p><ul><li>示例：清屏</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ctrl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> l</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+f+'" alt=""></p><ul><li>示例：<code>取消</code>当前的命令</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ctrl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> c</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+I+`" alt=""></p><h3 id="_4-2-3-坑" tabindex="-1">4.2.3 坑 <a class="header-anchor" href="#_4-2-3-坑" aria-label="Permalink to &quot;4.2.3 坑&quot;">​</a></h3><ul><li>有些快捷键，在 Linux 中和 Windows 中，不是很一样，需要特别小心：</li></ul><table><thead><tr><th>快捷键</th><th>Linux</th><th>Windows</th></tr></thead><tbody><tr><td><code>ctrl + s</code></td><td>锁屏</td><td>保存</td></tr><tr><td><code>ctrl + q</code></td><td>解锁（解除锁屏）</td><td></td></tr><tr><td><code>ctrl + z</code></td><td>让当前正在运行的命令，在后台挂起</td><td>撤销</td></tr></tbody></table><blockquote><p>注意⚠️：这些<code>坑</code>快捷键并不需要记忆，只需要遇到的时候，能想起并解决即可。</p></blockquote><h2 id="_4-3-linux-关机和重启" tabindex="-1">4.3 Linux 关机和重启 <a class="header-anchor" href="#_4-3-linux-关机和重启" aria-label="Permalink to &quot;4.3 Linux 关机和重启&quot;">​</a></h2><h3 id="_4-3-1-概述" tabindex="-1">4.3.1 概述 <a class="header-anchor" href="#_4-3-1-概述" aria-label="Permalink to &quot;4.3.1 概述&quot;">​</a></h3><ul><li>Linux 并不总是需要关机和重启的，Linux 追求的是 7 * 24 小时不间断的服务。</li><li>但是，某些情况下，我们还是需要对 Linux 进行关机和重启，所以需要<code>知道</code>对应的命令。</li></ul><h3 id="_4-3-2-关机" tabindex="-1">4.3.2 关机 <a class="header-anchor" href="#_4-3-2-关机" aria-label="Permalink to &quot;4.3.2 关机&quot;">​</a></h3><ul><li>立刻关机：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">shutdown</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> now</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>延迟关机：单位是<code>分钟</code></li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">shutdown</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>取消关机：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">shutdown</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>示例：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 延迟关机</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">shutdown</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 取消关机</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">shutdown</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 立刻关机</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">shutdown</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> now</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><img src="`+L+`" alt=""></p><h3 id="_4-3-3-重启" tabindex="-1">4.3.3 重启 <a class="header-anchor" href="#_4-3-3-重启" aria-label="Permalink to &quot;4.3.3 重启&quot;">​</a></h3><ul><li>立刻重启：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">shutdown</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> now</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reboot</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>延迟重启：单位是<code>分钟</code></li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">shutdown</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>示例：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 延迟重启</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">shutdown</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 取消重启</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">shutdown</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 立刻重启</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reboot</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><img src="`+A+'" alt=""></p>',141),S=[D];function W(H,V,j,U,Q,X){return e(),i("div",null,S)}const N=s(T,[["render",W]]);export{J as __pageData,N as default};