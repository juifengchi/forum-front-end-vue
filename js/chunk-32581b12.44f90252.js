(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32581b12"],{"36c9":function(t,e,a){},"9cab":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("NavTabs"),t.isLoading?a("Spinner"):[a("h1",{staticClass:"mt-5"},[t._v(" 最新動態 ")]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("h3",[t._v("最新餐廳")]),a("NewestRestaurants",{attrs:{restaurants:t.restaurants}})],1),a("div",{staticClass:"col-md-6"},[a("h3",[t._v("最新評論")]),a("NewestComments",{attrs:{comments:t.comments}})],1)])]],2)},r=[],n=a("1da1"),i=(a("96cf"),a("4de4"),a("8bb1")),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v(" 最新餐廳 ")]),a("div",{staticClass:"card-body"},t._l(t.restaurants,(function(e){return a("div",{key:e.id},[a("h4",[a("router-link",{attrs:{to:{name:"restaurant",params:{id:e.id}}}},[t._v(" "+t._s(e.name)+" ")]),t._v("   "),a("small",[t._v(t._s(e.Category?e.Category.name:"未分類"))])],1),a("p",[t._v(t._s(e.description))]),t._v(" "+t._s(t._f("fromNow")(e.createdAt))+" "),a("hr")])})),0)])},o=[],u=a("2708"),d={name:"NewestRestaurants",mixins:[u["b"]],props:{restaurants:{type:Array,required:!0}}},m=d,l=(a("a86d"),a("2877")),v=Object(l["a"])(m,c,o,!1,null,"583feb2a",null),_=v.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v(" 最新評論 ")]),a("div",{staticClass:"card-body"},t._l(t.comments,(function(e){return a("div",{key:e.id},[a("h4",[a("router-link",{attrs:{to:{name:"restaurant",params:{id:e.Restaurant.id}}}},[t._v(" "+t._s(e.Restaurant.name)+" ")])],1),a("p",[t._v(t._s(e.text))]),t._v(" by "),a("router-link",{attrs:{to:{name:"user",params:{id:e.User.id}}}},[t._v(" "+t._s(e.User.name)+" ")]),t._v(" at "+t._s(t._f("fromNow")(e.createdAt))+" "),a("hr")],1)})),0)])},p=[],h={name:"NewestComments",mixins:[u["b"]],props:{comments:{type:Array,required:!0}}},b=h,w=Object(l["a"])(b,f,p,!1,null,null,null),C=w.exports,y=a("c4c3"),k=a("2fa3"),x=a("2375"),N={name:"RestaurantsFeeds",components:{NavTabs:i["a"],NewestRestaurants:_,NewestComments:C,Spinner:x["a"]},data:function(){return{restaurants:[],comments:[],isLoading:!0}},created:function(){this.fetchFeeds()},methods:{fetchFeeds:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y["a"].getFeeds();case 3:if(a=e.sent,s=a.data,r=a.statusText,"OK"===r){e.next=8;break}throw new Error(r);case 8:t.restaurants=s.restaurants,t.comments=s.comments.filter((function(t){return t.Restaurant})),t.isLoading=!1,e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](0),t.isLoading=!1,k["a"].fire({icon:"error",title:"無法取得最新動態，請稍後再試"});case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))()}}},g=N,R=Object(l["a"])(g,s,r,!1,null,null,null);e["default"]=R.exports},a86d:function(t,e,a){"use strict";a("36c9")}}]);
//# sourceMappingURL=chunk-32581b12.44f90252.js.map