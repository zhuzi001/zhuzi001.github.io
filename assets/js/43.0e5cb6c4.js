(window.webpackJsonp=window.webpackJsonp||[]).push([[43,49],{852:function(t,e,n){"use strict";n.r(e);n(81),n(195);var o={props:{dataSource:{type:Array,default:function(){return[]}},columnsType:{type:String,default:"columns"}},data:function(){var t=this.$createElement;return{columns:[{title:"参数",dataIndex:"prop",disabled:!0},{title:"说明",dataIndex:"description"},{title:"类型",dataIndex:"type",customRender:function(e,n,o){return t("span",{style:"color: #c41d7f"},[{text:e}])}},{title:"默认值",dataIndex:"default",disabled:!0},{title:"版本",dataIndex:"version",width:100,align:"center"}],columnsEvents:[{title:"事件名称",dataIndex:"name",disabled:!0},{title:"说明",dataIndex:"description"},{title:"回调参数",dataIndex:"callbackProp",customRender:function(e,n,o){return t("span",{style:"color: #c41d7f"},[{text:e}])}}],columnsMethods:[{title:"名称",dataIndex:"name",disabled:!0},{title:"说明",dataIndex:"description"}],isMobile:/Mobi|Android/i.test(navigator.userAgent)}},created:function(){"events"===this.columnsType?this.columns=this.columnsEvents:"methods"===this.columnsType&&(this.columns=this.columnsMethods)},methods:{setColumns:function(t){this.columns=t}}},s=n(147),i=Object(s.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("d-table",{attrs:{columns:this.columns,dataSource:this.dataSource,showPag:!1,scroll:this.isMobile?{x:800}:{}},on:{setColumns:this.setColumns}})}),[],!1,null,null,null);e.default=i.exports},958:function(t,e,n){"use strict";n.r(e);var o={components:{apiTableVue:n(852).default},data:function(){return{dataSource:[{prop:"value(v-model)",description:"内容",type:"number",default:"-",version:"-"},{prop:"controls",description:"是否显示增减按钮",type:"boolean",default:"true",version:"-"},{prop:"addonAfter",description:"带标签的 input，设置后置标签",type:"string | slot",default:"-",version:"-"},{prop:"min",description:"最小值",type:"number",default:"-",version:"-"},{prop:"max",description:"最大值",type:"number",default:"-",version:"-"},{prop:"step",description:"每次改变步数，可以为小数",type:"number",default:"1",version:"-"},{prop:"defaultValue",description:"初始值",type:"number",default:"-",version:"-"},{prop:"precision",description:"数值精度",type:"number",default:"-",version:"-"},{prop:"formatter",description:"指定输入框展示值的格式",type:"function(value:number | string)",default:"-",version:"-"}]}}},s=n(147),i=Object(s.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("api-table",{attrs:{dataSource:this.dataSource}})}),[],!1,null,null,null);e.default=i.exports}}]);