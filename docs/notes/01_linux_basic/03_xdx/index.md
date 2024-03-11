# 第一章：提问的艺术

## 1.1 提问的艺术

* 提问的艺术是指能够提出恰当的问题，以获得所需的信息、启发他人思考或促进对话。提问的艺术不仅在人际沟通中很重要，在学习、工作和研究等领域也发挥着重要作用。
* 以下是一些提问的艺术技巧：
  - **明确你的目的。** 在提问之前，先想清楚你想要获得什么信息或达到什么目的。这将帮助你提出更具体和有针对性的问题。
  - **使用开放式问题。** 开放式问题以“什么”、“为什么”、“如何”等词语开头，可以鼓励对方提供更详细和深入的回答。
  - **避免使用封闭式问题。** 封闭式问题以“是”或“否”回答，限制了对方的回答范围，也可能让对方感到被审问。
  - **关注细节。** 提出具体和详细的问题，以获得更准确和有用的信息。
  - **使用积极的措辞。** 避免使用负面或带有攻击性的措辞，以免引起对方的反感或抵触情绪。
  - **注意你的语气和态度。** 提问时要保持礼貌和尊重，并注意你的语气和态度。
  - **学会倾听。** 在对方回答问题时，要认真倾听并给予反馈。这将表明你在乎他们的回答，并鼓励他们继续分享信息。
  - **不要害怕提问。** 提问是获取信息和学习新知识的重要方式。不要害怕提问，即使你认为你的问题很愚蠢或很基本。

* 其实，总结起来就下面的 4 个步骤（:star:）：

| 提问的艺术                                         | 备注                                                 |
| -------------------------------------------------- | ---------------------------------------------------- |
| ① `简单客气下，同时直奔主题。`                     | 直接描述自己遇到的问题是什么？                       |
| ② `如果着急，可以多找几个人，或者多找几个交流群。` | 广撒网捕鱼。                                         |
| ③ `如何让高手愿意帮助我们？`                       | 每次在问题解决后，总结并发给对方，无论对方是否回应。 |
| ④ `如何总结和描述问题？`                           | 使用 STAR 法则。                                     |

## 1.2 STAR 法则

* STAR 法则是一种用于描述工作经历或技能的常用方法，它可以帮助我们清晰、简洁地向面试官或其他人展示我们的能力和成就。
* `换言之，STAR 法则可以增强我们表达问题的能力，以及描述问题的逻辑性`。
* STAR 法则的四个字母分别代表：

| STAR 法则            | 备注                                                       |
| -------------------- | ---------------------------------------------------------- |
| **S**ituation (情境) | 描述我们所面临的情况或挑战。                               |
| **T**ask (任务)      | 解释我们所需要完成的任务或目标。                           |
| **A**ction (行动)    | 详细说明我们采取的具体行动或步骤来完成任务。               |
| **R**esult (结果)    | 描述我们所取得的成果或成就，以及我们从中学到的经验和教训。 |



* 示例：

```
情境：我正在使用 xshell7 远程连接 VMware 中的 Linux 系统，但是遇到了连接不上的问题。
```

```
任务：诊断并解决连接问题，以便能够成功远程连接到 Linux 系统。
```

```
行动（步骤）：
	① 我首先检查了我的网络连接，确保我的电脑和 VMware 都连接到了同一个网络。
	② 然后，我检查了 xshell7 的配置，确保我输入了正确的连接信息，包括主机名或 IP 地址、端口号和用户名/密码。
	③ 我还检查了 VMware 的防火墙设置，确保它允许来自 xshell7 的连接。
	④ 此外，我尝试使用不同的连接协议，例如：SSH 和 Telnet，以排除连接协议的问题。
	⑤ 我还尝试使用不同的端口号，以排除端口号冲突的问题。
```

```
结果：还是连接不上，问题到底在哪里？
```



# 第二章：Linux 核心目录

## 2.1 扫清概念

