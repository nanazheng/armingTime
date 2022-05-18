(this["webpackJsonpcanvas-and-hooks"]=this["webpackJsonpcanvas-and-hooks"]||[]).push([[0],{298:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),c=n(4),s=n.n(c),r=(n(80),n(56),n(18)),l=(n(81),n(40)),d=(n(111),n(75)),o=(n(151),n(11)),h=(n(153),n(141)),m=n(48),u=n(49),f=n(54),j=n(53),p=(n(112),n(139)),b=n(27),v=n(106),y=n.n(v),x=(n(156),n(39)),O=n(2),g=function(e){var t=e.className,n=e.offset,i=e.length,a=e.changeTimeLine,c=e.index,s=e.slider,r={visibility:"visible",left:n+"px",width:i+"px"};return s.border&&(r.height="14px",r.border="1px dotted rgb(34 103 0)"),Object(O.jsx)("div",{onClick:function(){return a(c)},className:t,style:r,children:s.showTime&&Object(O.jsxs)("div",{style:{position:"relative"},children:[Object(O.jsx)(x.a,{title:s.startTime,defaultVisible:!0,children:Object(O.jsx)("span",{className:"rc-track-time",style:{left:0}})}),Object(O.jsx)(x.a,{title:s.endTime,defaultVisible:!0,children:Object(O.jsx)("span",{className:"rc-track-time",style:{left:i-1}})})]})})},k=(n(202),n(131)),C=(n(204),n(132)),H=n(24),S=n.n(H),I=function(e){Object(f.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(m.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={indeterminate:!0,checkAll:!1,copyDays:[{day:"\u5468\u4e00",checked:!1},{day:"\u5468\u4e8c",checked:!1},{day:"\u5468\u4e09",checked:!1},{day:"\u5468\u56db",checked:!1},{day:"\u5468\u4e94",checked:!1},{day:"\u5468\u516d",checked:!1},{day:"\u5468\u65e5",checked:!1}]},e.onCheckAllChange=function(t){var n=e.state.copyDays;n.map((function(e){t.target.checked&&!e.checked&&(e.checked=!0),t.target.checked||(e.checked=!1)})),e.setState({copyDays:n,indeterminate:!1,checkAll:t.target.checked})},e.changeSingle=function(t,n){var i=e.state.copyDays,a=!0,c=!1;i[n].checked=t.target.checked,i.find((function(e){return!e.checked}))||(a=!1,c=!0),e.setState({copyDays:i,indeterminate:a,checkAll:c})},e.confirm=function(){var t=e.state.copyDays,n=e.props,i=n.handleCopySave,a=n.dayIndex,c=[];t.map((function(e,t){e.checked&&t!==a&&(c.push(t),e.checked=!1)})),e.setState({copyDays:t}),i(c)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.indeterminate,i=t.checkAll,a=t.copyDays,c=this.props,s=c.dayIndex,d=c.handleCloseCopy;return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{style:{borderBottom:"1px solid #E9E9E9"},children:Object(O.jsx)(l.a,{indeterminate:n,onChange:this.onCheckAllChange,checked:i,children:"\u5168\u9009"})}),Object(O.jsx)("br",{}),Object(O.jsx)(k.a,{children:a.map((function(t,n){return n===s&&(t.checked=!0),Object(O.jsx)(C.a,{span:8,children:Object(O.jsx)(l.a,{disabled:n===s,checked:t.checked,onChange:function(t){return e.changeSingle(t,n)},children:t.day})},n)}))}),Object(O.jsxs)("div",{className:"popFooter",children:[Object(O.jsx)(r.a,{size:"small",type:"default",style:{marginRight:"10px"},onClick:d,children:"\u53d6\u6d88"}),Object(O.jsx)(r.a,{size:"small",type:"primary",onClick:this.confirm,children:"\u786e\u8ba4"})]})]})}}]),n}(i.Component),M=(n(212),n(140)),T=n(32);function N(e,t){var n=Math.floor(2*e/60),i=2*e%60,a=Math.floor(2*t/60),c=2*t%60;return{startTime:"".concat(n>9?n:"0".concat(n),":").concat(i>9?i:"0".concat(i)),endTime:"".concat(a>9?a:"0".concat(a),":").concat(c>9?c:"0".concat(c)),startHour:n,startMin:i,endHour:a,endMin:c}}n(214);var D=n(79),V=(n(216),n(108)),A=n(13),w=n.n(A);function L(e,t){for(var n=[],i=e;i<=t;i++)n.push(i);return n}var E=function(e){var t=e.value,n=e.form,a=(e.data,e.prevHour),c=e.prevMin,s=e.nextHour,r=e.nextMin,l=e.timelineIndex,d=e.timelinersLength,o=Object(i.useState)(t.startTime),h=Object(T.a)(o,2),m=h[0],u=h[1],f=Object(i.useState)(t.endTime),j=Object(T.a)(f,2),p=j[0],v=j[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(V.a,{onChange:function(e){u(e),n.setFieldsValue({time:Object(b.a)(Object(b.a)({},n.getFieldValue("time")),{},{startTime:e})})},defaultOpenValue:w()(m,"HH:mm"),value:m,placeholder:"\u8bf7\u9009\u62e9\u65f6\u95f4",format:"HH:mm",disabledHours:function(){var e=L(0,23),t=w()(p).format("HH:mm").split(":");return 0===l?e.splice(0,parseInt(t[0])+1):e.splice(a,parseInt(t[0])-a+1),e},disabledMinutes:function(e){var t=w()(p).format("HH:mm").split(":"),n=[];return e===a&&(n=L(0,59).splice(0,c+1)),e===parseInt(t[0])&&(n=L(0,59).splice(t[1],59)),n}}),Object(O.jsx)("span",{style:{margin:"0px 8px"},children:"\u81f3"}),Object(O.jsx)(V.a,{onChange:function(e){v(e),n.setFieldsValue({time:Object(b.a)(Object(b.a)({},n.getFieldValue("time")),{},{endTime:e})})},defaultOpenValue:w()(p,"HH:mm"),value:p,placeholder:"\u8bf7\u9009\u62e9\u65f6\u95f4",format:"HH:mm",disabledHours:function(){var e=L(0,23),t=w()(m).format("HH:mm").split(":");return l===d-1?e.splice(parseInt(t[0]),59):e.splice(parseInt(t[0]),s-parseInt(t[0])+1),e},disabledMinutes:function(e){var t=w()(m).format("HH:mm").split(":"),n=[];return e===s&&(n=L(0,59).splice(r,59)),e===parseInt(t[0])&&(n=L(0,59).splice(0,parseInt(t[1])+1)),n}})]})},F={labelCol:{span:5},wrapperCol:{span:16}};var B=D.a.create()((function(e){var t=e.startTime,n=e.endTime,a=e.form,c=e.prevHour,s=e.prevMin,r=e.nextHour,l=e.nextMin,d=e.timelineIndex,o=e.timelinersLength,h=e.data,m=a.getFieldDecorator;return Object(i.useEffect)((function(){e.setForm(e.form)}),[]),Object(O.jsx)("div",{children:Object(O.jsx)(D.a,Object(b.a)(Object(b.a)({},F),{},{className:"login-form",children:Object(O.jsx)(D.a.Item,{label:"\u5e03\u9632\u65f6\u95f4",children:m("time",{rules:[{required:!0,message:""}],initialValue:{startTime:w()(t,"HH:mm"),endTime:w()(n,"HH:mm")}})(Object(O.jsx)(E,{form:a,data:h,prevHour:c,prevMin:s,nextHour:r,nextMin:l,timelineIndex:d,timelinersLength:o}))})}))})}));var P=function(e){var t=e.visible,n=e.handleOk,a=e.handleCancel,c=e.day,s=e.timelineIndex,l=c.timelines,d=l[s],o=null===d||void 0===d?void 0:d.startTime,h=null===d||void 0===d?void 0:d.endTime,m=Object(i.useState)(null),u=Object(T.a)(m,2),f=u[0],j=u[1],p=Object(i.useState)(""),b=Object(T.a)(p,2),v=b[0],y=b[1],x=Object(i.useState)(""),g=Object(T.a)(x,2),k=g[0],C=g[1],H=Object(i.useState)(""),S=Object(T.a)(H,2),I=S[0],N=S[1],D=Object(i.useState)(""),V=Object(T.a)(D,2),A=V[0],w=V[1];return Object(i.useEffect)((function(){if(null!==s&&t){var e=s-1>=0?s-1:void 0,n=s+1<l.length?s+1:void 0;void 0!==e&&(y(l[e].endHour),C(l[e].endMin)),void 0!==n&&(N(l[n].startHour),w(l[n].startMin))}}),[c,s,t]),Object(O.jsx)(M.a,{title:"\u4fee\u6539\u65f6\u95f4",visible:t,footer:Object(O.jsx)(r.a,{type:"primary",onClick:function(){return n(f)},children:"\u4fdd\u5b58"}),onCancel:a,destroyOnClose:!0,children:Object(O.jsx)(B,{categoryName:"",setForm:function(e){j(e)},startTime:o,endTime:h,prevHour:v,prevMin:k,nextHour:I,nextMin:A,timelineIndex:s,timelinersLength:l.length,data:d})})};function z(e,t){for(var n=[],i=e;i<=t;i++)n.push(i);return n}function J(e){e.stopPropagation(),e.preventDefault()}var R=function(e){Object(f.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(m.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={coincide:!1,copyVisible:!1,timelineIndex:null,visible:!1},e.onMouseDown=function(t){if(0===t.button){var n=t.pageX;e.onStart(n),e.addDocumentEvents("mouse"),J(t)}},e.onStart=function(t){var n=e.props.day,i=t-e.getSliderStart();e.offset=Math.floor(i),e.startPosition=t,e.index=n.timelines.length;var a=!1;S.a.isEmpty(n.timelines)||n.timelines.map((function(e){e.offset<i&&e.offset+e.length>i&&(a=!0)})),e.setState({coincide:a})},e.addDocumentEvents=function(){e.onMouseMoveListener=y()(document,"mousemove",e.onMouseMove),e.onMouseUpListener=y()(document,"mouseup",e.end)},e.onMouseMove=function(t){J(t);var n=t.pageX,i=e.state.coincide,a=e.props,c=a.day,s=a.getDays,r=a.dayIndex;if(!i){var l=n-e.startPosition,d=c.timelines;e.offset+l>=720&&(l=719.5-e.offset),c.timelines.map((function(t){e.offset<t.offset&&e.offset+l>t.offset&&(l=t.offset-e.offset-1)}));var o=N(e.offset,e.offset+l),h=o.startTime,m=o.endTime,u=o.startHour,f=o.startMin,j=o.endHour,p=o.endMin;d[e.index]={offset:e.offset,length:l,startTime:h,endTime:m,startHour:u,startMin:f,endHour:j,endMin:p,showTime:!0},s(d=d.filter((function(e){return e.length>0})),r)}},e.end=function(){var t=e.props,n=t.day,i=t.getDays,a=t.dayIndex,c=n.timelines,s=c.findIndex((function(e){return e.showTime}));s>-1&&(c[s].showTime=!1),i(c,a),e.onMouseMoveListener.remove(),e.onMouseUpListener.remove()},e.handleCopySave=function(t){var n=e.props,i=n.day,a=n.getDays;t.map((function(e){a(i.timelines,e)})),e.setState({copyVisible:!1})},e.handleCopyClose=function(){e.setState({copyVisible:!1})},e.handleCopyVisible=function(t){var n=e.props.day;S.a.isEmpty(n.timelines)||e.setState({copyVisible:t})},e.changeTimeLine=function(t){var n=e.props,i=n.day,a=n.getDays,c=n.dayIndex,s=i.timelines;s.map((function(e){e.border&&(e.border=!1)})),s[t].border=!0,a(s,c),e.setState({timelineIndex:t,visible:!0})},e.handleDelete=function(){var t=e.state.timelineIndex,n=e.props,i=n.day,a=n.dayIndex,c=n.getDays;if(!S.a.isEmpty(i.timelines)&&null!==t){var s=i.timelines;s.splice(t,1),c(s,a),e.setState({timelineIndex:null})}},e.handleOk=function(t){t.validateFields((function(t,n){if(!t){var i=e.state.timelineIndex,a=e.props,c=a.day,s=a.dayIndex,r=a.getDays,l=c.timelines,d=w()(n.time.startTime).format("HH:mm"),o=w()(n.time.endTime).format("HH:mm"),h=d.split(":"),m=o.split(":"),u=parseInt(h[0]),f=parseInt(h[1]),j=parseInt(m[0]),p=parseInt(m[1]),v=(60*u+f)/2,y=(60*j+p)/2-v;l[i]=Object(b.a)(Object(b.a)({},l[i]),{},{offset:v,length:y,startTime:d,endTime:o,startHour:u,startMin:f,endHour:j,endMin:p,duration:n.duration?n.duration:void 0,threshold:n.threshold?n.threshold:void 0}),r(l,s),e.setState({visible:!1})}}))},e.handleCancel=function(){e.setState({visible:!1})},e}return Object(u.a)(n,[{key:"getSliderStart",value:function(){return this.refs.slider.getBoundingClientRect().left}},{key:"getSliderLength",value:function(){var e=this.refs.slider;return e?e.clientWidth:0}},{key:"render",value:function(){var e=this,t=this.props,n=t.day,i=t.dayIndex,a=t.selectSingle,c=this.state,s=c.copyVisible,r=c.timelineIndex,o=c.visible;return Object(O.jsxs)("div",{className:"rc-day",children:[Object(O.jsx)(l.a,{checked:n.checked,className:"rc-checkbox",onChange:function(){return a(i)}}),Object(O.jsx)("div",{className:"rc-date",children:n.day}),Object(O.jsxs)("div",{className:"rc-timeline",children:[Object(O.jsx)("div",{className:"rc-time",children:z(0,24).map((function(e){return Object(O.jsxs)("div",{className:"rc-hour",children:[Object(O.jsx)("span",{children:e}),Object(O.jsx)("i",{className:"rc-line"})]},e)}))}),Object(O.jsx)("div",{ref:"slider",onMouseDown:this.onMouseDown,className:"rc-slider",children:S.a.get(n,"timelines").map((function(t,n){return Object(O.jsx)(g,{changeTimeLine:e.changeTimeLine,index:n,slider:t,className:"rc-slider-track",offset:t.offset,length:t.length},n)}))})]}),Object(O.jsxs)("div",{className:"rc-action",children:[Object(O.jsx)(p.a,{content:Object(O.jsx)(I,{dayIndex:i,handleCopySave:this.handleCopySave,handleCloseCopy:this.handleCopyClose}),title:"\u590d\u5236\u5230...",trigger:"click",visible:s,onVisibleChange:this.handleCopyVisible,children:Object(O.jsx)("a",{className:S.a.isEmpty(n.timelines)?"disabled":"rc-copy",style:{marginLeft:0},children:"\u590d\u5236"})}),Object(O.jsx)(d.a,{title:"\u786e\u5b9a\u5220\u9664\u5417",onConfirm:this.handleDelete,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",children:Object(O.jsx)("a",{className:S.a.isEmpty(n.timelines)||!n.delete?"disabled":"rc-del",children:"\u5220\u9664"})})]}),Object(O.jsx)(P,{visible:o,handleCancel:this.handleCancel,handleOk:this.handleOk,day:n,timelineIndex:r})]})}}]),n}(i.Component),U=function(e){Object(f.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(m.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={days:[{day:"\u5468\u4e00",timelines:[],checked:!1,delete:!1},{day:"\u5468\u4e8c",timelines:[],checked:!1,delete:!1},{day:"\u5468\u4e09",timelines:[],checked:!1,delete:!1},{day:"\u5468\u56db",timelines:[],checked:!1,delete:!1},{day:"\u5468\u4e94",timelines:[],checked:!1,delete:!1},{day:"\u5468\u516d",timelines:[],checked:!1,delete:!1},{day:"\u5468\u65e5",timelines:[],checked:!1,delete:!1}],indeterminate:!1,checkAll:!1},e.getDays=function(t,n){var i=e.state.days,a=t.findIndex((function(e){return!0===e.border}));i[n].delete=a>-1,i[n].timelines=t,e.setState({days:i})},e.selectAll=function(t){var n=e.state.days;n.map((function(e){t.target.checked&&!e.checked&&(e.checked=!0),t.target.checked||(e.checked=!1)})),e.setState({days:n,indeterminate:!1,checkAll:t.target.checked})},e.selectSingle=function(t){var n=e.state.days,i=!1,a=!1;n[t].checked=!n[t].checked,n.map((function(e){e.checked&&(i=!0)})),n.find((function(e){return!e.checked}))||(i=!1,a=!0),e.setState({days:n,indeterminate:i,checkAll:a})},e.batchDel=function(){var t=e.state.days,n=!1;t.map((function(e){e.checked&&(n=!0,e.timelines=[],e.checked=!1)})),n||h.a.error("\u8bf7\u5148\u9009\u62e9\u4e00\u4e2a\u6570\u636e"),e.setState({days:t,indeterminate:!1,checkAll:!1})},e.save=function(){},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.days,i=t.indeterminate,a=t.checkAll;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"rc-batch-operation",children:Object(O.jsx)(d.a,{title:"\u786e\u5b9a\u6279\u91cf\u5220\u9664\u5417",onConfirm:this.batchDel,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",children:Object(O.jsxs)("a",{className:"rc-batch-delete",children:[Object(O.jsx)(o.a,{className:"rc-icon",type:"delete"}),Object(O.jsx)("span",{children:"\u6279\u91cf\u5220\u9664"})]})})}),Object(O.jsxs)("div",{className:"rc-table",children:[Object(O.jsxs)("div",{className:"rc-header",children:[Object(O.jsx)(l.a,{className:"rc-checkbox",indeterminate:i,checked:a,onChange:this.selectAll}),Object(O.jsx)("div",{className:"rc-date",children:"\u65e5\u671f"}),Object(O.jsx)("div",{className:"rc-timeline-header",children:"\u65f6\u95f4\u6bb5"}),Object(O.jsx)("div",{className:"rc-action",children:"\u64cd\u4f5c"})]}),n.map((function(t,n){return Object(O.jsx)(R,{day:t,selectSingle:e.selectSingle,dayIndex:n,getDays:e.getDays},t.day)}))]}),Object(O.jsx)("div",{className:"rc-save",children:Object(O.jsx)(r.a,{type:"primary",onClick:this.save,children:"\u4fdd\u5b58"})})]})}}]),n}(i.Component);var X=function(){return Object(O.jsx)("div",{style:{width:1072,padding:"20px"},children:Object(O.jsx)(U,{})})};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(X,{})}),document.getElementById("root"))},80:function(e,t,n){}},[[298,1,2]]]);
//# sourceMappingURL=main.f3d20af2.chunk.js.map