(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-feedback-pages-opendb-feedback-detail"],{"03a4":function(e,t,n){"use strict";n.r(t);var i=n("c527"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"10e2":function(e,t,n){"use strict";var i=n("6e8b"),a=n.n(i);a.a},"1bef":function(e,t,n){"use strict";n.r(t);var i=n("77a8"),a=n("03a4");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("10e2");var u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"03b6d5de",null,!1,i["a"],void 0);t["default"]=r.exports},2888:function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("5530")),o=n("08c8"),u={data:function(){return{queryWhere:"",loadMore:{contentdown:"",contentrefresh:"",contentnomore:""},options:(0,a.default)({},o.enumConverter)}},onLoad:function(e){this._id=e.id},onReady:function(){this._id&&(this.queryWhere='_id=="'+this._id+'"')},methods:{handleUpdate:function(){var e=this;uni.navigateTo({url:"./edit?id="+this._id,events:{refreshData:function(){e.$refs.udb.loadData({clear:!0})}}})},handleDelete:function(){this.$refs.udb.remove(this._id,{success:function(e){uni.navigateTo({url:"./list"})}})}}};t.default=u},"6e8b":function(e,t,n){var i=n("cef3");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("1292faf0",i,!0,{sourceMap:!1,shadowMode:!1})},"77a8":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isShowA?n("a",{staticClass:"uni-link",class:{"uni-link--withline":!0===e.showUnderLine||"true"===e.showUnderLine},style:{color:e.color,fontSize:e.fontSize+"px"},attrs:{href:e.href,download:e.download}},[e._t("default",[e._v(e._s(e.text))])],2):n("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===e.showUnderLine||"true"===e.showUnderLine},style:{color:e.color,fontSize:e.fontSize+"px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openURL.apply(void 0,arguments)}}},[e._t("default",[e._v(e._s(e.text))])],2)},a=[]},"85eb3":function(e,t,n){"use strict";n.r(t);var i=n("2888"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},9960:function(e,t,n){"use strict";n.r(t);var i=n("bbe4"),a=n("85eb3");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("d746");var u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"28ac2b0e",null,!1,i["a"],void 0);t["default"]=r.exports},a430:function(e,t,n){var i=n("b49a");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("e5e6875c",i,!0,{sourceMap:!1,shadowMode:!1})},b49a:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".container[data-v-28ac2b0e]{padding:10px}.btns[data-v-28ac2b0e]{margin-top:10px;\ndisplay:flex;\nflex-direction:row}.btns uni-button[data-v-28ac2b0e]{flex:1}.btn-delete[data-v-28ac2b0e]{margin-left:10px}",""]),e.exports=t},bbe4:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={unicloudDb:n("960d").default,uniLoadMore:n("c05e").default,uniFilePicker:n("1cf1").default,uniLink:n("1bef").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"container"},[n("unicloud-db",{ref:"udb",attrs:{options:e.options,collection:"opendb-feedback",field:"content,imgs,contact,mobile",where:e.queryWhere,getone:!0,manual:!0},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.data,a=t.loading,o=t.error;t.options;return[o?n("v-uni-view",[e._v(e._s(o.message))]):a?n("v-uni-view",[n("uni-load-more",{attrs:{contentText:e.loadMore,status:"loading"}})],1):i?n("v-uni-view",[n("v-uni-view",[n("v-uni-text",[e._v("留言内容/回复内容")]),n("v-uni-text",[e._v(e._s(i.content))])],1),n("v-uni-view",[n("v-uni-text",[e._v("图片列表")]),e._l(i.imgs,(function(e,t){return["image"==e.fileType?n("uni-file-picker",{attrs:{value:e,"file-mediatype":e.fileType,"return-type":"object",readonly:!0}}):n("uni-link",{attrs:{href:e.url,text:e.url}})]}))],2),n("v-uni-view",[n("v-uni-text",[e._v("联系人")]),n("v-uni-text",[e._v(e._s(i.contact))])],1),n("v-uni-view",[n("v-uni-text",[e._v("联系电话")]),n("v-uni-text",[e._v(e._s(i.mobile))])],1)],1):e._e()]}}])}),n("v-uni-view",{staticClass:"btns"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleUpdate.apply(void 0,arguments)}}},[e._v("修改")]),n("v-uni-button",{staticClass:"btn-delete",attrs:{type:"warn"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleDelete.apply(void 0,arguments)}}},[e._v("删除")])],1)],1)},o=[]},c527:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3"),n("2ca0");var i={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){window.open(this.href)},makePhoneCall:function(e){uni.makePhoneCall({phoneNumber:e})}}};t.default=i},cef3:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,"\n.uni-link[data-v-03b6d5de]{cursor:pointer}\n.uni-link--withline[data-v-03b6d5de]{text-decoration:underline}",""]),e.exports=t},d746:function(e,t,n){"use strict";var i=n("a430"),a=n.n(i);a.a}}]);