(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{909:function(e,t,a){},939:function(e,t,a){"use strict";a(909)},985:function(e,t,a){"use strict";a.r(t);a(81),a(529);var r=a(126),n=a(68),o=a(98),i=(a(96),a(149),a(97),a(34),a(855)),c={data:function(){return{allRegion:i.data[0].children,searchLoading:!1,total:0,inputValue:"",filterOptions:[],filterOptions1:[],pag:{current:1,pageSize:10,showTotal:function(e){return"共 ".concat(e," 条")}},form:{},timer:null}},created:function(){},beforeDestroy:function(){this.timer&&clearTimeout(this.timer)},methods:{onFocus:function(){var e=this;return Object(o.a)(Object(n.a)().mark((function t(){return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.filterOptions.length){t.next=2;break}return t.abrupt("return");case 2:e.search("");case 3:case"end":return t.stop()}}),t)})))()},search:function(e){var t=this;this.total=0,this.filterOptions=[],this.inputValue=e,this.timer&&clearTimeout(this.timer),this.searchLoading=!0,this.timer=setTimeout(Object(o.a)(Object(n.a)().mark((function e(){var a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.queryData({pageSize:t.pag.pageSize,current:1});case 2:a=e.sent,t.searchLoading=!1,t.handleResult(a);case 5:case"end":return e.stop()}}),e)}))),400)},handleResult:function(e){var t;(t=this.filterOptions).push.apply(t,Object(r.a)(e.data||[])),this.pag.current=e.current||1,this.total=e.total||0},delay:function(e){return new Promise((function(t){return setTimeout(t,e)}))},loadData:function(e){var t=this;return Object(o.a)(Object(n.a)().mark((function e(){var a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.loading){e.next=2;break}return e.abrupt("return");case 2:if(!(t.total<=t.filterOptions.length)){e.next=4;break}return e.abrupt("return");case 4:return t.loading=!0,e.next=7,t.queryData({pageSize:t.pag.pageSize,current:t.pag.current+1});case 7:a=e.sent,t.loading=!1,t.handleResult(a);case 10:case"end":return e.stop()}}),e)})))()},queryData:function(e){var t=this;return Object(o.a)(Object(n.a)().mark((function a(){var r,o,i,c,s,u,l;return Object(n.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=e.current,o=e.pageSize,i=t.inputValue,a.next=4,t.delay(1e3);case 4:return c=(r-1)*o,s=r*o,u=i?t.allRegion.filter((function(e){return-1!==e.label.indexOf(i)})):t.allRegion,l=u.slice(c,s),a.abrupt("return",{data:l,current:r,total:u.length});case 9:case"end":return a.stop()}}),a)})))()}}},s=(a(939),a(147)),u=Object(s.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"demo-main"},[t("label",{attrs:{for:""}},[e._v("基本版")]),e._v(" "),t("d-select",{attrs:{placeholder:"请选择",options:e.allRegion,showSearch:"",optionFilterProp:"label",pageType:"scroll",pag:{current:1,pageSize:10}},model:{value:e.form.loadValue,callback:function(t){e.$set(e.form,"loadValue",t)},expression:"form.loadValue"}}),e._v(" "),t("label",{attrs:{for:""}},[e._v("远程搜索")]),e._v(" "),t("d-select",{attrs:{placeholder:"请选择",options:e.filterOptions,showSearch:"",optionFilterProp:"label",pageType:"scroll",total:e.total,loadData:e.loadData,searchLoading:e.searchLoading},on:{search:e.search,focus:e.onFocus},model:{value:e.form.loadRemote,callback:function(t){e.$set(e.form,"loadRemote",t)},expression:"form.loadRemote"}})],1)}),[],!1,null,"4e2748d1",null);t.default=u.exports}}]);