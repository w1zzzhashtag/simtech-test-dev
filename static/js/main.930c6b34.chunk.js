(this["webpackJsonpreact-simtech-test"]=this["webpackJsonpreact-simtech-test"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t.p+"static/media/CVV.0fcb68ef.png"},function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(6),l=t.n(c),s=t(2),m=t(3),i=t(1),o=t(4),u=t.n(o),d=(t(13),t(7)),p=t.n(d),v=function(e){var a=e.cards,t=e.cardsValue,c=e.setCardsValue,l=Object(r.useState)(1),o=Object(s.a)(l,2),d=o[0],v=o[1],E=Object(r.useState)(!1),h=Object(s.a)(E,2),_=h[0],b=h[1],N=function(e){var a=e.target.value,t=e.target.name;c((function(){return f(a,t)}))},f=function(e,a){switch(a){case"month":case"year":return Object(i.a)(Object(i.a)({},t),{},Object(m.a)({},a,Object(i.a)(Object(i.a)({},t[a]),{},{value:e.replace(/[^\d]/g,""),valid:2===e.length,showError:2===!e.length})));case"name":return Object(i.a)(Object(i.a)({},t),{},Object(m.a)({},a,Object(i.a)(Object(i.a)({},t[a]),{},{value:e.replace(/[^a-z\s]/gi,""),valid:e.length>3&&e.length<=40,showError:!e.length>3&&!e.length<=40})));case"cvv":return Object(i.a)(Object(i.a)({},t),{},Object(m.a)({},a,Object(i.a)(Object(i.a)({},t[a]),{},{value:e.replace(/[^\d]/g,""),valid:3===e.length,showError:3===!e.length})));default:return t}},y=function(){b(!0)},j=function(){b(!1)};return n.a.createElement("div",{className:"payment"},n.a.createElement("div",{className:"payment__nav"},a.map((function(e){return n.a.createElement("span",{key:e.id,onClick:function(){return a=e.id,v(a),void c({number:{value:"",valid:!1,textError:"number uncorrect"},month:{value:"",valid:!1,textError:"month uncorrect"},year:{value:"",valid:!1,textError:"year uncorrect"},name:{value:"",valid:!1,textError:"name uncorrect"},cvv:{value:"",valid:!1,textError:"cvv uncorrect"},checked:{value:!1,valid:!1,textError:"\u0412\u044b \u043d\u0435 \u043f\u0440\u0438\u043d\u044f\u043b\u0438 Terms and conditions"}});var a},className:d===e.id?"payment__nav-link active":"payment__nav-link"},e.name)}))),n.a.createElement("div",{className:"payment-card_wrap"},a.map((function(e){return n.a.createElement("div",{key:e.id,className:e.id===d?"payment-card active":"payment-card"},n.a.createElement("div",{className:"payment-card__left"},n.a.createElement("div",{className:"payment-card__input_wrap"},n.a.createElement("label",{htmlFor:"",className:"payment-card__label"},"Card number"),n.a.createElement("input",{type:"text",className:u()({"payment-card__input":!0,"focus-error":!t.number.valid,"show-error":t.number.showError}),name:"number",value:t.number.value,onChange:function(e){return function(e){var a=e.target.name,r=e.target.value.replace(/\D/g,"");r=""!==r?r.match(/.{1,4}/g).join(" "):"",c(Object(i.a)(Object(i.a)({},t),{},Object(m.a)({},a,Object(i.a)(Object(i.a)({},t[a]),{},{value:r,valid:19===r.length,showError:19===!r.length}))))}(e)},maxLength:"19"})),n.a.createElement("div",{className:"payment-card__input_wrap"},n.a.createElement("label",{htmlFor:"",className:"payment-card__label"},"Valid thru (mm/yy)"),n.a.createElement("div",{className:"payment-card__input-date_wrap"},n.a.createElement("input",{type:"text",className:u()({"payment-card__input":!0,"focus-error":!t.month.valid,"show-error":t.month.showError}),name:"month",value:t.month.value,onChange:function(e){return N(e)},maxLength:"2"}),n.a.createElement("span",null,"/"),n.a.createElement("input",{type:"text",className:u()({"payment-card__input":!0,"focus-error":!t.year.valid,"show-error":t.year.showError}),name:"year",value:t.year.value,onChange:function(e){return N(e)},maxLength:"2"}))),n.a.createElement("div",{className:"payment-card__input_wrap"},n.a.createElement("label",{htmlFor:"",className:"payment-card__label"},"Cardholder's name"),n.a.createElement("input",{type:"text",className:u()({"payment-card__input":!0,"focus-error":!t.name.valid,"show-error":t.name.showError}),name:"name",value:t.name.value,onChange:function(e){return N(e)}}))),n.a.createElement("div",{className:"payment-card__right"},n.a.createElement("div",{className:"payment-card__input_wrap"},n.a.createElement("label",{htmlFor:"",className:"payment-card__label"},"CVV/CVC"),n.a.createElement("div",{className:"payment-card__cvv-wrap"},n.a.createElement("input",{type:"text",className:u()({"payment-card__input":!0,"focus-error":!t.cvv.valid,"show-error":t.cvv.showError}),name:"cvv",value:t.cvv.value,onChange:function(e){return N(e)},maxLength:"3"}),n.a.createElement("span",{className:"payment-card__cvv-question",onMouseOver:y,onMouseLeave:j},"?"),n.a.createElement("div",Object(m.a)({className:"tooltip"},"className",_?"tooltip active":"tooltip"),n.a.createElement("div",{className:"tooltip__inner"},n.a.createElement("p",null,"CVV-\u043a\u043e\u0434 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0430 \u0442\u044b\u043b\u044c\u043d\u043e\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u0435 \u043a\u0430\u0440\u0442\u044b \u0438 \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044f \u0442\u0440\u0438 \u0446\u0438\u0444\u0440\u044b"),n.a.createElement("img",{src:p.a,alt:"cvv"})))))))}))))},E=(t(14),function(e){var a=e.cardsValue,t=e.setCardsValue,c=Object(r.useState)(!1),l=Object(s.a)(c,2),m=l[0],o=l[1],d=Object(r.useRef)(),p=Object(r.useRef)();return n.a.createElement("div",{className:u()({"app__item terms":!0,"show-error":a.checked.showError})},n.a.createElement("input",{id:"terms",type:"checkbox",checked:a.checked.value,onChange:function(){t(Object(i.a)(Object(i.a)({},a),{},{checked:Object(i.a)(Object(i.a)({},a.checked),{},{value:!a.checked.value,valid:!a.checked.valid,showError:a.checked.valid})}))}}),n.a.createElement("div",{className:"terms__text"},n.a.createElement("label",{htmlFor:"terms",className:"terms__text-label"},"I accept the"),n.a.createElement("span",{className:"terms__text-link",onClick:function(){o(!0)}},"Terms and Conditions"),n.a.createElement("div",{className:m?"terms__popup_wrap active":"terms__popup_wrap",ref:d,onClick:function(e){e.target!==d.current&&e.target!==p.current||o(!1)}},n.a.createElement("div",{className:"terms__popup"},n.a.createElement("h6",null,"Terms and Conditions"),n.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea quis dolore eos ipsa architecto porro necessitatibus non, minima laboriosam esse distinctio earum ducimus repudiandae dolorem perferendis? Nemo, voluptatum et! Natus?"),n.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea quis dolore eos ipsa architecto porro necessitatibus non, minima laboriosam esse distinctio earum ducimus repudiandae dolorem perferendis? Nemo, voluptatum et! Natus?"),n.a.createElement("span",{ref:p,className:"terms__popup-btn"},"\xd7")))))}),h=(t(15),function(e){var a=e.onSubmit;return n.a.createElement("button",{onClick:a,className:"submit-btn"},"Place order ($624.99)")});var _=function(){var e=[{id:1,name:"Credit card"},{id:2,name:"Gift card"},{id:3,name:"PayPal"}],a={number:{value:"",valid:!1,showError:!1,textError:'\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043f\u043e\u043b\u0435 "Card number"'},month:{value:"",valid:!1,showError:!1,textError:'\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043f\u043e\u043b\u0435 "Valid thru mm"'},year:{value:"",valid:!1,showError:!1,textError:'\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043f\u043e\u043b\u0435 "Valid thru yy"'},name:{value:"",valid:!1,showError:!1,textError:'\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043f\u043e\u043b\u0435 "Cardholder name"'},cvv:{value:"",valid:!1,showError:!1,textError:'\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043f\u043e\u043b\u0435 "CVV/CVC"'},checked:{value:!1,valid:!1,showError:!1,textError:"\u0412\u044b \u043d\u0435 \u043f\u0440\u0438\u043d\u044f\u043b\u0438 Terms and conditions"}},t=!1,c=!1,l=Object(r.useState)(e),m=Object(s.a)(l,1)[0],i=Object(r.useState)(a),o=Object(s.a)(i,2),u=o[0],d=o[1],p=Object(r.useState)(t),_=Object(s.a)(p,2),b=_[0],N=_[1],f=Object(r.useState)(c),y=Object(s.a)(f,2),j=y[0],O=y[1],g=Object(r.useState)([]),w=Object(s.a)(g,2),C=w[0],x=w[1],k=[],V=[];return console.log(u.number),n.a.createElement("div",{className:"app"},n.a.createElement("h1",{className:"app__title"},"Checkout"),n.a.createElement("div",{className:"app__item"},n.a.createElement("h2",{className:"app__item-title"},"Products"),n.a.createElement("div",{className:"inner-list"},n.a.createElement("div",{className:"inner-list__item"},n.a.createElement("a",{href:""},'Apple MacBook Pro 16" 8 Core i9'),n.a.createElement("span",null,"$499.00")),n.a.createElement("div",{className:"inner-list__item"},n.a.createElement("a",{href:""},"Apple iPhone 11 Pro Max, 256 \u0413\u0411"),n.a.createElement("span",null,"$130.00")))),n.a.createElement("div",{className:"app__item"},n.a.createElement("h2",{className:"app__item-title"},"Shipping method"),n.a.createElement("div",{className:"inner-list"},n.a.createElement("div",{className:"inner-list__item"},n.a.createElement("span",null,"FedEx"),n.a.createElement("span",null,"$130.00")))),n.a.createElement("div",{className:"app__item"},n.a.createElement("h2",{className:"app__item-title"},"Payment method"),n.a.createElement(v,{cards:m,cardsValue:u,setCardsValue:d})),n.a.createElement(E,{cardsValue:u,setCardsValue:d}),n.a.createElement(h,{onSubmit:function(){Object.values(u).map((function(e){e.valid?(k.push(e),e.showError=!1,k.length===Object.values(u).length&&(N(!0),O(!1),setTimeout((function(){N(!1)}),2e3))):(V.push(e.textError),e.showError=!0,O(!0),N(!1),setTimeout((function(){O(!1)}),5e3))})),x([].concat(V))}}),b&&n.a.createElement("span",{className:"submit-status success"},"Success!"),j&&n.a.createElement("div",{className:"submit-status error"},n.a.createElement("span",null,"Error"),n.a.createElement("ul",null,C.map((function(e,a){return n.a.createElement("li",{key:a},e)})))))};t(16);l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(_,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.930c6b34.chunk.js.map