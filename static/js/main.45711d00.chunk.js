(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{52:function(e){e.exports=JSON.parse('[{"name":"ingress","description":"Enforce requirements on Ingress resources","homepage":"https://github.com/kubewarden/ingress-policy","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/ingress:v0.1.6","url":"https://github.com/kubewarden/ingress-policy/releases/download/v0.1.6/policy.wasm"},"keywords":["Ingress"],"resources":["Ingress"],"mutation":false},{"name":"pod-privileged-policy","description":"Limit the ability to create privileged containers","homepage":"https://github.com/kubewarden/pod-privileged-policy","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/pod-privileged-policy:v0.1.5","url":"https://github.com/kubewarden/pod-privileged-policy/releases/download/v0.1.5/policy.wasm"},"keywords":["PSP","Container","Privileged"],"resources":["Pod"],"mutation":false},{"name":"psp-allow-privilege-escalation","description":"A Pod Security Policy that controls usage of `allowPrivilegeEscalation`","homepage":"https://github.com/kubewarden/psp-allow-privilege-escalation","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/psp-allow-privilege-escalation:v0.1.4","url":"https://github.com/kubewarden/psp-allow-privilege-escalation/releases/download/v0.1.4/policy.wasm"},"keywords":["PSP","Container","Privilege Escalation"],"resources":["Pod"],"mutation":false},{"name":"psp-apparmor","description":"A Pod Security Policy that controls usage of AppArmor profiles","homepage":"https://github.com/kubewarden/psp-apparmor","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/psp-apparmor:v0.1.3","url":"https://github.com/kubewarden/psp-apparmor/releases/download/v0.1.3/policy.wasm"},"keywords":["PSP","AppArmor"],"resources":["Pod"],"mutation":false},{"name":"psp-capabilities","description":"A Pod Security Policy that controls Container Capabilities","homepage":"https://github.com/kubewarden/psp-capabilities","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/psp-capabilities:v0.1.2","url":"https://github.com/kubewarden/psp-capabilities/releases/download/v0.1.2/policy.wasm"},"keywords":["PSP","Container","Capability","Capabilies"],"resources":["Pod"],"mutation":true},{"name":"safe-lables","description":"A policy that validates Kubernetes\' resource labels","homepage":"https://github.com/kubewarden/safe-labels-policy","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/safe-labels:v0.1.2","url":"https://github.com/kubewarden/safe-labels-policy/releases/download/v0.1.2/policy.wasm"},"keywords":["Labels"],"resources":["*"],"mutation":false},{"name":"trusted-repos","description":"Restrict what registries, tags and images can be used","homepage":"https://github.com/kubewarden/trusted-repos-policy","author":{"name":"Kubewarden devs","homepage":"https://github.com/kubewarden"},"download":{"registry":"ghcr.io/kubewarden/policies/trusted-repos:v0.1.2","url":"https://github.com/kubewarden/trusted-repos-policy/releases/download/v0.1.2/policy.wasm"},"keywords":["Image","Registry","Tag"],"resources":["Pod"],"mutation":false}]')},62:function(e,t,r){},63:function(e,t,r){},83:function(e,t,r){"use strict";r.r(t);var s=r(0),a=r.n(s),i=r(5),n=r.n(i),o=(r(62),r(26)),c=r(43),l=r(44),d=r(55),u=r(53),p=(r(63),r(54)),h=r(2);function b(e){var t=e.text,r=e.highlight,s=t.toLocaleLowerCase().indexOf(r.toLocaleLowerCase());if(s<0)return Object(h.jsx)("span",{children:t},"hl");var a=t.substring(0,s),i=t.substring(s,s+r.length),n=t.substring(s+r.length,t.length);return a=a?Object(h.jsx)("span",{children:a},"m1"):null,i=i?Object(h.jsx)("span",{style:{borderRadius:"2px"},children:Object(h.jsx)("mark",{children:i})},"m2"):null,n=n?Object(h.jsx)("span",{children:n},"m3"):null,Object(h.jsxs)("span",{children:[a,i,n]},"hl")}var m=r(49),g=r.n(m),j=r(48),w=r.n(j),y=r(50),f=r.n(y),v=r(51),O=r.n(v),x=r(37),k=r.n(x),S=r(45),C=r(47),N=r.n(C),P=r(101),F=function(e){var t=Object(s.useState)(!1),r=Object(p.a)(t,2),a=r[0],i=r[1],n=e.policy;return Object(h.jsxs)("article",{children:[Object(h.jsx)("div",{className:"name",children:n.name}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("div",{className:"text-description",children:Object(h.jsx)(b,{text:n.description,highlight:e.descriptionCriteria})}),n.download.registry?Object(h.jsxs)("div",{className:"registry-wrapper",children:[Object(h.jsx)("div",{className:"text-light text-tiny text-label",children:"REGISTRY"}),Object(h.jsx)("code",{className:"text-smaller",children:n.download.registry}),Object(h.jsx)(S.CopyToClipboard,{text:n.download.registry,onCopy:function(){return i(!0),void setTimeout((function(){i(!1)}),1500)},children:Object(h.jsx)(P.a,{title:a?"Copied!":"Copy registry",arrow:!0,children:Object(h.jsx)("button",{id:"copy-registry",className:"text-small button-link",children:Object(h.jsx)(N.a,{})})})})]}):null,Object(h.jsxs)("div",{className:"links-wrapper",children:[Object(h.jsxs)("a",{className:"text-smaller link",href:n.homepage,target:"_blank",rel:"noopener noreferrer",children:[Object(h.jsx)(w.a,{}),"Homepage"]}),Object(h.jsx)(P.a,{title:"Author",arrow:!0,children:n.author.homepage?Object(h.jsxs)("a",{className:"text-smaller link",href:n.author.homepage,target:"_blank",rel:"noopener noreferrer",children:[Object(h.jsx)(k.a,{}),n.author.name]}):Object(h.jsxs)("span",{className:"text-smaller not-a-real-link",children:[Object(h.jsx)(k.a,{}),n.author.name]})}),n.download.url?Object(h.jsxs)("a",{className:"text-smaller link download",href:n.download.url,rel:"noopener noreferrer",children:[Object(h.jsx)(g.a,{}),"Download Policy"]}):null]}),Object(h.jsxs)("aside",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"text-light text-tiny text-label",children:"RESOURCES"}),n.resources.map((function(t,r){return Object(h.jsx)(P.a,{title:"Filter by this resource",arrow:!0,children:Object(h.jsxs)("button",{className:"badge resource text-small",onClick:function(){return e.additionalResourceFilter(t)},children:[t,r<n.resources.length-1?Object(h.jsx)("span",{children:",\xa0"}):null]})},n.name+"-"+t)}))]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"text-light text-tiny text-label",children:"KEYWORDS"}),n.keywords.map((function(t,r){return Object(h.jsx)(P.a,{title:"Filter by this keyword",arrow:!0,children:Object(h.jsxs)("button",{className:"badge keyword text-small",onClick:function(){return e.additionalKeywordFilter(t)},children:[t,r<n.keywords.length-1?Object(h.jsx)("span",{children:",\xa0"}):null]})},n.name+"-"+t)}))]}),Object(h.jsx)("div",{className:"not-a-real-link mutation",children:Object(h.jsx)(P.a,{arrow:!0,title:n.mutation?"Validation + Mutation Policy":"Validation Policy",children:Object(h.jsxs)("div",{children:[Object(h.jsx)(f.a,{color:"primary"}),n.mutation?Object(h.jsx)(O.a,{color:"secondary"}):null]})})})]})]})]})},K=r(38),E=r(52),R=r.p+"static/media/logo-kubewarden.7337b18e.svg",A=r.p+"static/media/logo-no-text.fb9fba0c.svg";function D(){var e=document.getElementsByTagName("footer")[0].offsetHeight;console.log(e);var t=document.getElementsByTagName("header")[0].offsetHeight;console.log(t),document.getElementsByTagName("section")[0].style.minHeight=window.innerHeight-e-t-31+"px"}var L=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(e){var s;return Object(c.a)(this,r),(s=t.call(this,e)).state={descriptionCriteria:"",dataSet:E,resourcesOptionsSelected:[],keywordsOptionsSelected:[]},s}return Object(l.a)(r,[{key:"componentDidMount",value:function(){D()}},{key:"componentDidUpdate",value:function(){D()}},{key:"getDistinctSetOfResources",value:function(){var e=[];return this.state.dataSet.forEach((function(t){var r;return e=(r=e).concat.apply(r,Object(o.a)(t.resources))})),Array.from(new Set(e))}},{key:"getDistinctSetOfKeywords",value:function(){var e=[];return this.state.dataSet.forEach((function(t){var r;return e=(r=e).concat.apply(r,Object(o.a)(t.keywords))})),Array.from(new Set(e))}},{key:"additionalResourceFilter",value:function(e){var t={value:e,label:e},r=this.state.resourcesOptionsSelected;r.map((function(e){return e.value})).includes(e)||this.setState({resourcesOptionsSelected:r.concat(t)})}},{key:"additionalKeywordFilter",value:function(e){var t={value:e,label:e},r=this.state.keywordsOptionsSelected;r.map((function(e){return e.value})).includes(e)||this.setState({keywordsOptionsSelected:r.concat(t)})}},{key:"onResourcesFilterChange",value:function(e){this.setState({resourcesOptionsSelected:e})}},{key:"onKeywordsFilterChange",value:function(e){this.setState({keywordsOptionsSelected:e})}},{key:"onDescriptionFilterChange",value:function(e){var t=e.target.value;this.setState({descriptionCriteria:t})}},{key:"filter",value:function(){var e=this,t=this.state.dataSet?this.state.dataSet.filter((function(t){return t.description.toLowerCase().includes(e.state.descriptionCriteria.toLowerCase())})):[];return t=this.state.resourcesOptionsSelected.length>0?t.filter((function(t){return e.state.resourcesOptionsSelected.map((function(e){return e.value})).every((function(e){return t.resources.includes(e)}))})):t,t=this.state.keywordsOptionsSelected.length>0?t.filter((function(t){return e.state.keywordsOptionsSelected.map((function(e){return e.value})).every((function(e){return t.keywords.includes(e)}))})):t}},{key:"render",value:function(){var e=this,t=[];this.getDistinctSetOfResources().forEach((function(e){t=[].concat(Object(o.a)(t),[{value:e,label:e}])}));var r=[];return this.getDistinctSetOfKeywords().forEach((function(e){r=[].concat(Object(o.a)(r),[{value:e,label:e}])})),Object(h.jsxs)("div",{className:"Hub",children:[Object(h.jsxs)("header",{className:"Hub-header",children:[Object(h.jsxs)("div",{className:"header-links",children:[Object(h.jsxs)("a",{href:"/",className:"header-homepage",rel:"noopener noreferrer",children:[Object(h.jsx)("img",{src:A,alt:"Kubewarden Policy Hub Logo"})," POLICY HUB"]}),Object(h.jsx)("a",{href:"https://www.kubewarden.io/",className:"main-site",children:"KUBEWARDEN"})]}),Object(h.jsxs)("div",{className:"filters-wrapper",children:[Object(h.jsx)("div",{className:"filter-box filter-description",children:Object(h.jsx)("input",{name:"filter-description",onChange:function(t){return e.onDescriptionFilterChange(t)},placeholder:"Filter by description"},"filter-description")}),Object(h.jsx)("div",{className:"filter-box resources-select-container",children:Object(h.jsx)(K.a,{value:this.state.resourcesOptionsSelected,onChange:function(t){return e.onResourcesFilterChange(t)},options:t,isMulti:!0,placeholder:"Filter by resources"})}),Object(h.jsx)("div",{className:"filter-box keywords-select-container",children:Object(h.jsx)(K.a,{value:this.state.keywordsOptionsSelected,onChange:function(t){return e.onKeywordsFilterChange(t)},options:r,isMulti:!0,placeholder:"Filter by keywords"})})]})]}),Object(h.jsx)("section",{children:this.filter().map((function(t){return Object(h.jsx)(F,{policy:t,descriptionCriteria:e.state.descriptionCriteria,additionalResourceFilter:function(t){return e.additionalResourceFilter(t)},additionalKeywordFilter:function(t){return e.additionalKeywordFilter(t)}},t.name)}))}),Object(h.jsx)("footer",{children:Object(h.jsx)("a",{href:"https://www.kubewarden.io/",className:"kubewarden-logo",children:Object(h.jsx)("img",{src:R,alt:"Kubewarden main site logo"})})})]})}}]),r}(s.Component),H=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,103)).then((function(t){var r=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;r(e),s(e),a(e),i(e),n(e)}))};n.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root")),H()}},[[83,1,2]]]);
//# sourceMappingURL=main.45711d00.chunk.js.map