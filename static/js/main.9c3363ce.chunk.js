(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{16:function(e,t,n){e.exports={container:"calculator_container__2SSAU",buttonsContainer:"calculator_buttonsContainer__1kCrL",button:"calculator_button__sl-En",hidden:"calculator_hidden__2Uhu1"}},21:function(e,t,n){e.exports={displayContainer:"display_displayContainer__3M3PO",displayValue:"display_displayValue__36u12"}},25:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},45:function(e,t){},46:function(e,t,n){"use strict";n.r(t);var a=n(7),o=n.n(a),r=n(24),c=n.n(r),i=(n(34),n(35),n(2)),l=n(4),u=n(17),s=n(18),d=n(28),p=n(27),v=n(16),b=n(21),y=n(1),O=function(e){return Object(y.jsx)("div",{className:b.displayContainer,children:Object(y.jsxs)("div",{className:b.displayValue,children:[Object(y.jsx)("div",{children:e.currentOperation}),Object(y.jsx)("div",{children:e.displayValue})]})})},f=n(25),j=function(e){return Object(y.jsx)("div",{className:f.button,children:e.button})},m=n(48),g={performOperation:function(e){var t;try{t=Object(m.a)(e)}catch(n){t="syntax error"}finally{return t}},specialOperands:["undo","copy","delete","CE","C","backspace","ON"],specialOperations:function(e,t){return"CE"===t?"":"C"===t?e.slice(0,e.length-1):"delete"===t?e.slice(1,e.length):"backspace"===t?e.slice(0,e.length-1):void 0}},h=[{value:"undo"},{value:"("},{value:")"},{value:"copy"},{value:"backspace"},{value:"sin"},{value:"cos"},{value:"tan"},{value:"CE"},{value:"C"},{value:"delete"},{value:"/"},{value:"7",backgroundColor:"#060606"},{value:"8",backgroundColor:"#060606"},{value:"9",backgroundColor:"#060606"},{value:"*"},{value:"4",backgroundColor:"#060606"},{value:"5",backgroundColor:"#060606"},{value:"6",backgroundColor:"#060606"},{value:"-"},{value:"1",backgroundColor:"#060606"},{value:"2",backgroundColor:"#060606"},{value:"3",backgroundColor:"#060606"},{value:"+"},{value:"%"},{value:"0",backgroundColor:"#060606"},{value:"."},{value:"="}],C=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).change=function(){var e=document.getElementById("display").value;a.setState((function(t){return Object(l.a)(Object(l.a)({},t),{},{displayValue:e})}))},a.onEnter=function(e){e&&13===e.keyCode&&(e.preventDefault(),a.performOperation())},a.performOperation=function(){var e=document.getElementById("display").value,t=[].concat(Object(i.a)(a.state.operationHistory),[e]),n=g.performOperation(e);document.getElementById("display").value=n,a.setState((function(a){return Object(l.a)(Object(l.a)({},a),{},{displayValue:n,operationHistory:t,currentOperation:e})}))},a.copyToClipBoard=function(){var e=document.getElementById("display");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")},a.undoKeyboardOperation=function(){if(0!==a.state.operationHistory.length){a.state.operationHistory.length>1&&a.state.operationHistory.pop();var e=a.state.operationHistory.pop();document.getElementById("display").value=e;var t=g.performOperation(e);document.getElementById("display").value=t,a.setState((function(n){return Object(l.a)(Object(l.a)({},n),{},{displayValue:t,currentOperation:e})}))}else a.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{currentOperation:"",displayValue:""})}))},a.keyBoardOperation=function(e){var t=document.getElementById("display").value;if("="===e)a.performOperation();else if("copy"===e)a.copyToClipBoard();else if("undo"===e)a.undoKeyboardOperation();else if(-1===g.specialOperands.indexOf(e))document.getElementById("display").value=t+e,a.change();else{if("CE"===e){var n=[];a.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{operationHistory:n,currentOperation:""})}))}"C"===e&&0===a.state.displayValue.length&&a.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{currentOperation:""})}));var o=g.specialOperations(t,e);document.getElementById("display").value=o,a.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{displayValue:o})}))}},a.state={displayValue:"",currentOperation:"",operationHistory:[],timer:null},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=setInterval((function(){document.getElementById("display").focus()}),400);this.setState((function(t){return Object(l.a)(Object(l.a)({},t),{},{timer:e})}))}},{key:"componentWillUnmount",value:function(){this.state.timer&&clearInterval(this.state.timer)}},{key:"render",value:function(){var e=this;return Object(y.jsxs)("div",{className:v.container,children:[Object(y.jsx)("input",{type:"text",id:"display",autoComplete:"off",className:v.hidden,onChange:function(){return e.change()},onKeyUp:function(t){return e.onEnter(t)}}),Object(y.jsx)(O,{displayValue:this.state.displayValue,currentOperation:this.state.currentOperation}),Object(y.jsx)("div",{className:v.buttonsContainer,children:h.map((function(t){return Object(y.jsx)("div",{className:v.button,style:{backgroundColor:t.backgroundColor?t.backgroundColor:"rgb(43 41 41)"},onClick:function(){return e.keyBoardOperation(t.value)},children:Object(y.jsx)(j,{button:t.value})},t.value)}))}),Object(y.jsx)(j,{})]})}}]),n}(o.a.Component);var k=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(C,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))};c.a.render(Object(y.jsx)(o.a.StrictMode,{children:Object(y.jsx)(k,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),x()}},[[46,1,2]]]);
//# sourceMappingURL=main.9c3363ce.chunk.js.map