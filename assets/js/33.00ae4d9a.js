(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{895:function(i,t,n){},923:function(i,t,n){"use strict";n(895)},939:function(i,t,n){"use strict";n.r(t);n(97),n(34),n(81),n(195),n(151);var e={name:"TwoColumnLayout",data:function(){return{isMiniScreen:!1}},mounted:function(){var i=this;this.$nextTick((function(){i.distributeSlots()}))},methods:{isMobile:function(){return/Mobi|Android/i.test(navigator.userAgent)},distributeSlots:function(){var i=this,t=this.$slots.default||[],n=this.$refs.column1,e=this.$refs.column2,s=Math.ceil(t.length/2);t.slice(0,s).forEach((function(i){i.elm&&n.appendChild(i.elm)})),this.isMiniScreen=this.isMobile()||window.innerWidth<800,t.slice(s).forEach((function(t){t.elm&&(i.isMiniScreen?n.appendChild(t.elm):e.appendChild(t.elm))}))}}},s=(n(923),n(147)),o=Object(s.a)(e,(function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"container"},[this._t("default"),this._v(" "),t("div",{ref:"column1",staticClass:"column"}),this._v(" "),this.isMiniScreen?this._e():t("div",{ref:"column2",staticClass:"column"})],2)}),[],!1,null,null,null);t.default=o.exports}}]);