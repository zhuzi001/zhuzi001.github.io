(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{957:function(e,t,a){"use strict";a.r(t);var n={data:function(){return{form:{textValue:""}}},methods:{onChange:function(e){}}},l=a(147),r=Object(l.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xm-main"},[a("a-space",{staticStyle:{width:"100%"},attrs:{direction:"vertical",size:24}},[a("h2",[e._v("基本用法")]),e._v(" "),a("d-input-number",{attrs:{placeholder:"请输入",defaultValue:4},on:{change:e.onChange}}),e._v(" "),a("d-input-number",{attrs:{placeholder:"请输入"},model:{value:e.form.textValue,callback:function(t){e.$set(e.form,"textValue",t)},expression:"form.textValue"}}),e._v(" "),a("h2",[e._v("最大最小值")]),e._v(" "),a("d-input-number",{attrs:{placeholder:"请输入",defaultValue:22,formatter:function(e){return("$ "+e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},min:12,max:88}}),e._v(" "),a("d-input-number",{attrs:{placeholder:"请输入",defaultValue:21,min:12,max:88,step:10}}),e._v(" "),a("h2",{staticClass:"blue-label"},[e._v("是否显示增减按钮")]),e._v(" "),a("d-input-number",{attrs:{placeholder:"请输入",defaultValue:4,controls:!1},model:{value:e.form.textValue,callback:function(t){e.$set(e.form,"textValue",t)},expression:"form.textValue"}}),e._v(" "),a("h2",[e._v("格式化展示")]),e._v(" "),a("d-input-number",{attrs:{"default-value":1e3,formatter:function(e){return("$ "+e).replace(/\B(?=(\d{3})+(?!\d))/g,",")}},on:{change:e.onChange}}),e._v(" "),a("h2",{staticClass:"blue-label"},[e._v("前置/后置标签")]),e._v(" "),a("d-input-number",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入",addonAfter:"￥"},scopedSlots:e._u([{key:"addonBefore",fn:function(){return[e._v(" + ")]},proxy:!0}]),model:{value:e.form.textValue,callback:function(t){e.$set(e.form,"textValue",t)},expression:"form.textValue"}}),e._v(" "),a("h2",[e._v("精度 precision")]),e._v(" "),a("d-input-number",{attrs:{precision:4},model:{value:e.form.precision,callback:function(t){e.$set(e.form,"precision",t)},expression:"form.precision"}})],1)],1)}),[],!1,null,null,null);t.default=r.exports}}]);