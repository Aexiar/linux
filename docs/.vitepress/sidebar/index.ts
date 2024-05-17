import { DefaultTheme } from 'vitepress'
import { commonDirectoryName } from '../utils/constant'
export const sidebar: DefaultTheme.Sidebar = {
  '/notes/': [
    {
      text: 'Linux基础',
      collapsed: true,
      items: [
        { text: '计算机硬件与组成原理基础', link: `/notes/01_linux_basic/00_${commonDirectoryName}/` },
        { text: 'Linux 初识和安装', link: `/notes/01_linux_basic/01_${commonDirectoryName}/` },
        { text: 'Linux 基础和入门', link: `/notes/01_linux_basic/02_${commonDirectoryName}/` },
        { text: 'Linux 核心目录和必会命令', link: `/notes/01_linux_basic/03_${commonDirectoryName}/` },
        { text: 'Linux 目录进阶（一）', link: `/notes/01_linux_basic/04_${commonDirectoryName}/` },
        { text: 'Linux 目录进阶（二）', link: `/notes/01_linux_basic/05_${commonDirectoryName}/` },
        { text: 'Linux 文件管理体系', link: `/notes/01_linux_basic/06_${commonDirectoryName}/` },
        { text: 'Linux 标准 IO、重定向和管道', link: `/notes/01_linux_basic/07_${commonDirectoryName}/` },
        { text: '文本编辑器之神 VIM', link: `` },
        { text: '文本常见处理工具', link: `` },
        { text: '正则表达式', link: `` },
        { text: 'Linux 四剑客（一）', link: `/notes/01_linux_basic/08_${commonDirectoryName}/` },
        { text: 'SHELL 脚本编程（一）', link: `` },
        { text: 'Linux 用户管理体系', link: `/notes/01_linux_basic/13_${commonDirectoryName}/` },
        { text: 'Linux 权限管理体系', link: `/notes/01_linux_basic/14_${commonDirectoryName}/` },
        { text: 'Linux 之快速安装 Ubuntu', link: `/notes/01_linux_basic/15_${commonDirectoryName}/` },
        { text: 'Linux 软件包管理（一）', link: `/notes/01_linux_basic/16_${commonDirectoryName}/` },
        { text: 'Linux 软件包管理（二）', link: `/notes/01_linux_basic/17_${commonDirectoryName}/` },
        { text: 'Linux 四剑客（二）', link: `` },
        { text: 'Linux 磁盘存储和文件系统管理', link: `` },
        { text: '计算机网络基础', link: `` },
        { text: 'Linux 网络管理', link: `` },
        { text: 'SHELL 脚本编程（二）', link: `` },
        { text: 'Linux 进程管理', link: `` },
        { text: 'Linux 定时任务管理', link: `` },
        { text: 'Linux 启动和内核管理', link: `` },
        { text: '加密和安全', link: `` },
        { text: '运维自动化之系统部署', link: `` },
        { text: '域名系统 DNS 服务', link: `` },

      ]
    },
    {
      text: 'Linux集群',
      collapsed: true,
      items: [

      ]
    },
    {
      text: 'Linux自动化',
      collapsed: true,
      items: [

      ]
    },
    {
      text: 'Linux日志收集',
      collapsed: true,
      items: [

      ]
    },
    {
      text: '云原生生态',
      collapsed: true,
      items: [

      ]
    },
    {
      text: '虚拟化和云计算',
      collapsed: true,
      items: [

      ]
    },
    {
      text: '容器管理工具Docker',
      collapsed: true,
      items: [

      ]
    },
    {
      text: '容器管理工具Containerd',
      collapsed: true,
      items: [

      ]
    },
    {
      text: 'Kubernetes',
      collapsed: true,
      items: [

      ]
    },
    {
      text: '数据库',
      collapsed: true,
      items: [

      ]
    },
    {
      text: '微服务治理和服务网格',
      collapsed: true,
      items: [

      ]
    },
    {
      text: '下一代云计算技术Serverless',
      collapsed: true,
      items: [

      ]
    },
    {
      text: '基于Kubernetes构建大数据库生态圈',
      collapsed: true,
      items: [

      ]
    },
    {
      text: '其它',
      collapsed: true,
      items: [

      ]
    },
  ],
}

export default sidebar