* `文件夹`和`目录`本质上是`相同`的，它们都是用于组织和存储文件的`容器`。
* 通常而言，`/` 被称为`斜线`，而 `\` 被称为`反斜线`。

![image-20240121185755549](./assets/1.png)

## 2.2 概述

* 在 Linux 中的目录都是从根目录（`/`）开始的，Linux 的目录类似于一颗`倒挂`的树，如：

```shell
tree -L 1 /
```

![image-20240121185008826](./assets/2.png)

* 其对应的`目录树状结构`，类似于：

![img](./assets/3.jpg)

> 注意⚠️：
>
> * ① `/` 是根目录。
> * ② `/etc/` 中的第一个 `/` 是根目录，`etc` 是目录名，第二个 `/` 表示是目录；并且，第二个 `/` 可以省略。
> * ③ 在实际交流的时候，我们可能会模糊这些概念，直接说 `/etc` 目录。

## 2.3 Linux 核心目录（:star:）

* Linux 的核心目录如下：

| 核心目录 | 备注                                                         |
| -------- | ------------------------------------------------------------ |
| `/etc/`  | 系统服务`配置文件`的目录，存放系统、服务、命令的配置；通常，yum 或 rpm 安装的软件的配置都在该目录中。 |
| `/home/` | 普通用户的家目录，如：`x` 用户的家目录就是 `/home/x/`。      |
| `/root/` | root 用户的家目录，如：`root` 用户的家目录就是 `/root/`。    |
| `/dev/`  | dev 是 device 的缩写，是设备文件目录，如：硬盘等。           |
| `/tmp/`  | tmp 是 temp 的缩写，表示临时目录，用来存储程序运行中的临时文件等。 |
| `/proc/` | proc 是 process（进程）的缩写，表示虚拟的目录，它是系统内存的映射，存放的是内存中的信息、进程、服务信息以及内核信息等。 |

> 注意⚠️：
>
> * ① 对于 Linux 中的目录，官方是有[标准](https://www.pathname.com/fhs/)（文件系统分层结构，LSB（Linux Standard Base））的。
> * ② 在实际工作中，通常所说的`文件名或目录大小写敏感`指的是`文件名或目录区分大小写`。
> * ③ 在实际工作中，可能会有人说：Linux 系统是区分大小写的，而 Win 系统是不区分大小写的；这种说法，某种意义上是错误的，因为不是操作系统区分大小写，而是操作系统下的`某些文件系统区分大小写`，比如：Linux 系统就可以支持 NTFS 文件系统，而 NTFS 文件系统就是不区分大小写的（win 默认的文件系统）。

## 2.4 Linux 中的目录

* 可以通过如下的命令，查看 Linux 中根目录下的一级子目录：

```shell
tree -L 1 /
```

![image-20240122042006229](./assets/4.png)

* 其对应的解释如下：

| Linux 中的目录          | 备注                                                         |
| ----------------------- | ------------------------------------------------------------ |
| `/bin` -> `/usr/bin/`   | bin 表示 binary ，即二进制文件命令，普通用户经常使用的命令，如：`ping` 命令。 |
| `/sbin`-> `/usr/sbin/`  | s 是 super（超级）的缩写，即 root 用户才可以使用的命令，如：`shutdown` 命令和 `reboot` 命令。 |
| `/boot/`                | 存放的是 Linux 系统启动和引导相关文件的目录，如：引导系统启动程序、系统内核镜像等。 |
| `/dev/`                 | dev 是 device 的缩写，是设备文件目录，如：`/dev/cpu`、`/dev/mem` 等。 |
| `/etc/`                 | 系统服务`配置文件`的目录，存放系统、服务、命令的配置。       |
| `/home/`                | 普通用户的家目录，如：`x` 用户的家目录就是 `/home/x/`。      |
| `/root/`                | root 用户的家目录，如：`root` 用户的家目录就是 `/root/`。    |
| `/lib` -> `/usr/lib/`   | lib 是 library 的缩写，即库文件（服务软件的依赖），其作用类似于 Windows 里的 DLL 文件；其中 `.so` 是软件运行需要的环境。 |
| `/sbin` -> `/usr/sbin/` | 作用和 lib 目录一样，只不过存放的是 64 位库文件（服务软件的依赖）。 |
| `/mnt/`                 | `mnt` 是 `mount tempoary` 的缩写，临时挂载点，临时的入口。   |
| `/opt/`                 | opt 是 optional(可选) 的缩写，第三方软件的安装位置，如：MySQL 等。 |
| `/proc/`                | proc 是 process（进程）的缩写，表示虚拟的目录（不占硬盘空间），它是系统内存的映射，存放的是内存中的信息、进程、服务信息以及内核信息等。 |
| `/sys/`                 | 和 /proc 类似，表示虚拟的目录（不占硬盘空间），用于展示系统硬件信息、管理硬件设备、调整内核参数、控制设备驱动程序以及进行电源管理等。<br>它是内核对象的映射，允许用户和程序以文件系统的方式访问和控制这些内核对象。 |
| `/tmp/`                 | tmp 是 temp 的缩写，表示临时目录，用来存储程序运行中的临时文件等。 |
| `/usr/`                 | usr 是 unix shared resources(共享资源) 的缩写，存放的是用户软件安装的位置，类似于 windows 下的 program files 目录。 |
| `/var/`                 | var 是 variable 的缩写，用来存放经常变化的数据，经常用来保存应用程序的日志。 |

## 2.5 路径表现形式（⭐）

* Linux 下的路径表示形式有如下的两种：

| Linux 路径表现形式 | 说明                                                         | 建议                             |
| ------------------ | ------------------------------------------------------------ | -------------------------------- |
| 绝对路径           | 从`根目录`开始的路径都是绝对路径，如：`/usr/local`、`/etc/hostname` 等。 | 初步学习阶段，推荐使用绝对路径。 |
| 相对路径           | 不是从根目录开始的路径就是相对路径，如：`etc/`、`etc/hostname`。 | 熟练以后，可以使用相对路径。     |

> 注意⚠️：路径中的 `.` 或 `./` 表示的是`当前目录`，而 `..` 和`../` 表示的是`上一层目录`。

* `相对路径`和`绝对路径`的理解：

  * 我目前所在的位置在`中国江苏省南京市六合区钟秀嘉园xxx栋xxx室`，其中`中国江苏省南京市六合区钟秀嘉园xxx栋xxx室`就是绝对路径。

  * 我目前所在的位置在`盛和家园`（中国江苏省南京市六合区盛和家园）附近的``钟秀嘉园xxx栋xxx室``，其中`盛和家园附近的钟秀嘉园xxx栋xxx室`就是相对路径。



* 示例：绝对路径

```shell
# /etc/NetworkManager/system-connections/eth0.nmconnection 就是绝对路径
cat /etc/NetworkManager/system-connections/eth0.nmconnection
```



* 示例：相对路径

```shell
cd /etc/NetworkManager/system-connections/
# eth0.nmconnection 就是相对路径
cat eth0.nmconnection
```



# 第三章：Linux 必会命令

## 3.1 cd 命令（⭐）

* 命令：

```shell
cd [目录]
```

* 对应的英文：change directory 。
* 作用：进入（切换）到指定的目录（可以是绝对路径或相对路径）中。

> 注意⚠️：
>
> * 如果目录省略，即 `cd` ，就是默认进入当前用户的 shell 变量 HOME 所在目录，即家目录。
> * 如果目录为 `~`，即 `cd ~`，也是默认进入当前用户的 shell 变量 HOME 所在目录，即家目录。
> * 如果目录为 `-`，即 `cd -`，是切换到上次所在位置（了解）。



* 示例：切换到用户的家目录

```shell
cd
```

![](./assets/5.gif)



* 示例：切换到用户的家目录

```shell
cd ~
```

![](./assets/6.gif)



* 示例：切换根目录

```shell
cd /
```

![](./assets/7.gif)



* 示例：切换上一级目录

```shell
# 等价于 cd ..
cd ../
```

![](./assets/8.gif)



* 示例：切换上一级目录的上一级目录

```shell
cd ../../
```

![](./assets/9.gif)



* 示例：切换到指定的目录

```shell
cd /etc/NetworkManager/system-connections/
```

![](./assets/10.gif)

## 3.2 pwd 命令（⭐）

* 命令：

```shell
pwd
```

* 对应的英文：print working directory。
* 功能：显示当前所在位置（以绝对路径方式显示）。



* 示例：

```shell
pwd
```

![](./assets/11.gif)

## 3.3 mkdir 命令（⭐）

* 命令：

```shell
mkdir [-p][-v] 目录 ...
```

* 功能：创建目录。

* 对应的英文：make directory 。

* 选项：

  * `-p`，`--parents`：创建多级目录。
  * `-v`，`--verbose`：每次创建新目录都显示信息。



* 示例：创建一级目录

```shell
mkdir demo
```

![](./assets/12.gif)



* 示例：创建多级目录

```shell
mkdir -pv demo/a/b
```

![](./assets/13.gif)

## 3.4 touch 命令（⭐）

* 命令：

```shell
touch 文件 ...
```

* 功能：创建空文件。

> 注意⚠️：如果文件中包含路径，必须存在父目录；否则，将会报错。



* 示例：创建单个文件

```shell
cd /tmp/
```

```shell
touch a.txt
```

![](./assets/14.gif)



* 示例：创建多个文件

```shell
touch /tmp/a.txt /tmp/b.txt
```

![](./assets/15.gif)

## 3.5 ls 命令（⭐）

* 命令：

```shell
ls [-l][-a][-h][-r][-t] [目录|具体的文件]
```

* 功能：显示文件列表。
* 对应的英文：list 。
* 选项：
  * `-l` ：以 long（长格式）显示，即显示详细信息，如：文件时间、大小、所有者。
  * `-a`，`--all`：显示所有文件和目录，包括隐藏文件或目录。
  * `-h`，`--human-readable`：以人类可读形式显示大小，如：1.5K、4.0K 。
  * `-t`，`--time`：按照修改时间排序。
  * `-r`，`--reverse`：逆序排序，通常和`-t` 配合使用，默认按照字母大小排序。
* 类似于 windows 中的`文件资源管理器`：

![](./assets/16.gif)

> 注意⚠️：
>
> * ① `ls -l` 的别名是 `ll` ；所以，某种意义上讲，`ls -l` 和 `ll` 是等价的；但是，不是所有 Linux 都是这样。
> * ② 如果没有指定参数`[目录|具体的文件]`，那么就是列出当前目录的文件列表；换言之，就是 `.` 或 `./`。



* 示例：

```shell
ls /
```

![](./assets/17.gif)



* 示例：以 long（长格式）显示（常用）

```shell
# 等价于 ll /
ls -l /
```

![](./assets/18.gif)

* 示例：按照文件的修改时间排序，最新的文件和目录在最上面（默认是按照字母顺序从 a ~ z 排序）

```shell
ll -t /
```

![](./assets/19.gif)



* 示例：根据文件的修改时间逆序排序（常用）

```shell
ll -lt /
```

![](./assets/20.gif)



* 示例：以人类可读形式显示大小

```shell
ll -h /
```

![](./assets/21.gif)



* 示例：显示所有文件和目录

```shell
ll -ah /
```

![](./assets/22.gif)

## 3.6 mv 命令（⭐）

* 命令：

```shell
mv [-b][-f] 源文件|目录 目标文件|目标目录
```

* 功能：移动文件和目录、重命名文件和目录。
* 对应的英文：move 。
* 选项：
  * `-b`：如果需要覆盖文件，则覆盖前先备份。
  * `-f`：如果目标文件和现有文件重名，则直接覆盖。

> 注意⚠️：
>
> * ① mv 命令类似于`剪切并粘贴`。
>
> * ② 如果`文件所在目录`和`目标目录`是`同一个目录`，就是`重命名`。
> * ③ 如果目标文件或目标目录不存在，则 mv 命令将创建它。如果目标文件或目标目录已经存在，则 mv 命令将覆盖它。



* 示例：移动文件

```shell
mkdir -pv /tmp/back
```

```shell
mv /tmp/a.txt /tmp/back/
```

![](./assets/23.gif)



* 示例：重命名文件

```shell
mv /tmp/a.txt /tmp/b.txt
```

![](./assets/24.gif)



* 示例：移动目录

```shell
mkdir -pv /tmp/a /tmp/back
```

```shell
mv /tmp/a /tmp/back
```

![](./assets/25.gif)



* 示例：移动目录下的所有文件到指定目录

```shell
mkdir -pv /tmp/a/b/c /tmp/back
```

```shell
touch /tmp/a/{1..10}.txt 
```

```shell
mv /tmp/a/* /tmp/back
```

![](./assets/26.gif)



* 示例：强制覆盖指定文件（慎用！！！）

```shell
mkdir -pv /tmp/back
```

```shell
touch /tmp/a.txt /tmp/back/a.txt
```

```shell
mv -f /tmp/a.txt /tmp/back/a.txt
```

![](./assets/27.gif)



* 示例：覆盖前备份（推荐！！！）

```shell
mkdir -pv /tmp/back
```

```shell
touch /tmp/a.txt /tmp/back/a.txt
```

```shell
mv -bf /tmp/a.txt /tmp/back/a.txt
```

![](./assets/28.gif)

## 3.7 cp 命令（⭐）

* 命令：

```shell
cp [-r|-R][-p][-d][-a] 源文件|目录 目标文件|目标目录
```

* 功能：复制文件或目录。
* 对应的英文：copy 。
* 选项：
  * `-r|-R`，`--recursive`：递归赋值，复制目录及其目录中的内容。
  * `-p`：复制的时候保留源文件或目录的属性（默认情况是：模式、所有权、时间戳）。
  * `-d`：复制文件或目录的同时，复制软链接。
  * `-a`：复制所有，相当于 `-dpr` 。

> 注意⚠️：cp 默认是不能复制目录的，除非加上 `-R` 或 `-r` 选项。



* 示例：

```shell
cp /etc/hostname /tmp/
```

![](./assets/29.gif)



* 示例：

```shell
cp -R /etc/ /tmp/
```

![](./assets/30.gif)

## 3.8 rm 命令（⭐）

* 命令：

```shell
rm [-r][-f] 文件|目录 ...
```

* 功能：删除文件或目录。
* 对应的英文：remove 。
* 选项：
  * `-f`，`--force`：强制删除不提示，非常危险⚠️。
  * `-r|-R`，`--recursive`：递归删除目录及其内容，非常危险⚠️。

> 注意⚠️：
>
> * ① `rm` 命令非常危险，使用的时候要慎重！！！
> * ② `rm -rf xxx` 超级危险，使用的时候，没有需求就不要加上 `-r`或 `-f`。



* 示例：删除文件（强制删除不提示）

```shell
touch /tmp/a.txt
```

```shell
rm -f /tmp/a.txt
```

![](./assets/31.gif)



* 示例：删除目录（超级危险，使用的时候慎重！！！）

```shell
cp -R /etc /tmp/
```

```shell
rm -rf /tmp/etc
```

![](./assets/32.gif)

## 3.9 echo 命令（⭐）

* 命令：

```shell
echo 字符串|变量 ...
```

* 功能：输出字符串或变量到屏幕。

> 注意⚠️：echo 可以和 `>` 或 `>>` 符号一起使用。
>
> * ① `>` 被称为`重定向`符号，即先清空文件内容，再写入。
> * ② `>>` 被称为`追加重定向`符号，即将信息写入到文件的末尾。 
> * ③ `重定向`就是`改变数据输出的方向`；在默认情况下，都是输出到屏幕上的。
> * ④ `重定向`不仅仅有 `>` 、`>>` ，其实还有 `|（管道）` 等。

> 温馨提示ℹ️：
>
> * ① `echo` 可以和 `{}` 一起简单使用，如：`echo {1..10}` ，此时的 `{} `被称为生成序列。
> * ② `{}` 也可以用来和 `touch` 或 `mkdir` 一起配合使用，用来批量生成文件或目录。



* 示例：输出字符串

```shell
echo "HelloWorld"
```

![](./assets/33.gif)



* 示例：输出内容到文件中

```shell
echo "HelloWorld" > /tmp/a.txt
```

![](./assets/34.gif)



* 示例：批量输出数字

```shell
echo {1..10}
```

![](./assets/35.gif)



* 示例：批量输出数字

```shell
echo xudaxian{01..10}
```

![](./assets/36.gif)



* 示例：批量输出字符

```shell
echo {a..z}
```

![](./assets/37.gif)



* 示例：批量输出字符

```shell
echo {A..Z}
```

![](./assets/38.gif)



* 示例：批量生成文件

```shell
touch /tmp/{01..10}.txt
```

![](./assets/39.gif)



* 示例：批量生成文件夹

```shell
mkdir -pv /tmp/{01..10}
```

![](./assets/40.gif)

## 3.10 cat 命令（⭐）

* 命令：

```shell
cat [-n] [文件]...
```

* 功能：显示文件内容。
* 对应的英文：concatenate（合并文件并输出到屏幕）。
* 选项：
  * `-n`，`--number`：显示行号。

> 温馨提示ℹ️：
>
> * ① 所谓的合并文件，就类似于 `SQL` 中的 `UNION ALL`（并集）。
> * ② 如果没有指定文件，则从标准输入中读取。



* 示例：显示文件内容

```shell
cat /etc/hostname
```

![](./assets/41.gif)



* 示例：显示文件内容及其行号

```shell
cat -n /etc/passwd
```

![](./assets/42.gif)



* 示例：合并文件内容

```shell
cat -n /etc/hostname /etc/passwd 
```

![](./assets/43.gif)



# 第四章：补充

## 4.1 Linux 的组成（⭐）

### 4.1.1 概述

* Linux 主要由以下几个组成部分构成：
  - ① `Linux 内核`：Linux 内核是整个操作系统的核心，负责管理硬件设备、内存管理、进程调度等核心功能。它是由林纳斯·托瓦兹及其他开发者编写和维护的。
  - ② `Shell 解释器`：Shell 解释器是用户与操作系统交互的接口，它接收用户输入的命令并将其解释执行。常见的 Shell 解释器有 Bash、Zsh 等，它们提供了命令行界面和脚本编程功能。
  - ③ `外围的应用程序`：命令、应用程序、图形化界面……

* 其图示如下：

![image-20240115214505877](./assets/44.png)

* 上述的组成部分共同构成了一个完整的 Linux 操作系统，为用户提供了丰富的功能和灵活性。

### 4.1.2 查看 Linux 内核命令

* 命令：

```shell
uname [-a][-s][-r]
```

* 功能：显示 Linux 内核信息。
* 选项：
  * `-a`，`--all` ：按顺序打印全部信息。
  * `-s`，`--kernel-name`：打印内核名称，相当于 `uname`。
  * `-r`，`--kernel-release`：打印内核 release 。



* 示例：查看全部信息

```shell
uname -a
```

![](./assets/45.gif)



* 示例：查看内核版本

```shell
uname -sr
```

![](./assets/46.gif)

### 4.1.3 查看默认 SHELL 解释器命令

* 命令：

```shell
echo $SHELL
```

* 功能：显示默认的 SHELL 解释器。



* 示例：

```shell
echo $SHELL
```

![](./assets/47.gif)

### 4.1.4 查看 Linux 发行版本

* 命令：

```shell
cat /etc/os-release
```

* 功能：显示 Linux 发行版本信息。



* 示例：

```shell
cat /etc/os-release
```

![](./assets/48.gif)



* 示例：

```shell
cat /etc/*-release
```

![](./assets/49.gif)

## 4.2 Linux 环境的初步优化（⭐）

* 安装 epel-release ：

```shell
dnf config-manager --set-enabled crb
dnf -y install epel-release
```

![](./assets/50.gif)

* 安装 Linux 常用的工具：

```shell
dnf -y install tree vim wget bash-completion \
    lrzsz net-tools sysstat iotop iftop htop unzip  nc \
    nmap telnet bc psmisc httpd-tools bind-utils nethogs expect
```

![](./assets/51.gif)

* 安装 Linux 娱乐命令（可选）：

```shell
dnf -y install sl cowsay
```

![](./assets/52.gif)

* 安装开发工具软件包组：

```shell
dnf -y groupinstall "Development Tools" 
```

![51](./assets/53.gif)

## 4.3 内部命令和外部命令

* Linux 中的`内部命令`（**Built-in Commands**）：
  * 内部命令是直接内置在 Shell 解析器（如：Bash、Zsh 等）中的命令，它们不是独立的可执行文件。
  * 这些命令的执行速度比较快，因为它们无需创建新的进程，而是在当前 Shell 的上下文中直接执行。

* 可以通过如下的命令，查看 Linux 中的所有内部命令：

```shell
help
```

![image-20240229204235125](./assets/54.png)

* 当然，也可以通过如下的命令，查看某个命令是否是 Linux 中的内部命令：

```shell
type cd
```

![image-20240229204341820](./assets/55.png)

* Linux 中的`外部命令`**（External Commands）**：
  * 外部命令是独立的可执行文件，它们存在于系统的文件系统中，通常位于`/bin`、`/usr/bin` 等目录下。
  * 这些命令的执行需要创建新的进程，通过调用相应的可执行文件来完成任务。

* 可以通过如下的命令，查看 Linux 中的所有外部命令对应的目录：

```shell
echo $PATH
```

![image-20240229204532846](./assets/56.png)

* 当然，也可以通过如下的命令，查看某个命令是否是 Linux 中的外部命令：

```shell
type cat
```

![image-20240229204645603](./assets/57.png)

* 如果对于 Linux 中的外部命令，每次都要去`环境变量 $PATH` 对应的目录中去寻找指定的可执行文件，那效率也太慢了；Linux 采用了 hash 算法来加快访问，其原理如下所示：

![image-20240229210555424](./assets/58.png)

* 可以通过如下的命令，查看 hash 表中缓存的命令：

```shell
hash
```

![image-20240229205135310](./assets/59.png)

> 注意⚠️：如果有的时候，移动了 Linux 外部命令的位置，可以使用 `hash -r` 清除 hash 表记录，以防止 Linux 报错：`xxx 命令找不到`。 

## 4.4 Linux 命令帮助手册

### 4.4.1 概述

* 对于 Linux 的内部命令，我们可以通过如下的命令，来查看命令的使用方法：

```shell
man command
```

```shell
# 通常用来查看常用的选项和参数
help command
```

* 对于 Linux 的外部命令，我们可以通过如下的命令，来查看命令的使用方法：

```shell
man command
```

```shell
# 通常用来查看常用的选项和参数
command --help
```

```shell
# 通常用来查看常用的选项和参数，并不是所有的命令都有 -h 选项
command -h
```

> 注意⚠️：
>
> * ① man 命令来查看帮助，其实是查看指定命令的帮助手册，在 `/usr/share/man` 下。
> * ② 可以通过 `whereis 命令`或 `whatis 命令`查看其对应命令的帮助手册的位置。
> * ③ 实际工作中，并不会严格区分 Linux 内部命令或 Linux 外部命令，如果查询 Linux 内部命令的方法不行，就根据提示换为查看 Linux 外部命令的方法。





* 示例：查看 Linux 内部命令的使用方法

```shell
man cd
```

![](./assets/60.gif)



* 示例：查看 Linux 内部命令的使用方法

```shell
help cd
```

![](./assets/61.gif)



* 示例：查看 Linux 外部命令的使用方法

```shell
man cat
```

![](./assets/62.gif)



* 示例：查看 Linux 外部命令的使用方法

```shell
cat --help
```

![](./assets/63.gif)



* 示例：查看 Linux 外部命令的使用方法

```shell
cat -h
```

![](./assets/64.gif)

### 4.4.2 查看 Linux 命令位置及其帮助手册位置

* 可以通过如下的命令，查看 Linux 命令的位置及其帮助手册的位置：

```shell
whereis command
```

```shell
whatis command
```



* 示例：

```shell
whereis cd
```

![image-20240301103547326](./assets/65.png)



* 示例：

```shell
whatis passwd
```

![image-20240301103707221](./assets/66.png)

### 4.4.3 Linux 帮助手册详解

* 我们可以通过如下的命令，来查看 Linux 的帮助手册：

```shell
ll /usr/share/man
```

![image-20240301103827094](./assets/67.png)

* 内容如下，只显示有用的信息，即：

```shell {1,4,7,13,17,19,21,23}
drwxr-xr-x. 2 root root  77824  3月  1 09:35 man1 # 1 章节，用户命令
drwxr-xr-x. 2 root root   8192  2月 29 13:36 man1p
drwxr-xr-x. 2 root root      6  3月 25  2022 man1x
drwxr-xr-x. 2 root root  16384  2月 29 13:36 man2 # 2 章节，系统调用
drwxr-xr-x. 2 root root     31  2月 29 13:36 man2type
drwxr-xr-x. 2 root root      6  3月 25  2022 man2x
drwxr-xr-x. 2 root root 372736  2月 29 14:21 man3 # 3 章节，C 库调用
drwxr-xr-x. 2 root root   4096  2月 29 13:36 man3const
drwxr-xr-x. 2 root root     58  2月 29 13:36 man3head
drwxr-xr-x. 2 root root  32768  2月 29 13:36 man3p
drwxr-xr-x. 2 root root   4096  2月 29 13:36 man3type
drwxr-xr-x. 2 root root      6  3月 25  2022 man3x
drwxr-xr-x. 2 root root   4096  2月 29 13:36 man4 # 4 章节，设备文件和特殊文件
drwxr-xr-x. 2 root root      6  3月 25  2022 man4x
drwxr-xr-x. 2 root root  16384  3月  1 09:35 man5 # 5 章节，配置文件格式
drwxr-xr-x. 2 root root      6  3月 25  2022 man5x
drwxr-xr-x. 2 root root     24  2月 29 13:36 man6 # 6 章节，游戏
drwxr-xr-x. 2 root root      6  3月 25  2022 man6x
drwxr-xr-x. 2 root root  16384  2月 29 14:19 man7 # 7 章节，杂项
drwxr-xr-x. 2 root root      6  3月 25  2022 man7x
drwxr-xr-x. 2 root root  40960  3月  1 09:35 man8 # 8 章节，管理类的命令
drwxr-xr-x. 2 root root      6  3月 25  2022 man8x
drwxr-xr-x. 2 root root      6  3月 25  2022 man9 # 9 章节，Linux 内核 API
drwxr-xr-x. 2 root root      6  3月 25  2022 man9x
```

> 注意⚠️：
>
> * ① 手册中含有 p 的一般都是程序员专用的，因为 p 是 programmer 的缩写。
> * ② 在实际工作中，对于含有 p 的手册，我们一般不关心！！！

* 我们知道，`passwd` 命令对应的配置文件是 `/etc/passwd`：

```shell 
whereis passwd
```

![image-20240301104246331](./assets/68.png)

* 通过，如下的命令去查看 `/etc/passwd` 文件的内容：

```shell
cat /etc/passwd
```

![image-20240301104344443](./assets/69.png)

> 疑惑😖：该配置文件中的每一列的含义是什么？

* 我们可以去看下，man 命令如何使用：

```shell
man --help
```

![image-20240301104621166](./assets/70.png)

* 我们可以通过 `whereis` 或 `whatis` 去，查看该命令对应的配置文件是那个章节的帮助手册：

```shell
whereis passwd
```

```shell
whatis passwd
```

![image-20240301104833989](./assets/71.png)

* 此时，我们就可以通过 `man` 命令，来查看 `passwd` 命令对应配置文件 `/etc/passwd` 中每一列的含义：

```shell
man 5 passwd
```

![](./assets/72.gif)

* 如果不写帮助手册的章节，默认就是查看命令的使用方法：

```shell
man passwd # 等价于 man 1 passwd 
```

![](./assets/73.gif)

* 其实，在使用 man 查看命令的时候，会显示帮助手册的章节：

```shell
man passwd
```

```shell
man 5 passwd
```

![](./assets/74.gif)

