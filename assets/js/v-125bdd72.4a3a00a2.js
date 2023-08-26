"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[31561],{663549:(e,i,a)=>{a.r(i),a.d(i,{data:()=>n});const n=JSON.parse('{"key":"v-125bdd72","path":"/guide/installation/05_windows.html","title":"Windows","lang":"en-US","frontmatter":{"pageClass":"content-page","next":"../configuration/"},"excerpt":"","headers":[{"level":2,"title":"Install a USB-to-UART Bridge Virtual COM Port driver","slug":"install-a-usb-to-uart-bridge-virtual-com-port-driver","link":"#install-a-usb-to-uart-bridge-virtual-com-port-driver","children":[]},{"level":2,"title":"Determine which COM port is assigned to your device","slug":"determine-which-com-port-is-assigned-to-your-device","link":"#determine-which-com-port-is-assigned-to-your-device","children":[]},{"level":2,"title":"Installing","slug":"installing","link":"#installing","children":[]},{"level":2,"title":"Configuring","slug":"configuring","link":"#configuring","children":[]},{"level":2,"title":"Starting Zigbee2MQTT","slug":"starting-zigbee2mqtt","link":"#starting-zigbee2mqtt","children":[]}],"git":{"updatedTime":1693028026000},"filePathRelative":"guide/installation/05_windows.md"}')},209291:(e,i,a)=>{a.r(i),a.d(i,{default:()=>f});var n=a(166252);const t=a.p+"assets/img/devicemanager.15b524ea.png",r=(0,n._)("h1",{id:"windows",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#windows","aria-hidden":"true"},"#"),(0,n.Uk)(" Windows")],-1),s=(0,n._)("h2",{id:"install-a-usb-to-uart-bridge-virtual-com-port-driver",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#install-a-usb-to-uart-bridge-virtual-com-port-driver","aria-hidden":"true"},"#"),(0,n.Uk)(" Install a USB-to-UART Bridge Virtual COM Port driver")],-1),l=(0,n._)("p",null,"In order to be able to communicate with your USB device over a virtual COM port, you might need a driver for your OS in order for it to be able to be found by your flashing software.",-1),o={href:"https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers",target:"_blank",rel:"noopener noreferrer"},d={href:"https://ftdichip.com/drivers/vcp-drivers/",target:"_blank",rel:"noopener noreferrer"},c=(0,n.uE)('<h2 id="determine-which-com-port-is-assigned-to-your-device" tabindex="-1"><a class="header-anchor" href="#determine-which-com-port-is-assigned-to-your-device" aria-hidden="true">#</a> Determine which COM port is assigned to your device</h2><ol><li>Connect your sniffer device</li><li>Open up Start menu and start typing <code>Device Manager</code></li><li>Expand <code>Ports (COM &amp; LPT)</code></li><li>Look for a node similar to <code>USB Serial Device (COM4)</code></li><li>Take note of the port number, it will be needed during configuration</li></ol><p><img src="'+t+'" alt="Device Manager"></p><h2 id="installing" tabindex="-1"><a class="header-anchor" href="#installing" aria-hidden="true">#</a> Installing</h2>',4),u={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},g=(0,n.uE)('<li>Open up a <code>Command prompt</code> or <code>Powershell</code> from the Start menu (Powershell has prettier colors)</li><li>Verify Node.js was successfully installed<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> <span class="token parameter variable">--version</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>',2),h={href:"https://github.com/koenkk/zigbee2mqtt",target:"_blank",rel:"noopener noreferrer"},p=(0,n.uE)('<ul><li>if you prefer to use git (which you should), just clone the whole repository<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone <span class="token parameter variable">--depth</span> <span class="token number">1</span> git@github.com:Koenkk/zigbee2mqtt.git\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>otherwise use the green <code>Clone or download</code> button to download the zip archive, then extract it</li></ul>',1),b=(0,n.uE)('<li>Change to the newly created directory and install dependencies with Node.js own package manager <code>npm</code><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> ci\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>',1),m=(0,n.uE)('<h2 id="configuring" tabindex="-1"><a class="header-anchor" href="#configuring" aria-hidden="true">#</a> Configuring</h2><ol><li>Open <code>data\\configuration.yaml</code> in a text editor</li><li>Change the serial port configuration to match your setup<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">serial</span><span class="token punctuation">:</span>\n    <span class="token key atrule">port</span><span class="token punctuation">:</span> \\\\.\\COM4\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>Make sure other settings are correct as well</li><li>Save and exit</li></ol><p>Congratulations, you&#39;re now ready to start your Zigbee2MQTT installation</p><h2 id="starting-zigbee2mqtt" tabindex="-1"><a class="header-anchor" href="#starting-zigbee2mqtt" aria-hidden="true">#</a> Starting Zigbee2MQTT</h2><p>Just change to the root directory of your installation and run the application:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> start\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A successful setup produces an output similar to this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; zigbee2mqtt@1.6.0 start C:\\Users\\me\\Documents\\GitHub\\zigbee2mqtt\n&gt; node index.js\n\n  Zigbee2MQTT:info 2019-10-18 10:56:22 PM Logging to directory: &#39;D:\\Documents\\GitHub\\zigbee2mqtt\\data\\log\\2019-10-18.22-56-22&#39;\n  Zigbee2MQTT:info 2019-10-18 10:56:22 PM Starting Zigbee2MQTT version 1.6.0 (commit #e26ad2a)\n  Zigbee2MQTT:info 2019-10-18 10:56:22 PM Starting zigbee-shepherd\n  Zigbee2MQTT:info 2019-10-18 10:56:24 PM zigbee-shepherd started\n  Zigbee2MQTT:info 2019-10-18 10:56:24 PM Coordinator firmware version: &#39;20190608&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>Coordinator firmware version: &#39;20190608&#39;</code> entry means that Zigbee2MQTT has successfully communicated with the USB sniffer.</p><p>Zigbee2MQTT can be stopped anytime by pressing <code>CTRL + C</code> and then confirming with <code>Y</code>.</p>',10),v={},f=(0,a(983744).Z)(v,[["render",function(e,i){const a=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[r,s,l,(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Uk)("For CP210x based chipsets, there is a driver available at "),(0,n._)("a",o,[(0,n.Uk)("Silicon Labs' website"),(0,n.Wm)(a)]),(0,n.Uk)(".")]),(0,n._)("li",null,[(0,n.Uk)("For CC1352/CC2652/CC2538 based chipsets, have a look at "),(0,n._)("a",d,[(0,n.Uk)("FTDI chip's website"),(0,n.Wm)(a)]),(0,n.Uk)(" for drivers.")])]),c,(0,n._)("ol",null,[(0,n._)("li",null,[(0,n.Uk)("Download and install Node.js 16 LTS from "),(0,n._)("a",u,[(0,n.Uk)("their website"),(0,n.Wm)(a)])]),g,(0,n._)("li",null,[(0,n.Uk)("Choose a suitable directory for Zigbee2MQTT and copy all the files from the "),(0,n._)("a",h,[(0,n.Uk)("Zigbee2MQTT repository"),(0,n.Wm)(a)]),p]),b]),m])}]])}}]);