(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{304:function(t,n,e){},309:function(t,n,e){"use strict";e(304)},310:function(t,n,e){"use strict";var i={name:"UButton",components:{"u-icon":e(318).a},props:{icon:{},loading:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validator:function(t){return"left"===t||"right"===t}}}},s=(e(309),e(43)),a=Object(s.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"u-button",class:"icon-"+t.iconPosition,on:{click:function(n){return t.$emit("click")}}},[t.loading?e("u-icon",{staticClass:"icon loading",attrs:{name:t.icon}}):t._e(),t._v(" "),t.icon&&!t.loading?e("u-icon",{staticClass:"icon",attrs:{color:"dark",name:t.icon}}):t._e(),t._v(" "),e("div",{staticClass:"u-button-content"},[t._t("default")],2)],1)}),[],!1,null,null,null);n.a=a.exports},314:function(t,n,e){},315:function(t,n,e){},316:function(t,n,e){},317:function(t,n,e){},321:function(t,n,e){"use strict";e(314)},322:function(t,n,e){"use strict";e(315)},323:function(t,n,e){"use strict";e(316)},324:function(t,n,e){"use strict";e(317)},330:function(t,n,e){"use strict";e(91),e(64),e(92);var i={name:"ULayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(n){"USider"===n.$options.name&&(t.layoutClass.hasSider=!0)}))}},s=(e(321),e(43)),a=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,null,null);n.a=a.exports},331:function(t,n,e){"use strict";var i={name:"UHeader"},s=e(43),a=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,null,null);n.a=a.exports},332:function(t,n,e){"use strict";var i={name:"UFooter"},s=(e(322),e(43)),a=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"56ac4c46",null);n.a=a.exports},333:function(t,n,e){"use strict";var i={name:"UContent"},s=(e(323),e(43)),a=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"u-content"},[this._t("default")],2)}),[],!1,null,"63a998c6",null);n.a=a.exports},334:function(t,n,e){"use strict";var i={name:"USider",components:{UButton:e(310).a},data:function(){return{visible:!0}},methods:{}},s=(e(324),e(43)),a=Object(s.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"slide"}},[t.visible?e("div",{staticClass:"sider"},[t._t("default"),t._v(" "),e("u-button",{attrs:{icon:"close"},on:{click:function(n){t.visible=!1}}})],2):t._e()])}),[],!1,null,"c97beacc",null);n.a=a.exports},424:function(t,n,e){"use strict";e.r(n);var i=e(330),s=e(331),a=e(332),c=e(333),o=e(334),r={components:{ULayout:i.a,UHeader:s.a,UFooter:a.a,UContent:c.a,USider:o.a}},u=e(43),l=Object(u.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticStyle:{"padding-top":"16px"}},[n("u-layout",{staticStyle:{overflow:"hidden"}},[n("u-sider",{staticClass:"border-left border-y",staticStyle:{width:"10rem"}},[this._v("\n      sider内容\n    ")]),this._v(" "),n("u-layout",[n("u-header",{staticClass:"border",staticStyle:{height:"2rem"}},[this._v("\n        header内容\n      ")]),this._v(" "),n("u-content",{staticClass:"border-x",staticStyle:{height:"6rem"}},[this._v("\n        content内容\n      ")]),this._v(" "),n("u-footer",{staticClass:"border",staticStyle:{height:"2rem"}},[this._v("\n        footer内容\n      ")])],1)],1)],1)}),[],!1,null,null,null);n.default=l.exports}}]);