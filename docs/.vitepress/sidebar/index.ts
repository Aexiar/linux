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
        { text: 'Linux 四剑客（一）', link: `/notes/01_linux_basic/08_${commonDirectoryName}/` },
        { text: 'Linux 用户管理体系', link: `/notes/01_linux_basic/09_${commonDirectoryName}/` },
        { text: 'Linux 权限管理体系', link: `/notes/01_linux_basic/10_${commonDirectoryName}/` },
        { text: 'Linux 之快速安装 Ubuntu', link: `/notes/01_linux_basic/11_${commonDirectoryName}/` },
        { text: 'Linux 软件包管理（一）', link: `/notes/01_linux_basic/12_${commonDirectoryName}/` },
        { text: 'Linux 软件包管理（二）', link: `/notes/01_linux_basic/13_${commonDirectoryName}/` },
        { text: 'Linux 进程管理', link: `/notes/01_linux_basic/14_${commonDirectoryName}/` },
        { text: 'Linux 服务管理', link: `/notes/01_linux_basic/15_${commonDirectoryName}/` },
        { text: 'Linux 磁盘管理', link: `/notes/01_linux_basic/16_${commonDirectoryName}/` },
        { text: 'Linux 正则表达式', link: `/notes/01_linux_basic/17_${commonDirectoryName}/` },
        { text: 'Linux 四剑客（二）', link: `/notes/01_linux_basic/18_${commonDirectoryName}/` },
        { text: 'Linux 定时任务', link: `/notes/01_linux_basic/19_${commonDirectoryName}/` },
        { text: '计算机网络基础', link: `/notes/01_linux_basic/20_${commonDirectoryName}/` },
        { text: 'Linux 网络管理', link: `/notes/01_linux_basic/21_${commonDirectoryName}/` },
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