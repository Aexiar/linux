> [!IMPORTANT]
>
> * ① winget 软件包管理器所管理的很多软件包可能会托管在 GitHub 上，因此需要你科学上网，否则可能会因为网络问题而导致软件包安装失败。
> * ② Win10 之后的很多系统内置软件，就是通过 winget 软件包管理器来进行安装的。



# 第一章：简介

## 1.1 Linux 中的软件包管理器

* 如果你玩过 Linux，一定对 Linux 中的软件包管理器并不陌生，如：`apt` 和 `dnf` 等，其主要目标是用来`解决依赖管理，简化软件包的安装`。

![Linux 中的软件包管理器](./assets/1.png)

## 1.2 Windows 中的软件包管理器

* Windows 操作系统本身就是以`图形用户界面（GUI）`为主，早期大多数人都是通过鼠标下一步来安装软件包，Windows 上的软件包的格式通常是 `.exe`、`.msi` 以及 `.zip`，一旦软件包更新之后（新版本的推出），还需要用户重新下载并进行安装，以便体验最新的功能。

![Windows 操作系统早期软件包的安装](./assets/2.png)

* 但是，随着时间的发展，Windows 社区吸收了 Linux 社区的思想，将软件包管理器也带入了 Windows 中，这样在 Windows 中我们也可以通过命令行来安装软件包。

> [!NOTE]
>
> * ① 软件包管理器是 Windows 的附加工具，用户可以选择使用，也可以直接通过网页或商店安装软件包。
> * ② 在 Windows 11、 Windows 10 1709（版本 16299）或更高版本上以及 Windows Server 2025 中，Windows 开箱支持 WinGet 程序包管理器。

* Linux 中的软件包管理器有多种，如：`dnf` 和 `apt` 等，Windows 也不例外，如下所示：
  * ① `winget（Windows Package Manager）`：Windows 官方支持，非常稳定。
  * ② `Chocolatey`：社区支持，但是维护的大量的软件包。
  * ③ `Scoop`：社区支持，主打轻量化。
  * ④ `Ninite`：一次性安装并更新所有程序（如果你不熟悉命令行，可以选择该工具）。

* WIndows 软件包管理器的特点，如下所示：

| Windows 软件包管理器 | 特点                                                         |
| -------------------- | ------------------------------------------------------------ |
| winget               | ① 官方提供，由微软开发。<br>② 命令行工具，可以快速安装、升级和卸载软件。<br>③ 包含常见的第三方软件包。 |
| Chocolatey           | ① 长期流行的第三方软件包管理器。<br>② 支持许多开发工具、服务和常见软件。<br/>③ 提供商业版支持。 |
| Scoop                | ① 专注于开发者工具，如：编程语言、数据库等。<br>② 无需管理员权限即可安装。<br>③ 使用简洁，易于扩展。 |
| Ninite               | ① 简单易用，适合普通用户。<br>② 自动化安装和更新常见软件，如：浏览器、媒体播放器等。 |

## 1.3 软件包管理器原理

* ① 用户通过`命令行`执行`命令`。
* ② `软件包管理器`去`远程仓库`下载对应的软件包并安装到本地计算机。

![](./assets/1.svg)



# 第二章：winget

## 2.1 概述

* 开发人员可以使用 `winget` 命令行工具发现、安装、升级、删除和配置特选应用程序集。 
* 安装后，开发人员可以通过 Windows 终端、PowerShell 或命令提示符访问 `winget`。

## 2.2 启用 tab 自动补全（仅限于 PowerShell ）

### 2.2.1 PowerShell 修改安全策略

* ① 使用 `win + x` 快捷键，选择 `Windows PowerShell（管理员）`：

::: code-group

```powershell 
win + x
```

```md:img [cmd 控制台]
![](./assets/3.png)
```

:::

* ② 修改安全策略：

::: code-group

