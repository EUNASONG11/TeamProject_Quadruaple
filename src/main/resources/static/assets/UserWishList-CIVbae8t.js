import{g as f,a as h,r as a,j as e,B as g}from"./index-YXlYzo5D.js";import{T as j}from"./TitleHeader-CO4TmWfs.js";import{a as u}from"./axios-upsvKRUO.js";import{a as N}from"./pic-Bp3CpqNF.js";import{a as v}from"./index-CniA-3ne.js";import{c as w}from"./match-C9ZeGoa4.js";import{R as b}from"./index-CSA0D24L.js";import"./index-CETnFBLH.js";import"./index-B4chUOCm.js";const D=()=>{const x=f("accessToken"),c=h(),i=()=>{c(-1)},n=s=>{c(`/contents/index?strfId=${s.strfId}`)},[o,p]=a.useState(1),[t,d]=a.useState([]);a.useEffect(()=>{console.log("wishListData",t)},[t]);const r=async()=>{try{const l=(await u.get(`/api/wish-list?start_idx=${o}`,{headers:{Authorization:`Bearer ${x}`}})).data;d([...t,...l.data]),p(m=>m+10)}catch(s){console.log("찜목록 불러오기",s)}};return a.useEffect(()=>{r()},[]),e.jsxs("div",{children:[e.jsx(j,{icon:"back",onClick:i,title:"찜 목록"}),e.jsx("div",{className:"px-[32px] flex flex-col gap-[50px] mt-[60px] ",children:e.jsx("ul",{className:"w-full flex flex-col gap-[20px] mb-[30px]",children:t.map((s,l)=>e.jsxs("li",{className:"flex gap-[20px] items-center cursor-pointer",onClick:()=>n(s),children:[e.jsx("div",{className:"w-[130px] h-[130px] bg-slate-200 rounded-[8px] overflow-hidden",children:e.jsx("img",{src:`${N}${s.strfId}/${s.strfPic}`,alt:s.title,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"flex flex-col gap-[5px]",children:[e.jsx("div",{className:"flex gap-[5px] items-center ",children:e.jsx("h3",{className:"text-[20px] font-semibold text-slate-700",children:s.strfTitle})}),e.jsxs("div",{className:"flex gap-[5px] items-center",children:[e.jsx("p",{className:"text-[14px] text-slate-500",children:w(s.category)}),e.jsx("p",{className:"text-[14px] text-slate-500",children:"|"}),e.jsx("p",{className:"text-[14px] text-slate-500",children:s.locationName})]}),e.jsxs("div",{className:"flex gap-[5px] items-center",children:[e.jsx(b,{disabled:!0,count:1,value:s.ratingIn?1:0}),e.jsx("p",{className:"text-[12px] text-slate-500",children:s.averageRating?s.averageRating:"0"}),e.jsxs("p",{className:"text-[12px] text-slate-500",children:["(",s.ratingCnt.toLocaleString(),")"]})]}),e.jsxs("div",{className:"flex gap-[5px] items-center",children:[e.jsx("div",{children:e.jsx(v,{className:"text-secondary3"})}),e.jsx("p",{className:"text-[12px] text-slate-500",children:s.wishCnt.toLocaleString()})]})]})]},l))})}),e.jsx("div",{className:"px-[32px] pb-[40px] flex items-center justify-center",children:e.jsx(g,{variant:"outlined",onClick:()=>{r()},className:"h-[46px] px-[20px] py-[10px] rounded-3xl text-slate-600 text-[16px] font-semibold",children:"더보기"})})]})};export{D as default};
