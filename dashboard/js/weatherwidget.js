
function __weatherwidget_init(){var t=document.getElementsByClassName("weatherwidget-io"),e=[];
if(0!==t.length){for(var o=function(o){var a=t[o],i={};
i.id="weatherwidget-io-"+o,i.href=a.href,
i.label_1=a.getAttribute("data-label_1"),
i.label_2=a.getAttribute("data-label_2"),
i.font=a.getAttribute("data-font"),
i.icons=a.getAttribute("data-icons"),
i.mode=a.getAttribute("data-mode"),
i.days=a.getAttribute("data-days"),
i.theme=a.getAttribute("data-theme"),
i.basecolor=a.getAttribute("data-basecolor"),
i.accent=a.getAttribute("data-accent")
,i.textcolor=a.getAttribute("data-textcolor"),
i.textAccent=a.getAttribute("data-textAccent"),
i.highcolor=a.getAttribute("data-highcolor"),
i.lowcolor=a.getAttribute("data-lowcolor"),
i.suncolor=a.getAttribute("data-suncolor"),
i.mooncolor=a.getAttribute("data-mooncolor"),
i.cloudcolor=a.getAttribute("data-cloudcolor"),
i.cloudfill=a.getAttribute("data-cloudfill"),
i.raincolor=a.getAttribute("data-raincolor"),
i.snowcolor=a.getAttribute("data-snowcolor"),
i.windcolor=a.getAttribute("data-windcolor"),
i.fogcolor=a.getAttribute("data-fogcolor"),
i.hailcolor=a.getAttribute("data-hailcolor"),
i.dayscolor=a.getAttribute("data-dayscolor"),
i.tempcolor=a.getAttribute("data-tempcolor"),
i.desccolor=a.getAttribute("data-desccolor"),
i.label1color=a.getAttribute("data-label1color"),
i.label2color=a.getAttribute("data-label2color"),
i.shadow=a.getAttribute("data-shadow"),
i.scale=a.getAttribute("data-scale"),
(d=document.getElementById(i.id))&&a.removeChild(d),e[i.id]=document.createElement("iframe"),
e[i.id].setAttribute("id",i.id),
e[i.id].setAttribute("class","weatherwidget-io-frame"),
e[i.id].setAttribute("scrolling","no"),
e[i.id].setAttribute("frameBorder","0"),
e[i.id].setAttribute("width","100%"),
e[i.id].setAttribute("src","https://weatherwidget.io/w/"),
e[i.id].style.display="block",
e[i.id].style.position="absolute",
e[i.id].style.top="0",
e[i.id].onload=function(){e[i.id].contentWindow.postMessage(i,"https://weatherwidget.io")},
a.style.display="block",
a.style.position="relative",
a.style.height="150px",
a.style.padding="0",
a.style.overflow="hidden",
a.style.textAlign="left",
a.style.textIndent="-299rem",
a.appendChild(e[i.id])},a=0,i=Math.min(t.length,10);
a<i;a++)
{var d;o(a)}window.addEventListener("message",function(t){"https://weatherwidget.io"===t.origin&&e[t.data.wwId]&&e[t.data.wwId].parentNode&&(e[t.data.wwId].style.height=t.data.wwHeight+"px",e[t.data.wwId].parentNode.style.height=t.data.wwHeight+"px")})}}
__weatherwidget_init();