```powershell 
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

```md:img [cmd 控制台]
![](./assets/4.png)
```

:::

* ③ 关闭终端，并重新打开：

![](./assets/5.gif)

### 2.2.2 启用 Tab 自动补全

* ① 打开 PowerShell ，并输入以下命令，在记事本中打开 `$PROFILE`：

::: code-group

```powershell 
notepad.exe $PROFILE
```

```md:img [cmd 控制台]
![](./assets/6.gif)
```

:::

* ② 将以下脚本复制并粘贴到已在记事本中打开的 `$PROFILE` 文件，保存并关闭 PowerShell ：

::: code-group

```powershell 
Register-ArgumentCompleter -Native -CommandName winget -ScriptBlock {
    param($wordToComplete, $commandAst, $cursorPosition)
        [Console]::InputEncoding = [Console]::OutputEncoding = $OutputEncoding = [System.Text.Utf8Encoding]::new()
        $Local:word = $wordToComplete.Replace('"', '""')
        $Local:ast = $commandAst.ToString().Replace('"', '""')
        winget complete --word="$Local:word" --commandline "$Local:ast" --position $cursorPosition | ForEach-Object {
            [System.Management.Automation.CompletionResult]::new($_, $_, 'ParameterValue', $_)
        }
}
```

```md:img [cmd 控制台]
![](./assets/7.gif)
```

:::

* ③ 重新打开 PowerShell ，就会发现 `winget tab` 可以自动补全：

![](./assets/8.gif)

## 2.3 基本操作（CRUD，⭐）

### 2.3.1 搜索软件

* 命令：

```shell
winget search [可选参数] [-q] <软件名> 
```

> [!NOTE]
>
> 参数：
>
> * `-q、--query`：查询标志是用于搜索应用的默认参数。 无需指定。
>
> 可选参数：
>
> * `--id`：将搜索限制为应用程序的 ID。 该 ID 包含发布者和应用程序名称。
> * `--name`：将搜索限制为应用程序的名称。
> * `-s、--source`：使用指定的源名称（msstore 等）查找包。
> * `--versions`：显示程序包的可用版本。



* 示例：查询指定的软件包

::: code-group

```cmd [cmd 命令]
winget search nodejs
```

```md:img [cmd 控制台]
![](./assets/1.gif)
```

:::



* 示例：根据 id 查询指定的软件包

::: code-group

```cmd [cmd 命令]
winget search --id OpenJS.NodeJS
```

```md:img [cmd 控制台]
![](./assets/10.gif)
```

:::



* 示例：根据 name 查询指定的软件包

::: code-group

```cmd [cmd 命令]
winget search --name Node.js
```

```md:img [cmd 控制台]
![](./assets/11.gif)
```

:::



* 示例：查询所有可用的软件包

::: code-group

```cmd [cmd 命令]
winget search -q ""
```

```md:img [cmd 控制台]
![](./assets/12.gif)
```

:::



* 示例：跨源搜索（结果范围缩小到特定源）

::: code-group

```cmd [cmd 命令]
winget search "Visual Studio Code" -s msstore
```

```md:img [cmd 控制台]
![](./assets/13.gif)
```

:::



* 示例：显示软件包的所有可用版本（软件包需要精确匹配）

::: code-group

```cmd [cmd 命令]
winget search --id Microsoft.PowerToys --versions
```

```md:img [cmd 控制台]
![](./assets/14.gif)
```

:::

### 2.3.2 安装软件

* 命令：

```shell
winget install [可选参数] [-q] <软件名> 
```

> [!NOTE]
>
> 参数：
>
> * `-q、--query`：查询标志是用于搜索应用的默认参数（ 无需指定）。
>
> 可选参数：
>
> * `--id`：将搜索限制为应用程序的 ID。 该 ID 包含发布者和应用程序名称。
> * `--name`：将搜索限制为应用程序的名称。
> * `-v、--version`：指定要安装的确切版本。 如果此项未指定，则使用 `latest` 会安装最高版本的应用程序。
> * `-s、--source`：使用指定的源名称（msstore 等）查找包。
> * `-l、--location`：指定需要安装到的位置（并非所有的软件都支持该参数），如果不指定，默认就安装到 `C:\Program Files\WindowsApps`目录中。



* 示例：安装 powertoys（需要精确匹配）

::: code-group

```cmd [cmd 命令]
winget install --id Microsoft.PowerToys
```

```md:img [cmd 控制台]
![](./assets/15.gif)
```

:::



* 示例：安装指定版本的 powertoys

::: code-group

```cmd [cmd 命令]
winget install --id Microsoft.PowerToys --version 0.17.0
```

```md:img [cmd 控制台]
![](./assets/16.gif)
```

:::



* 示例：安装到指定位置

::: code-group

```cmd [cmd 命令]
winget install --id Apache.Groovy.4 -l D:\develop\groovy
```

```md:img [cmd 控制台]
![](./assets/17.gif)
```

:::

### 2.3.3 升级软件

* 命令：

```shell
winget upgrade [可选参数] [-q] <软件名> 
```

> [!NOTE]
>
> 参数：
>
> * `-q、--query`：查询标志是用于搜索应用的默认参数（ 无需指定）。
>
> 可选参数：
>
> * `--id`：将搜索限制为应用程序的 ID。 该 ID 包含发布者和应用程序名称。
> * `--name`：将搜索限制为应用程序的名称。
> * `-v、--version`：指定要安装的确切版本。 如果此项未指定，则使用 `latest` 会安装最高版本的应用程序。



* 示例：更新指定软件包

::: code-group

```cmd [cmd 命令]
winget upgrade --id Apache.Groovy.4
```

```md:img [cmd 控制台]
![](./assets/18.gif)
```

:::



* 示例：更新所有软件包

::: code-group

```cmd [cmd 命令]
winget upgrade --all --force --unknown
```

```md:img [cmd 控制台]
![](./assets/19.gif)
```

:::

### 2.3.4 查询本地已安装的软件

* 命令：

```shell
winget list  [可选参数] [-q] <软件名> 
```

> [!NOTE]
>
> 参数：
>
> * `-q、--query`：查询标志是用于搜索应用的默认参数（ 无需指定）。
>
> 可选参数：
>
> * `--id`：将搜索限制为应用程序的 ID。 该 ID 包含发布者和应用程序名称。
> * `--name`：将搜索限制为应用程序的名称。
> * `-n、--count`：限制查询中显示的应用个数。
> * `-s、--source`：使用指定的源名称（msstore 等）查找包。



* 示例：查询本地是否安装有 Git

::: code-group

```cmd [cmd 命令]
winget list git
```

```md:img [cmd 控制台]
![](./assets/20.gif)
```

:::



* 示例：查询本地安装的所有应用

::: code-group

```cmd [cmd 命令]
winget list
```

```md:img [cmd 控制台]
![](./assets/21.gif)
```

:::



* 示例：查询本地安装的所有应用，但是限制输出为 9 个

::: code-group

```cmd [cmd 命令]
winget list -n 9
```

```md:img [cmd 控制台]
![](./assets/22.gif)
```

:::



* 示例：查询本地安装有指定源的所有应用，但是限制输出为 9 个

::: code-group

```cmd [cmd 命令]
winget list --source winget -n 9
```

```md:img [cmd 控制台]
![](./assets/23.gif)
```

:::

### 2.3.5 卸载软件

* 命令：

```shell
winget uninstall [可选参数] [-q] <软件名> 
```

> [!NOTE]
>
> 参数：
>
> * `-q、--query`：查询标志是用于搜索应用的默认参数（ 无需指定）。
>
> 可选参数：
>
> * `--id`：将搜索限制为应用程序的 ID。 该 ID 包含发布者和应用程序名称。
> * `--name`：将搜索限制为应用程序的名称。
> * `-s、--source`：使用指定的源名称（msstore 等）查找包。



* 示例：卸载指定的软件

::: code-group

```cmd [cmd 命令]
winget uninstall --id Apache.Groovy.4
```

```md:img [cmd 控制台]
![](./assets/24.gif)
```

:::

## 2.4 winget 镜像源

### 2.4.1 概述

* 之前提过，软件包管理器是需要远程仓库（镜像源，存储库）来托管软件包，如下所示：

![](./assets/1.svg)

* 但是，默认情况下，winget 有些软件包是托管到 GitHub 上的，在国内如果使用 winget 进行软件包的下载会很慢，所以就需要切换到国内的 winget 的镜像源（存储库），如下所示：

![](./assets/2.svg)

### 2.4.2 查看 winget 镜像源

* 命令：

```shell
winget source list [-name 镜像源名称]
```

> [!NOTE]
>
> 默认情况下，winget 会配置两个镜像源，如下所示：
>
> * ① msstore ：Microsoft Store 目录。
> * ② winget ：Windows 程序包管理器应用镜像源。
>
> 可选参数：
>
> * `-name`：获取有关镜像源的完整详细信息。



* 示例：查询所有的镜像源

::: code-group

```cmd [cmd 命令]
winget source list
```

```md:img [cmd 控制台]
![](./assets/25.gif)
```

:::



* 示例：查询指定镜像源的详细信息

::: code-group

```cmd [cmd 命令]
winget source list --name winget
```

```md:img [cmd 控制台]
![](./assets/26.gif)
```

:::

### 2.4.3 添加 winget 镜像源

* 命令：

```shell
winget source add <镜像源名称> <镜像源的 URL 地址> --trust-level trusted
```

> [!CAUTION]
>
> 由于该命令会更改用户访问权限，因此使用 add 需要管理员权限。



* 示例：

::: code-group

```cmd [cmd 命令]
winget source add ustc https://mirrors.ustc.edu.cn/winget-source --trust-level trusted
```

```md:img [cmd 控制台]
![](./assets/27.gif)
```

:::

### 2.4.4 更新 winget 镜像源

* 命令：

```shell
winget source update [--name <镜像源名称>]
```



* 示例：更新所有镜像源

::: code-group

```cmd [cmd 命令]
winget source update
```

```md:img [cmd 控制台]
![](./assets/28.gif)
```

:::



* 示例：更新指定镜像源

::: code-group

```cmd [cmd 命令]
winget source update --name winget
```

```md:img [cmd 控制台]
![](./assets/29.gif)
```

:::

### 2.4.5 删除 winget 镜像源

* 命令：

```shell
winget source remove --name <镜像源名称>
```

> [!CAUTION]
>
> 由于该命令会更改用户访问权限，因此使用 remove 需要管理员权限。



* 示例：

::: code-group

```cmd [cmd 命令]
winget source remove --name winget
```

```md:img [cmd 控制台]
![](./assets/30.gif)
```

:::

### 2.4.6 重置 winget 镜像源

* 命令：

```shell
winget source reset --force
```

> [!CAUTION]
>
> * ① reset 子命令用于将客户端重置为其原始配置，并删除除默认源之外的所有源。 
> * ② 由于该命令会更改用户访问权限，因此使用 reset 需要管理员权限。



* 示例：

::: code-group

```cmd [cmd 命令]
winget source reset --force
```

```md:img [cmd 控制台]
![](./assets/31.gif)
```

:::

## 2.5 其余命令

### 2.5.1 显示应用程序的详细信息

* 命令：

```shell
winget show [可选参数] [-q] <软件名> 
```

> [!NOTE]
>
> 参数：
>
> * `-q、--query`：查询标志是用于搜索应用的默认参数（ 无需指定）。
>
> 可选参数：
>
> * `--id`：将搜索限制为应用程序的 ID。 该 ID 包含发布者和应用程序名称。



* 示例：

::: code-group

```cmd [cmd 命令]
winget show --name Apache.Groovy.4
```

```md:img [cmd 控制台]
![](./assets/32.gif)
```

:::

### 2.5.2 应用程序的批量导出和批量导入

* 命令：

```shell
winget export [-o] xxx.json # 将应用程序的 JSON 文件导出到指定文件
```

```shell
winget import [-i] xxx.json # 导入要安装的应用的 JSON 文件
```

> [!NOTE]
>
> 应用场景：主要用于与其他开发人员共享该文件，或在还原开发、测试或生产环境。



* 示例：

::: code-group

```cmd [cmd 命令]
winget export -o package.json
```

```md:img [cmd 控制台]
![](./assets/33.gif)
```

:::



# 第三章：Chocolatey

## 3.1 概述

* Chocolatey 是长期流行的第三方软件包管理器，支持许多开发工具、服务和常见软件，其还提供商业版支持。

> [!NOTE]
>
> ::: details 点我查看 为什么还介绍 Chocolatey ？
>
> 因为有些软件还没有对 winget 进行适配，如：Maven 和 Gradle，如下所示：
>
> ![部分软件没有对 winget 进行适配](./assets/34.png)
> :::

## 3.2 安装

### 3.2.1 winget 安装 Chocolatey（推荐） 

* 使用 winget 命令进行安装：

::: code-group

```cmd [cmd 命令]
winget install --id Chocolatey.Chocolatey
```

```md:img [cmd 控制台]
![](./assets/35.gif)
```

:::

### 3.2.2 手动执行命令安装 Chocolatey 

* 使用管理员的权限执行以下的命令：

::: code-group

```cmd
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

