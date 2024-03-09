#  第一章：Linux 软件包概述（⭐）

## 1.1 主流 Linux 发行版本分类

* 在实际工作中，主流的 Linux 发行版本分类如下：

![image-20240219110359293](./assets/1.png)

> 注意⚠️：
>
> * ① 对于 RedHat（红帽系）而言，`软件包`的格式是 `rpm` 格式。
> * ② 对于 Debian（Debian 系）而言，`软件包`的格式是 `deb` 格式。

## 1.2 Linux 中软件包常见的安装方式

* 在 Linux 中软件包常见的安装方式有：
  * ① yum（apt-get）安装。
  * ② rpm（depk）安装。
  * ③ 二进制安装。
  * ④ 编译安装。

* 它们之间的区别如下：

| 软件安装方式       | 解释说明                                                     | 自动化程度 | 应用场景                                                     | 安装方式推荐（排序） |
| ------------------ | ------------------------------------------------------------ | ---------- | ------------------------------------------------------------ | -------------------- |
| yum（apt-get）安装 | 通过网络下载安装；如果有依赖，会自动安装依赖。               | 全自动     | 大部分场景都可以使用；如果是内网，如果自建 yum 仓库。        | :one:                |
| rpm（depk）安装    | 手动安装 rpm  包；如果缺少依赖，需要根据提示，自己手动解决。 | 半自动     | 没有网络的情况、依赖较少、误删除一些软件包的情况。           | :two:                |
| 二进制安装         | 类似于 win 中的绿色软件，解压就可以使用；但是，可能需要准备软件所需要的环境。 | 手动       | 如果软件没有提供 yum 或 rpm 安装方式，则选择二进制安装，如：maven 。 | :three:              |
| 编译（源码）安装   | 自定义安装，需要自己编译和安装，流程较长，比较繁琐。         | 完全手动   | 如果需要自定义安装或者上述安装方式都不存在，则选择编译安装。 | :four:               |



# 第二章：rpm 安装（⭐）

## 2.1 概述

* `rpm（Redhat Package Manager）` 命令是 `RPM` 软件包的管理工具。`rpm` 原本是 `Red Hat Linux` 发行版专门用来管理 `Linux` 各项套件的程序，由于它遵循 `GPL` 规则且功能强大方便，因而广受欢迎，逐渐受到其他发行版的采用。
* `RPM` 套件管理方式的出现，让 `Linux` 易于安装，升级，间接提升了 `Linux` 的适用度。

## 2.2 扫清概念（软件包和命令的区别）

* 在 Linux 系统中，软件包（Package）和命令（Command）是两个不同的概念，它们在系统管理和使用中扮演着不同的角色。
* **软件包（Package）**：
  * `软件包`是 Linux 系统中用于分发和安装软件的一种方式。它通常包含了`一个`或`多个程序`、`库文件`、`配置文件`以及`可能需要的其他资源`。
  * 软件包可以是源代码包（Source Package），也可以是编译后的二进制包（Binary Package）。
  * 在不同的 Linux 发行版中，软件包的格式可能有所不同，例如：Debian 和 Ubuntu 使用的是 `.deb` 格式，而 Red Hat、CentOS 和 Fedora 使用的是 `.rpm` 格式。
  * 安装软件包，通常意味着将软件的二进制文件和相关资源放置到系统的正确位置，以便系统可以识别和运行这些软件。
* **命令（Command）**：
  * 命令是用户在 Linux 命令行界面（CLI）中输入的一系列字符，用于执行特定的任务或操作。
  * 命令可以是系统内置的，也可以是由软件包提供的，例如：`ls` 是一个列出目录内容的命令，`apt-get` 是 Debian 和 Ubuntu 系统中用于管理软件包的命令。
  * 命令通常与特定的软件包相关联，因为它们是软件包的一部分，安装了相应的软件包后，我们就可以使用这些命令。

