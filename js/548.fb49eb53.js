"use strict";(globalThis["webpackChunkex_site"]=globalThis["webpackChunkex_site"]||[]).push([[548],{6548:(e,t,l)=>{l.r(t),l.d(t,{default:()=>_});var a=l(9835);const s={class:"absolute-center tw-w-full"},o=(0,a._)("div",{class:"tw-text-2xl tw-font-bold tw-text-gray-700 tw-mb-4"},"登录",-1);function n(e,t,l,n,u,r){const m=(0,a.up)("q-input"),c=(0,a.up)("q-btn"),d=(0,a.up)("q-form"),i=(0,a.up)("q-card-section"),p=(0,a.up)("q-card");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(p,{class:"tw-w-11/12 md:tw-w-1/2 tw-m-auto tw-h-96 tw-p-4 tw-bg-gray-100 tw-rounded-lg"},{default:(0,a.w5)((()=>[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[o,(0,a.Wm)(d,{onSubmit:n.onSubmit,class:"tw-w-full"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{modelValue:n.username,"onUpdate:modelValue":t[0]||(t[0]=e=>n.username=e),label:"用户名",filled:"",class:"tw-mb-4","lazy-rules":"",rules:[e=>e&&e.length>0||"用户名不能为空"]},null,8,["modelValue","rules"]),(0,a.Wm)(m,{modelValue:n.password,"onUpdate:modelValue":t[1]||(t[1]=e=>n.password=e),label:"密码",filled:"",type:"password",class:"tw-mb-4","lazy-rules":"",rules:[e=>e&&e.length>0||"密码不能为空"]},null,8,["modelValue","rules"]),(0,a.Wm)(c,{type:"submit",color:"primary",label:"登录",class:"tw-w-full"})])),_:1},8,["onSubmit"])])),_:1})])),_:1})])}l(9665);var u=l(499),r=l(1569),m=l(8339),c=l(9302);const d={name:"LoginPage",setup(){(0,a.bv)((()=>{localStorage.getItem("access_token")&&r.hi.get("/v1/hello").then((e=>{200===e.status&&l.push("/space")}))}));let e=(0,u.iH)(null),t=(0,u.iH)(null);const l=(0,m.tv)(),s=(0,c.Z)(),o=()=>{let a={username:e.value,password:t.value},o=new FormData;for(let e in a)o.append(e,a[e]);r.hi.post("/login",o,{headers:{"Content-Type":"application/form-data"}}).then((t=>{if(200===t.status){let a=t.data.access_token,s=t.data.token_type;localStorage.setItem("access_token",a),localStorage.setItem("token_type",s),localStorage.setItem("username",e.value),l.push("/space")}})).catch((e=>{s.notify({message:"login failed",color:"negative",position:"top",timeout:2e3})}))};return{username:e,password:t,onSubmit:o}}};var i=l(1639),p=l(4458),w=l(3190),g=l(8326),b=l(6611),f=l(4455),h=l(9984),v=l.n(h);const y=(0,i.Z)(d,[["render",n]]),_=y;v()(d,"components",{QCard:p.Z,QCardSection:w.Z,QForm:g.Z,QInput:b.Z,QBtn:f.Z})}}]);