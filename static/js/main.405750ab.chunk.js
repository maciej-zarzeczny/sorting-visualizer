(this.webpackJsonpsorting_visualizer=this.webpackJsonpsorting_visualizer||[]).push([[0],{18:function(e,a,t){e.exports=t(28)},23:function(e,a,t){},24:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(11),s=t.n(i),o=(t(23),t(12)),l=t(13),c=t(17),u=t(16),h=t(4),d=(t(24),t(6)),m=t(7),p=t(8);var f=function(e){var a=e.handleArrayReset,t=e.handleSizeChange,i=e.handleAnimationSpeedChange,s=e.handleAlgorythmChange,o=e.handleStart,l=e.stopVisualization,c=e.visualizationRunning,u=e.arraySize,f=e.animationSpeed,g=Object(n.useState)(!1),v=Object(h.a)(g,2),y=v[0],S=v[1],z=Object(n.useState)(!1),E=Object(h.a)(z,2),b=E[0],w=E[1],C=y?"active":"",k=b?"active":"",x=c?"disabled":"",N=c?"STOP":"START";return r.a.createElement("nav",null,r.a.createElement("div",{className:"info-container"},r.a.createElement("span",{"data-tip":"How to use?","data-for":"help-tooltip","data-place":"right","data-effect":"solid",className:"fab help-icon "+x,onClick:function(){c||w(!b)}},r.a.createElement(d.b,{className:"icon"})),!c&&r.a.createElement(m.a,{id:"help-tooltip"}),r.a.createElement("div",{className:"info "+k},r.a.createElement("p",null,"Choose desired sorting algorythm and press start to see the visualization."),r.a.createElement("p",null,"You can adjust array size and sorting speed by clicking on a settings icon in upper right corner."))),r.a.createElement("section",{className:"controls"},r.a.createElement("div",{className:"choose-algorythm-container"},r.a.createElement("select",{disabled:c,className:"choose-algorythm "+x,onChange:function(e){return s(e.target.value)}},["Merge sort","Bubble sort","Quick sort","Insertion sort"].map((function(e,a){return r.a.createElement("option",{value:a,key:a},e)})))),r.a.createElement("button",{className:"start",onClick:c?function(){return l()}:function(){return y&&S(!1),b&&w(!1),void o()}},N),r.a.createElement(d.c,{"data-tip":"Reset array","data-for":"reset-tooltip","data-place":"right","data-effect":"solid",className:"reset-icon",onClick:a}),r.a.createElement(m.a,{id:"reset-tooltip"})),r.a.createElement("div",{className:"settings-container"},r.a.createElement("span",{"data-tip":"Settings","data-for":"settings-tooltip","data-place":"left","data-effect":"solid",className:"fab settings-icon "+x,onClick:function(){c||S(!y)}},r.a.createElement(d.a,{className:"icon"})),!c&&r.a.createElement(m.a,{id:"settings-tooltip"}),r.a.createElement("div",{className:"settings "+C},r.a.createElement("p",null,"Array size: ",u),r.a.createElement(p.a,{styles:{active:{backgroundColor:"#a8dadc"}},axis:"x",xstep:1,xmin:10,xmax:200,x:u,onChange:function(e){var a=e.x;return t(a)}}),r.a.createElement("p",null,"Animation speed: ",f),r.a.createElement(p.a,{styles:{active:{backgroundColor:"#a8dadc"}},axis:"x",xstep:1,xmin:1,xmax:25,x:f,onChange:function(e){var a=e.x;return i(a)}}))))};t(27);var g=function(e){var a=e.array,t=e.trace,i=e.step,s=Object(n.useState)(0),o=Object(h.a)(s,2),l=o[0],c=o[1];Object(n.useEffect)((function(){var e=a.length,t=document.getElementsByClassName("array-container")[0].clientWidth,n=Math.floor((t-e)/e);c(n)}),[a.length]);var u=t.arrays.length>0?t.arrays[i].map((function(e,a){var n="bar";return t.comparisons[i].includes(a)&&(n+=" compared"),t.swaps[i].includes(a)&&(n+=" swapped"),(t.sorted[i].includes(a)||t.sorted[i].includes(-1))&&(n+=" sorted"),r.a.createElement("div",{className:n,key:a,style:{height:e+"px",width:l+"px"}})})):a.map((function(e,a){return r.a.createElement("div",{className:"bar",key:a,style:{height:e+"px",width:l+"px"}})}));return r.a.createElement("div",{className:"array-container"},u)},v=t(9),y=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0;e.arrays.push(a.slice(0)),e.comparisons.push(t),e.swaps.push(n),e.sorted.length>0?void 0===r?e.sorted.push(Object(v.a)(e.sorted[e.sorted.length-1])):e.sorted.push([].concat(Object(v.a)(e.sorted[e.sorted.length-1]),[r])):e.sorted.push([])},S=function(e,a,t){var n=e[a];e[a]=e[t],e[t]=n},z=function(e){var a={arrays:[],comparisons:[],swaps:[],sorted:[]};return function e(t,n,r){if(n>=r)n===r&&y(a,t,[],[],n);else{var i=function(e,t,n){var r=t-1,i=e[n];y(a,e,[r,n]);for(var s=t;s<n;s++)y(a,e,[s,n]),e[s]<i&&(r++,y(a,e,[n,n],[r,s]),S(e,r,s),y(a,e,[n,n],[r,s]));return y(a,e,[],[r+1,n]),S(e,r+1,n),y(a,e,[],[r+1,n],r+1),r+1}(t,n,r);e(t,n,i-1),e(t,i+1,r)}}(e,0,e.length-1),y(a,e,[],[],-1),a},E=function(e){var a={arrays:[],comparisons:[],swaps:[],sorted:[]};return function e(t,n,r){if(!(r-n<2)){var i=Math.floor((n+r)/2);e(t,n,i),e(t,i,r),function(e,t,n,r){for(var i=e.slice(t,n),s=e.slice(n,r),o=0,l=0,c=0;o<i.length&&l<s.length;)y(a,e,[o+t,l+n],[-1,-1]),i[o]<=s[l]?(e[c+t]=i[o],y(a,e,[],[c+t,o+t]),o++):(e[c+t]=s[l],y(a,e,[],[c+t,l+n]),l++),c++;for(;o<i.length;)e[c+t]=i[o],y(a,e,[],[c+t,o+t]),o++,c++;for(;l<s.length;)e[c+t]=s[l],y(a,e,[],[c+t,l+n]),l++,c++}(t,n,i,r)}}(e,0,e.length),y(a,e,[],[],-1),a},b=function(e){for(var a=e.slice(0),t=a.length,n=!1,r={arrays:[],comparisons:[],swaps:[],sorted:[]},i=0;i<t;i++){for(var s=0;s<t-i-1;s++)if(y(r,a,[s,s+1]),a[s+1]<a[s]){var o=a[s];a[s]=a[s+1],a[s+1]=o,n=!0,y(r,a,[],[s,s+1])}if(y(r,a,[],[],t-i-1),!n)break}return r},w=function(e){for(var a={arrays:[],comparisons:[],swaps:[],sorted:[]},t=1;t<e.length;t++){y(a,e,[t,t]);for(var n=e[t],r=t-1;r>=0&&n<e[r];)y(a,e,[],[t,r]),e[r+1]=e[r],r--;e[r+1]=n}return y(a,e,[],[],-1),a},C=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new g(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={array:[],arraySize:100,algorythm:"0",animationSpeed:15,visualizationRunning:!1,trace:{arrays:[],comparisons:[],swaps:[],sorted:[]},step:0,animationId:null,currentComparison:[],currentSwap:[]},e.handleArrayReset=function(){e.generateNewArray()},e.handleSizeChange=function(a){e.setState({arraySize:a})},e.handleAnimationSpeedChange=function(a){e.setState({animationSpeed:a})},e.handleAlgorythmChange=function(a){0!==e.state.trace.arrays.length&&e.generateNewArray(),e.setState({algorythm:a})},e.handleArrayChange=function(a){e.setState({array:a})},e.handleStart=function(){var a=e.state,t=a.algorythm,n=a.array,r=a.trace;switch(t){case"0":if(0===r.arrays.length){var i=E(n);e.setState({trace:i},(function(){e.startVisualization()}))}else e.startVisualization();break;case"1":if(0===r.arrays.length){var s=b(n);e.setState({trace:s},(function(){e.startVisualization()}))}else e.startVisualization();break;case"2":if(0===r.arrays.length){var o=z(n);e.setState({trace:o},(function(){e.startVisualization()}))}else e.startVisualization();break;case"3":if(0===r.arrays.length){var l=w(n);e.setState({trace:l},(function(){e.startVisualization()}))}else e.startVisualization()}},e.nextStep=function(){var a=e.state,t=a.step;t<a.trace.arrays.length-1?e.setState({step:t+1}):e.stopVisualization()},e.startVisualization=function(){var a=250/e.state.animationSpeed,t=setInterval((function(){e.nextStep()}),a);e.setState({animationId:t,visualizationRunning:!0})},e.stopVisualization=function(){clearInterval(e.state.animationId),e.setState({animationId:null,visualizationRunning:!1})},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.generateNewArray()}},{key:"componentDidUpdate",value:function(e,a){a.arraySize!==this.state.arraySize&&this.generateNewArray()}},{key:"generateNewArray",value:function(){for(var e,a,t=this.state.arraySize,n=[],r=0;r<t;r++)n.push((e=5,a=750,e=Math.ceil(e),a=Math.floor(a),Math.floor(Math.random()*(a-e+1))+e));this.setState({array:n,trace:{arrays:[],comparisons:[],swaps:[],sorted:[]},step:0})}},{key:"render",value:function(){var e=this.state,a=e.arraySize,t=e.animationSpeed,n=e.array,i=e.trace,s=e.step,o=e.visualizationRunning;return r.a.createElement("div",{className:"App"},r.a.createElement(f,{handleArrayReset:this.handleArrayReset,handleSizeChange:this.handleSizeChange,handleAnimationSpeedChange:this.handleAnimationSpeedChange,handleAlgorythmChange:this.handleAlgorythmChange,handleStart:this.handleStart,stopVisualization:this.stopVisualization,visualizationRunning:o,arraySize:a,animationSpeed:t}),r.a.createElement(g,{array:n,trace:i,step:s}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.405750ab.chunk.js.map