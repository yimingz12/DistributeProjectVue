(function(a){function e(e){for(var n,i,l=e[0],m=e[1],s=e[2],d=0,c=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&c.push(r[i][0]),r[i]=0;for(n in m)Object.prototype.hasOwnProperty.call(m,n)&&(a[n]=m[n]);u&&u(e);while(c.length)c.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var a,e=0;e<o.length;e++){for(var t=o[e],n=!0,l=1;l<t.length;l++){var m=t[l];0!==r[m]&&(n=!1)}n&&(o.splice(e--,1),a=i(i.s=t[0]))}return a}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=a,i.c=n,i.d=function(a,e,t){i.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:t})},i.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},i.t=function(a,e){if(1&e&&(a=i(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var n in a)i.d(t,n,function(e){return a[e]}.bind(null,n));return t},i.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(e,"a",e),e},i.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},i.p="/online/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],m=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=m;o.push([0,"chunk-vendors"]),t()})({0:function(a,e,t){a.exports=t("56d7")},"56d7":function(a,e,t){"use strict";t.r(e);var n=t("2b0e"),r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"app"}},[t("v-app",[t("v-card",{staticClass:"overflow-hidden"},[t("v-content",[t("navigationbar")],1),t("v-sheet",{staticClass:"overflow-y-auto",attrs:{id:"scrolling-techniques-2","max-height":"700"}},[t("v-container",{staticStyle:{height:"1200px"}},[t("v-content",[t("router-view")],1)],1)],1)],1)],1)],1)},o=[],i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-app-bar",{staticStyle:{width:"100%",height:"100%"},attrs:{color:"#fcb69f",dark:"","shrink-on-scroll":"",src:"https://images2.alphacoders.com/786/786551.png","scroll-target":"#scrolling-techniques-2"},scopedSlots:a._u([{key:"img",fn:function(e){var n=e.props;return[t("v-img",a._b({attrs:{gradient:"to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"}},"v-img",n,!1))]}}])},[t("v-app-bar-nav-icon"),t("v-toolbar-title",[a._v("Title\n  ")]),t("v-spacer"),t("v-toolbar-items",[t("router-link",{attrs:{to:"/"}},[t("v-btn",[a._v("Home")])],1),t("router-link",{attrs:{to:"/mapChart"}},[t("v-btn",[a._v("Map view")])],1)],1),t("div",{staticClass:"flex-grow-1"}),t("v-btn",{attrs:{icon:""}},[t("v-icon",[a._v("mdi-magnify")])],1),t("v-btn",{attrs:{icon:""}},[t("v-icon",[a._v("mdi-heart")])],1),t("v-btn",{attrs:{icon:""}},[t("v-icon",[a._v("mdi-dots-vertical")])],1)],1)},l=[],m=t("2877"),s=t("6544"),u=t.n(s),d=t("40dc"),c=t("5bc1"),h=t("8336"),v=t("132d"),p=t("adda"),f=t("2fa4"),g=t("2a7f"),M={},b=Object(m["a"])(M,i,l,!1,null,null,null),w=b.exports;u()(b,{VAppBar:d["a"],VAppBarNavIcon:c["a"],VBtn:h["a"],VIcon:v["a"],VImg:p["a"],VSpacer:f["a"],VToolbarItems:g["a"],VToolbarTitle:g["b"]});var _={name:"App",components:{navigationbar:w},data:()=>({})},y=_,x=t("7496"),V=t("b0afa"),C=t("a523"),O=t("a75b"),j=t("8dd9"),k=Object(m["a"])(y,r,o,!1,null,null,null),N=k.exports;u()(k,{VApp:x["a"],VCard:V["a"],VContainer:C["a"],VContent:O["a"],VSheet:j["a"]});var S=t("f309");n["a"].use(S["a"]);var $=new S["a"]({icons:{iconfont:"mdi"}}),A=t("8c4f"),E=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-container",{attrs:{fluid:""}},[t("v-row",a._l(a.gameDeck,(function(a){return t("v-col",{key:a.id,attrs:{cols:"12",sm:"4"}},[t("v-row",{attrs:{"align-self":"start"}},[t("steamcard",{attrs:{gameName:a.gameName,gameid:a.id}})],1)],1)})),1)],1)},I=[],D=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"gamecard"}},[t("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:""}},[t("v-list-item",{attrs:{"three-line":""}},[t("v-list-item-content",[t("div",{staticClass:"overline mb-4"},[a._v("OVERLINE")]),t("v-list-item-title",{staticClass:"headline mb-1"},[a._v(a._s(a.gameName))]),t("v-list-item-subtitle",[a._v("Greyhound divisely hello coldly fonwderfully")])],1),t("v-list-item-avatar",{attrs:{tile:"",size:"80",color:"grey"}})],1),t("v-card-actions",[t("router-link",{attrs:{to:"/gameDetail/"+a.gameid.toString()}},[t("v-btn",{attrs:{text:""}},[a._v("game Detail\n      ")])],1),t("v-btn",{attrs:{text:""}},[a._v("Button")])],1)],1)],1)},T=[],L={name:"gamecard",props:["gameName","gameid"],components:{},data:function(){return{}}},P=L,B=t("99d9"),R=t("da13"),q=t("8270"),J=t("5d23"),X=Object(m["a"])(P,D,T,!1,null,null,null),z=X.exports;u()(X,{VBtn:h["a"],VCard:V["a"],VCardActions:B["a"],VListItem:R["a"],VListItemAvatar:q["a"],VListItemContent:J["a"],VListItemSubtitle:J["b"],VListItemTitle:J["c"]});var G={name:"App",components:{steamcard:z},data:()=>({gameDeck:[{id:1,gameName:"game1"},{id:2,gameName:"game2"},{id:3,gameName:"game3"}]})},H=G,Y=t("62ad"),F=t("0fd9"),K=Object(m["a"])(H,E,I,!1,null,null,null),Q=K.exports;u()(K,{VCol:Y["a"],VContainer:C["a"],VRow:F["a"]});var U=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"gameDetail"}},[t("div",[a._v("game name:"+a._s(a.gameDeck[a.id-1].gameName))]),t("div",[a._v("gmae id:"+a._s(a.id))]),t("firstChart"),t("AusMap")],1)},W=[],Z=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"chart-wrap"},[t("div",{attrs:{id:"chart"}},[t("apexchart",{attrs:{type:"donut",width:"380",options:a.chartOptions,series:a.series}})],1)])},aa=[],ea={data:function(){return{series:[44,55,13,33],chartOptions:{dataLabels:{enabled:!1},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{show:!1}}}],legend:{position:"right",offsetY:0,height:230}}}}},ta=ea,na=Object(m["a"])(ta,Z,aa,!1,null,null,null),ra=na.exports,oa=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},ia=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("div",{staticStyle:{width:"600px",height:"600px"},attrs:{id:"mapContainer"}})])}],la={title:{text:"iphone销量",subtext:"纯属虚构",x:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",x:"left",data:["iphoneX"]},dataRange:{min:0,max:2500,x:"left",y:"bottom",text:["高","低"],calculable:!0},toolbox:{show:!0,orient:"vertical",x:"right",y:"center",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},roamController:{show:!0,x:"right",mapTypeControl:{china:!0}},series:[{name:"iphoneX",type:"map",mapType:"china",roam:!1,itemStyle:{normal:{label:{show:!0}},emphasis:{label:{show:!0}}},data:[{name:"北京",value:Math.round(1e3*Math.random())},{name:"天津",value:Math.round(1e3*Math.random())},{name:"上海",value:Math.round(1e3*Math.random())},{name:"重庆",value:Math.round(1e3*Math.random())},{name:"河北",value:Math.round(1e3*Math.random())},{name:"河南",value:Math.round(1e3*Math.random())},{name:"云南",value:Math.round(1e3*Math.random())},{name:"辽宁",value:Math.round(1e3*Math.random())},{name:"黑龙江",value:Math.round(1e3*Math.random())},{name:"湖南",value:Math.round(1e3*Math.random())},{name:"安徽",value:Math.round(1e3*Math.random())},{name:"山东",value:Math.round(1e3*Math.random())},{name:"新疆",value:Math.round(1e3*Math.random())},{name:"江苏",value:Math.round(1e3*Math.random())},{name:"浙江",value:Math.round(1e3*Math.random())},{name:"江西",value:Math.round(1e3*Math.random())},{name:"湖北",value:Math.round(1e3*Math.random())},{name:"广西",value:Math.round(1e3*Math.random())},{name:"甘肃",value:Math.round(1e3*Math.random())},{name:"山西",value:Math.round(1e3*Math.random())},{name:"内蒙古",value:Math.round(1e3*Math.random())},{name:"陕西",value:Math.round(1e3*Math.random())},{name:"吉林",value:Math.round(1e3*Math.random())},{name:"福建",value:Math.round(1e3*Math.random())},{name:"贵州",value:Math.round(1e3*Math.random())},{name:"广东",value:Math.round(1e3*Math.random())},{name:"青海",value:Math.round(1e3*Math.random())},{name:"西藏",value:Math.round(1e3*Math.random())},{name:"四川",value:Math.round(1e3*Math.random())},{name:"宁夏",value:Math.round(1e3*Math.random())},{name:"海南",value:Math.round(1e3*Math.random())},{name:"台湾",value:Math.round(1e3*Math.random())},{name:"香港",value:Math.round(1e3*Math.random())},{name:"澳门",value:Math.round(1e3*Math.random())}]}]},ma=(t("3139"),{name:"",data(){return{}},methods:{drawChinaMap(){var a=this.$echarts.init(document.getElementById("mapContainer"));a.setOption(la)}},mounted(){this.drawChinaMap()}}),sa=ma,ua=Object(m["a"])(sa,oa,ia,!1,null,"c050293e",null),da=ua.exports,ca={name:"gameDetail",props:["gameName"],components:{firstChart:ra,AusMap:da},data:function(){return{id:this.$route.params.id,gameDeck:[{id:1,gameName:"game1"},{id:2,gameName:"game2"},{id:3,gameName:"game3"}]}},watch:{$route(a){this.id=a.params.id}}},ha=ca,va=Object(m["a"])(ha,U,W,!1,null,null,null),pa=va.exports,fa=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"mapView"}},[t("AusMap")],1)},ga=[],Ma={name:"mapView",props:["mapView"],components:{AusMap:da},data:function(){return{}}},ba=Ma,wa=Object(m["a"])(ba,fa,ga,!1,null,null,null),_a=wa.exports;n["a"].use(A["a"]);var ya=new A["a"]({routes:[{path:"/",name:"home",component:Q},{path:"/gameDetail/:id",name:"gameDetail",component:pa},{path:"/mapChart",name:"mapChart",component:_a}]}),xa=t("1321"),Va=t.n(xa),Ca=t("313e"),Oa=t.n(Ca);n["a"].prototype.$echarts=Oa.a,n["a"].use(Va.a),n["a"].component("apexchart",Va.a),n["a"].use(A["a"]),n["a"].config.productionTip=!1,new n["a"]({vuetify:$,router:ya,navigationbar:w,home:Q,steamcard:z,render:a=>a(N)}).$mount("#app")}});
//# sourceMappingURL=app.97a8c391.js.map