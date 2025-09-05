<template><div><h2 id="磨耳朵音频上报问题" tabindex="-1"><a class="header-anchor" href="#磨耳朵音频上报问题"><span>磨耳朵音频上报问题</span></a></h2>
<h3 id="当音频正常播放的时候" tabindex="-1"><a class="header-anchor" href="#当音频正常播放的时候"><span>当音频正常播放的时候</span></a></h3>
<ol>
<li>
<p>每十秒上传一次，上传完成后计时器清零</p>
</li>
<li>
<p>当音频结束的时候，但是计时器没有到十秒，则上报计时器时间，同时计时器清空</p>
</li>
</ol>
<h2 id="倍速场景" tabindex="-1"><a class="header-anchor" href="#倍速场景"><span>倍速场景</span></a></h2>
<blockquote>
<p>一个音频 有67秒</p>
<p>用户只听了15秒</p>
</blockquote>
<p>音频开始的时候开始计时，暂停的时候暂停计时，</p>
<h2 id="快进场景" tabindex="-1"><a class="header-anchor" href="#快进场景"><span>快进场景</span></a></h2>
<h2 id="后台背景音乐场景" tabindex="-1"><a class="header-anchor" href="#后台背景音乐场景"><span>后台背景音乐场景</span></a></h2>
<h2 id="目前剩余问题" tabindex="-1"><a class="header-anchor" href="#目前剩余问题"><span>目前剩余问题</span></a></h2>
<ol>
<li>音频同时上报两次  第一次为1秒</li>
<li>音频最后正好剩余九秒的时候可能不会被正常上报  需要测试</li>
</ol>
<h2 id="todo-把计时器写到store中-最后统一销毁" tabindex="-1"><a class="header-anchor" href="#todo-把计时器写到store中-最后统一销毁"><span>TODO：把计时器写到store中，最后统一销毁</span></a></h2>
</div></template>