> 温馨提示ℹ️：
>
> * ① 软件包是软件的集合，包含了运行软件所需的所有文件（可执行文件、库文件、配置文件、帮助文档、脚本、数据文件等），而命令（通常是可执行文件）是用户与系统交互的工具，用于执行软件包中的程序，是软件包的一部分。
> * ② 在Linux中，我们通常需要先安装软件包，然后才能使用其中的命令。
> * ③ `软件包 != 命令`，如：`ifconfig` 命令的软件包是 `net-tools` ，`rz` 和 `sz` 命令的软件包是 `lrzsz`。

## 2.3 rpm 安装软件包

### 2.3.1 概述

* rpm 安装软件包，无非增（安装）删（卸载）改（升级）查（查询），即：

| 功能       | 命令                      | 选项含义                                                     |
| ---------- | ------------------------- | ------------------------------------------------------------ |
| 增（安装） | `rpm -ivh xxx.rpm`        | `-i`， `--install`：安装软件包。 <br>`-v`，`--verbose` ：安装的时候显示详细信息。 <br>`-h`，`--hash`：软件包安装的时候列出哈希标记，通常和 `-v` 配合使用。 |
| 删（卸载） | `rpm -e xxx.rpm --nodeps` | `-e`，`--erase`：清除（卸载）软件包，eraser 是 erase 的名词，即橡皮，所以 erase  是擦除的意思。 <br/>`--nodeps`：不验证软件包依赖，有的时候卸载不了，就需要此参数。 |
| 改（升级） | `rpm -Uvh xxx.rpm`        | `-U`，`--upgrade`：升级软件包。<br/>`-v`，`--verbose` ：安装的时候显示详细信息。 <br/>`-h`，`--hash`：软件包安装的时候列出哈希标记，通常和 `-v` 配合使用。 |
| 查（查询） | `rpm -qa `                | `-q`，`--query` ：查询 。<br>`-a`，`--all`：全部 。          |
|            | `rpm -ql xxx`             | `-q`，`--query` ：查询。<br/>`-l`，`--list`：列出安装到系统中软件包中的内容（绝对路径），如：命令、配置文件等。 |
|            | `rpm -qf $(which xxx)`    | `-q`，`--query` ：查询。<br/>`-f`，`--file`：根据命令或文件的绝对路径，查询对应的软件包。 |

### 2.3.2 增（安装）

* 命令：

```shell
rpm -ivh xxx.rpm
```



* 示例：

```shell
# 下载软件包
wget --no-check-certificate -P /tmp https://mirrors.tuna.tsinghua.edu.cn/zabbix/zabbix/6.0/rhel/9/x86_64/zabbix-agent2-6.0.6-2.el9.x86_64.rpm
```

```shell
# 安装依赖（后面可以通过 yum 来解决软件包依赖和查找依赖）
yum -y install pcre2
```

```shell
# 切换到指定目录
cd /tmp 
```

```shell
# 安装
rpm -ivh zabbix-agent2-6.0.6-2.el9.x86_64.rpm
```

![](./assets/2.gif)

### 2.3.3 查（查询）

* 命令：

```shell
# 查询是否安装成功
rpm -qa | grep xxx
```

```shell
# 列出安装到系统中软件包中的内容（绝对路径），如：命令、配置文件等
rpm -ql xxx
```

```shell
# 根据命令或文件的绝对路径，查询对应的软件包（了解，后期通过 yum 来实现）
rpm -qf $(which xxx)
```



* 示例：查询是否安装成功

```shell
rpm -qa | grep zabbix
```

![](./assets/3.gif)



* 示例：列出安装到系统中软件包中的内容（绝对路径），如：命令、配置文件等

```shell
rpm -ql zabbix-agent2
```

![](./assets/4.gif)



* 示例：根据命令或文件的绝对路径，查询对应的软件包

```shell
rpm -qf $(which ifconfig)
```

![](./assets/5.gif)

### 2.3.4 Linux 中软件包的格式

* RedHat（红帽系）的软件包格式如下：

![image-20240219141800345](./assets/6.png)

### 2.3.5 改（升级）

* 命令：