```md:img [cmd 控制台]
![](./assets/36.gif)
```

:::

## 3.3 Chocolatey 远程仓库的使用

* 和 winget 不同的是，Chocolatey  提供了一个[可视化界面](https://community.chocolatey.org/packages)来辅助我们使用，如下所示：

![](./assets/37.png)

* 我们就可以在这个[可视化界面](https://community.chocolatey.org/packages)中搜索想要的软件包，获取软件包安装的命令，如下所示：

![](./assets/38.png)

## 3.4 基本操作（CRUD，⭐）

### 3.4.1 搜索软件

* 命令：

```shell
choco search <软件名> [可选参数]
```

> [!NOTE]
>
> 可选参数：
>
> * `-y, --yes, --confirm`：确认所有提示。
> * `-s、--source`：使用指定的源名称（windowsfeatures、ruby、cygwin、python 等）查找包。
> * `-a, --all, --allversions, --all-versions`：显示程序包的可用版本。
> * `-e, --exact`：精确搜索。



* 示例：查询指定的软件包

::: code-group

```cmd [cmd 命令]
choco search nodejs
```

```md:img [cmd 控制台]
![](./assets/39.gif)
```

:::



* 示例：精确查找指定的软件包

::: code-group

```cmd [cmd 命令]
choco search nodejs --exact
```

```md:img [cmd 控制台]
![](./assets/40.gif)
```

:::



* 示例：查询所有可用的软件包

::: code-group

```cmd [cmd 命令]
choco search ""
```

```md:img [cmd 控制台]
![](./assets/41.gif)
```

:::



* 示例：分页搜索软件包

::: code-group

```cmd [cmd 命令]
choco search jdk --page=0 --page-size=25
```

```md:img [cmd 控制台]
![](./assets/42.gif)
```

:::



* 示例：显示软件包的所有可用版本（软件包需要精确匹配）

::: code-group

```cmd [cmd 命令]
choco search 7zip --all-versions --exact
```

```md:img [cmd 控制台]
![](./assets/43.gif)
```

:::

### 3.4.2 安装软件

* 命令：

```shell
choco search <软件名> [可选参数]
```

> [!NOTE]
>
> 可选参数：
>
> * `-s、--source`：使用指定的源名称（windowsfeatures、ruby、cygwin、python 等）查找包。
> * `-f、--force`：强制安装，忽略已安装的相同版本。
> * `-d、--debug`：启用调试模式。
> * `-v、--verbose`：启用详细输出（verbose logging）。
> * `-y, --yes, --confirm`：确认所有提示。
> * `--params=""`：传递给软件包的参数。
> * `--install-arguments=""`：安装参数，直接传递给程序。



* 示例：安装 git 软件包

::: code-group

```cmd [cmd 命令]
choco install git
```

```md:img [cmd 控制台]
![](./assets/44.gif)
```

:::



* 示例：一次性安装多个软件包，并确认所有提示

::: code-group

```cmd [cmd 命令]
choco install notepadplusplus googlechrome 7zip -y
```

```md:img [cmd 控制台]
![](./assets/45.gif)
```

:::



* 示例：强制重新安装软件，并强制重新安装其依赖项

::: code-group

```cmd [cmd 命令]
choco install notepadplusplus --force --force-dependencies
```

```md:img [cmd 控制台]
![](./assets/46.gif)
```

:::



* 示例：安装多个软件包，启用详细输出并强制安装

::: code-group

```cmd [cmd 命令]
choco install notepadplusplus googlechrome 7zip -dvfy
```

```md:img [cmd 控制台]
![](./assets/47.gif)
```

:::



* 示例：安装 Git ，并传递参数给 Git 

::: code-group

```cmd [cmd 命令]
choco install git -y --params="'/GitAndUnixToolsOnPath'"
```

```md:img [cmd 控制台]
![](./assets/48.gif)
```

:::



* 示例：安装 Git ，指定额外的安装参数

::: code-group

```cmd [cmd 命令]
choco install git -y --params="'/GitAndUnixToolsOnPath'" --install-arguments="'/DIR=C:\git'"
```

```md:img [cmd 控制台]
![](./assets/49.gif)
```

:::



* 示例：安装指定版本的 Node.js

::: code-group

```cmd [cmd 命令]
choco install nodejs --version 22.2.0
```

```md:img [cmd 控制台]
![](./assets/50.gif)
```

:::

### 3.4.3 升级软件

* 命令：

```shell
choco upgrade <软件名> [可选参数]
```

> [!NOTE]
>
> 可选参数：
>
> * `-s、--source`：使用指定的源名称（windowsfeatures、ruby、cygwin、python 等）查找包。
> * `-f、--force`：强制安装，忽略已安装的相同版本。
> * `-d、--debug`：启用调试模式。
> * `-v、--verbose`：启用详细输出（verbose logging）。
> * `-y, --yes, --confirm`：确认所有提示。
> * `--params=""`：传递给软件包的参数。
> * `--install-arguments=""`：安装参数，直接传递给程序。
>
> 准备工作：
>
> ```cmd
> choco install notepadplusplus --version 8.6.5 -fy --force-dependencies
> choco install git --version 2.41.0 -fy --force-dependencies
> choco install nodejs --version 22.2.0 -fy --force-dependencies
> ```



* 示例：更新 chocolatey

::: code-group

```cmd [cmd 命令]
choco upgrade chocolatey
```

```md:img [cmd 控制台]
![](./assets/51.gif)
```

:::



* 示例：批量更新多个软件包

::: code-group

```cmd [cmd 命令]
choco upgrade notepadplusplus
```

```md:img [cmd 控制台]
![](./assets/52.gif)
```

:::



* 示例：批量更新多个软件包，启用详细输出并强制安装

::: code-group

```cmd [cmd 命令]
choco upgrade notepadplusplus  -dvfy
```

```md:img [cmd 控制台]
![](./assets/53.gif)
```

:::



* 示例：更新软件包，并传递参数

::: code-group

```cmd [cmd 命令]
choco upgrade git -y --params="'/GitAndUnixToolsOnPath /NoAutoCrlf'"
```

```md:img [cmd 控制台]
![](./assets/54.gif)
```

:::



* 示例：更新软件包，并指定额外的安装参数

::: code-group

```cmd [cmd 命令]
choco upgrade git -y --params="'/GitAndUnixToolsOnPath /NoAutoCrlf'" --install-args="'/DIR=C:\git'"
```

```md:img [cmd 控制台]
![](./assets/55.gif)
```

:::



* 示例：将软件包更新到指定的版本

::: code-group

```cmd [cmd 命令]
choco upgrade nodejs.install --version 23.6.0
```

```md:img [cmd 控制台]
![](./assets/56.gif)
```

:::



* 示例：排除某些软件之后，更新剩下的全部软件

::: code-group

```cmd [cmd 命令]
choco upgrade all --except="'git,notepadplusplus'"
```

```md:img [cmd 控制台]
![](./assets/57.gif)
```

:::



* 示例：更新所有软件

::: code-group

```cmd [cmd 命令]
choco upgrade all
```

```md:img [cmd 控制台]
![](./assets/58.gif)
```

:::

### 3.4.4 查询本地已安装的软件

* 命令：

```shell
choco list <软件名> [可选参数]
```

> [!NOTE]
>
> 可选参数：
>
> * `-i、--includeprograms、--include-programs`：显示安装到计算机上的所有软件，包括哪些不是由 Chocolatey  管理的。



* 示例：显示通过 Chocolatey  安装到计算机上的软件

::: code-group

```cmd [cmd 命令]
choco list 
```

```md:img [cmd 控制台]
![](./assets/59.gif)
```

:::



* 示例：显示计算机上的所有软件，包括不是由 Chocolatey  管理的

::: code-group

```cmd [cmd 命令]
choco list -i
```

```md:img [cmd 控制台]
![](./assets/60.gif)
```

:::

### 3.4.5 卸载软件

* 命令：

```shell
choco uninstall <软件名> [可选参数]
```

> [!NOTE]
>
> 可选参数：
>
> * `-f、--force`：强制安装，忽略已安装的相同版本。
> * `-d、--debug`：启用调试模式。
> * `-v、--verbose`：启用详细输出（verbose logging）。
> * `-y, --yes, --confirm`：确认所有提示。
> * `--version`：卸载软件的指定版本。
> * `--all-versions`：卸载软件的所有版本。



* 示例：卸载指定的软件

::: code-group

```cmd [cmd 命令]
choco uninstall git
```

```md:img [cmd 控制台]
![](./assets/61.gif)
```

:::



* 示例：批量卸载软件

::: code-group

```cmd [cmd 命令]
choco uninstall notepadplusplus googlechrome -dv
```

```md:img [cmd 控制台]
![](./assets/62.gif)
```

:::



* 示例：卸载软件的指定版本

::: code-group

```cmd [cmd 命令]
choco uninstall nodejs --version 23.6.0 -fy
```

```md:img [cmd 控制台]
![](./assets/63.gif)
```

:::



* 示例：卸载软件的所有版本

::: code-group

```cmd [cmd 命令]
choco uninstall nodejs --all-versions
```

```md:img [cmd 控制台]
![](./assets/64.gif)
```

:::



# 第四章：包管理器图形化解决方案 --- UniGetUI

## 4.1 概述

* UniGetUI 主要目标是为 Windows 10 和 Windows 11 的最常见 CLI 包管理器创建直观的 GUI，例如：[WinGet](https://learn.microsoft.com/en-us/windows/package-manager/) 、 [Scoop](https://scoop.sh/) 、 [Chocolatey](https://chocolatey.org/) 、 [Pip](https://pypi.org/) 、 [Npm](https://www.npmjs.com/) 、 [.NET Tool](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-tool-install) 、 [PowerShell Gallery](https://www.powershellgallery.com/) 等。
* 使用此应用程序，可以轻松下载、安装、更新和卸载在受支持的包管理器上发布的任何软件 。

## 4.2 安装

* 可以通过 winget 等软件包管理器安装：

::: code-group

```cmd [winget]
winget install --exact --id MartiCliment.UniGetUI --source winget
```

```cmd [choco]
choco install wingetui
```

```md:img [cmd 控制台]
![](./assets/70.gif)
```

:::

## 4.3 使用

* 使用方式很简单，就是在图形化界面上操作，如下所示：

![](./assets/71.gif)



# 第五章：Oh My Posh

## 5.1 概述

* [Oh My Posh](https://ohmyposh.dev/)  的主旨是：`适用于任何 shell 的最可定制和最快的提示引擎`。

![](./assets/image-20260225210329017.png)

## 5.2  Windows 安装和配置

### 5.2.1 安装和更新  Oh My Posh

* ① 安装 Oh My Posh ：

::: code-group

```cmd [winget]
winget install JanDeDobbeleer.OhMyPosh --source winget
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-2-25-21-13-41.gif)
```

:::

* ② 更新 Oh My Posh（可选）：

::: code-group

```cmd [winget]
winget upgrade JanDeDobbeleer.OhMyPosh --source winget
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-2-25-21-15-42.gif)
```

:::

### 5.2.2 安装字体

* ① 升级 PowerShell ：

::: code-group

```cmd [cmd]
:: 安装/更新到最新版 PowerShell 7
winget install --id Microsoft.PowerShell --source winget

:: 启用自动更新
winget upgrade Microsoft.PowerShell --silent

:: 查看 Windows PowerShell 5.1 版本
powershell -command "$PSVersionTable.PSVersion"

:: 查看 PowerShell 7.x 版本
pwsh -command "$PSVersionTable.PSVersion"
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-2-25-21-36-46.gif)
```

:::

* ② 安装字体 ：

> [!NOTE]
>
> * ① 字体需要安装在主机系统上，因为这是 UI 设置，不是命令行或 shell 配置。
> * ② 这意味着在 `容器` 或 `WSL` 中运行时，我们需要在主机系统上安装字体，并配置终端模拟器使用它。

::: code-group

```cmd [cmd]
oh-my-posh font install meslo
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-2-25-21-27-21.gif)
```

```powershell [powershell]
# 安装 NerdFonts 模块以便安装 Nerd 字体
Install-PSResource -Name NerdFonts
Import-Module -Name NerdFonts

# 当前用户
Install-NerdFont -Name FiraCode 
# 所有用户，需要管理员权限
Install-NerdFont -Name FiraCode -Scope AllUsers
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-2-25-21-33-44.gif)
```

:::

### 5.2.3 给终端或编辑器配置字体

* ① 对于 Windows 终端，我们需要配置刚安装的字体：

> [!NOTE]
>
> * ① 可以通过修改 WIndows 终端设置来完成配置字体，默认的快捷键是 `CTRL + SHIFT + ,`，也可以通过图形化的方式来配置。
> * ② 在自己的 `settings.json` 文件中，在 `profiles` 中 `defaults` 属性下的 `font.face` 属性进行配置。

::: code-group

```json [settings.json]
{
    "profiles":
    {
        "defaults":
        {
            "font":
            {
                "face": "MesloLGM Nerd Font"
            }
        }
    }
    }
}
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-2-25-21-48-44.gif)
```

:::

* ② 对于 Visual Studio Code，我们需要配置刚安装的字体（其他编辑器类似）：

> [!NOTE]
>
> * ① 我们可以在 `用户 --> 功能 --> 终端` 中配置刚安装的字体。
> * ② 也可以修改配置文件来配置刚安装的字体（默认快捷键是 `CTRL +  + ,`），只需要更新 `terminal.integrated.fontFamily` 对应的值。

::: code-group

```json [settings.json]
"terminal.integrated.fontFamily": "MesloLGM Nerd Font"
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-2-25-21-55-22.gif)
```

:::

### 5.2.4 配置 Shell 去使用 Oh My Posh

* 对于 cmd 来说，可以使用 clink 来实现自定义提示（间接使用 Oh My Posh ）：

> [!NOTE]
>
> clink 默认内置支持 Oh My Posh。 

::: code-group

```cmd [winget]
# 安装 clink
winget install clink
# 开启顺泰提示符
clink set prompt.transient same_dir
# 去掉启动 banner
clink autorun install -- --quiet
# 启用 Oh My Posh
clink config prompt use oh-my-posh
```

```cmd [scoop]
# 安装 clink
scoop install clink
# 开启顺泰提示符
clink set prompt.transient same_dir
# 去掉启动 banner
clink autorun install -- --quiet
# 启用 Oh My Posh
clink config prompt use oh-my-posh
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-2-25-22-09-48.gif)
```

:::

* 对于 powershell 来说，只需要编辑 `$PROFILE` 变量对应的文件即可：

::: code-group

```powershell [powershell]
# 创建对应的文件
if (!(Test-Path -Path $PROFILE)) {
    New-Item -Path $PROFILE -Type File
}
# 如果上述命令执行失败，执行如下命令
set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine
# 在 PowerShell 配置文件脚本中添加以下摘要作为最后一行
"oh-my-posh init pwsh | Invoke-Expression" | Add-Content $PROFILE
# 查看是否修改成功
notepad $PROFILE
# 添加后，重新加载你的个人资料，以便更改生效
. $PROFILE
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-2-25-22-22-23.gif)
```

:::

## 5.3 Linux 安装和配置

### 5.3.1 安装和更新  Oh My Posh

* ① 需要安装 `curl`、`unzip`、`realpath`、`dirname` 等必要工具：

::: code-group

```bash [AlmaLinux9]
# 更新软件包索引（可选）
sudo dnf makecache
# 安装 curl 和 unzip
sudo dnf install -y curl unzip
# 验证安装
curl --version
unzip -v
which realpath
which dirname
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-2-27-16-03-01.gif)
```

```bash [Ubuntu24.04]
# 更新软件包索引
sudo apt update
# 安装 curl 和 unzip
sudo apt install -y curl unzip
# 验证安装
curl --version
unzip -v
which realpath
which dirname
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-2-27-16-14-58.gif)
```

:::

* ② 安装和更新 Oh My Posh ：

::: code-group

```bash [AlmaLinux9]
curl -s https://ohmyposh.dev/install.sh | bash -s -- -d /usr/local/bin
sudo chmod +x /usr/local/bin/oh-my-posh
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-2-27-16-50-15.gif)
```

```bash [Ubuntu24.04]
curl -s https://ohmyposh.dev/install.sh | bash -s -- -d /usr/local/bin
sudo chmod +x /usr/local/bin/oh-my-posh
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-2-27-16-51-21.gif)
```

:::

### 5.2.2 安装字体（非必须）

* 安装字体 ：

> [!NOTE]
>
> * ① 字体需要安装在主机系统上，因为这是 UI 设置，不是命令行或 shell 配置。
> * ② 这意味着在 `容器` 或 `WSL` 中运行时，我们需要在主机系统上安装字体，并配置终端模拟器使用它。

::: code-group

```bash [AlmaLinux9]
oh-my-posh font install meslo
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-2-27-16-55-52.gif)
```

```bash [Ubuntu24.04]
oh-my-posh font install meslo
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-2-27-16-58-02.gif)
```

:::

### 5.2.3 给终端或编辑器配置字体

* ① 对于 Windows 终端，我们需要配置刚安装的字体：

> [!NOTE]
>
> * ① 可以通过修改 WIndows 终端设置来完成配置字体，默认的快捷键是 `CTRL + SHIFT + ,`，也可以通过图形化的方式来配置。
> * ② 在自己的 `settings.json` 文件中，在 `profiles` 中 `defaults` 属性下的 `font.face` 属性进行配置。

::: code-group

```json [settings.json]
{
    "profiles":
    {
        "defaults":
        {
            "font":
            {
                "face": "MesloLGM Nerd Font"
            }
        }
    }
    }
}
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-2-25-21-48-44.gif)
```

:::

* ② 对于 Visual Studio Code，我们需要配置刚安装的字体（其他编辑器类似）：

> [!NOTE]
>
> * ① 我们可以在 `用户 --> 功能 --> 终端` 中配置刚安装的字体。
> * ② 也可以修改配置文件来配置刚安装的字体（默认快捷键是 `CTRL +  + ,`），只需要更新 `terminal.integrated.fontFamily` 对应的值。

::: code-group

```json [settings.json]
"terminal.integrated.fontFamily": "MesloLGM Nerd Font"
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-2-25-21-55-22.gif)
```

:::

### 5.2.4 配置 Shell 去使用 Oh My Posh

* 对于 bash 来说，只需要激活 Oh My Posh 即可：

::: code-group

```bash
# 激活 Oh My Posh 
grep -q 'oh-my-posh init' ~/.bashrc || echo 'eval "$(oh-my-posh init bash)"' >> ~/.bashrc
# 重新加载
exec bash
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-2-27-17-09-13.gif)
```

:::

* 对于 fish 来说，只需要激活 Oh My Posh 即可：

::: code-group

```bash [fish]
# 激活 Oh My Posh 
grep -q 'oh-my-posh init' ~/.config/fish/config.fish || echo 'oh-my-posh init fish | source' >> ~/.config/fish/config.fish
# 重新加载
exec fish
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-2-27-17-07-58.gif)
```

:::

## 5.4 下一代 ls 命令

### 5.4.1 Windows 安装和配置

* 对于 Windows 需要安装 lsd ，如下所示：

::: code-group

```cmd [winget]
winget install --id lsd-rs.lsd
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-03-02-14-11-20.gif)
```

```cmd [scoop]
scoop install lsd
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-03-02-15-59-10.gif)
```

:::

* 对于 cmd（clink）需要查看插件目录：

::: code-group

```cmd 
clink info
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-03-02-16-00-07.gif)
```

:::

* 为了让 cmd 启动的时候自动运行 lsd，在 clink 插件目录中，创建 `clink_startup.lua` 脚本，内容如下：

::: code-group

```lua [clink_startup.lua]
os.execute('doskey ll=lsd -l $*')
os.execute('doskey la=lsd -a $*')
os.execute('doskey lla=lsd -la $*')
os.execute('doskey lt=lsd --tree $*')
os.execute('doskey pwd=cd')
os.execute('doskey clear=cls')
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-03-02-16-01-23.gif)
```

:::

* 对于 powershell ，只需要通过修改配置文件即可：

::: code-group

```powershell
notepad $PROFILE

# 只有当 lsd 命令存在时才设置别名，防止报错
if (Get-Command lsd -ErrorAction SilentlyContinue) {
    function ll { lsd -l $args }
	function la { lsd -a $args}
	function lla { lsd -la $args}
	function lt { lsd --tree $args}
}

# 加载配置文件
. $PROFILE
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-03-02-16-13-30.gif)
```

:::

### 5.4.2 Linux 安装和配置

* Linux 直接通过 `cargo` 或`包管理器`进行安装：

::: code-group

```bash [AlmaLinux9]
dnf install -y rust cargo
cargo install lsd
ln -s $HOME/.cargo/bin/lsd /usr/local/bin/lsd
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-03-02-16-53-23.gif)
```

```bash [Ubuntu24.04]
apt -y install lsd
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-03-02-16-54-23.gif)
```

:::

* 在 Shell 中配置命令别名：

::: code-group

```bash 
# 写入到配置文件中
cat >> ~/.bashrc << 'EOF'
if command -v lsd &> /dev/null; then
    alias ll='lsd -l'
    alias la='lsd -a'
    alias lla='lsd -la'
    alias lt='lsd --tree'
fi
EOF
# 加载配置文件
source ~/.bashrc
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-03-02-17-05-23.gif)
```

```fish
alias -s ll 'lsd -l'
alias -s la 'lsd -a'
alias -s lla 'lsd -la'
alias -s lt 'lsd --tree'
```

```md:img [cmd 控制台]
![](./assets/GIF-2026-03-02-17-09-13.gif)
```

:::

