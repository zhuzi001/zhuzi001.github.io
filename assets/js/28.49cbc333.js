(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{908:function(e,t,a){},938:function(e,t,a){"use strict";a(908)},981:function(e,t,a){"use strict";a.r(t);var n=a(68),r=a(98),o=(a(96),a(97),a(34),a(855)),i={data:function(){return{allRegion:o.data[0].children,searchLoading:!1,total:0,inputValue:"",filterOptions:[],filterOptions1:[],pag:{current:1,pageSize:10,showTotal:function(e){return"共 ".concat(e," 条")}},groups:[{label:o.data[0].label,key:o.data[0].value,options:o.data[0].children}],form:{}}},created:function(){},methods:{onFocus:function(){this.filterOptions.length||this.pagChange(this.pag.current,this.pag.pageSize)},pagChange:function(e,t){var a=this;return Object(r.a)(Object(n.a)().mark((function r(){var o;return Object(n.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.queryData({current:e,pageSize:t});case 2:o=n.sent,console.log(o,"result"),a.filterOptions=o.data||[],a.pag.current=o.current||1,a.total=o.total||0;case 7:case"end":return n.stop()}}),r)})))()},delay:function(e){return new Promise((function(t){return setTimeout(t,e)}))},queryData:function(e){var t=this;return Object(r.a)(Object(n.a)().mark((function a(){var r,o,i,c,s,l,u;return Object(n.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t.searchLoading){a.next=2;break}return a.abrupt("return");case 2:return r=e.current,o=e.pageSize,i=t.inputValue,t.searchLoading=!0,a.next=7,t.delay(1e3);case 7:return c=(r-1)*o,s=r*o,l=i?t.allRegion.filter((function(e){return-1!==e.label.indexOf(i)})):t.allRegion,u=l.slice(c,s),t.searchLoading=!1,a.abrupt("return",{data:u,current:r,total:l.length});case 13:case"end":return a.stop()}}),a)})))()}}},c=(a(938),a(147)),s=Object(c.a)(i,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"demo-main"},[t("label",{attrs:{for:""}},[e._v("简单模式")]),e._v(" "),t("d-select",{attrs:{placeholder:"请选择",options:e.allRegion,pageType:"pagination"},model:{value:e.form.basicValue,callback:function(t){e.$set(e.form,"basicValue",t)},expression:"form.basicValue"}}),e._v(" "),t("label",{attrs:{for:""}},[e._v("group(仅支持groups的组数)")]),e._v(" "),t("d-select",{attrs:{placeholder:"请选择",groups:e.groups,pageType:"pagination",pag:{current:1,pageSize:10,showTotal:function(e){return"共 ".concat(e," 组")}}},model:{value:e.form.basicValue,callback:function(t){e.$set(e.form,"basicValue",t)},expression:"form.basicValue"}}),e._v(" "),t("label",{attrs:{for:""}},[e._v("分页pagination(远程搜索) - 简单版")]),e._v(" "),t("d-select",{attrs:{placeholder:"请选择",options:e.filterOptions,pageType:"paginationRemote",total:e.total,searchLoading:e.searchLoading},on:{pagChange:e.pagChange,focus:e.onFocus},model:{value:e.form.loadRemote,callback:function(t){e.$set(e.form,"loadRemote",t)},expression:"form.loadRemote"}})],1)}),[],!1,null,"7ad05666",null);t.default=s.exports}}]);