```shell
# 适用于小版本的升级
rpm -Uvh xxx.rpm
```

> 注意⚠️：
>
> * ① 通常，`rpm -Uvh xxx.rpm` 适用于小版本的升级。
> * ② 在实际工作的时候，升级需要经过严格的测试（找一台裸机模拟环境进行升级）。



* 示例：

```shell
# 下载软件包
wget --no-check-certificate -P /tmp https://mirrors.tuna.tsinghua.edu.cn/zabbix/zabbix/6.0/rhel/9/x86_64/zabbix-agent2-6.0.7-1.el9.x86_64.rpm
```

```shell
# 切换到指定目录
cd /tmp 
```

```shell
# 升级
rpm -Uvh zabbix-agent2-6.0.7-1.el9.x86_64.rpm
```

![](./assets/7.gif)

### 2.3.6 删（卸载）

* 命令：

```shell
# xxx 是软件包的名称
rpm -e xxx --nodeps
```



* 示例：

```shell
rpm -e zabbix-agent2
```

![](./assets/8.gif)



# 第三章：yum 安装（⭐）

## 3.1 概述

* `yum` 命令是在 `Fedora` 和 `RedHat` 以及 `SUSE` 中基于 `rpm` 的软件包管理器，它可以使系统管理人员交互和自动化地更新与管理 `RPM` 软件包，能够从指定的服务器自动下载 `RPM` 包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软体包，无须繁琐地一次次下载、安装。

> 注意⚠️：
>
> * ① 在 AlmaLinux 8+ 之后的版本，其实更推荐使用 dnf 命令，因为其性能相对于 yum 来说更高。
> * ② 无需担心，dnf 命令的`选项`、`参数`和 yum 命令的`选项`、`参数`几乎一样，在使用的时候，只需要将 yum 替换为 dnf 即可。

## 3.2 yum 安装软件包的流程

### 3.2.1 概述

* 通常而言，我们都是使用 yum 命令来安装软件包的；但是，在安装软件包的过程中，yum 命令会和 yum 源（仓库）进行交互，并确保了软件包的安装、更新和依赖关系的自动解决，即：

![image-20240219151504276](./assets/9.png)

### 3.2.2 yum 源配置

* 查看：

```shell
cat /etc/yum.repos.d/xxx.repo
```

* 配置文件格式

```
[baseos] # 源的名称
name=AlmaLinux $releasever - BaseOS # 描述信息
mirrorlist=https://mirrors.almalinux.org/mirrorlist/$releasever/baseos # yum 仓库镜像列表，会自动进行切换
# baseurl=https://repo.almalinux.org/almalinux/$releasever/BaseOS/$basearch/os/ # 指向一个固定的地址
enabled=1 # 启动状态：1 开启；0 关闭
gpgcheck=1 # GPG 检查，1 表示在安装软件包时会进行 GPG 签名验证，确保软件包的完整性和来源的可靠性。
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-AlmaLinux-9 # GPG 密钥，用于验证软件包的签名
countme=1 # 计数器，1 表示这个软件源应该被计入软件包管理器的统计中
metadata_expire=86400 # 元数据过期时间，86400 秒表示软件源的元数据（如软件包列表）在没有更新的情况下可以保持多久
enabled_metadata=1 # 启用元数据， 1 表示启用元数据的自动更新
```

> 注意⚠️：
>
> * ① 如果是虚拟机或私有云，可能需要配置 yum 源；不过，现在默认配置的 mirrorlist 会动态切换 yum 仓库源到指定国家，速度也还是可以的。
> * ② 如果是公有云，通常都是配置好的。

* 修改为阿里云的 yum 镜像源：

```shell
# 备份并替换默认源
sed -e 's|^mirrorlist=|#mirrorlist=|g' \
     -e 's|^# baseurl=https://repo.almalinux.org|baseurl=https://mirrors.aliyun.com|g' \
     -i.bak \
     /etc/yum.repos.d/almalinux*.repo
```

```shell
# 生成缓存
dnf makecache  
```

