(function(t){function e(e){for(var n,o,s=e[0],c=e[1],u=e[2],h=0,d=[];h<s.length;h++)o=s[h],r[o]&&d.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},2044:function(t,e,a){},"268d":function(t,e,a){"use strict";var n=a("5435"),r=a.n(n);r.a},"2dae":function(t,e,a){"use strict";var n=a("dc9f"),r=a.n(n);r.a},"2fe3":function(t,e,a){"use strict";var n=a("997d"),r=a.n(n);r.a},"3b99":function(t,e,a){"use strict";var n=a("5e7f"),r=a.n(n);r.a},"4e4e":function(t,e,a){},5294:function(t,e,a){"use strict";var n=a("4e4e"),r=a.n(n);r.a},5435:function(t,e,a){},"5e7f":function(t,e,a){},"64a9":function(t,e,a){},"7ee4":function(t,e,a){"use strict";var n=a("b377"),r=a.n(n);r.a},"84b5":function(t,e,a){},9028:function(t,e,a){"use strict";var n=a("2044"),r=a.n(n);r.a},"997d":function(t,e,a){},b377:function(t,e,a){},c9a9:function(t,e,a){"use strict";var n=a("84b5"),r=a.n(n);r.a},cd49:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navigation",{on:{navigate:function(e){return t.onNav(e)}}}),a("b-container",{attrs:{fluid:""}},["Presentation"==t.currentView?a("div",[a("Presentation",{attrs:{orders:t.orders,machines:t.machines,aggregates:t.aggregates,anomalies:t.anomalies}})],1):a("div",[a("b-row",[a("b-col",{attrs:{sm:"2"}},[a("Sidebar",{attrs:{machines:t.machines}})],1),a("b-col",{attrs:{sm:"10"}},[a("Main",{attrs:{view:t.currentView,orders:t.orders,machines:t.machines,logs:t.logs,aggregates:t.aggregates,anomalies:t.anomalies}})],1)],1)],1)])],1)},i=[],o=(a("20d6"),a("6b54"),a("d225")),s=a("b0b4"),c=a("308d"),u=a("6bb5"),l=a("013f"),h=a("4e2b"),d=a("9ab4"),b=a("60a3"),g=a("bc3a"),p=a.n(g),f=a("9f7b"),v=a.n(f),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Main"},[a(t.view,{tag:"component",attrs:{orders:t.orders,machines:t.machines,logs:t.logs,aggregates:t.aggregates,anomalies:t.anomalies}})],1)},O=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[t._v('"First we smash it, then we slash it, then we trash it cause you didn\'t want that broken garbage anyway." --CEO')]),a("b-container",{attrs:{fluid:""}},[a("b-row",t._l(t.types,function(e,n){return a("b-col",{key:n,attrs:{sm:"4"}},[a("MachineTile",{attrs:{typeName:e,machines:t.getType(e),orderCount:t.getPending(e)}})],1)}),1),a("b-row",[a("b-col",{attrs:{sm:"4"}},[a("b-card",{attrs:{"border-variant":"dark","background-variant":"light"}},[a("h6",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[t._v("Past Hour Output")]),a("b-card-text",[a("Totals",{attrs:{aggregates:t.aggregates}})],1)],1)],1),a("b-col",{attrs:{sm:"4"}},[a("b-card",{attrs:{"border-variant":"dark","background-variant":"light"}},[a("h6",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[t._v("Time to Completion")]),a("b-card-text",[a("TTC",{attrs:{orders:t.orders,machines:t.machines,aggregates:t.aggregates}})],1)],1)],1),a("b-col",{attrs:{sm:"4"}},[a("b-card",{attrs:{"border-variant":"dark","background-variant":"light"}},[a("h6",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[t._v("Failure Detection")]),a("b-card-text",[a("Detection",{attrs:{anomalies:t.anomalies}})],1)],1)],1)],1)],1)],1)},j=[],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"machineCard"},[a("b-card",{attrs:{"border-variant":"dark","background-variant":"light"}},[a("h6",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.typeName))]),a("b-card-text",[a("b-list-group",{attrs:{flush:""}},[a("b-list-group-item",[t._v("Pending Widgets: "+t._s(t.orderCount))]),a("b-list-group-item",[t._v("Active Machines: "+t._s(t.machines.length))])],1)],1)],1)],1)},_=[],T=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(h["a"])(e,t),e}(b["c"]);d["a"]([Object(b["b"])()],T.prototype,"typeName",void 0),d["a"]([Object(b["b"])()],T.prototype,"machines",void 0),d["a"]([Object(b["b"])()],T.prototype,"orderCount",void 0),T=d["a"]([Object(b["a"])({components:{}})],T);var C=T,w=C,x=a("2877"),S=Object(x["a"])(w,k,_,!1,null,null,null),F=S.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("b-list-group",{attrs:{flush:""}},[a("b-list-group-item",[t._v("Per Machine Output: "+t._s(t.getLatestOutput().toFixed(2))+" (per hour)")]),a("b-list-group-item",[t._v("Time in Hours: "+t._s(t.getTTC().toFixed(2)))])],1)],1)},M=[],D=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(h["a"])(e,t),Object(s["a"])(e,[{key:"getPending",value:function(t){if(void 0==this.orders||null==this.orders)return 0;var e=this.orders.filter(function(t){return!t.completed});return"Smasher"==t?e.reduce(function(t,e){return null==e.pendingCount?t:t+e.pendingCount},0):"Slasher"==t?e.reduce(function(t,e){return null==e.smashedCount?t:t+e.smashedCount},0):e.reduce(function(t,e){return null==e.slashedCount?t:t+e.slashedCount},0)}},{key:"getLatestOutput",value:function(){return void 0==this.aggregates[this.aggregates.length-1]?0:this.aggregates[this.aggregates.length-1].perMachineOutput}},{key:"getTTC",value:function(){if(0==this.getLatestOutput()||0==this.machines.length)return 0;var t=3*this.getPending("Smasher")+2*this.getPending("Slasher")+this.getPending("Trasher");return t/(this.getLatestOutput()*this.machines.length)}}]),e}(b["c"]);d["a"]([Object(b["b"])()],D.prototype,"view",void 0),d["a"]([Object(b["b"])()],D.prototype,"aggregates",void 0),d["a"]([Object(b["b"])()],D.prototype,"orders",void 0),d["a"]([Object(b["b"])()],D.prototype,"machines",void 0),D=d["a"]([Object(b["a"])({components:{}})],D);var E=D,$=E,L=Object(x["a"])($,P,M,!1,null,null,null),B=L.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("b-list-group",{attrs:{flush:""}},[a("b-list-group-item",[t._v("Failures Detected: "+t._s(t.detectedFailures()))]),a("b-list-group-item",[t._v("Detection Rate: "+t._s(t.detectionRate()))])],1)],1)},H=[],I=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(h["a"])(e,t),Object(s["a"])(e,[{key:"getFailures",value:function(){return 0==this.anomalies.length?0:this.anomalies.filter(function(t){return t.broken}).length}},{key:"detectedFailures",value:function(){return 0==this.anomalies.length?0:this.anomalies.filter(function(t){return t.isChangePointAnomaly}).length}},{key:"detectionRate",value:function(){if(0==this.anomalies.length)return"-";var t=this.anomalies.filter(function(t){return t.correctDetection}).length;return(t/this.anomalies.length*100).toFixed(2)+"%"}}]),e}(b["c"]);d["a"]([Object(b["b"])()],I.prototype,"view",void 0),d["a"]([Object(b["b"])()],I.prototype,"anomalies",void 0),I=d["a"]([Object(b["a"])({components:{}})],I);var N=I,U=N,J=Object(x["a"])(U,A,H,!1,null,null,null),R=J.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("b-list-group",{attrs:{flush:""}},[a("b-list-group-item",[t._v("Widgets Proccessed: "+t._s(t.getLatestOutput().toFixed(0)))]),a("b-list-group-item",[t._v("Failed Production: "+t._s(t.getLatestFailed().toFixed(0)))])],1)],1)},q=[],z=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(h["a"])(e,t),Object(s["a"])(e,[{key:"getLatestOutput",value:function(){return void 0==this.aggregates[this.aggregates.length-1]?0:this.aggregates[this.aggregates.length-1].totalOutput}},{key:"getLatestFailed",value:function(){return void 0==this.aggregates[this.aggregates.length-1]?0:this.aggregates[this.aggregates.length-1].totalFailed}}]),e}(b["c"]);d["a"]([Object(b["b"])()],z.prototype,"aggregates",void 0),z=d["a"]([Object(b["a"])({components:{}})],z);var W=z,Y=W,Q=Object(x["a"])(Y,V,q,!1,null,null,null),K=Q.exports,X=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.types=["Smasher","Slasher","Trasher"],t.chartData={datacollection:{labels:t.aggregates.map(function(t){return t.windowEnd}),datasets:[{label:"Output",backgroundColor:"blue",data:t.aggregates.map(function(t){return t.totalOutput})},{label:"Failures",backgroundColor:"black",data:t.aggregates.map(function(t){return t.totalFailed})}]}},t.options={responsive:!0,maintainAspectRatio:!1},t}return Object(h["a"])(e,t),Object(s["a"])(e,[{key:"getType",value:function(t){return void 0==this.machines||null==this.machines?[]:this.machines.filter(function(e){return 1==e.active&&e.machineType==t})}},{key:"getPending",value:function(t){if(void 0==this.orders||null==this.orders)return 0;var e=this.orders.filter(function(t){return!t.completed});return"Smasher"==t?e.reduce(function(t,e){return null==e.pendingCount?t:t+e.pendingCount},0):"Slasher"==t?e.reduce(function(t,e){return null==e.smashedCount?t:t+e.smashedCount},0):e.reduce(function(t,e){return null==e.slashedCount?t:t+e.slashedCount},0)}},{key:"getLatestOutput",value:function(){return void 0==this.aggregates[this.aggregates.length-1]?0:this.aggregates[this.aggregates.length-1].perMachineOutput}},{key:"getTTC",value:function(){if(0==this.getLatestOutput()||0==this.machines.length)return 0;var t=3*this.getPending("Smasher")+2*this.getPending("Slasher")+this.getPending("Trasher");return t/(this.getLatestOutput()*this.machines.length)}}]),e}(b["c"]);d["a"]([Object(b["b"])()],X.prototype,"machines",void 0),d["a"]([Object(b["b"])()],X.prototype,"orders",void 0),d["a"]([Object(b["b"])()],X.prototype,"aggregates",void 0),d["a"]([Object(b["b"])()],X.prototype,"anomalies",void 0),X=d["a"]([Object(b["a"])({components:{MachineTile:F,Totals:K,TTC:B,Detection:R}})],X);var G=X,Z=G,tt=(a("2fe3"),Object(x["a"])(Z,y,j,!1,null,null,null)),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Order List")]),a("b-form-checkbox",{attrs:{id:"checkbox-1",name:"checkbox-1"},model:{value:t.showCompleted,callback:function(e){t.showCompleted=e},expression:"showCompleted"}},[t._v("\n    Show Completed Orders\n  ")]),a("b-form-input",{attrs:{placeholder:"Filter"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),a("b-table",{attrs:{striped:"",items:t.tableData,filter:t.filter}})],1)},nt=[],rt=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.showCompleted=!1,t.filter="",t}return Object(h["a"])(e,t),Object(s["a"])(e,[{key:"tableData",get:function(){return this.showCompleted?this.orders:this.orders.filter(function(t){return 0==t.completed})}}]),e}(b["c"]);d["a"]([Object(b["b"])({default:function(){return[]}})],rt.prototype,"orders",void 0),rt=d["a"]([Object(b["a"])({components:{}})],rt);var it=rt,ot=it,st=Object(x["a"])(ot,at,nt,!1,null,null,null),ct=st.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Machine List")]),a("b-form-checkbox",{attrs:{id:"checkbox-1",name:"checkbox-1"},model:{value:t.inactive,callback:function(e){t.inactive=e},expression:"inactive"}},[t._v("\n    Show Inactive Machines\n  ")]),a("b-form-input",{attrs:{placeholder:"Filter"},model:{value:t.machineFilter,callback:function(e){t.machineFilter=e},expression:"machineFilter"}}),a("b-table",{attrs:{striped:"",items:t.tableData,filter:t.machineFilter}})],1)},lt=[],ht=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.inactive=!1,t.machineFilter="",t}return Object(h["a"])(e,t),Object(s["a"])(e,[{key:"tableData",get:function(){return this.inactive?this.machines:this.machines.filter(function(t){return 1==t.active})}}]),e}(b["c"]);d["a"]([Object(b["b"])({default:function(){return[]}})],ht.prototype,"machines",void 0),ht=d["a"]([Object(b["a"])({components:{}})],ht);var dt=ht,bt=dt,gt=Object(x["a"])(bt,ut,lt,!1,null,null,null),pt=gt.exports,ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Event History")]),a("ul",{attrs:{id:"logList"}},t._l(t.logs,function(e,n){return a("li",{key:n},[t._v("\n      "+t._s(e)+"\n    ")])}),0)])},vt=[],mt=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(h["a"])(e,t),e}(b["c"]);d["a"]([Object(b["b"])()],mt.prototype,"logs",void 0),mt=d["a"]([Object(b["a"])({components:{}})],mt);var Ot=mt,yt=Ot,jt=(a("7ee4"),Object(x["a"])(yt,ft,vt,!1,null,null,null)),kt=jt.exports,_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-tabs",{attrs:{"content-class":"mt-3"}},[a("b-tab",{attrs:{title:"Aggregates",active:""}},[t._v("\n        Time Frame: 60 minutes\n        "),a("b-table",{attrs:{striped:"",items:t.aggregateData}})],1),a("b-tab",{attrs:{title:"Anomalies"}},[a("b-table",{attrs:{striped:"",items:t.anomalyData}})],1)],1)],1)},Tt=[],Ct=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(h["a"])(e,t),Object(s["a"])(e,[{key:"aggregateData",get:function(){return this.aggregates.map(function(t){return{Timestamp:t.windowEnd,Total:t.totalOutput,TotalFailed:t.totalFailed,PerMachineOutput:t.perMachineOutput.toFixed(2),PerMachineFailed:t.perMachineFailure.toFixed(2)}})}},{key:"anomalyData",get:function(){return this.anomalies.map(function(t){return{Timestamp:t.timeStamp,MachineId:t.machineId,DetectionScore:t.changePointScore.toFixed(2),FailureDetected:1==t.isChangePointAnomaly?"Yes":"No",Failed:1==t.broken?"Yes":"No",Correct:1==t.correctDetection?"Yes":"No",AverageFailures:t.failures.toFixed(2)}})}}]),e}(b["c"]);d["a"]([Object(b["b"])()],Ct.prototype,"aggregates",void 0),d["a"]([Object(b["b"])()],Ct.prototype,"anomalies",void 0),Ct=d["a"]([Object(b["a"])({components:{}})],Ct);var wt=Ct,xt=wt,St=Object(x["a"])(xt,_t,Tt,!1,null,null,null),Ft=St.exports,Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[t._v('"First we smash it, then we slash it, then we trash it cause you didn\'t want that broken garbage anyway." --CEO')]),a("b-container",{attrs:{fluid:""}},[a("b-row",t._l(t.types,function(e,n){return a("b-col",{key:n,attrs:{sm:"4"}},[a("MachineTile",{attrs:{typeName:e,machines:t.getType(e),orderCount:t.getPending(e)}})],1)}),1),a("b-row",[a("b-col",{attrs:{sm:"4"}},[a("b-card",{attrs:{"border-variant":"dark","background-variant":"light"}},[a("h6",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[t._v("Past Hour Output")]),a("b-card-text",[a("Totals",{attrs:{aggregates:t.aggregates}})],1)],1)],1),a("b-col",{attrs:{sm:"4"}},[a("b-card",{attrs:{"border-variant":"dark","background-variant":"light"}},[a("h6",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[t._v("Time to Completion")]),a("b-card-text",[a("TTC",{attrs:{orders:t.orders,machines:t.machines,aggregates:t.aggregates}})],1)],1)],1),a("b-col",{attrs:{sm:"4"}},[a("b-card",{attrs:{"border-variant":"dark","background-variant":"light"}},[a("h6",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[t._v("Failure Detection")]),a("b-card-text",[a("Detection",{attrs:{anomalies:t.anomalies}})],1)],1)],1)],1),a("b-row",[a("b-col",{attrs:{sm:"12"}},[a("PowerBI")],1)],1)],1)],1)},Mt=[],Dt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"tile1"}}),a("div",{attrs:{id:"tile2"}})])}],$t=a("7599"),Lt=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.powerbi=new $t["service"].Service($t["factories"].hpmFactory,$t["factories"].wpmpFactory,$t["factories"].routerFactory),t}return Object(h["a"])(e,t),Object(s["a"])(e,[{key:"mounted",value:function(){var t=this;p.a.all([p.a.get("/powerbi/tile?tileid=4f66f127-49c8-4be8-9535-8f8a7afda133").then(function(e){console.log(e.data);var a={type:"tile",dashboardId:"d9d062a1-6e5f-44f1-a1b3-51969d401d67",tokenType:$t["models"].TokenType.Embed,accessToken:e.data.embedToken.token,embedUrl:e.data.embedUrl,height:450},n=document.getElementById("tile1");t.powerbi.embed(n,a)}).catch(function(t){console.log(t)}),p.a.get("/powerbi/tile?tileid=c05fe350-8a57-4a54-a492-3f9b47040e0c").then(function(t){})])}},{key:"loadTile",value:function(){}}]),e}(b["c"]);Lt=d["a"]([Object(b["a"])({components:{}})],Lt);var Bt=Lt,At=Bt,Ht=(a("5294"),Object(x["a"])(At,Dt,Et,!1,null,null,null)),It=Ht.exports,Nt=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.types=["Smasher","Slasher","Trasher"],t.chartData={datacollection:{labels:t.aggregates.map(function(t){return t.windowEnd}),datasets:[{label:"Output",backgroundColor:"blue",data:t.aggregates.map(function(t){return t.totalOutput})},{label:"Failures",backgroundColor:"black",data:t.aggregates.map(function(t){return t.totalFailed})}]}},t.options={responsive:!0,maintainAspectRatio:!1},t}return Object(h["a"])(e,t),Object(s["a"])(e,[{key:"getType",value:function(t){return void 0==this.machines||null==this.machines?[]:this.machines.filter(function(e){return 1==e.active&&e.machineType==t})}},{key:"getPending",value:function(t){if(void 0==this.orders||null==this.orders)return 0;var e=this.orders.filter(function(t){return!t.completed});return"Smasher"==t?e.reduce(function(t,e){return null==e.pendingCount?t:t+e.pendingCount},0):"Slasher"==t?e.reduce(function(t,e){return null==e.smashedCount?t:t+e.smashedCount},0):e.reduce(function(t,e){return null==e.slashedCount?t:t+e.slashedCount},0)}},{key:"getLatestOutput",value:function(){return void 0==this.aggregates[this.aggregates.length-1]?0:this.aggregates[this.aggregates.length-1].perMachineOutput}},{key:"getTTC",value:function(){if(0==this.getLatestOutput()||0==this.machines.length)return 0;var t=3*this.getPending("Smasher")+2*this.getPending("Slasher")+this.getPending("Trasher");return t/(this.getLatestOutput()*this.machines.length)}}]),e}(b["c"]);d["a"]([Object(b["b"])()],Nt.prototype,"machines",void 0),d["a"]([Object(b["b"])()],Nt.prototype,"orders",void 0),d["a"]([Object(b["b"])()],Nt.prototype,"aggregates",void 0),d["a"]([Object(b["b"])()],Nt.prototype,"anomalies",void 0),Nt=d["a"]([Object(b["a"])({components:{MachineTile:F,Totals:K,TTC:B,Detection:R,PowerBI:It}})],Nt);var Ut=Nt,Jt=Ut,Rt=(a("3b99"),Object(x["a"])(Jt,Pt,Mt,!1,null,null,null)),Vt=Rt.exports,qt=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(h["a"])(e,t),e}(b["c"]);d["a"]([Object(b["b"])()],qt.prototype,"view",void 0),d["a"]([Object(b["b"])()],qt.prototype,"orders",void 0),d["a"]([Object(b["b"])()],qt.prototype,"machines",void 0),d["a"]([Object(b["b"])()],qt.prototype,"logs",void 0),d["a"]([Object(b["b"])()],qt.prototype,"aggregates",void 0),d["a"]([Object(b["b"])()],qt.prototype,"anomalies",void 0),qt=d["a"]([Object(b["a"])({components:{Dashboard:et,Orders:ct,Machines:pt,History:kt,StreamData:Ft,PBIDashboard:Vt}})],qt);var zt=qt,Wt=zt,Yt=(a("c9a9"),Object(x["a"])(Wt,m,O,!1,null,"5f03f44e",null)),Qt=Yt.exports,Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-dark",attrs:{id:"sidebar"}},[a("h3",[t._v("Create Order")]),a("b-form-input",{attrs:{placeholder:"Order Count",id:"orderCount"},model:{value:t.orderCount,callback:function(e){t.orderCount=e},expression:"orderCount"}}),a("b-button",{attrs:{disabled:t.waitToSend},on:{click:function(e){return t.createOrder()}}},[t._v("Create")]),a("h3",[t._v("Machines")]),a("h4",[t._v("Smashers")]),a("b-button-group",[a("b-button",{on:{click:function(e){return t.removeMachine("Smasher")}}},[t._v("-")]),a("b-button",[t._v(t._s(t.getType("Smasher")))]),a("b-button",{on:{click:function(e){return t.addMachine("Smasher")}}},[t._v("+")])],1),a("h4",[t._v("Slashers")]),a("b-button-group",[a("b-button",{on:{click:function(e){return t.removeMachine("Slasher")}}},[t._v("-")]),a("b-button",[t._v(t._s(t.getType("Slasher")))]),a("b-button",{on:{click:function(e){return t.addMachine("Slasher")}}},[t._v("+")])],1),a("h4",[t._v("Trashers")]),a("b-button-group",[a("b-button",{on:{click:function(e){return t.removeMachine("Trasher")}}},[t._v("-")]),a("b-button",[t._v(t._s(t.getType("Trasher")))]),a("b-button",{on:{click:function(e){return t.addMachine("Trasher")}}},[t._v("+")])],1),a("h3",[t._v("Break Machine")]),a("b-form-select",{attrs:{options:t.getMachinesToBreak()},model:{value:t.machineToBreak,callback:function(e){t.machineToBreak=e},expression:"machineToBreak"}}),a("b-button",{on:{click:function(e){return t.breakMachine()}}},[t._v("Break!")])],1)},Xt=[],Gt=(a("ac6a"),function t(){Object(o["a"])(this,t)}),Zt=function t(){Object(o["a"])(this,t)},te=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.orderCount=0,t.waitToSend=!1,t.machineToBreak=0,t}return Object(h["a"])(e,t),Object(s["a"])(e,[{key:"getType",value:function(t){return void 0==this.machines||null==this.machines?0:this.machines.filter(function(e){return 1==e.active&&e.machineType==t}).length}},{key:"getBreakable",value:function(){return this.machines.filter(function(t){return t.active&&!t.broken})}},{key:"addMachine",value:function(t){var e=new Gt;e.machineType=t,p.a.post("/machines",e).then(function(t){return console.log(t)}).catch(function(t){return console.log(t)})}},{key:"removeMachine",value:function(t){if(this.getType(t)>0){var e=this.machines.filter(function(e){return 1==e.active&&e.machineType==t}),a=e.findIndex(function(t){return t.broken}),n=0;n=a>=0?e[a].id:e[0].id,p.a.delete("/machines/"+n).then(function(t){return console.log(t)})}}},{key:"breakMachine",value:function(){p.a.post("/machines/break/"+this.machineToBreak).then(function(t){return console.log(t)}).catch(function(t){return console.log(t)})}},{key:"getMachinesToBreak",value:function(){var t=this.machines.filter(function(t){return t.active&&!t.broken}),e=[];return t.forEach(function(t){return e.push({value:t.id,text:t.id+" - "+t.machineType})}),e}},{key:"createOrder",value:function(){var t=this;if(this.orderCount>0&&(this.orderCount>1e4&&(this.orderCount=1e4),!this.waitToSend)){var e=new Zt;e.widgetCount=this.orderCount,p.a.post("/orders",e).then(function(t){return console.log(t)}).catch(function(t){return console.log(t)}),this.waitToSend=!0,this.orderCount=0,setTimeout(function(){t.waitToSend=!1},3e3)}}}]),e}(b["c"]);d["a"]([Object(b["b"])({default:function(){return[]}})],te.prototype,"machines",void 0),te=d["a"]([Object(b["a"])({components:{}})],te);var ee=te,ae=ee,ne=(a("2dae"),Object(x["a"])(ae,Kt,Xt,!1,null,null,null)),re=ne.exports,ie=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"navigation"}},[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[a("b-navbar-nav",[a("b-nav-item",{on:{click:function(e){return t.$emit("navigate","Dashboard")}}},[t._v("Dashboard")]),a("b-nav-item",{on:{click:function(e){return t.$emit("navigate","Machines")}}},[t._v("Machines")]),a("b-nav-item",{on:{click:function(e){return t.$emit("navigate","Orders")}}},[t._v("Orders")]),a("b-nav-item",{on:{click:function(e){return t.$emit("navigate","History")}}},[t._v("Event History")]),a("b-nav-item",{on:{click:function(e){return t.$emit("navigate","StreamData")}}},[t._v("Stream Data")]),a("b-nav-item",{on:{click:function(e){return t.$emit("navigate","PBIDashboard")}}},[t._v("Power BI")]),a("b-nav-item",{on:{click:function(e){return t.$emit("navigate","Presentation")}}},[t._v("Presentation")])],1)],1)],1)},oe=[],se=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(h["a"])(e,t),e}(b["c"]);se=d["a"]([Object(b["a"])({components:{}})],se);var ce=se,ue=ce,le=(a("9028"),Object(x["a"])(ue,ie,oe,!1,null,null,null)),he=le.exports,de=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"presentation"}},[a("b-row",[a("b-col",{attrs:{sm:"2"}},[a("div",[a("h4",[t._v("Open Orders: "+t._s(t.orders.length))]),a("h4",[t._v("Pending Widgets: "+t._s(t.getPendingCount()))]),a("h4",[t._v("Failure Detection:")]),a("Detection",{attrs:{anomalies:t.anomalies}}),a("h4",[t._v("Time To Complete Open Orders:")]),a("TTC",{attrs:{orders:t.orders,machines:t.machines,aggregates:t.aggregates}}),a("h4",[t._v("Past Hour Output:")]),a("Totals",{attrs:{aggregates:t.aggregates}})],1)]),a("b-col",{attrs:{sm:"10"}},[a("iframe",{attrs:{src:"https://onedrive.live.com/embed?cid=430A52718776F39B&resid=430A52718776F39B%2164994&authkey=AKqqOzBXrq0QlaQ&em=2&wdAr=1.7777777777777777",width:"1186px",height:"691px",frameborder:"0"}},[t._v("This is an embedded "),a("a",{attrs:{target:"_blank",href:"https://office.com"}},[t._v("Microsoft Office")]),t._v(" presentation, powered by "),a("a",{attrs:{target:"_blank",href:"https://office.com/webapps"}},[t._v("Office Online")]),t._v(".")])])],1)],1)},be=[],ge=function(t){function e(){return Object(o["a"])(this,e),Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(h["a"])(e,t),Object(s["a"])(e,[{key:"getPendingCount",value:function(){var t=this.orders.filter(function(t){return!t.completed});return 0==t.length?0:t.reduce(function(t,e){return null==e?t:t+e.widgetCount-e.completedCount},0)}}]),e}(b["c"]);d["a"]([Object(b["b"])()],ge.prototype,"machines",void 0),d["a"]([Object(b["b"])()],ge.prototype,"orders",void 0),d["a"]([Object(b["b"])()],ge.prototype,"aggregates",void 0),d["a"]([Object(b["b"])()],ge.prototype,"anomalies",void 0),ge=d["a"]([Object(b["a"])({components:{TTC:B,Detection:R,Totals:K}})],ge);var pe=ge,fe=pe,ve=(a("268d"),Object(x["a"])(fe,de,be,!1,null,null,null)),me=ve.exports,Oe=(a("f9e3"),a("2dd8"),a("1a9a"));b["c"].use(v.a),b["c"].prototype.$axios=p.a,p.a.defaults.baseURL="https://sademo.azurewebsites.net/api";var ye=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.self=Object(l["a"])(t),t.currentView="Dashboard",t.orders=[],t.machines=[],t.logs=[],t.aggregates=[],t.anomalies=[],t.removeSAStart=0,t.removeSAEnd=2,t.logHub=(new Oe.HubConnectionBuilder).withUrl("https://sademo.azurewebsites.net/logHub").configureLogging(Oe.LogLevel.Information).build(),t}return Object(h["a"])(e,t),Object(s["a"])(e,[{key:"onNav",value:function(t){this.currentView=t}},{key:"mounted",value:function(){var t=this;p.a.all([p.a.get("/machines").then(function(e){t.machines=e.data}),p.a.get("/orders").then(function(e){t.orders=e.data})]),this.logHub.start().catch(function(t){return console.error(t.toString())}),this.logHub.on("newLog",function(e){t.logs.unshift(e);while(t.logs.length>100)t.logs.pop()}),this.logHub.on("orderUpdate",function(e){t.updateOrder(JSON.parse(e))}),this.logHub.on("machineUpdate",function(e){t.updateMachine(JSON.parse(e))}),this.logHub.on("machineUpdate",function(e){t.updateMachine(JSON.parse(e))}),this.logHub.on("analyticsUpdate",function(e){var a=JSON.parse(e);"aggregates"==a.analysisType?t.handleAggregates(a):t.updateAnomalies(a)})}},{key:"beforeDestroy",value:function(){this.logHub.stop()}},{key:"updateOrder",value:function(t){var e=this.orders.findIndex(function(e){return e.id===t.id});void 0==e||-1==e||e+1>this.orders.length?this.orders.push(t):this.orders.splice(e,1,t)}},{key:"updateMachine",value:function(t){var e=this.machines.findIndex(function(e){return e.id==t.id});void 0==e||-1==e?this.machines.push(t):this.machines.splice(e,1,t)}},{key:"updateAnomalies",value:function(t){var e=this.anomalies.findIndex(function(e){return e.machineId==t.machineId});void 0==e||-1==e?this.anomalies.push(t):this.anomalies.splice(e,1,t)}},{key:"handleAggregates",value:function(t){this.aggregates.push(t);while(this.aggregates.length>100)this.aggregates.shift()}}]),e}(b["c"]);ye=d["a"]([Object(b["a"])({components:{Main:Qt,Navigation:he,Sidebar:re,Presentation:me}})],ye);var je=ye,ke=je,_e=(a("034f"),Object(x["a"])(ke,r,i,!1,null,null,null)),Te=_e.exports;n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(Te)}}).$mount("#app")},dc9f:function(t,e,a){}});
//# sourceMappingURL=app.e57c25cb.js.map