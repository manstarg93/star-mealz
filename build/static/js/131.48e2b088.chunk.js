"use strict";(self.webpackChunkstar_mealz=self.webpackChunkstar_mealz||[]).push([[131],{2131:function(e,n,t){t.r(n),t.d(n,{default:function(){return K}});var l,r,a,i,c,s,d,o,u,h,f,g,x,p,m,v,j=t(4165),M=t(5861),E=t(885),b=t(2791),w=t(3359),y=t(2132),S=t(7910),O=t(694),k=t(5180),C=(t(448),t(8584)),_=(t(7202),["title","titleId"]);function A(){return A=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},A.apply(this,arguments)}function I(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function H(e,n){var t=e.title,j=e.titleId,M=I(e,_);return b.createElement("svg",A({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 489 489",style:{enableBackground:"new 0 0 489 489"},xmlSpace:"preserve",ref:n,"aria-labelledby":j},M),void 0===t?b.createElement("title",{id:j},"add meal"):t?b.createElement("title",{id:j},t):null,l||(l=b.createElement("g",null,b.createElement("g",null,b.createElement("path",{d:"M417.4,71.6C371.2,25.4,309.8,0,244.5,0S117.8,25.4,71.6,71.6S0,179.2,0,244.5s25.4,126.7,71.6,172.9S179.2,489,244.5,489 s126.7-25.4,172.9-71.6S489,309.8,489,244.5S463.6,117.8,417.4,71.6z M244.5,462C124.6,462,27,364.4,27,244.5S124.6,27,244.5,27 S462,124.6,462,244.5S364.4,462,244.5,462z"}),b.createElement("path",{d:"M301.6,188.1l-84.1,84.2l-30.1-30.1c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1L208,301c2.6,2.6,6.1,4,9.5,4 s6.9-1.3,9.5-4l93.7-93.7c5.3-5.3,5.3-13.8,0-19.1C315.5,182.8,306.9,182.8,301.6,188.1z"})))),r||(r=b.createElement("g",null)),a||(a=b.createElement("g",null)),i||(i=b.createElement("g",null)),c||(c=b.createElement("g",null)),s||(s=b.createElement("g",null)),d||(d=b.createElement("g",null)),o||(o=b.createElement("g",null)),u||(u=b.createElement("g",null)),h||(h=b.createElement("g",null)),f||(f=b.createElement("g",null)),g||(g=b.createElement("g",null)),x||(x=b.createElement("g",null)),p||(p=b.createElement("g",null)),m||(m=b.createElement("g",null)),v||(v=b.createElement("g",null)))}var D,Z,N=b.forwardRef(H),L=(t.p,t(168)),P=t(6031),W=t(3910),F=t(7738),z=t(9330),B=P.ZP.div(D||(D=(0,L.Z)(["\n    \n\n    svg{\n        fill: ",";\n        width: 28px;\n        height: 28px;\n       cursor: pointer;\n       display: none;\n       @media ","{\n            display: none;\n        }\n    }\n"])),F.R.green,W.U.desktop),R=(0,P.ZP)(z.Z)(Z||(Z=(0,L.Z)(["\n    display: block;\n    background-color: ",";\n    color: ",";\n  \n  width: 100%;\n\n  &:hover{\n      opacity: 1;\n  }\n"])),F.R.blue,F.R.white),T=t(184),G=function(e){return(0,T.jsxs)(B,{children:[(0,T.jsx)(N,{type:"submit"}),(0,T.jsx)(R,{type:"submit",children:"Add Meal"})]})},U=t(8269),q=t(6871),K=(t(6533),function(){var e,n,t,l,r=(0,b.useContext)(w.K),a=r.finishAddingMeal,i=r.UiToggleHelper,c=r.showAddMealModal,s=r.showMealSearch,d=(0,b.useContext)(C.B),o=d.foodAddingValues,u=d.addMeal,h=d.verified,f=d.feedBackMessage,g=(0,b.useContext)(y.V).userId,x=(0,b.useState)(1),p=(0,E.Z)(x,2),m=p[0],v=p[1],_=(0,b.useContext)(U.h).updateDatabase,A=(0,q.s0)(),I=function(){var e=(0,M.Z)((0,j.Z)().mark((function e(t){var r;return(0,j.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!o.selectedMeal){e.next=5;break}return r={id:o.selectedMeal.fdcId,totalCalories:n,totalWeight:l,serving:m,day:o.selectedMealDay,occasion:o.selectedOccasion,mealInfo:o.selectedMeal},e.next=5,u(g,r).then((function(e){_(g)}));case 5:v(1),i(k.H.SHOW_FINISH_ADDING_MEAL,a),A("/mealplan");case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();if(o.selectedMeal){var H,D=o.selectedMeal.foodNutrients.filter((function(e){return"Energy"===e.nutrientName}));n=D.reduce((function(e,n){return n.value}),[]),l=(null===(H=o.selectedMeal.servingSize)||void 0===H?void 0:H.toFixed(0))||o.selectedMeal.foodMeasures.reduce((function(e,n){var t;return null===(t=n.gramWeight)||void 0===t?void 0:t.toFixed(0)}),0)}return o.selectedMeal&&(t=o.selectedMeal.foodNutrients.map((function(e){return(0,T.jsx)(S.g6,{children:(0,T.jsxs)(S._s,{children:[(0,T.jsx)(S.BP,{children:e.nutrientName}),(0,T.jsxs)(S.cf,{children:[e.value," ",e.unitName]})]})},e.nutrientId)})),e=(0,T.jsx)(S.xC,{as:O.Z,show:a,close:function(){i(k.H.SHOW_FINISH_ADDING_MEAL,a),i(k.H.SHOW_MEAL_SEARCH,s)},back:function(){i(k.H.SHOW_FINISH_ADDING_MEAL,a),i(k.H.SHOW_ADD_MEAL_MODAL,c)},title:"".concat(o.selectedMeal?o.selectedMeal.description.toLowerCase():"Meal"),children:(0,T.jsxs)(S.gE,{onSubmit:I,children:[(0,T.jsxs)(S.fT,{children:[(0,T.jsxs)(S.H2,{children:[(0,T.jsx)(S.Ui,{required:!0,type:"number",value:m,onChange:function(e){v(e.target.value)},placeholder:"serving"}),(0,T.jsx)(S.nK,{children:"Serving"})]}),(0,T.jsxs)(S.d9,{children:[(0,T.jsxs)(S.hT,{children:[(0,T.jsx)(S.fP,{children:"Weight: "})," ",(0,T.jsxs)(S.yA,{children:[o.selectedMeal?l*m:"1",(0,T.jsx)("span",{children:" g"})]})]}),(0,T.jsxs)(S.hT,{children:[(0,T.jsx)(S.fP,{children:"Total Calories: "})," ",(0,T.jsxs)(S.yA,{children:[o.selectedMeal?n.toFixed(0)*m:"1",(0,T.jsx)("span",{children:" kcal"})]})]})]})]}),o.selectedMeal&&(0,T.jsxs)(S.mL,{children:[(0,T.jsx)(S.Yr,{children:"Nutritional  Information"}),t]}),h?(0,T.jsx)(S.Dg,{children:f}):(0,T.jsx)(S.F6,{children:f}),(0,T.jsx)(S.ql,{children:(0,T.jsx)(G,{})})]})})),e})},7202:function(e,n,t){t.d(n,{Z:function(){return d}});t(2791);var l,r=t(168),a=t(6031),i=(t(7738),a.ZP.div(l||(l=(0,r.Z)(["\ncursor: pointer;\nsvg{\n    width: 35px;\n\n    height: 35px;\n    fill: inherit;\n}\n"])))),c=t(8141),s=t(184),d=function(e){var n=e.onClick;return(0,s.jsx)(i,{onClick:n,children:(0,s.jsx)(c.r,{})})}}}]);
//# sourceMappingURL=131.48e2b088.chunk.js.map