### 3.2.3 yum 命令配置文件

* 查看：

```shell
cat /etc/yum.conf
```

* 配置文件格式：

```shell
[main]
cachedir=/var/cache/yum/$basearch/$releasever # 缓存目录
keepcache=1 # 是否保留缓存, 0 表示不保留缓存, 1 表示保留缓存，默认是 0 
logfile=/var/log/yum.log # yum 操作的日志
gpgcheck=1
installonly_limit=3
clean_requirements_on_remove=True
best=True
skip_if_unavailable=False
```

> 注意⚠️：
>
> * ① 可以通过 `man yum.conf` 命令查看 yum.conf 中的所有可用的配置选项和详细描述。
> * ② 通常情况下，我们不会修改该文件，如果在内网环境中，我们通常会搭建 yum 私服（nexus3），并指定 yum 源为  yum 私服（nexus3）。

## 3.3 yum 安装软件包

### 3.3.1 概述

* yum 安装软件包，无非增（安装）删（卸载）改（升级）查（查询），即：

| 功能       | 命令                                          | 备注                                                         |
| ---------- | --------------------------------------------- | ------------------------------------------------------------ |
| 增（安装） | `yum -y install xxx`                          |                                                              |
|            | `yum -y groupinstall xxx`                     | 安装程序组                                                   |
| 删（卸载） | `yum -y remove xxx`                           | 卸载（删除）软件                                             |
|            | `yum -y groupremove xxx`                      | 卸载程序组                                                   |
| 改（升级） | `yum -y update xxx` <br>`yum -y upgrade  xxx` | update 和 upgrade  都是升级的意思，任选其一即可。            |
| 查（查询） | `yum repolist [--all]`                        | 查看已启用的 yum 仓库，默认。<br>`--all` 选项表示查询所有仓库。 |
|            | `yum grouplist [--installed]`                 | 查询所有程序组，默认。<br>`--installed` 选项表示查询已安装的程序组。 |
|            | `yum list [--installed]`                      | 查询所有的软件包，包括仓库中的，默认。<br>`--installed` 选项表示查询已经安装到本地的软件包。 |
|            | `yum provides xxx`                            | 查找提供指定内容的软件包，是 `rpm -qf $(which xxx)`的升级版本。 |
| yum 仓库   | `yum config-manager --enable 仓库名称`        | 启用仓库                                                     |
|            | `yum config-manager --disable 仓库名称`       | 禁用仓库                                                     |
| yum 缓存   | `yum clean all`                               | 释放磁盘空间并保持 YUM 的缓存数据最新，包括：清除缓存、清理头文件、清理过期的元数据、清理过期的软件包。 |
|            | `yum makecache`                               | 构建缓存                                                     |

### 3.3.2 增（安装）

#### 3.3.2.1 安装软件包

* 命令：

```shell
yum -y install xxx
```



* 示例：

```shell
yum -y install tree
```

![](./assets/10.gif)

#### 3.3.2.2 安装程序组

* 命令：

```shell
# 安装程序组，可以通过 yum grouplist 查询所有的程序组
yum -y groupinstall xxx
```

> 注意⚠️：
>
> * ① 在 Linux系统中，程序组（Software Group）是一个方便用户管理和安装相关软件包的`集合`。
> * ② 程序组通常包含了一组协同工作以提供特定功能或服务的软件包。
> * ③ 这种分组方式使得用户可以更容易地安装、更新或卸载整个功能集合，而不需要单独处理每个软件包。



* 示例：

```shell
yum -y groupinstall 'Development Tools'
```

![](./assets/11.gif)

### 3.3.3 查（查询）

#### 3.3.3.1 查看 yum 仓库

* 命令：

```shell
yum repolist [--all]
```

* 功能：查询已启用的 yum 仓库。
* 选项：
  * `--all`：查询所有的 yum 仓库。



* 示例：查询已启用的 yum 仓库

```shell
yum repolist
```

![](./assets/12.gif)



* 示例：查询所有的 yum 仓库

