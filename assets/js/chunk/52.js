(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"282":function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return Page}));var c=t(281),o=t(280),s=t(31),i=t(27),a=(t(283),t(44));function Page(n){var t=n.title,r=n.children,d=s.default.useRouter();return Object(i.useEffect)((function(){"react"===e.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(s.pageScrollTo)({"scrollTop":0})}),[d.path]),Object(a.jsxs)(o.m,{"className":"demo-page","children":[Object(a.jsxs)(o.m,{"className":"demo-nav","children":[Object(a.jsx)(c.B,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return s.default.navigateBack()}}),Object(a.jsxs)(o.m,{"className":"demo-nav__title","children":[t," "]})]}),r]})}}).call(this,t(121))},"283":function(e,n,t){},"284":function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var c=t(3),o=t.n(c),s=t(6),i=t.n(s),a=t(16),r=t.n(a),d=t(17),l=t.n(d),u=t(280),h=t(27),m=(t(285),t(44)),b=function(e){r()(Index,e);var n=l()(Index);function Index(){return o()(this,Index),n.call(this)}return i()(Index,[{"key":"render","value":function render(){var e=this.props,n=e.padding,t=e.title,c=e.card;return Object(m.jsxs)(u.m,{"className":"custom-class demo-block van-clearfix "+(n?"demo-block--padding":""),"children":[t&&Object(m.jsx)(u.m,{"className":"demo-block__title","children":t}),c?Object(m.jsx)(u.m,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(h.Component)},"285":function(e,n,t){},"769":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return O}));var c=t(3),o=t.n(c),s=t(6),i=t.n(s),a=t(24),r=t.n(a),d=t(16),l=t.n(d),u=t(17),h=t.n(u),m=t(9),b=t.n(m),j=t(27),f=t(281),p=t(282),x=t(284),g=t(44),O=function(e){l()(Index,e);var n=h()(Index);function Index(){var e;return o()(this,Index),e=n.call(this),b()(r()(e),"showToast",(function(){Object(f.ob)("提示内容")})),b()(r()(e),"showLongToast",(function(){Object(f.ob)("这是一条长文字提示，超过一定字数就会换行")})),b()(r()(e),"showLoadingToast",(function(){f.ob.loading({"message":"加载中...","forbidClick":!0})})),b()(r()(e),"showCustomLoadingToast",(function(){f.ob.loading({"message":"加载中...","forbidClick":!0,"loadingType":"spinner"})})),b()(r()(e),"showSuccessToast",(function(){f.ob.success("成功文案")})),b()(r()(e),"showFailToast",(function(){f.ob.fail("失败提示")})),b()(r()(e),"showCustomizedToast",(function(){var e=function text(e){return"倒计时 ".concat(e," 秒")};f.ob.loading({"duration":0,"forbidClick":!0,"message":e(3)});var n=3,t=setInterval((function(){--n?f.ob.loading({"message":e(n)}):(clearInterval(t),f.ob.clear())}),1e3)})),e}return i()(Index,[{"key":"render","value":function render(){return Object(g.jsx)(p.a,{"title":"Toast 轻提示","children":Object(g.jsxs)(g.Fragment,{"children":[Object(g.jsxs)(x.a,{"title":"文字提示","padding":!0,"children":[Object(g.jsx)(f.c,{"type":"primary","onClick":this.showToast,"className":"demo-margin-right","children":"文字提示"}),Object(g.jsx)(f.c,{"type":"primary","onClick":this.showLongToast,"children":"长文字提示"})]}),Object(g.jsxs)(x.a,{"title":"加载提示","padding":!0,"children":[Object(g.jsx)(f.c,{"type":"primary","onClick":this.showLoadingToast,"className":"demo-margin-right","children":"加载提示"}),Object(g.jsx)(f.c,{"type":"primary","onClick":this.showCustomLoadingToast,"children":"自定义加载图标"})]}),Object(g.jsxs)(x.a,{"title":"成功/失败提示","padding":!0,"children":[Object(g.jsx)(f.c,{"type":"info","onClick":this.showSuccessToast,"className":"demo-margin-right","children":"成功提示"}),Object(g.jsx)(f.c,{"type":"danger","onClick":this.showFailToast,"children":"失败提示"})]}),Object(g.jsx)(x.a,{"title":"动态更新提示","padding":!0,"children":Object(g.jsx)(f.c,{"type":"primary","onClick":this.showCustomizedToast,"children":"动态更新提示"})}),Object(g.jsx)(f.ib,{"id":"van-toast"})]})})}}]),Index}(j.Component)}}]);