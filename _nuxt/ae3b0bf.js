(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{204:function(t,e,r){var content=r(209);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("2fdd1b1b",content,!0,{sourceMap:!1})},205:function(t,e,r){var content=r(214);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("c0806078",content,!0,{sourceMap:!1})},206:function(t,e,r){"use strict";var n=r(1),o=r(89),c=n.a.extend({components:{icon:o.a},methods:{emitRemove:function(){this.$emit("remove")}}}),l=(r(208),r(9)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"tag"},[r("span",{staticClass:"tag-content"},[t._t("default")],2),r("icon",{staticClass:"icon-x remove",attrs:{icon:"x",role:"button","aria-label":"remove tag"},nativeOn:{"&click":function(e){return t.emitRemove(e)}}})],1)}),[],!1,null,"140a25d6",null);e.a=component.exports},208:function(t,e,r){"use strict";r(204)},209:function(t,e,r){(e=r(19)(!1)).push([t.i,".tag[data-v-140a25d6]{padding:.5rem;position:relative;border:solid var(--line-width) var(--foreground)}.tag[data-v-140a25d6],.tag .icon-x[data-v-140a25d6]{display:inline-block}.tag .icon-x[data-v-140a25d6]{height:1rem;margin-left:.25rem;vertical-align:sub}.tag[data-v-140a25d6]:not(:last-of-type){margin-right:.5rem}",""]),t.exports=e},210:function(t,e,r){"use strict";var n=r(4),o=r(30),c=r(37),l=r(137),d=r(72),f=r(14),h=r(54).f,v=r(73).f,m=r(12).f,x=r(211).trim,w=n.Number,_=w,y=w.prototype,O="Number"==c(r(90)(y)),C="trim"in String.prototype,j=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,c=(e=C?e.trim():x(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof w&&(O?f((function(){y.valueOf.call(r)})):"Number"!=c(r))?l(new _(j(e)),r,w):j(e)};for(var E,S=r(7)?h(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;S.length>I;I++)o(_,E=S[I])&&!o(w,E)&&m(w,E,v(_,E));w.prototype=y,y.constructor=w,r(15)(n,"Number",w)}},211:function(t,e,r){var n=r(5),o=r(38),c=r(14),l=r(212),d="["+l+"]",f=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),v=function(t,e,r){var o={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),f=o[t]=d?e(m):l[t];r&&(o[r]=f),n(n.P+n.F*d,"String",o)},m=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(h,"")),t};t.exports=v},212:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},213:function(t,e,r){"use strict";r(205)},214:function(t,e,r){(e=r(19)(!1)).push([t.i,".post-preview-container[data-v-9f9186de]{position:relative;overflow:hidden;width:100%;height:100%}.post-preview-container #post-link[data-v-9f9186de]{display:block;height:100%}.post-info-container[data-v-9f9186de]{position:relative;z-index:999;height:100%;opacity:1;transition:opacity .5s}.post-info-container[data-v-9f9186de]:hover{opacity:0;transition:opacity .5s}.post-info[data-v-9f9186de]{position:relative;z-index:999;padding:var(--spacing)}.post-preview-container .post-preview-image[data-v-9f9186de],.post-preview-container .shade[data-v-9f9186de]{position:absolute;top:0;left:0}.post-preview-container .post-preview-image[data-v-9f9186de]{-o-object-fit:cover;object-fit:cover;-o-object-position:50% 50%;object-position:50% 50%;width:100%;height:100%}.post-preview-container .shade[data-v-9f9186de]{width:100%;height:100%;background-color:var(--background);opacity:.5}.author[data-v-9f9186de],.date[data-v-9f9186de]{text-align:right}",""]),t.exports=e},215:function(t,e,r){"use strict";var n=r(5),o=r(138)(6),c="findIndex",l=!0;c in[]&&Array(1)[c]((function(){l=!1})),n(n.P+n.F*l,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(71)(c)},216:function(t,e,r){"use strict";r(210);var n=r(1),o=n.a.extend({props:{title:String,author:String,updatedAt:[String,Date],description:String,image:String,href:String},computed:{formattedDate:function(){var t="string"==typeof this.updatedAt?new Date(this.updatedAt):this.updatedAt;return null==t?void 0:t.toLocaleDateString("en-GB",{})}}}),c=(r(213),r(9)),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"post-preview-container"},[r("nuxt-link",{attrs:{id:"post-link",to:t.href||"#"}},[r("div",{staticClass:"post-info-container"},[r("div",{staticClass:"post-info"},[r("h1",[t._v(t._s(t.title))]),t._v(" "),t.author?r("p",{staticClass:"author"},[t._v("\n                by "+t._s(t.author)+"\n            ")]):t._e(),t._v(" "),t.formattedDate?r("p",{staticClass:"date"},[t._v("\n                "+t._s(t.formattedDate)+"\n            ")]):t._e(),t._v(" "),t.description?r("p",{staticClass:"description"},[t._v("\n                "+t._s(t.description)+"\n            ")]):t._e()]),t._v(" "),r("div",{staticClass:"shade"})]),t._v(" "),t.image?r("img",{staticClass:"post-preview-image",attrs:{src:t.image}}):t._e()])],1)}),[],!1,null,"9f9186de",null).exports,d=n.a.extend({components:{PostPreview:l},props:{posts:Array,columns:{type:Number,default:3}}}),f=Object(c.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"},this._l(this.posts,(function(t){return e("post-preview",{key:t.id||t.path,staticClass:"post-preview",attrs:{title:t.title,author:t.author,updatedAt:t.updatedAt,description:t.description,image:t.image,href:t.href}})})),1)}),[],!1,null,"560ea380",null);e.a=f.exports},220:function(t,e,r){var content=r(228);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("45be49ee",content,!0,{sourceMap:!1})},227:function(t,e,r){"use strict";r(220)},228:function(t,e,r){(e=r(19)(!1)).push([t.i,"#brand{position:fixed;top:0;left:0;width:100%}#brand-brotzeit{font-size:24vw;line-height:.85em}#brand-engineering{font-size:8vw}#index-content{position:relative;z-index:999;margin-top:25vh}#filter-container{margin-bottom:2rem;padding:1rem;background-color:var(--background);border:solid var(--line-width) var(--foreground)}#filter-container #search-field{width:100%}.tag-list{margin-bottom:1rem}",""]),t.exports=e},239:function(t,e,r){"use strict";r.r(e);r(57),r(21),r(24),r(42),r(56),r(22),r(23),r(10),r(91),r(41),r(55),r(215);var n=r(28),o=(r(29),r(2)),c=r(1),l=r(216),d=r(206),f=r(89),h=c.a.extend({components:{icon:f.a,Tag:d.a},props:{tags:{type:Array,default:function(){return[]}}},methods:{handleRemoveEvent:function(t){this.tags.splice(t,1)}}}),v=r(9),m=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tag-list"},t._l(t.tags,(function(e,n){return r("tag",{key:e,on:{remove:function(e){return t.handleRemoveEvent(n)}}},[t._v(t._s(e))])})),1)}),[],!1,null,"2bd90bae",null).exports,x=(r(58),c.a.extend({components:{TagList:m},props:{filters:{type:Object,default:function(){return{tags:[]}}},placeholder:{type:String,default:"Search for text or tags like #tag"}},model:{prop:"filters",event:"change"},data:function(){return{searchText:""}},watch:{searchText:function(t,e){if(!this.searchText.startsWith("#"))return this.filters.search=this.searchText,void this.$emit("change",this.filters);this.searchText.length>2&&" "===this.searchText[this.searchText.length-1]&&(this.filters.tags.push(this.searchText.slice(1).split(" ")[0]),this.$emit("change",this.filters),this.searchText="")}}})),w=Object(v.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-widget"},[r("tag-list",{staticClass:"tag-list",attrs:{tags:t.filters.tags}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],ref:"searchBox",attrs:{id:"search-field",type:"text",placeholder:t.placeholder},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}})],1)}),[],!1,null,"8ae7b150",null).exports;function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={tags:[],search:""},C=c.a.extend({components:{PostGrid:l.a,Tag:d.a,TagList:m,SearchWidget:w},data:function(){return{filters:O}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,e.next=3,r("/").only(["path","title","author","updatedAt","description","tags","image"]).sortBy("updatedAt","desc").fetch();case 3:return n=e.sent.map((function(t){return y(y({},t),{},{href:"/articles"+t.path})})),e.abrupt("return",{posts:n});case 5:case"end":return e.stop()}}),e)})))()},computed:{filteredPosts:function(){var t=this;return this.posts.filter((function(p){var e,r,n;return!!(t.filters.tags.length&&p.tags&&p.tags.findIndex((function(e){return t.filters.tags.includes(e)}))>-1)||(!(!t.filters.search||!((null===(e=p.description)||void 0===e?void 0:e.indexOf(t.filters.search))>-1||(null===(r=p.title)||void 0===r?void 0:r.toLowerCase().indexOf(t.filters.search.toLowerCase()))>-1||(null===(n=p.author)||void 0===n?void 0:n.toLowerCase().indexOf(t.filters.search.toLowerCase()))>-1))||!t.filters.tags.length&&!t.filters.search)}))}},watch:{filteredPosts:function(){var t=this.filters,e=new URLSearchParams(window.location.search);t.search?e.set("search",t.search):e.delete("search"),t.tags.length?e.set("tags",encodeURIComponent(t.tags.join(" "))):e.delete("tags"),history.replaceState(null,"",window.location.pathname+"?"+e.toString())}},mounted:function(){var t=new URLSearchParams(window.location.search);if(t.has("search")&&"string"==typeof t.get("search")&&(this.filters.search=t.get("search")),t.has("tags")&&"string"==typeof t.get("tags")){var e=decodeURIComponent(t.get("tags")).split(" ");this.filters.tags=e}}}),j=(r(227),Object(v.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("div",{attrs:{id:"index-content"}},[r("div",{attrs:{id:"filter-container"}},[r("div",{attrs:{id:"filters"}},[r("h3",[t._v("Filter content")]),t._v(" "),r("search-widget",{attrs:{placeholder:"Search for text or tags like #code"},model:{value:t.filters,callback:function(e){t.filters=e},expression:"filters"}})],1)]),t._v(" "),r("post-grid",{staticClass:"post-grid",attrs:{posts:t.filteredPosts}})],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"brand"}},[e("h1",[e("div",{attrs:{id:"brand-brotzeit"}},[this._v("Brotzeit")]),e("div",{attrs:{id:"brand-engineering"}},[this._v(".engineering")])])])}],!1,null,null,null));e.default=j.exports}}]);