(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{"268":function(t,i,o){"use strict";o.r(i),o.d(i,"taro_switch_core",(function(){return c}));var n=o(53),c=function(){function e(t){var i=this;Object(n.g)(this,t),this.onChange=Object(n.c)(this,"change",7),this.type="switch",this.checked=!1,this.color="#04BE02",this.disabled=!1,this.isWillLoadCalled=!1,this.switchChange=function(t){t.stopPropagation();var o=t.target.checked;i.isChecked=o,i.onChange.emit({"value":o})}}return e.prototype.function=function(t,i){this.isWillLoadCalled&&t!==i&&(this.isChecked=t)},e.prototype.componentWillLoad=function(){this.isWillLoadCalled=!0,this.isChecked=this.checked},e.prototype.componentDidLoad=function(){var t=this;Object.defineProperty(this.el,"value",{"get":function get(){return t.isChecked},"configurable":!0})},e.prototype.render=function(){var t=this,i=t.type,o=t.color,c=t.isChecked,r=t.name,h=t.disabled,s=c?{"borderColor":o||"04BE02","backgroundColor":o||"04BE02"}:{};return Object(n.e)("input",{"type":"checkbox","class":"weui-"+i,"style":s,"checked":c,"name":r,"disabled":h,"onChange":this.switchChange})},Object.defineProperty(e.prototype,"el",{"get":function get(){return Object(n.d)(this)},"enumerable":!1,"configurable":!0}),Object.defineProperty(e,"watchers",{"get":function get(){return{"checked":["function"]}},"enumerable":!1,"configurable":!0}),e}();c.style="taro-switch-core{display:inline-block;width:52px;height:32px}taro-switch-core .weui-switch{display:block;width:100%;height:100%}"}}]);