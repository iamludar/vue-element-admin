webpackJsonp([28],{"1rqp":function(v,i,_){var t=_("4H1L");"string"==typeof t&&(t=[[v.i,t,""]]),t.locals&&(v.exports=t.locals);_("rjj0")("874cb688",t,!0)},"4H1L":function(v,i,_){(v.exports=_("FZ+f")(!1)).push([v.i,"\n.back-to-ceiling[data-v-8aa3fc1e] {\n  position: fixed;\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n}\n.back-to-ceiling[data-v-8aa3fc1e]:hover {\n  background: #d5dbe7;\n}\n.fade-enter-active[data-v-8aa3fc1e],\n.fade-leave-active[data-v-8aa3fc1e] {\n  -webkit-transition: opacity .5s;\n  transition: opacity .5s;\n}\n.fade-enter[data-v-8aa3fc1e],\n.fade-leave-to[data-v-8aa3fc1e] {\n  opacity: 0\n}\n.back-to-ceiling .Icon[data-v-8aa3fc1e] {\n  fill: #9aaabf;\n  background: none;\n}\n",""])},snxh:function(v,i,_){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t={name:"BackToTop",props:{visibilityHeight:{type:Number,default:400},backPosition:{type:Number,default:0},customStyle:{type:Object,default:{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}},transitionName:{type:String,default:"fade"}},data:function(){return{visible:!1,interval:null}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll),this.interval&&clearInterval(this.interval)},methods:{handleScroll:function(){this.visible=window.pageYOffset>this.visibilityHeight},backToTop:function(){var v=this,i=window.pageYOffset,_=0;this.interval=setInterval(function(){var t=Math.floor(v.easeInOutQuad(10*_,i,-i,500));t<=v.backPosition?(window.scrollTo(0,v.backPosition),clearInterval(v.interval)):window.scrollTo(0,t),_++},16.7)},easeInOutQuad:function(v,i,_,t){return(v/=t/2)<1?_/2*v*v+i:-_/2*(--v*(v-2)-1)+i}}},d={render:function(){var v=this.$createElement,i=this._self._c||v;return i("transition",{attrs:{name:this.transitionName}},[i("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"back-to-ceiling",style:this.customStyle,on:{click:this.backToTop}},[i("svg",{staticClass:"Icon Icon--backToTopArrow",staticStyle:{height:"16px",width:"16px"},attrs:{width:"16",height:"16",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[i("title",[this._v("回到顶部")]),this._v(" "),i("g",[i("path",{attrs:{d:"M12.036 15.59c0 .55-.453.995-.997.995H5.032c-.55 0-.997-.445-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29c.39-.39 1.026-.385 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z","fill-rule":"evenodd"}})])])])])},staticRenderFns:[]};var e={name:"backToTop-demo",components:{BackToTop:_("VU/8")(t,d,!1,function(v){_("1rqp")},"data-v-8aa3fc1e",null).exports},data:function(){return{myBackToTopStyle:{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}}}},n={render:function(){var v=this,i=v.$createElement,_=v._self._c||i;return _("div",{staticClass:"components-container"},[_("code",[v._v("页面滚动到指定位置会在右下角出现返回顶部按钮")]),v._v(" "),_("code",[v._v("可自定义按钮的样式、show/hide临界点、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素 ")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("div",[v._v("我是占位")]),v._v(" "),_("el-tooltip",{attrs:{placement:"top",content:"文字提示"}},[_("back-to-top",{attrs:{transitionName:"fade",customStyle:v.myBackToTopStyle,visibilityHeight:300,backPosition:50}})],1)],1)},staticRenderFns:[]},a=_("VU/8")(e,n,!1,null,null,null);i.default=a.exports}});