(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-feedback-pages-opendb-feedback-opendb-feedback"],{"09a1":function(t,e,i){"use strict";i.r(e);var n=i("8c04"),o=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"0ac9":function(t,e,i){"use strict";i.r(e);var n=i("c577"),o=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"179e":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-forms-item[data-v-7b4c51d5]{position:relative;display:flex;margin-bottom:22px;flex-direction:row}.uni-forms-item__label[data-v-7b4c51d5]{display:flex;flex-direction:row;align-items:center;text-align:left;font-size:14px;color:#606266;height:36px;padding:0 12px 0 0;vertical-align:middle;flex-shrink:0;box-sizing:border-box}.uni-forms-item__label.no-label[data-v-7b4c51d5]{padding:0}.uni-forms-item__content[data-v-7b4c51d5]{position:relative;font-size:14px;flex:1;box-sizing:border-box;flex-direction:row}.uni-forms-item .uni-forms-item__nuve-content[data-v-7b4c51d5]{display:flex;flex-direction:column;flex:1}.uni-forms-item__error[data-v-7b4c51d5]{color:#f56c6c;font-size:12px;line-height:1;padding-top:4px;position:absolute;top:100%;left:0;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;-webkit-transform:translateY(-100%);transform:translateY(-100%);opacity:0}.uni-forms-item__error .error-text[data-v-7b4c51d5]{color:#f56c6c;font-size:12px}.uni-forms-item__error.msg--active[data-v-7b4c51d5]{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}.uni-forms-item.is-direction-left[data-v-7b4c51d5]{flex-direction:row}.uni-forms-item.is-direction-top[data-v-7b4c51d5]{flex-direction:column}.uni-forms-item.is-direction-top .uni-forms-item__label[data-v-7b4c51d5]{padding:0 0 8px;line-height:1.5715;text-align:left;white-space:normal}.uni-forms-item .is-required[data-v-7b4c51d5]{color:#dd524d;font-weight:700}.uni-forms-item--border[data-v-7b4c51d5]{margin-bottom:0;padding:10px 0;border-top:1px #eee solid}.uni-forms-item--border .uni-forms-item__content[data-v-7b4c51d5]{flex-direction:column;justify-content:flex-start;align-items:flex-start}.uni-forms-item--border .uni-forms-item__content .uni-forms-item__error[data-v-7b4c51d5]{position:relative;top:5px;left:0;padding-top:0}.is-first-border[data-v-7b4c51d5]{border:none}',""]),t.exports=e},"30d6":function(t,e,i){"use strict";i.r(e);var n=i("b6ef"),o=i("0ac9");for(var r in o)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("aaac");var a=i("f0c5"),s=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"396e8418",null,!1,n["a"],void 0);e["default"]=s.exports},"3b26":function(t,e,i){var n=i("41fa");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("80c17092",n,!0,{sourceMap:!1,shadowMode:!1})},4166:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uniForms:i("0d8b6").default,uniFormsItem:i("459e").default,uniFilePicker:i("1cf1").default,uniEasyinput:i("b0dc").default,uniFab:i("30d6").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-container"},[i("uni-forms",{ref:"form",attrs:{value:t.formData,"validate-trigger":"submit","err-show-type":"toast"}},[i("uni-forms-item",{attrs:{name:"content",label:"留言内容/回复内容",required:!0}},[i("v-uni-textarea",{staticClass:"uni-textarea-border",attrs:{trim:"right"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("content",e.detail.value)}},model:{value:t.formData.content,callback:function(e){t.$set(t.formData,"content",e)},expression:"formData.content"}})],1),i("uni-forms-item",{attrs:{name:"imgs",label:"图片列表"}},[i("uni-file-picker",{attrs:{"file-mediatype":"image",limit:6,"return-type":"array"},model:{value:t.formData.imgs,callback:function(e){t.$set(t.formData,"imgs",e)},expression:"formData.imgs"}})],1),i("uni-forms-item",{attrs:{name:"contact",label:"联系人"}},[i("uni-easyinput",{attrs:{trim:"both"},model:{value:t.formData.contact,callback:function(e){t.$set(t.formData,"contact",e)},expression:"formData.contact"}})],1),i("uni-forms-item",{attrs:{name:"mobile",label:"联系电话"}},[i("uni-easyinput",{attrs:{trim:"both"},model:{value:t.formData.mobile,callback:function(e){t.$set(t.formData,"mobile",e)},expression:"formData.mobile"}})],1),i("v-uni-view",{staticClass:"uni-button-group"},[i("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")])],1)],1),t.uniIDHasRole("admin")||t.uniIDHasRole("webmaster")?i("uni-fab",{ref:"fab",attrs:{horizontal:"right",vertical:"bottom","pop-menu":!1},on:{fabClick:function(e){arguments[0]=e=t.$handleEvent(e),t.fabClick.apply(void 0,arguments)}}}):t._e()],1)},r=[]},"41fa":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-container[data-v-dfdeee4c]{padding:15px}.uni-input-border[data-v-dfdeee4c],\n.uni-textarea-border[data-v-dfdeee4c]{width:100%;font-size:14px;color:#666;border:1px #e5e5e5 solid;border-radius:5px;box-sizing:border-box}.uni-input-border[data-v-dfdeee4c]{padding:0 10px;height:35px}.uni-textarea-border[data-v-dfdeee4c]{padding:10px;height:80px}.uni-button-group[data-v-dfdeee4c]{margin-top:50px;\ndisplay:flex;\njustify-content:center}.uni-button[data-v-dfdeee4c]{width:184px;padding:12px 20px;font-size:14px;border-radius:4px;line-height:1;margin:0}",""]),t.exports=e},"44d5":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-fab[data-v-396e8418]{position:fixed;display:flex;justify-content:center;align-items:center;z-index:10;border-radius:45px;box-shadow:0 1px 5px 2px rgba(0,0,0,.3)}.uni-cursor-point[data-v-396e8418]{cursor:pointer}.uni-fab--active[data-v-396e8418]{opacity:1}.uni-fab--leftBottom[data-v-396e8418]{left:15px;bottom:30px;left:calc(15px + var(--window-left));bottom:calc(30px + var(--window-bottom))}.uni-fab--leftTop[data-v-396e8418]{left:15px;top:30px;left:calc(15px + var(--window-left));top:calc(30px + var(--window-top))}.uni-fab--rightBottom[data-v-396e8418]{right:15px;bottom:30px;right:calc(15px + var(--window-right));bottom:calc(30px + var(--window-bottom))}.uni-fab--rightTop[data-v-396e8418]{right:15px;top:30px;right:calc(15px + var(--window-right));top:calc(30px + var(--window-top))}.uni-fab__circle[data-v-396e8418]{position:fixed;display:flex;justify-content:center;align-items:center;width:55px;height:55px;background-color:#3c3e49;border-radius:45px;z-index:11}.uni-fab__circle--leftBottom[data-v-396e8418]{left:15px;bottom:30px;left:calc(15px + var(--window-left));bottom:calc(30px + var(--window-bottom))}.uni-fab__circle--leftTop[data-v-396e8418]{left:15px;top:30px;left:calc(15px + var(--window-left));top:calc(30px + var(--window-top))}.uni-fab__circle--rightBottom[data-v-396e8418]{right:15px;bottom:30px;right:calc(15px + var(--window-right));bottom:calc(30px + var(--window-bottom))}.uni-fab__circle--rightTop[data-v-396e8418]{right:15px;top:30px;right:calc(15px + var(--window-right));top:calc(30px + var(--window-top))}.uni-fab__circle--left[data-v-396e8418]{left:0}.uni-fab__circle--right[data-v-396e8418]{right:0}.uni-fab__circle--top[data-v-396e8418]{top:0}.uni-fab__circle--bottom[data-v-396e8418]{bottom:0}.uni-fab__plus[data-v-396e8418]{font-weight:700}.fab-circle-icon[data-v-396e8418]{-webkit-transform:rotate(0deg);transform:rotate(0deg);transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;font-weight:200}.uni-fab__plus--active[data-v-396e8418]{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.uni-fab__content[data-v-396e8418]{box-sizing:border-box;display:flex;flex-direction:row;border-radius:55px;overflow:hidden;transition-property:width,height;transition-duration:.2s;width:55px;border-color:#ddd;border-width:%?1?%;border-style:solid}.uni-fab__content--other-platform[data-v-396e8418]{border-width:0;box-shadow:0 1px 5px 2px rgba(0,0,0,.3)}.uni-fab__content--left[data-v-396e8418]{justify-content:flex-start}.uni-fab__content--right[data-v-396e8418]{justify-content:flex-end}.uni-fab__content--flexDirection[data-v-396e8418]{flex-direction:column;justify-content:flex-end}.uni-fab__content--flexDirectionStart[data-v-396e8418]{flex-direction:column;justify-content:flex-start}.uni-fab__content--flexDirectionEnd[data-v-396e8418]{flex-direction:column;justify-content:flex-end}.uni-fab__item[data-v-396e8418]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:55px;height:55px;opacity:0;transition:opacity .2s}.uni-fab__item--active[data-v-396e8418]{opacity:1}.uni-fab__item-image[data-v-396e8418]{width:20px;height:20px;margin-bottom:4px}.uni-fab__item-text[data-v-396e8418]{color:#fff;font-size:12px;line-height:12px;margin-top:2px}.uni-fab__item--first[data-v-396e8418]{width:55px}',""]),t.exports=e},"459e":function(t,e,i){"use strict";i.r(e);var n=i("f998"),o=i("09a1");for(var r in o)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("ab15");var a=i("f0c5"),s=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"7b4c51d5",null,!1,n["a"],void 0);e["default"]=s.exports},"526a":function(t,e,i){var n=i("179e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("7f0a19a5",n,!0,{sourceMap:!1,shadowMode:!1})},7135:function(t,e,i){"use strict";i.r(e);var n=i("7a48"),o=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"74e2":function(t,e,i){"use strict";var n=i("3b26"),o=i.n(n);o.a},"7a48":function(t,e,i){"use strict";(function(t){i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("5530"));i("c975"),i("b64b"),i("d3b7");var r=i("08c8");console.log(r.validator);var a=t.database();function s(t){var e={};for(var i in r.validator)t.indexOf(i)>-1&&(e[i]=r.validator[i]);return e}var l={data:function(){var t={content:"",imgs:[],contact:"",mobile:""};return{formData:t,formOptions:{},rules:(0,o.default)({},s(Object.keys(t)))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{fabClick:function(){uni.navigateTo({url:"/uni_modules/uni-feedback/pages/opendb-feedback/list"})},submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){t.submitForm(e)})).catch((function(){uni.hideLoading()}))},submitForm:function(t){var e=this;a.collection("opendb-feedback").add(t).then((function(t){uni.showToast({icon:"none",title:"提交成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};e.default=l}).call(this,i("a9ff")["default"])},"7f9e":function(t,e,i){var n=i("44d5");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("292e39b2",n,!0,{sourceMap:!1,shadowMode:!1})},"8c04":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("53ca")),r=n(i("c7eb")),a=n(i("ade3")),s=n(i("1da1"));i("a9e3"),i("14d9"),i("d3b7"),i("159b"),i("a434");var l={name:"uniFormsItem",options:{virtualHost:!0},provide:function(){return{uniFormItem:this}},inject:{form:{from:"uniForm",default:null}},props:{rules:{type:Array,default:function(){return null}},name:{type:[String,Array],default:""},required:{type:Boolean,default:!1},label:{type:String,default:""},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:""},errorMessage:{type:[String,Boolean],default:""},leftIcon:String,iconColor:{type:String,default:"#606266"}},data:function(){return{errMsg:"",userRules:null,localLabelAlign:"left",localLabelWidth:"65px",localLabelPos:"left",border:!1,isFirstBorder:!1}},computed:{msg:function(){return this.errorMessage||this.errMsg}},watch:{"form.formRules":function(t){this.init()},"form.labelWidth":function(t){this.localLabelWidth=this._labelWidthUnit(t)},"form.labelPosition":function(t){this.localLabelPos=this._labelPosition()},"form.labelAlign":function(t){}},created:function(){var t=this;this.init(!0),this.name&&this.form&&this.$watch((function(){var e=t.form._getDataValue(t.name,t.form.localData);return e}),(function(e,i){var n=t.form._isEqual(e,i);if(!n){var o=t.itemSetValue(e);t.onFieldChange(o,!1)}}),{immediate:!1})},destroyed:function(){this.__isUnmounted||this.unInit()},methods:{setRules:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.userRules=t,this.init(!1)},setValue:function(){},onFieldChange:function(t){var e=arguments,i=this;return(0,s.default)((0,r.default)().mark((function n(){var o,s,l,u,c,f,d,m,h,b,p,v;return(0,r.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o=!(e.length>1&&void 0!==e[1])||e[1],s=i.form,l=s.formData,s.localData,u=s.errShowType,c=s.validateCheck,f=s.validateTrigger,d=s._isRequiredField,m=s._realName,h=m(i.name),t||(t=i.form.formData[h]),b=i.itemRules.rules&&i.itemRules.rules.length,i.validator&&b&&0!==b){n.next=7;break}return n.abrupt("return");case 7:if(p=d(i.itemRules.rules||[]),v=null,"bind"!==f&&!o){n.next=18;break}return n.next=12,i.validator.validateUpdate((0,a.default)({},h,t),l);case 12:v=n.sent,p||void 0!==t&&""!==t||(v=null),v&&v.errorMessage?("undertext"===u&&(i.errMsg=v?v.errorMessage:""),"toast"===u&&uni.showToast({title:v.errorMessage||"校验错误",icon:"none"}),"modal"===u&&uni.showModal({title:"提示",content:v.errorMessage||"校验错误"})):i.errMsg="",c(v||null),n.next=19;break;case 18:i.errMsg="";case 19:return n.abrupt("return",v||null);case 20:case"end":return n.stop()}}),n)})))()},init:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.form||{},i=e.validator,n=e.formRules,r=e.childrens,a=(e.formData,e.localData),s=e._realName,l=e.labelWidth,u=e._getDataValue;e._setDataValue;if(this.localLabelAlign=this._justifyContent(),this.localLabelWidth=this._labelWidthUnit(l),this.localLabelPos=this._labelPosition(),this.form&&t&&r.push(this),i&&n){this.form.isFirstBorder||(this.form.isFirstBorder=!0,this.isFirstBorder=!0),this.group&&(this.group.isFirstBorder||(this.group.isFirstBorder=!0,this.isFirstBorder=!0)),this.border=this.form.border;var c=s(this.name),f=this.userRules||this.rules;"object"===(0,o.default)(n)&&f&&(n[c]={rules:f},i.updateSchema(n));var d=n[c]||{};this.itemRules=d,this.validator=i,this.itemSetValue(u(this.name,a))}},unInit:function(){var t=this;if(this.form){var e=this.form,i=e.childrens,n=e.formData,o=e._realName;i.forEach((function(e,i){e===t&&(t.form.childrens.splice(i,1),delete n[o(e.name)])}))}},itemSetValue:function(t){var e=this.form._realName(this.name),i=this.itemRules.rules||[],n=this.form._getValue(e,t,i);return this.form._setDataValue(e,this.form.formData,n),n},clearValidate:function(){this.errMsg=""},_isRequired:function(){return this.required},_justifyContent:function(){if(this.form){var t=this.form.labelAlign,e=this.labelAlign?this.labelAlign:t;if("left"===e)return"flex-start";if("center"===e)return"center";if("right"===e)return"flex-end"}return"flex-start"},_labelWidthUnit:function(t){return this.num2px(this.labelWidth?this.labelWidth:t||(this.label?65:"auto"))},_labelPosition:function(){return this.form&&this.form.labelPosition||"left"},isTrigger:function(t,e,i){return"submit"!==t&&t?"bind":void 0===t?"bind"!==e?e?"submit":""===i?"bind":"submit":"bind":"submit"},num2px:function(t){return"number"===typeof t?"".concat(t,"px"):t}}};e.default=l},aaac:function(t,e,i){"use strict";var n=i("7f9e"),o=i.n(n);o.a},ab15:function(t,e,i){"use strict";var n=i("526a"),o=i.n(n);o.a},b3a5:function(t,e,i){"use strict";i.r(e);var n=i("4166"),o=i("7135");for(var r in o)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("74e2");var a=i("f0c5"),s=Object(a["a"])(o["default"],n["b"],n["c"],!1,null,"dfdeee4c",null,!1,n["a"],void 0);e["default"]=s.exports},b6ef:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("e1af").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-cursor-point"},[t.popMenu&&(t.leftBottom||t.rightBottom||t.leftTop||t.rightTop)&&t.content.length>0?i("v-uni-view",{staticClass:"uni-fab",class:{"uni-fab--leftBottom":t.leftBottom,"uni-fab--rightBottom":t.rightBottom,"uni-fab--leftTop":t.leftTop,"uni-fab--rightTop":t.rightTop},style:t.nvueBottom},[i("v-uni-view",{staticClass:"uni-fab__content",class:{"uni-fab__content--left":"left"===t.horizontal,"uni-fab__content--right":"right"===t.horizontal,"uni-fab__content--flexDirection":"vertical"===t.direction,"uni-fab__content--flexDirectionStart":t.flexDirectionStart,"uni-fab__content--flexDirectionEnd":t.flexDirectionEnd,"uni-fab__content--other-platform":!t.isAndroidNvue},style:{width:t.boxWidth,height:t.boxHeight,backgroundColor:t.styles.backgroundColor},attrs:{elevation:"5"}},[t.flexDirectionStart||t.horizontalLeft?i("v-uni-view",{staticClass:"uni-fab__item uni-fab__item--first"}):t._e(),t._l(t.content,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-fab__item",class:{"uni-fab__item--active":t.isShow},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._onItemClick(n,e)}}},[i("v-uni-image",{staticClass:"uni-fab__item-image",attrs:{src:e.active?e.selectedIconPath:e.iconPath,mode:"aspectFit"}}),i("v-uni-text",{staticClass:"uni-fab__item-text",style:{color:e.active?t.styles.selectedColor:t.styles.color}},[t._v(t._s(e.text))])],1)})),t.flexDirectionEnd||t.horizontalRight?i("v-uni-view",{staticClass:"uni-fab__item uni-fab__item--first"}):t._e()],2)],1):t._e(),i("v-uni-view",{staticClass:"uni-fab__circle uni-fab__plus",class:{"uni-fab__circle--leftBottom":t.leftBottom,"uni-fab__circle--rightBottom":t.rightBottom,"uni-fab__circle--leftTop":t.leftTop,"uni-fab__circle--rightTop":t.rightTop,"uni-fab__content--other-platform":!t.isAndroidNvue},style:{"background-color":t.styles.buttonColor,bottom:t.nvueBottom},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick.apply(void 0,arguments)}}},[i("uni-icons",{staticClass:"fab-circle-icon",class:{"uni-fab__plus--active":t.isShow&&t.content.length>0},attrs:{type:t.styles.icon,color:t.styles.iconColor,size:"32"}})],1)],1)},r=[]},c577:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniFab",emits:["fabClick","trigger"],props:{pattern:{type:Object,default:function(){return{}}},horizontal:{type:String,default:"left"},vertical:{type:String,default:"bottom"},direction:{type:String,default:"horizontal"},content:{type:Array,default:function(){return[]}},show:{type:Boolean,default:!1},popMenu:{type:Boolean,default:!0}},data:function(){return{fabShow:!1,isShow:!1,isAndroidNvue:!1,styles:{color:"#3c3e49",selectedColor:"#007AFF",backgroundColor:"#fff",buttonColor:"#007AFF",iconColor:"#fff",icon:"plusempty"}}},computed:{contentWidth:function(t){return 55*(this.content.length+1)+15+"px"},contentWidthMin:function(){return"55px"},boxWidth:function(){return this.getPosition(3,"horizontal")},boxHeight:function(){return this.getPosition(3,"vertical")},leftBottom:function(){return this.getPosition(0,"left","bottom")},rightBottom:function(){return this.getPosition(0,"right","bottom")},leftTop:function(){return this.getPosition(0,"left","top")},rightTop:function(){return this.getPosition(0,"right","top")},flexDirectionStart:function(){return this.getPosition(1,"vertical","top")},flexDirectionEnd:function(){return this.getPosition(1,"vertical","bottom")},horizontalLeft:function(){return this.getPosition(2,"horizontal","left")},horizontalRight:function(){return this.getPosition(2,"horizontal","right")},nvueBottom:function(){uni.getSystemInfoSync().windowBottom;return 30}},watch:{pattern:{handler:function(t,e){this.styles=Object.assign({},this.styles,t)},deep:!0}},created:function(){this.isShow=this.show,0===this.top&&(this.fabShow=!0),this.styles=Object.assign({},this.styles,this.pattern)},methods:{_onClick:function(){this.$emit("fabClick"),this.popMenu&&(this.isShow=!this.isShow)},open:function(){this.isShow=!0},close:function(){this.isShow=!1},_onItemClick:function(t,e){this.isShow&&this.$emit("trigger",{index:t,item:e})},getPosition:function(t,e,i){return 0===t?this.horizontal===e&&this.vertical===i:1===t?this.direction===e&&this.vertical===i:2===t?this.direction===e&&this.horizontal===i:this.isShow&&this.direction===e?this.contentWidth:this.contentWidthMin}}};e.default=n},f998:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-forms-item",class:["is-direction-"+t.localLabelPos,t.border?"uni-forms-item--border":"",t.border&&t.isFirstBorder?"is-first-border":""]},[t._t("label",[i("v-uni-view",{staticClass:"uni-forms-item__label",class:{"no-label":!t.label&&!t.required},style:{width:t.localLabelWidth,justifyContent:t.localLabelAlign}},[t.required?i("v-uni-text",{staticClass:"is-required"},[t._v("*")]):t._e(),i("v-uni-text",[t._v(t._s(t.label))])],1)]),i("v-uni-view",{staticClass:"uni-forms-item__content"},[t._t("default"),i("v-uni-view",{staticClass:"uni-forms-item__error",class:{"msg--active":t.msg}},[i("v-uni-text",[t._v(t._s(t.msg))])],1)],2)],2)},o=[]}}]);