```shell
yum repolist --all
```

![](./assets/13.gif)



* 示例：安装 epel 仓库

```shell
yum -y install epel-release 
```

![](./assets/14.gif)

#### 3.3.3.2 查询程序组

* 查询所有程序组命令：

```shell
yum grouplist
```

* 查询已安装程序组命令：

```shell
yum grouplist --installed
```

> 注意⚠️：
>
> * ① 需要英文环境，不然显示的程序组的名称是中文（如果默认的 locale 就是中文）。
> * ② 下面的示例，我使用英文环境来测试。



* 示例：查询所有程序组

```shell
yum grouplist
```

![](./assets/15.gif)



* 示例：查询已安装程序组

```shell
yum grouplist --installed
```

![](./assets/16.gif)

#### 3.3.3.3 查询软件包

* 命令：

```shell
yum list [--installed]
```

* 功能：查询软件包，包括 yum 仓库中的。
* 选项：
  * `--installed`：查询安装到本地的软件包。



* 示例：查询 tree 

```shell
yum list | grep tree
```

![](./assets/17.gif)



* 示例：查询已安装到本地的软件包

```shell
yum list --installed | grep tree
```

![](./assets/18.gif)

#### 3.3.3.4 查询软件包

* 命令：

```shell
yum provides xxx
```

* 功能：根据指定命令或文件查询对应的软件包。

> 注意⚠️：该命令是 `rpm -qf $(which xxx)`的升级版本，强烈使用！！！因为没有先安装指定的软件包的前提限制了。



* 示例：查询 `ifconfig`命令 对应的软件包

```shell
yum provides ifconfig
```

![](./assets/19.gif)



* 示例：查询 `tree`命令 对应的软件包

```shell
yum provides tree
```

![](./assets/20.gif)

### 3.3.4 仓库（启用和禁用）

* 启用仓库命令：

```shell
yum config-manager --enable 仓库名称
```

* 禁用仓库命令：

```shell
yum config-manager --disable 仓库名称
```

> 注意⚠️：
>
> * ① 需要在 `/etc/yum.repo.d/` 下配置有 `xxx.repo` 文件。
> * ② 如果不是系统内置，还需要通过 `yum -y  makecache` 更新本地缓存。
> * ③ 启用仓库后，最好使用 `yum -y makecache` 更新本地缓存，以便进行软件包的查询。



* 示例：启用仓库

```shell
yum config-manager --enable crb devel
```

![](./assets/21.gif)



* 示例：禁用仓库

```shell
yum config-manager --disable crb devel
```

![](./assets/22.gif)

### 3.3.5 改（更新）

* 命令：

```shell
yum -y update [软件包] [--exclude=软件包] [--disableexcludes=repo]
```

* 功能：如果不写软件包，会更新内核以及软件包。
* 选项：
  * `--exclude=软件包`：更新的时候排除某些软件包。
  * `--disableexcludes=repo`：禁止排除某些仓库。

> 注意⚠️：在生产环境中搭建 kubernetes 集群的时候，我们需要禁止内核以及 kubernetes 组件的更新，有如下的解决方案：
>
> * ① 临时解决方案，使用 `yum -y update --exclude=kernel* --exclude=kubelet --exclude=kubeadm --exclude=kubectl  --exclude=docker-ce*` 命令。
> * ② 永久方案，在 `/etc/yum.conf`  文件的最后一行添加 `exclude=kernel* kubelet kubeadm kubectl docker-ce* `。



* 示例：更新软件，排除内核

```shell
yum -y update --exclude=kernel*
```

![](./assets/23.gif)

### 3.3.6 删（卸载）

* 命令：

```shell
yum -y remove 软件包
```

> 注意⚠️：删除需要谨慎，生产环境切勿随意删除软件包；如果一定要删除，可以使用 `rpm -e xxx` 命令。



* 示例：

```shell
yum -y remove tree
```

![](./assets/24.gif)



# 第四章：编译（源码）安装（⭐）

## 4.1 概述

