(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{196:function(t,e,o){var content=o(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("b2a990d2",content,!0,{sourceMap:!1})},197:function(t,e,o){var content=o(205);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("2fdd1b1b",content,!0,{sourceMap:!1})},198:function(t,e,o){var content=o(207);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("5019665c",content,!0,{sourceMap:!1})},199:function(t,e,o){"use strict";var n=o(1),r=o(211),l=o.n(r),c=n.a.extend({props:{icon:String},computed:{iconSVG:function(){return l.a.icons[this.icon].toSvg({stroke:"var(--foreground)",width:"100%",height:"100%"})}}}),d=(o(202),o(18)),component=Object(d.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"icon",domProps:{innerHTML:this._s(this.iconSVG)}})}),[],!1,null,"5cb61f66",null);e.a=component.exports},200:function(t,e,o){"use strict";var n=o(1),r=o(199),l=n.a.extend({components:{icon:r.a},methods:{emitRemove:function(){this.$emit("remove")}}}),c=(o(204),o(18)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"tag"},[o("span",{staticClass:"tag-content"},[t._t("default")],2),o("icon",{staticClass:"icon-x remove",attrs:{icon:"x",role:"button","aria-label":"remove tag"},nativeOn:{"&click":function(e){return t.emitRemove(e)}}})],1)}),[],!1,null,"140a25d6",null);e.a=component.exports},202:function(t,e,o){"use strict";o(196)},203:function(t,e,o){(e=o(35)(!1)).push([t.i,"",""]),t.exports=e},204:function(t,e,o){"use strict";o(197)},205:function(t,e,o){(e=o(35)(!1)).push([t.i,".tag[data-v-140a25d6]{padding:.5rem;position:relative;border:solid var(--line-width) var(--foreground)}.tag[data-v-140a25d6],.tag .icon-x[data-v-140a25d6]{display:inline-block}.tag .icon-x[data-v-140a25d6]{height:1rem;margin-left:.25rem;vertical-align:sub}.tag[data-v-140a25d6]:not(:last-of-type){margin-right:.5rem}",""]),t.exports=e},206:function(t,e,o){"use strict";o(198)},207:function(t,e,o){(e=o(35)(!1)).push([t.i,".post-preview-container[data-v-a06bbf30]{position:relative;overflow:hidden;width:100%;height:100%}.post-preview-container #post-link[data-v-a06bbf30]{display:block;height:100%}.post-info-container[data-v-a06bbf30]{position:relative;z-index:999;height:100%;opacity:1;transition:opacity .5s}.post-info-container[data-v-a06bbf30]:hover{opacity:0;transition:opacity .5s}.post-info[data-v-a06bbf30]{position:relative;z-index:999;padding:var(--spacing)}.post-preview-container .post-preview-image[data-v-a06bbf30],.post-preview-container .shade[data-v-a06bbf30]{position:absolute;top:0;left:0}.post-preview-container .post-preview-image[data-v-a06bbf30]{-o-object-fit:cover;object-fit:cover;-o-object-position:50% 50%;object-position:50% 50%;width:100%;height:100%}.post-preview-container .shade[data-v-a06bbf30]{width:100%;height:100%;background-color:var(--background);opacity:.5}.author[data-v-a06bbf30],.date[data-v-a06bbf30]{text-align:right}",""]),t.exports=e},209:function(t,e,o){"use strict";o(212);var n=o(1),r=n.a.extend({props:{title:String,author:String,updatedAt:[String,Date],description:String,image:String,href:String},computed:{formattedDate:function(){var t="string"==typeof this.updatedAt?new Date(this.updatedAt):this.updatedAt;return null==t?void 0:t.toLocaleDateString("en-GB",{})}}}),l=(o(206),o(18)),c=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"post-preview-container"},[o("a",{attrs:{id:"post-link",href:t.href}},[o("div",{staticClass:"post-info-container"},[o("div",{staticClass:"post-info"},[o("h1",[t._v(t._s(t.title))]),t._v(" "),t.author?o("p",{staticClass:"author"},[t._v("\n                by "+t._s(t.author)+"\n            ")]):t._e(),t._v(" "),t.formattedDate?o("p",{staticClass:"date"},[t._v("\n                "+t._s(t.formattedDate)+"\n            ")]):t._e(),t._v(" "),t.description?o("p",{staticClass:"description"},[t._v("\n                "+t._s(t.description)+"\n            ")]):t._e()]),t._v(" "),o("div",{staticClass:"shade"})]),t._v(" "),t.image?o("img",{staticClass:"post-preview-image",attrs:{src:t.image}}):t._e()])])}),[],!1,null,"a06bbf30",null).exports,d=n.a.extend({components:{PostPreview:c},props:{posts:Array,columns:{type:Number,default:3}},computed:{classList:function(){var t=["grid-cols-"+this.columns];return t}}}),m=Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid gap-4",class:this.classList},this._l(this.posts,(function(t){return e("post-preview",{key:t.id||t.path,staticClass:"post-preview",attrs:{title:t.title,author:t.author,updatedAt:t.updatedAt,description:t.description,image:t.image,href:t.href}})})),1)}),[],!1,null,"3f94eeb1",null);e.a=m.exports},213:function(t,e,o){var content=o(221);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("2511e0de",content,!0,{sourceMap:!1})},220:function(t,e,o){"use strict";o(213)},221:function(t,e,o){(e=o(35)(!1)).push([t.i,".style-container{padding:2rem;background-color:var(--background);color:var(--foreground)}",""]),t.exports=e},238:function(t,e,o){"use strict";o.r(e);var n=o(1),r=o(200),l=o(209),c=o(199),d=n.a.extend({components:{Tag:r.a,PostGrid:l.a,Icon:c.a},data:function(){return{posts:[{title:"Hello World!",author:"Jan Hettenkofer",date:Date(),excerpt:"Mauris eget metus a sem imperdiet ultrices vel at lacus. In mollis sit amet massa in sodales. Vestibulum commodo est non tortor sagittis, nec posuere metus feugiat. Aliquam quis lacinia sem, vitae vulputate ligula. Duis aliquet laoreet nulla, eget feugiat justo malesuada id. Phasellus at tempor lectus. Curabitur congue sit amet sapien eu lacinia.",image:"img/forest.jpg"},{title:"Hello Universe!",author:"Jan Hettenkofer",date:Date(),excerpt:"Mauris eget metus a sem imperdiet ultrices vel at lacus. In mollis sit amet massa in sodales. Vestibulum commodo est non tortor sagittis, nec posuere metus feugiat. Aliquam quis lacinia sem, vitae vulputate ligula. Duis aliquet laoreet nulla, eget feugiat justo malesuada id. Phasellus at tempor lectus. Curabitur congue sit amet sapien eu lacinia.",image:"img/barbecue.jpg"},{title:"Hello World!",author:"Jan Hettenkofer",date:Date(),excerpt:"Mauris eget metus a sem imperdiet ultrices vel at lacus. In mollis sit amet massa in sodales. Vestibulum commodo est non tortor sagittis, nec posuere metus feugiat. Aliquam quis lacinia sem, vitae vulputate ligula. Duis aliquet laoreet nulla, eget feugiat justo malesuada id. Phasellus at tempor lectus. Curabitur congue sit amet sapien eu lacinia.",image:"img/forest.jpg"},{title:"Hello Universe!",author:"Jan Hettenkofer",date:Date(),excerpt:"Mauris eget metus a sem imperdiet ultrices vel at lacus. In mollis sit amet massa in sodales. Vestibulum commodo est non tortor sagittis, nec posuere metus feugiat. Aliquam quis lacinia sem, vitae vulputate ligula. Duis aliquet laoreet nulla, eget feugiat justo malesuada id. Phasellus at tempor lectus. Curabitur congue sit amet sapien eu lacinia.",image:"img/barbecue.jpg"},{title:"Hello World!",author:"Jan Hettenkofer",date:Date(),excerpt:"Mauris eget metus a sem imperdiet ultrices vel at lacus. In mollis sit amet massa in sodales. Vestibulum commodo est non tortor sagittis, nec posuere metus feugiat. Aliquam quis lacinia sem, vitae vulputate ligula. Duis aliquet laoreet nulla, eget feugiat justo malesuada id. Phasellus at tempor lectus. Curabitur congue sit amet sapien eu lacinia.",image:"img/forest.jpg"}]}}}),m=(o(220),o(18)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container grid grid-cols-2"},t._l(["dark","light"],(function(style){return o("div",{key:style,staticClass:"style-container",class:style},t._l(["bz-sans","bz-serif"],(function(e){return o("div",{key:e,class:e},[o("h2",[t._v("Font Style: "+t._s(e))]),t._v(" "),o("hr"),t._v(" "),o("h2",[t._v("UI Elements")]),t._v(" "),o("h3",[t._v("Tag")]),t._v(" "),o("tag",[t._v("#code")]),t._v(" "),o("tag",[t._v("#photography")]),t._v(" "),o("tag",[t._v("#food")]),t._v(" "),o("h3",[t._v("Post preview grid")]),t._v(" "),o("post-grid",{attrs:{posts:t.posts}}),t._v(" "),o("h3",[t._v("Icon")]),t._v(" "),t._l(["x","chevron-right","activity"],(function(t){return o("div",{key:t,staticStyle:{width:"20px"}},[o("icon",{attrs:{icon:t}})],1)})),t._v(" "),o("h2",[t._v("Typography")]),t._v(" "),o("h1",[t._v("Headline 1")]),t._v(" "),o("h2",[t._v("Headline 2")]),t._v(" "),o("h3",[t._v("Headline 3")]),t._v(" "),o("h4",[t._v("Headline 4")]),t._v(" "),o("h5",[t._v("Headline 5")]),t._v(" "),o("h6",[t._v("Headline 6")]),t._v(" "),t._m(0,!0),t._v(" "),o("p",[t._v("Mauris eget metus a sem imperdiet ultrices vel at lacus. In mollis sit amet massa in sodales. Vestibulum commodo est non tortor sagittis, nec posuere metus feugiat. Aliquam quis lacinia sem, vitae vulputate ligula. Duis aliquet laoreet nulla, eget feugiat justo malesuada id. Phasellus at tempor lectus. Curabitur congue sit amet sapien eu lacinia.")])],2)})),0)})),0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Lorem "),e("a",{attrs:{href:"#"}},[this._v("ipsum dolor")]),this._v(" sit amet, consectetur adipiscing elit. Praesent hendrerit eleifend viverra. Quisque mollis nisi cursus purus rhoncus commodo. Nam vitae augue mollis, consequat massa non, scelerisque nibh. Vivamus commodo placerat est a ornare. Suspendisse potenti. Quisque sit amet ultrices tellus, sit amet aliquet diam. Ut posuere est ipsum, quis tincidunt est scelerisque a. Donec varius interdum sapien, a aliquam ipsum fringilla vitae. Ut lobortis ligula odio. Cras nec suscipit justo.")])}],!1,null,null,null);e.default=component.exports}}]);