(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8bf54544"],{"0a54":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"Game"}},[a("v-row",{attrs:{justify:"center"}},t._l(t.getGames,(function(e,n){return a("v-col",{key:n,attrs:{cols:"12",sm:"8",md:"8",lg:"4"}},[a("router-link",{attrs:{to:"/games/game"},nativeOn:{click:function(a){return t.handleClick(e)}}},[e.imgURL?a("v-img",{staticClass:"pa-0 ma-0",staticStyle:{"z-index":"1"},attrs:{src:e.imgURL,"aspect-ratio":"1.7"}}):t._e(),e.imgURL?t._e():a("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"image"}}),a("v-card",{attrs:{elevation:"0"}},[a("v-btn",{staticClass:"pa-0",attrs:{text:"",color:"rgb(0, 0, 0, 0)"}},[a("h2",{staticClass:"secondary--text"},[t._v(t._s(e.name))])]),a("v-card-text",[t._v(" License: "+t._s(e.license)+" "),a("br"),t._v(" Recently update: "+t._s(e.recentlyUpdate)+" ")])],1)],1)],1)})),1)],1)},i=[],r=(a("b0c0"),{name:"Games",components:{},data:function(){return{games:[]}},methods:{handleClick:function(t){this.$store.dispatch("dispatchSelectGame",t),document.title=t.name+" | NGC"}},mounted:function(){this.$store.commit("setActivedPage","/games"),document.title="Games | NGC",this.$vuetify.goTo("#Game")},computed:{getGames:function(){return this.$store.state.games}}}),s=r,o=a("2877"),l=a("6544"),c=a.n(l),d=a("7496"),u=a("8336"),f=a("b0af"),p=a("99d9"),h=a("62ad"),g=a("adda"),b=a("0fd9"),m=a("3129"),v=Object(o["a"])(s,n,i,!1,null,null,null);e["default"]=v.exports;c()(v,{VApp:d["a"],VBtn:u["a"],VCard:f["a"],VCardText:p["c"],VCol:h["a"],VImg:g["a"],VRow:b["a"],VSkeletonLoader:m["a"]})},"1f09":function(t,e,a){},3129:function(t,e,a){"use strict";a("a630"),a("c975"),a("d81d"),a("ac1f"),a("3ca3"),a("5319"),a("1276");var n=a("3835"),i=a("5530"),r=(a("1f09"),a("c995")),s=a("24b2"),o=a("7560"),l=a("58df"),c=a("80d2");e["a"]=Object(l["a"])(r["a"],s["a"],o["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:Object(i["a"])({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return Object(i["a"])(Object(i["a"])({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return Object(i["a"])({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(t,e){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(t," v-skeleton-loader__bone")},e)},genBones:function(t){var e=this,a=t.split("@"),i=Object(n["a"])(a,2),r=i[0],s=i[1],o=function(){return e.genStructure(r)};return Array.from({length:s}).map(o)},genStructure:function(t){var e=[];t=t||this.type||"";var a=this.rootTypes[t]||"";if(t===a);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);a.indexOf(",")>-1?e=this.mapBones(a):a.indexOf("@")>-1?e=this.genBones(a):a&&e.push(this.genStructure(a))}return[this.genBone(t,e)]},genSkeleton:function(){var t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(c["r"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones:function(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave:function(t){t.style.setProperty("display","none","important")},resetStyles:function(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render:function(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}})},"62ad":function(t,e,a){"use strict";a("4160"),a("caad"),a("13d5"),a("45fc"),a("4ec9"),a("a9e3"),a("b64b"),a("d3b7"),a("ac1f"),a("3ca3"),a("5319"),a("2ca0"),a("159b"),a("ddb0");var n=a("ade3"),i=a("5530"),r=(a("4b85"),a("2b0e")),s=a("d9f7"),o=a("80d2"),l=["sm","md","lg","xl"],c=function(){return l.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),d=function(){return l.reduce((function(t,e){return t["offset"+Object(o["E"])(e)]={type:[String,Number],default:null},t}),{})}(),u=function(){return l.reduce((function(t,e){return t["order"+Object(o["E"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(c),offset:Object.keys(d),order:Object.keys(u)};function p(t,e,a){var n=t;if(null!=a&&!1!==a){if(e){var i=e.replace(t,"");n+="-".concat(i)}return"col"!==t||""!==a&&!0!==a?(n+="-".concat(a),n.toLowerCase()):n.toLowerCase()}}var h=new Map;e["a"]=r["a"].extend({name:"v-col",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({cols:{type:[Boolean,String,Number],default:!1}},c),{},{offset:{type:[String,Number],default:null}},d),{},{order:{type:[String,Number],default:null}},u),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var a=e.props,i=e.data,r=e.children,o=(e.parent,"");for(var l in a)o+=String(a[l]);var c=h.get(o);return c||function(){var t,e;for(e in c=[],f)f[e].forEach((function(t){var n=a[t],i=p(e,t,n);i&&c.push(i)}));var i=c.some((function(t){return t.startsWith("col-")}));c.push((t={col:!i||!a.cols},Object(n["a"])(t,"col-".concat(a.cols),a.cols),Object(n["a"])(t,"offset-".concat(a.offset),a.offset),Object(n["a"])(t,"order-".concat(a.order),a.order),Object(n["a"])(t,"align-self-".concat(a.alignSelf),a.alignSelf),t)),h.set(o,c)}(),t(a.tag,Object(s["a"])(i,{class:c}),r)}})}}]);
//# sourceMappingURL=chunk-8bf54544.ddd72558.js.map