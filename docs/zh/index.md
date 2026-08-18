---
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-layout
layout: home
home: true

# 官方文档相关配置：https://vitepress.dev/reference/default-theme-home-page
lang: zh-CN
title: 许大仙的博客
titleTemplate: Hi，终于等到你
editLink: true
lastUpdated: true

# 指定要为当前页面注入的额外头标签。将附加在站点级配置注入的头标签之后
head:
  - - meta
    - name: description
      content: 为知笔记，系统整理 Linux、容器、Kubernetes、DevOps 与云原生实践
  - - meta
    - name: keywords
      content: 许大仙，许大仙的博客

hero:
  name: "云原生"
  text: "从基础到实践"
  tagline: ""
  image:  # text 和 tagline 区域旁的图片
    src: /logo.png
    alt: "为知笔记"
  # 按钮相关
  actions:
    - theme: brand
      text: "🏠首页"
      link: "/"        
    - theme: alt
      text: "🎉快速开始"
      link: "/guide"            

# 按钮下方的描述
features:
  - icon: 🧠
    title: "夯实技术基础"
    details: "从计算机基础与 Linux 系统入手，理解云原生技术栈赖以运行的底层环境。"
  - icon: ✍️
    title: "深入核心技术"
    details: "系统梳理容器、Kubernetes、服务编排与 DevOps，建立完整的云原生知识体系。"
  - icon: 🚨
    title: "沉淀实战经验"
    details: "记录部署运维、故障排查与性能优化过程，沉淀可复用的实践方法和解决方案。"
encrypt: false
---
