<script setup lang="ts">
import { ArrowRight, House, Terminal, Boxes, Network, Workflow, Cloud, Sparkles } from '@lucide/vue'
import { withBase } from 'vitepress'

const topics = [
  { number: '01', icon: Terminal, title: '夯实系统基础', en: 'FOUNDATION', description: '从 Linux、网络到 Shell，理解每一个服务背后的运行逻辑。', tags: ['Linux', '计算机网络', 'Shell'], color: 'slate' },
  { number: '02', icon: Boxes, title: '走进云原生世界', en: 'CLOUD NATIVE', description: '探索容器与服务编排，让应用从一台机器走向弹性集群。', tags: ['Docker', 'Kubernetes', '服务编排'], color: 'blue' },
  { number: '03', icon: Workflow, title: '连接工程实践', en: 'ENGINEERING', description: '串联部署、运维与故障排查，把每一次实践沉淀为经验。', tags: ['自动化运维', 'DevOps', '性能优化'], color: 'violet' },
]
const nodes = [
  { icon: Terminal, title: '系统基石', detail: 'Linux · Shell', position: 'system' },
  { icon: Boxes, title: '容器构建', detail: 'Docker · Images', position: 'containers' },
  { icon: Network, title: '服务编排', detail: 'Kubernetes · Cluster', position: 'cluster' },
  { icon: Workflow, title: '自动化交付', detail: 'CI/CD · DevOps', position: 'delivery' },
]
const flowPaths = [
  'M110 96 H174 Q198 96 198 120 V161 Q198 175 218 175 H250',
  'M110 256 H174 Q198 256 198 232 V203 Q198 189 218 189 H250',
  'M310 175 H345 Q370 175 370 151 V120 Q370 96 394 96 H450',
  'M310 189 H345 Q370 189 370 213 V232 Q370 256 394 256 H450',
]
</script>

<template>
  <div class="cloud-home">
    <section class="cloud-hero" aria-labelledby="cloud-title">
      <div class="cloud-intro">
        <p class="cloud-eyebrow"><i /> 在这里，连接系统与云端</p>
        <h1 id="cloud-title">走进云原生的世界<br><span>让技术，落地生根。</span></h1>
        <p class="cloud-description">从第一行命令，到每一次部署。<br>一起探索 Linux 与云原生背后的原理、技术与实践。</p>
        <div class="cloud-actions">
          <a class="cloud-secondary" :href="withBase('/')"><House :size="17" />首页</a>
          <a class="cloud-primary" :href="withBase('/guide')">开启学习之旅<ArrowRight :size="17" /></a>
        </div>
        <div class="cloud-notes"><span>系统梳理</span><span>实践驱动</span><span>持续积累</span></div>
      </div>
      <div class="cloud-visual" role="img" aria-label="云原生技术体系：以 Linux 为基础，连接容器构建、Kubernetes 服务编排与自动化交付。">
        <div class="visual-label"><span><i /> THE CLOUD JOURNEY</span><span>从系统到云端</span></div>
        <div class="cloud-orbit orbit-one" /><div class="cloud-orbit orbit-two" />
        <svg class="cloud-connectors" viewBox="0 0 560 350" fill="none" aria-hidden="true">
          <g v-for="(path, index) in flowPaths" :key="path">
            <path :d="path" />
            <path class="cloud-flow" :d="path" pathLength="100" :style="{ animationDelay: `${index * -0.8}s` }" />
          </g>
        </svg>
        <div v-for="node in nodes" :key="node.position" class="cloud-node" :class="node.position">
          <component :is="node.icon" :size="24" :stroke-width="1.6" />
          <strong>{{ node.title }}</strong><small>{{ node.detail }}</small>
        </div>
        <div class="cloud-core"><Cloud :size="43" :stroke-width="1.4" /><strong>CLOUD</strong><small>构建 · 编排 · 交付</small></div>
        <div class="visual-caption"><Sparkles :size="14" /> 从底层原理出发，让每一次部署更从容</div>
      </div>
    </section>
    <div class="cloud-stack"><span>构建你的技术视野</span><div><b>Linux</b><i /><b>Docker</b><i /><b>Kubernetes</b><i /><b>Shell</b><i /><b>DevOps</b></div><span>开放生态 · 持续探索</span></div>
    <section class="cloud-learning" aria-labelledby="learning-title">
      <div class="learning-heading"><div><p>LEARN · BUILD · DEPLOY</p><h2 id="learning-title">每一步积累，都让下一次实践更从容</h2></div><span>循序渐进，构建你的云原生知识体系</span></div>
      <div class="cloud-topics">
        <article v-for="topic in topics" :key="topic.number" class="cloud-topic" :class="topic.color">
          <div class="topic-top"><div class="topic-icon"><component :is="topic.icon" :size="23" :stroke-width="1.7" /></div><span>{{ topic.number }} / {{ topic.en }}</span></div>
          <h3>{{ topic.title }}</h3><p>{{ topic.description }}</p><div class="topic-tags"><span v-for="tag in topic.tags" :key="tag">{{ tag }}</span></div>
        </article>
      </div>
    </section>
    <p class="cloud-closing"><span />保持好奇，让每一行命令都通向新的可能<span /></p>
  </div>
