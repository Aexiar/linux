import { DefaultTheme } from 'vitepress'
export const nav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  { text: '计组6件套', link: 'https://aexiar.github.io/coa6/notes/' },
  {
    text: '编程语言', items: [
      { text: 'c/c++', link: 'https://aexiar.github.io/c/notes/' },
      { text: '前端', link: 'https://aexiar.github.io/web-design/notes/' },
      { text: 'Java', link: 'https://aexiar.github.io/java/notes/' },
      { text: '大数据', link: 'https://aexiar.github.io/big-data/notes/' },
      { text: '云原生', link: '/notes/' },
      { text: 'Go', link: 'https://aexiar.github.io/go/notes/' },
      { text: 'Python', link: 'https://aexiar.github.io/python/notes/' },
    ]
  },
  { text: '开源软件', link: 'https://aexiar.github.io/open-software/notes/' },
]