* 很多 Linux 上的软件都是使用 C 语言写的，为了简化跨平台构建，很多 C 语言项目使用了 GNU Autotools 工具链来进行构建。
* GNU Autotools 工具链是一个自动化的构建系统，包括了：`autoconf`、`automake` 和 `libtool` 等工具，通过它可以很容易的将源代码在不同的操作系统和编译环境中进行编译和安装。
* GNU Autotools 工具链配置、编译和安装过程如下：
  * ① **`配置`**：使用 `configure` 脚本来检查系统环境并生成 `Makefile`。这个脚本会根据你的系统配置（如：是否支持 SSL、是否安装了 PCRE 和 Zlib 、安装到那个目录，默认是 /usr/local 等）来定制 `Makefile`。
  * ② **`编译`**：使用 `make` 命令根据 `Makefile` 编译 C 语言源代码，生成的通常是可执行文件（executables）、静态库（static libraries）、动态库（shared libraries）或目标文件（object files），具体取决于项目的构建配置和 `Makefile` 中定义的规则。
  * ③ **`安装`**：使用 `make install` 命令将编译好的可执行文件、库文件、头文件等安装到系统的标准路径中。

> 注意⚠️：Nginx 是一个用 C 语言编写的项目，其就是使用 GNU Autotools 工具链进行项目构建的。

## 4.2 安装 NGINX

* 下载源码：

```shell
wget -P /tmp https://freenginx.org/download/nginx-1.24.0.tar.gz
```

![](./assets/25.gif)

* 安装依赖：

```shell
yum -y install gcc gcc-c++  autoconf automake make pcre pcre-devel zlib zlib-devel openssl openssl-devel
```

![](./assets/26.gif)

* 解压：

```shell
cd /tmp
```

```shell
tar -zxvf nginx-1.24.0.tar.gz
```

![](./assets/27.gif)

* 配置：

```shell
cd nginx-1.24.0
```

```shell
./configure
```

![](./assets/28.gif)

* 编译：

```shell
make 
```

![](./assets/29.gif)

* 安装：

```shell
make install
```

![](./assets/30.gif)

* 启动并测试：

```shell
cd /usr/local/nginx/sbin
```

```shell
./nginx
```

```shell
curl http://127.0.0.1:80
```

![](./assets/31.gif)



# 第五章：使用 nexus3 搭建 yum 私有仓库（⭐）

## 5.1 安装 nexus3

### 5.1.1 概述

* nexus3 是用 Java 语言构建的集中式组件仓库，它支持各种软件包，如：Maven、YUM、npm 等。

![image-20240309095943990](./assets/32.png)

