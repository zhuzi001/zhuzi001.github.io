(window.webpackJsonp=window.webpackJsonp||[]).push([[36,64],{852:function(t,e,n){"use strict";n.r(e);n(81),n(195);var s={props:{dataSource:{type:Array,default:function(){return[]}},columnsType:{type:String,default:"columns"}},data:function(){var t=this.$createElement;return{columns:[{title:"参数",dataIndex:"prop",disabled:!0},{title:"说明",dataIndex:"description"},{title:"类型",dataIndex:"type",customRender:function(e,n,s){return t("span",{style:"color: #c41d7f"},[{text:e}])}},{title:"默认值",dataIndex:"default",disabled:!0},{title:"版本",dataIndex:"version",width:100,align:"center"}],columnsEvents:[{title:"事件名称",dataIndex:"name",disabled:!0},{title:"说明",dataIndex:"description"},{title:"回调参数",dataIndex:"callbackProp",customRender:function(e,n,s){return t("span",{style:"color: #c41d7f"},[{text:e}])}}],columnsMethods:[{title:"名称",dataIndex:"name",disabled:!0},{title:"说明",dataIndex:"description"}],isMobile:!1}},mounted:function(){var t;"events"===this.columnsType?this.columns=this.columnsEvents:"methods"===this.columnsType&&(this.columns=this.columnsMethods),this.isMobile=/Mobi|Android/i.test(null===(t=navigator)||void 0===t?void 0:t.userAgent)},methods:{setColumns:function(t){this.columns=t}}},a=n(147),o=Object(a.a)(s,(function(){return(0,this._self._c)("d-table",{attrs:{columns:this.columns,dataSource:this.dataSource,showPag:!1,pagination:!1,scroll:this.isMobile?{x:800}:{}},on:{setColumns:this.setColumns}})}),[],!1,null,null,null);e.default=o.exports},961:function(t,e,n){"use strict";n.r(e);var s={components:{apiTableVue:n(852).default},data:function(){return{dataSource:[{name:"focus()",description:"获取焦点"},{name:"blur()",description:"失去焦点"}]}}},a=n(147),o=Object(a.a)(s,(function(){return(0,this._self._c)("api-table",{attrs:{dataSource:this.dataSource,columnsType:"methods"}})}),[],!1,null,null,null);e.default=o.exports}}]);