</template>

<style scoped>
.cloud-home { --cloud-text: #203653; --cloud-muted: #5d718c; --cloud-accent: var(--cloud-primary); --cloud-line: #d8e2f0; --cloud-surface: rgb(255 255 255 / 65%); max-width: 1200px; margin: 0 auto; padding: clamp(24px, 4vh, 40px) 32px 16px; color: var(--cloud-text); line-height: 1.5; }
.cloud-hero { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 48px; padding: 8px 0 clamp(20px, 3vh, 28px); }
.cloud-eyebrow { display: flex; align-items: center; gap: 10px; color: var(--cloud-accent); font-size: 12px; letter-spacing: 2px; margin: 0 0 10px; }
.cloud-eyebrow i, .visual-label i { display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #5284e5; box-shadow: 0 0 0 4px rgb(82 132 229 / 10%); }
.cloud-intro h1 { padding: 0; text-align: left; font-size: clamp(30px, 3vw, 40px); line-height: 1.3; letter-spacing: -1.7px; font-weight: 750; margin: 0; }
.cloud-intro h1::after { display: none; } .cloud-intro h1 span { color: var(--cloud-accent); background: linear-gradient(110deg, var(--cloud-primary), #326ce5 65%, #6366d9); background-clip: text; -webkit-text-fill-color: transparent; }
.cloud-description { margin: 10px 0 14px; font-size: 15px; line-height: 1.6; color: var(--cloud-muted); }
.cloud-actions { display: flex; flex-wrap: wrap; gap: 12px; }
.cloud-actions a { display: inline-flex; align-items: center; justify-content: center; gap: 14px; padding: 10px 18px; border-radius: 8px; font-size: 13px; line-height: 24px; font-weight: 600; transition: transform .2s, box-shadow .2s; }
.cloud-actions a:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgb(50 108 229 / 18%); }
.cloud-actions a:focus-visible { outline: 3px solid var(--cloud-accent); outline-offset: 4px; }
.cloud-primary { background: linear-gradient(110deg, #0e7490, #326ce5); color: white; }
.cloud-secondary { background: rgb(50 108 229 / 6%); border: 1px solid #b7cbed; color: var(--cloud-accent); }
.cloud-notes { display: flex; gap: 22px; margin-top: 12px; color: var(--cloud-muted); font-size: 11px; }
.cloud-notes span::before { content: '•'; color: #88a5ce; margin-right: 7px; }
.cloud-visual { position: relative; width: 100%; aspect-ratio: 560 / 350; background-image: radial-gradient(rgb(70 112 185 / 16%) .8px, transparent .8px); background-size: 18px 18px; }
.visual-label { position: absolute; inset: 0 0 auto; display: flex; justify-content: space-between; color: var(--cloud-muted); font-size: 9px; letter-spacing: 1.8px; }
.visual-label i { margin-right: 9px; }.visual-label > span:last-child { letter-spacing: 0; }
.cloud-connectors { position: absolute; inset: 0; width: 100%; height: 100%; stroke: #9fb8dd; stroke-width: 1.2; }
.cloud-orbit { position: absolute; border: 1px solid rgb(75 113 184 / 10%); border-radius: 50%; top: 52%; left: 50%; transform: translate(-50%, -50%); aspect-ratio: 1; }.orbit-one { width: 44%; }.orbit-two { width: 60%; }
.cloud-node { position: absolute; width: 23%; height: 25%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; background: var(--cloud-surface); border: 1px solid #bccde4; border-radius: 13px; color: #5577a5; }
.cloud-node strong { color: var(--cloud-text); font-size: 12px; }.cloud-node small { color: var(--cloud-muted); font-size: 9px; }
.system { left: 2%; top: 15%; }.containers { left: 2%; bottom: 14%; border-color: #a9cce6; color: #0e7490; }.cluster { right: 2%; top: 15%; border-color: #abc2f1; color: #326ce5; }.delivery { right: 2%; bottom: 14%; border-color: #c4c4ed; color: #6b65bd; }
.cloud-core { position: absolute; top: 52%; left: 50%; transform: translate(-50%, -50%); width: 24%; height: 37%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; border: 1px solid #98b5ea; border-radius: 26px; background: linear-gradient(140deg, #e4f1ff, #dce4fc); box-shadow: 0 0 0 7px rgb(255 255 255 / 40%), 0 12px 35px rgb(50 108 229 / 12%); color: #3263b4; }
.cloud-core strong { font-size: 20px; letter-spacing: 4px; font-weight: 500; }.cloud-core small { font-size: 9px; letter-spacing: 1px; }
.visual-caption { position: absolute; bottom: 0; width: 100%; display: flex; align-items: center; justify-content: center; gap: 7px; color: var(--cloud-muted); font-size: 10px; }
.cloud-stack { display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 12px 0; border-block: 1px solid var(--cloud-line); color: var(--cloud-muted); font-size: 11px; }.cloud-stack > div { display: flex; align-items: center; gap: 25px; }.cloud-stack b { font-size: 16px; font-weight: 600; line-height: 24px; letter-spacing: .3px; }.cloud-stack i { width: 3px; height: 3px; background: #b0c1db; border-radius: 50%; }
.cloud-learning { padding-top: clamp(20px, 3vh, 28px); }.learning-heading { display: flex; justify-content: space-between; align-items: flex-end; gap: 16px; margin-bottom: 18px; }.learning-heading p { font-size: 9px; letter-spacing: 2px; color: var(--cloud-accent); margin: 0 0 8px; }.learning-heading h2 { padding: 0; border: 0; font-size: 20px; font-weight: 650; line-height: 1.5; letter-spacing: -.5px; margin: 0; }.learning-heading > span { font-size: 11px; color: var(--cloud-muted); }
.cloud-topics { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }.cloud-topic { --topic-color: #5577a5; --topic-border: #c0cfe3; --topic-tint: rgb(85 119 165 / 8%); position: relative; overflow: hidden; border: 1px solid var(--topic-border); border-radius: 14px; padding: 20px; background: var(--cloud-surface); }.cloud-topic::before { content: ''; position: absolute; top: 0; left: 18px; right: 18px; height: 2px; background: linear-gradient(90deg, var(--topic-color), transparent); opacity: .6; }.blue { --topic-color: #326ce5; --topic-border: #b6c9ed; --topic-tint: rgb(50 108 229 / 8%); }.violet { --topic-color: #6b65bd; --topic-border: #cdc9e9; --topic-tint: rgb(107 101 189 / 8%); }
.topic-top { display: flex; align-items: center; gap: 12px; color: var(--topic-color); }.topic-top > span { line-height: 24px; font-size: 9px; letter-spacing: 1px; }.topic-icon { padding: 7px; border-radius: 10px; background: var(--topic-tint); }.cloud-topic h3 { font-size: 17px; font-weight: 650; margin: 8px 0 5px; }.cloud-topic p { font-size: 12px; line-height: 1.9; color: var(--cloud-muted); margin: 0; }.topic-tags { margin-top: 10px; display: flex; flex-wrap: wrap; gap: 7px; }.topic-tags span { color: var(--topic-color); background: var(--topic-tint); border-radius: 4px; padding: 2px 8px; font-size: 10px; line-height: 16px; }
.cloud-closing { display: flex; align-items: center; justify-content: center; gap: 14px; margin: clamp(18px, 2.5vh, 24px) 0 0; font-size: 11px; color: var(--cloud-muted); }.cloud-closing span { width: 24px; height: 1px; background: var(--cloud-line); }
:global(.is-home-page .Layout:has(.cloud-home)) { background-image: radial-gradient(ellipse at 72% 18%, rgb(169 184 245 / 20%), transparent 46%), linear-gradient(150deg, rgb(217 234 255 / 65%), transparent 58%), linear-gradient(215deg, rgb(231 231 253 / 55%), transparent 58%); background-size: auto; }
:global(.VPHome:has(.cloud-home)) { margin-bottom: 0; } :global(.Layout:has(.cloud-home) .VPFooter) { padding: 16px 24px; }
:global(.dark .cloud-home) { --cloud-text: #dce7f6; --cloud-muted: #a5b6ce; --cloud-accent: var(--cloud-primary); --cloud-line: #32425b; --cloud-surface: rgb(25 35 53 / 82%); }
:global(.dark .is-home-page .Layout:has(.cloud-home)), :global(.dark.is-home-page .Layout:has(.cloud-home)) { background-image: radial-gradient(ellipse at 70% 18%, rgb(76 83 160 / 20%), transparent 50%), linear-gradient(145deg, rgb(28 64 115 / 28%), transparent 65%); }
:global(.dark .cloud-home .cloud-core) { background: linear-gradient(140deg, #203f66, #30365e); color: #a4c7ff; border-color: #5676ac; box-shadow: 0 0 0 7px rgb(100 140 205 / 8%); }
:global(.dark .cloud-home .cloud-topic) { --topic-border: #3d506c; --topic-color: #aac1e2; }:global(.dark .cloud-home .blue) { --topic-border: #3b5480; --topic-color: #91b5ff; }:global(.dark .cloud-home .violet) { --topic-border: #504d75; --topic-color: #bab3f1; }
@media (max-width: 960px) { .cloud-hero { gap: 24px; }.cloud-stack > span:last-child { display: none; }.cloud-stack > div { gap: 18px; }.learning-heading > span { display: none; }.cloud-core { gap: 5px; }.cloud-core svg { width: 32px; } }
@media (max-width: 700px) { .cloud-home { padding: 32px 24px 20px; }.cloud-hero { grid-template-columns: 1fr; gap: 36px; padding-bottom: 30px; }.cloud-intro { text-align: center; }.cloud-eyebrow, .cloud-actions, .cloud-notes { justify-content: center; }.cloud-intro h1 { text-align: center; font-size: clamp(27px, 6vw, 38px); line-height: 1.4; letter-spacing: -1px; }.cloud-description { font-size: 13px; line-height: 1.8; }.cloud-visual { max-width: 520px; margin: auto; }.cloud-stack { flex-direction: column; gap: 12px; }.cloud-stack > div { gap: 12px; }.cloud-stack b { font-size: 12px; }.cloud-learning { padding-top: 30px; }.learning-heading h2 { font-size: 18px; }.cloud-topics { grid-template-columns: 1fr; gap: 14px; }.cloud-topic { padding: 20px; }.cloud-topic h3 { font-size: 15px; line-height: 22px; }.cloud-topic p { line-height: 1.6; }.cloud-closing { font-size: 10px; gap: 8px; }.cloud-closing span { width: 12px; } }
@media (max-width: 700px) {
  .cloud-node { gap: 4px; }
  .cloud-node > svg { width: 19px; height: 19px; flex-shrink: 0; }
  .cloud-node strong { font-size: 10px; line-height: 1.4; }
  .cloud-node small { font-size: 7px; line-height: 1.4; white-space: nowrap; }
  .cloud-core { gap: 4px; border-radius: 20px; }
  .cloud-core > svg { width: 28px; height: 28px; flex-shrink: 0; }
  .cloud-core strong { font-size: 16px; letter-spacing: 2px; }
  .cloud-core small { font-size: 7px; letter-spacing: 0; }
}
/* Flow overlays share the static paths so connections stay attached to the nodes. */
.cloud-flow {
  stroke: var(--cloud-accent);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-dasharray: 5 95;
  animation: cloud-flow 4s linear infinite;
}
.cloud-core::before {
  content: '';
  position: absolute;
  inset: -8px;
  border: 1px solid rgb(82 132 229 / 35%);
  border-radius: 32px;
  animation: cloud-pulse 4s ease-out infinite;
  pointer-events: none;
}
.cloud-core > svg { animation: cloud-float 5s ease-in-out infinite; }
.visual-label i { animation: cloud-beacon 3s ease-in-out infinite; }
@keyframes cloud-flow { to { stroke-dashoffset: -100; } }
@keyframes cloud-pulse {
  0% { transform: scale(1); opacity: .65; }
  85%, 100% { transform: scale(1.25); opacity: 0; }
}
@keyframes cloud-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
@keyframes cloud-beacon {
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
}
/* Reduce spacing on short desktop viewports without clipping content. */
@media (min-width: 961px) and (max-height: 900px) {
  .cloud-home { padding-top: 16px; padding-bottom: 12px; }
  .cloud-hero { padding-bottom: 16px; }
  .cloud-visual { max-width: 408px; justify-self: end; }
  .cloud-intro h1 { font-size: 32px; }
  .cloud-eyebrow { margin-bottom: 8px; }
  .cloud-description { margin: 12px 0; line-height: 1.7; }
  .cloud-actions a { padding: 10px 16px; }
  .cloud-notes { margin-top: 8px; }
  .cloud-learning { padding-top: 16px; }
  .learning-heading h2 { font-size: 18px; }
  .learning-heading p { margin-bottom: 5px; }
  .cloud-topic h3 { margin-top: 10px; margin-bottom: 6px; }
  .cloud-topic p { margin-bottom: 10px; }
  .learning-heading { margin-bottom: 12px; }
  .cloud-topic { padding: 16px; }
  .cloud-closing { margin-top: 18px; }
  :global(.Layout:has(.cloud-home) .VPFooter) { padding: 12px 24px; }
}
@media (prefers-reduced-motion: reduce) {
  .cloud-flow, .cloud-core::before, .cloud-core > svg, .visual-label i { animation: none; }
  .cloud-flow, .cloud-core::before { opacity: 0; } .cloud-actions a { transition: none; }.cloud-actions a:hover { transform: none; } }
</style>
