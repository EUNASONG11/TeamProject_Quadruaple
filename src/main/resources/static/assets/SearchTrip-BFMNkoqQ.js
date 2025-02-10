import{g as k,R as A,r as s,d as F,u as V,a as P,j as e,F as D,L as B}from"./index-YXlYzo5D.js";import{j}from"./jwt-B7E1_7hB.js";import{t as N}from"./tripAtom-GNgWvRM8.js";import"./SearchItems-NjfFxv7d.js";import{a as H}from"./pic-Bp3CpqNF.js";import{a as O,b as v}from"./index-CniA-3ne.js";import{I as U}from"./TitleHeader-CO4TmWfs.js";import{I as z}from"./index-21tJCDdo.js";import{R as S}from"./index-CSA0D24L.js";import"./axios-upsvKRUO.js";import"./match-C9ZeGoa4.js";import"./BaseInput-HRGnWluz.js";import"./index-B4chUOCm.js";import"./index-CETnFBLH.js";const i=[{type:null,name:"전체"},{type:"TOUR",name:"관광지"},{type:"STAY",name:"숙소"},{type:"RESTAUR",name:"맛집"},{type:"FEST",name:"축제"}],ce=()=>{k("accessToken");const[n,K]=A(N);s.useEffect(()=>{console.log("trip",n)},[n]),F(N);const[w]=V(),o=parseInt(w.get("tripId"));s.useEffect(()=>{u(!0)},[]);const p=P(),y=t=>{console.log(t),p(`/contents/index?strfId=${t}`)},[d,b]=s.useState(0),[r,m]=s.useState({}),[W,u]=s.useState(!1),[f,I]=s.useState(""),[c,C]=s.useState(""),[g,$]=s.useState(0),[h,E]=s.useState(null),[R,_]=s.useState(!1);s.useEffect(()=>{console.log("searchValue",c)},[c]),s.useEffect(()=>{},[g]);const T=async()=>{try{const a=(await j.get(`/api/search/strf-list-basic?trip_id=${o}&last_index=${d}`)).data;m(a.data),a&&_(!0)}catch(t){console.log("결과-입력 전:",t)}},x=async(t=null)=>{try{const L=(await j.get(`/api/search/strf-list-word?trip_id=${o}&last_index=${d}&category=${h}&search_word=${c}`)).data;m(L.data)}catch(a){console.log("결과-입력 후:",a)}};s.useEffect(()=>{T()},[]),s.useEffect(()=>{x(),b(0)},[h]);const l=r==null?void 0:r.list;return e.jsx("div",{className:"w-full flex flex-col gap-[30px]",children:R?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"w-full px-[32px] py-[30px] flex items-center gap-[40px] relative ",children:[e.jsx("div",{className:"text-[36px] cursor-pointer",onClick:()=>{p(-1)},children:e.jsx(U,{})}),e.jsx(z,{placeholder:"지금 어디로 여행을 떠나고 싶으신가요?",variant:"borderless",prefix:e.jsx(D,{className:"text-slate-400 text-2xl"}),allowClear:!0,onChange:t=>{I(t.target.value)},onKeyDown:t=>{t.code==="Enter"&&(C(t.target.value),u(!0),x())},value:f,className:`w-full h-[60px] px-[12px] ${f?"bg-white":"bg-slate-100"}`})]}),e.jsx("ul",{className:"flex gap-[10px] px-[32px] justify-between items-center",children:i.map((t,a)=>e.jsx("li",{className:`cursor-pointer font-semibold text-[16px] w-[124px] flex justify-center items-center px-[15px] py-[10px] gap-[10px] rounded-[8px] ${a===g?"bg-primary text-white":"bg-white text-slate-500"}`,onClick:()=>{$(a),x(i[a].type),E(i[a].name)},children:t.name},a))}),e.jsx("ul",{className:"px-[32px] py-[30px] flex flex-col gap-[30px]",children:(l==null?void 0:l.length)>0?l==null?void 0:l.map((t,a)=>e.jsxs("li",{className:"flex gap-[20px] items-center cursor-pointer",onClick:()=>{y(t.strfId)},children:[e.jsx("div",{className:"w-[130px] h-[130px] bg-slate-200 rounded-[8px] overflow-hidden",children:e.jsx("img",{src:`${H}${t.strfId}/${t.picTitle}`,alt:t.title,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"flex flex-col gap-[5px]",children:[e.jsx("div",{className:"flex gap-[5px] items-center ",children:e.jsx("h3",{className:"text-[20px] font-semibold text-slate-700",children:t.title})}),e.jsx("div",{className:"flex gap-[5px] items-center"}),e.jsxs("div",{className:"flex gap-[5px] items-center",children:[e.jsx(S,{disabled:!0,count:1,value:t.ratingIn?1:0,style:{fontSize:"16px"}}),e.jsx("p",{className:"text-[12px] text-slate-500",children:t.averageRating}),e.jsxs("p",{className:"text-[12px] text-slate-500",children:["(",t.ratingCnt.toLocaleString(),")"]})]}),e.jsxs("div",{className:"flex gap-[5px] items-center",children:[e.jsx("div",{children:t.wishIn?e.jsx(O,{className:"text-secondary3 text-[16px]"}):e.jsx(v,{className:"text-slate-400 text-[16px]"})}),e.jsx("p",{className:"text-[12px] text-slate-500",children:t.wishCnt.toLocaleString()})]})]})]},t.strfId)):e.jsxs("li",{className:"flex gap-[20px] items-center cursor-pointer",children:[e.jsx("div",{className:"w-[130px] h-[130px] bg-slate-200 rounded-[8px]",children:e.jsx("img",{src:"/images/logo_icon_4.png",alt:"thumbnail",className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"flex flex-col gap-[5px]",children:[e.jsx("div",{className:"flex gap-[5px] items-center ",children:e.jsx("h3",{className:"text-[20px] font-semibold text-slate-700",children:"검색 결과가 없습니다."})}),e.jsx("div",{className:"flex gap-[5px] items-center"}),e.jsxs("div",{className:"flex gap-[5px] items-center",children:[e.jsx(S,{disabled:!0,count:1,value:0}),e.jsx("p",{className:"text-[12px] text-slate-500"}),e.jsx("p",{className:"text-[12px] text-slate-500"})]}),e.jsxs("div",{className:"flex gap-[5px] items-center",children:[e.jsx("div",{children:e.jsx(v,{className:"text-slate-400"})}),e.jsx("p",{className:"text-[12px] text-slate-500"})]})]})]})})]}):e.jsx(B,{})})};export{ce as default};