> 注意⚠️：nexus3 的下载地址是[这里](https://help.sonatype.com/en/download-archives---repository-manager-3.html)。

* 目前的架构如下：

![image-20240309133612792](./assets/33.png)

> 注意⚠️：nexus3 的主要功能和应用场景如下：
>
> * ① **中央仓库缓存**：Nexus3 可以作为中央仓库，如：Maven Central 的缓存服务器，提高内部网络中构建和依赖下载的速度。通过设置代理仓库，可以减少对外部网络的依赖，同时节省带宽。
> * ② **私有仓库**：开发者可以在 Nexus3 中创建私有仓库，用于存储公司内部开发的库和依赖。这有助于保护知识产权，同时方便内部团队共享和重用代码。
> * ③ **依赖管理**：Nexus3 提供了对依赖的管理和分发功能，可以帮助团队管理项目依赖，确保依赖的一致性和安全性。
> * ④ **Docker 镜像仓库**：Nexus3 支持 Docker 镜像的存储和分发，这对于容器化应用的构建和部署非常有用。它可以作为 Docker Registry 的私有替代品。
> * ⑤ **权限管理**：Nexus3 提供了细粒度的权限控制，允许管理员根据用户和角色设置访问权限，确保资源的安全性。
> * ⑥ **仓库类型支持**：除了 Maven 和 Docker，Nexus3 还支持 npm、Bower、RubyGems 等多种仓库类型，使其成为一个多功能的仓库管理平台。
> * ⑦ ……

### 5.1.2 安装并启动

* 安装 JDK ：

```shell
yum -y install java-1.8.0*
```

![](./assets/34.gif)

* 查看 JDK 是否安装成功：

```shell
javac -version
```

```shell
java -version
```

![](./assets/35.gif)

* 下载 nexus3 ：

```shell
curl -L -o /opt/nexus-3.66.0-02-unix.tar.gz \
	--no-buffer https://download.sonatype.com/nexus/3/nexus-3.66.0-02-unix.tar.gz
```

![](./assets/36.gif)

* 解压并重命名：

```shell
cd /opt 
```

```shell
tar -zxvf nexus-3.66.0-02-unix.tar.gz -C /usr/local
```

```shell
mv nexus-3.66.0-02 nexus3
```

![](./assets/37.gif)

* 创建虚拟用户：

```shell
useradd -M -s /sbin/nologin nexus3
```

![](./assets/38.gif)

* 授权 nexus3 目录权限：

```shell
chown -R nexus3:nexus3 /usr/local/nexus3
chown -R nexus3:nexus3 /usr/local/sonatype-work
```

![](./assets/39.gif)

* 配置 systemd ：

```shell
vim /etc/systemd/system/nexus.service
```

```
[Unit]
Description=nexus3 service
After=network.target
  
[Service]
Type=forking
LimitNOFILE=65536
ExecStart=/usr/local/nexus3/bin/nexus start
ExecStop=/usr/local/nexus3/bin/nexus stop 
User=nexus3
Group=nexus3
Restart=on-abort
TimeoutSec=600
  
[Install]
WantedBy=multi-user.target
```

![](./assets/40.gif)

* 启动：

```shell
systemctl daemon-reload
```

```shell
systemctl enable --now nexus.service
```

![](./assets/41.gif)

* 查询服务是否启动：

```shell
# 如果失败，可以通过 journalctl -u nexus 调试错误
sytemctl status nexus
```

![](./assets/42.gif)

## 5.2 访问并配置

### 5.2.1 访问

* 通过浏览器输入 `http://192.168.10.100:8081` 来进行访问（请先关闭防火墙）：

![image-20240309114510501](./assets/43.png)

* 默认的用户名是 `admin` ，可以根据提示获取初始化密码：

![image-20240309114557125](./assets/44.png)

* 登录到系统中：

![image-20240309114638073](./assets/45.png)

* 根据提示，修改初始化密码：

![image-20240309114720441](./assets/46.png)

* 其余，下一步即可：

![image-20240309114837106](./assets/47.png)

![image-20240309114858532](./assets/48.png)

### 5.2.2 解释 nexus3 中仓库的类型

* 我们可以通过如下的步骤，查看 nexus3 中的仓库类型：

![image-20240309141551634](./assets/49.png)

![image-20240309141629121](./assets/50.png)

![image-20240309141725221](./assets/51.png)

* 我们注意到，nexus3 中的仓库类型有 3 种，区别如下：
* ① hosted（宿主仓库，本地仓库）：
  * 该仓库是 nexus3 服务器上的本地仓库。用于存储和分发用户自己创建和管理的软件包。
  * hosted仓库可以是 Releases（只发布正式版本）、Snapshots（用于存储开发中的快照版本）或者 Mixed（混合使用 Releases 和 Snapshots）。
  * hosted 仓库通常用于管理内部开发的软件项目，或者作为私有的依赖库（一般不对外开放）。

* ② proxy（代理仓库）：
  * proxy 仓库是 Nexus3 作为中间代理，代理外部仓库，如：Maven Central、npm 官方仓库等的仓库。
  * 当用户从 Proxy 仓库拉取软件包时，nexus3 会先从外部仓库下载软件包，然后缓存到本地，之后再提供给用户。这样可以加快后续的下载速度，因为用户可以从本地缓存中获取软件包，而不是每次都从外部网络下载。
  * proxy仓库通常用于加速外部仓库的访问速度，减少对外部网络的依赖，以及在网络不稳定或受限的情况下提供稳定的软件包以便获取服务。
* ③ group（仓库组）：
  * group 仓库是将多个仓库（可以是 hosted、proxy 或其他 group）组合在一起，形成一个逻辑上的仓库组。
  * 用户可以像操作单个仓库一样操作 group 仓库，但实际上 nexus3 会根据配置的规则，从组内的多个仓库中寻找和提供构件。
  * group 仓库通常用于实现复杂的仓库管理策略，例如：可以将一个 proxy 仓库和一个或多个 hosted仓库组合在一起，以便在满足特定条件时从不同的仓库中获取软件包。

> 注意⚠️：这三种仓库类型提供了灵活的仓库管理策略，使得 nexus3 能够适应不同的软件开发和部署需求。通过合理配置这些仓库类型，可以优化构建流程，提高效率，同时确保依赖的一致性和安全性。

### 5.2.3 配置

#### 5.2.3.1 创建 blob 存储空间

* 因为 nexus3 可以作为多种软件包的集中式组件仓库，所以我们需要为其单独创建一个 blob 存储空间，即：

![image-20240309142652442](./assets/52.png)

![image-20240309142748388](./assets/53.png)

![image-20240309142818812](./assets/54.png)

#### 5.2.3.2 创建 hosted 类型的仓库

* 创建仓库：

![image-20240309142921618](./assets/55.png)

* 选择仓库的类型：

![image-20240309142957323](./assets/56.png)

* 填写关键信息，完成仓库的创建：

![](./assets/57.png)

![image-20240309144328206](./assets/58.png)

#### 5.2.3.3 创建 proxy 类型的仓库

* 和创建 hosted 类型的仓库的步骤类似，只不过需要填写远程 yum 仓库的地址，如：

![image-20240309145557434](./assets/59.png)

* 仓库创建完毕时的状态如下：

![image-20240309145709198](./assets/60.png)

#### 5.2.3.4 创建 group 类型的仓库

* 将刚才创建的 hosted 类型和 proxy 类型的仓库，组合为 group 类型，即：

![image-20240309145934873](./assets/61.png)

* 仓库创建完毕时的状态如下：

![image-20240309150013335](./assets/62.png)

## 5.3 配置 yum 源为 nexus3

* 在 nexus3 的界面中，复制 yum 源的地址：

![image-20240309150428604](./assets/63.png)

![image-20240309150516576](./assets/64.png)

* 临时禁用其他 yum 源：

```shell
dnf config-manager --disable baseos appstream epel extras
```

![](./assets/65.gif)

* 配置 yum 源：

```shell
cat > /etc/yum.repos.d/nexus3-baseos.repo <<'EOF'
[nexus-baseos]
name=Nexus AlmaLinux BaseOS
baseurl=http://192.168.10.1:8081/repository/proxy-aliyun-yum/$releasever/BaseOS/$basearch/os/
enabled=1
gpgcheck=1
countme=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-AlmaLinux-9
metadata_expire=86400
enabled_metadata=1
EOF
```

```shell
cat > /etc/yum.repos.d/nexus3-appstream.repo <<'EOF'
[nexus3-appstream]
name=AlmaLinux $releasever - AppStream
baseurl=http://192.168.10.1:8081/repository/proxy-aliyun-yum/$releasever/AppStream/$basearch/os/
enabled=1
gpgcheck=1
countme=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-AlmaLinux-9
metadata_expire=86400
enabled_metadata=1
EOF
```

> 注意⚠️：目前，官方没有解决 group 元数据合并问题，所以使用 proxy 类型的仓库。

![](./assets/66.gif)

## 5.4 测试

* 清除本地缓存，并重新构建缓存：

```shell
dnf clean all
```

```shell
dnf makecache
```

![](./assets/67.gif)

* 安装 Nginx 进行测试 ：

```shell
dnf -y install nginx
```

![](./assets/68.gif)
