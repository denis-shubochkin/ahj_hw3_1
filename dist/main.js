!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.maxMoves=5,this.fieldCelssCount=t}var t,n,o;return t=e,(n=[{key:"changePos",value:function(){var e=Math.floor(0+Math.random()*(this.fieldCelssCount-1));do{e=Math.floor(0+Math.random()*(this.fieldCelssCount-1))}while(this.position===e);this.position=e}}])&&r(t.prototype,n),o&&r(t,o),e}(),i=n.p+"2dbd01ce16c0fa83cb67e20c73dedb66.png";function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=document.getElementById("field"),this.cells=document.getElementsByClassName("cells"),this.cellsCount=this.element.children.length}var t,n,r;return t=e,(n=[{key:"clearField",value:function(){document.getElementById("goblin")&&document.getElementById("goblin").remove()}},{key:"redraw",value:function(e){this.clearField();for(var t=0;t<this.cells.length;t++)t===e&&(this.cells[t].innerHTML='<img src="'.concat(i,'" alt="goblin" id="goblin" class="goblin">'))}}])&&l(t.prototype,n),r&&l(t,r),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c,s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.points=0,this.emptyTurns=0}var t,n,r;return t=e,(n=[{key:"clear",value:function(){document.getElementById("goblin")&&document.getElementById("goblin").remove(),document.querySelector(".points").textContent=0}},{key:"refresh",value:function(){this.points+=1,document.querySelector(".points").textContent=this.points}}])&&u(t.prototype,n),r&&u(t,r),e}(),f=new a,d=new o(f.cellsCount),p=new s,m=document.querySelector(".new-game-button");function v(){if(p.emptyTurns===d.maxMoves)return clearInterval(c),void alert("GameOver!");p.emptyTurns+=1,d.changePos(),f.redraw(d.position)}f.element.addEventListener("click",(function(e){e.preventDefault(),"goblin"===e.target.id&&(f.clearField(),p.refresh(),p.emptyTurns=0,v(),clearInterval(c),c=setInterval(v,1e3))})),m.addEventListener("click",(function(){p.clear(),clearInterval(c),p.points=0,p.emptyTurns=0,d.position=Math.floor(0+Math.random()*(f.cellsCount-1)),f.redraw(d.position),p.emptyTurns+=1,c=setInterval(v,1e3)}));n.p}]);
//# sourceMappingURL=main.js.map