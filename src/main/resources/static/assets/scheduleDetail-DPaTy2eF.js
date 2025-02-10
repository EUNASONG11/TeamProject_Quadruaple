import{a as I,r as a,j as e,B as D,g as B,u as P,c as A,L as E}from"./index-YXlYzo5D.js";import{T as O,R as M,B as z}from"./TitleHeader-CO4TmWfs.js";import{G}from"./index-BoBRUxhP.js";import{S as F}from"./ScheduleDay-Bz2HLZKe.js";import{d as H}from"./index-CniA-3ne.js";import{S as V,a as _}from"./swiper-react-BNym-ytM.js";import{a as q}from"./axios-upsvKRUO.js";import{L as J,T as K}from"./pic-Bp3CpqNF.js";import{j as $}from"./jwt-B7E1_7hB.js";import"./match-C9ZeGoa4.js";import"./MarkerClusterer-gnOPwhky.js";import"./tripAtom-GNgWvRM8.js";import"./index-21tJCDdo.js";import"./BaseInput-HRGnWluz.js";import"./index-B4chUOCm.js";import"./index-CkEQ-2Ql.js";import"./index-CSA0D24L.js";import"./index-CETnFBLH.js";const Q=({openSelectTripModal:N,setOpenSelectTripModal:n,tripLocationList:d})=>{const m=I(),h=()=>{m("/schedule/days",{state:{selectedLocationId:d,tripId:u.tripId}})},[o,l]=a.useState([]),[f,r]=a.useState(null),[u,x]=a.useState(null);a.useEffect(()=>{console.log("tripListData",o)},[o]);const p=async()=>{try{const t=await $.get("/api/trip-list");console.log(t.data);const v=t.data.data.beforeTripList;l(v)}catch(t){console.log("여행 목록 불러오기:",t)}},g=(t,c)=>{r(c),console.log("item",t),x(t)},j=()=>{n(!1)},w=t=>{t.stopPropagation()};return a.useEffect(()=>{p()},[]),e.jsx("div",{className:`fixed top-0 left-[50%] translate-x-[-50%] z-10\r
\r
            max-w-3xl w-full mx-auto h-screen\r
            flex items-end justify-center\r
            bg-[rgba(0,0,0,0.5)]\r
            `,onClick:()=>{j()},children:e.jsxs("div",{className:`bg-white w-full \r
                rounded-t-2xl px-[60px] py-[55px]\r
                flex flex-col gap-[20px]\r
                `,onClick:w,children:[e.jsx("h2",{className:"text-[28px] text-slate-700 font-bold",children:"이 일정을 담을 여행을 선택해주세요."}),e.jsxs("div",{className:"flex flex-col gap-[5px]",children:[e.jsx("h3",{className:"text-[18px] text-slate-700 font-semibold",children:"나의 다가오는 여행"}),e.jsx("ul",{className:`flex flex-col px-[10px] py-[20px] gap-[30px]\r
          max-h-[55vh] overflow-y-auto`,children:o==null?void 0:o.map((t,c)=>e.jsxs("li",{className:`flex items-center gap-[20px] px-[20px] py-[10px] rounded-[16px] ${f===c?"bg-slate-200":""}`,onClick:()=>g(t,c),children:[e.jsx("div",{className:"w-[50px] h-[50px] bg-slate-100 rounded-full overflow-hidden",children:e.jsx("img",{src:`${J}${t.locationPic}`,alt:"",className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"flex flex-col gap-[5px]",children:[e.jsx("h4",{className:"text-[18px] text-slate-700 font-semibold",children:t.title}),e.jsxs("p",{className:"text-[16px] text-slate-500",children:[e.jsx("span",{children:t.startAt}),e.jsx("span",{children:"-"}),e.jsx("span",{children:t.endAt})]})]})]},c))})]}),e.jsx(D,{type:"primary",htmlType:"button",className:"h-[50px] px-[15px] py-[20px] text-[24px] text-white font-semibold",onClick:h,children:"선택 완료"})]})})},me=()=>{var T,S,b,y,L,R,k,C;const N=B("accessToken"),[n]=P(),d=n.get("tripId"),m=n.get("TripReviewId"),h=I(),o=()=>{h(-1)},[l,f]=a.useState({}),[r,u]=a.useState({}),[x,p]=a.useState(!1),[g,j]=a.useState(!1),[w,t]=a.useState(!1),c=async()=>{try{const i=(await q.get(`/api/trip-review/otherTripReview?tripReviewId=${m}`,{headers:{Authorization:`Bearer ${N}`}})).data;f(i.data),i&&t(!0)}catch(s){console.log("다른 사람 여행기 조회",s)}},v=async()=>{try{const s=await $.get(`/api/trip?trip_id=${d}`);console.log("여행확인하기",s.data);const i=s.data.data;u(i),i&&j(!0)}catch(s){console.log(s)}};return a.useEffect(()=>{c(),v()},[]),e.jsx("div",{children:g&&w?e.jsxs(e.Fragment,{children:[e.jsx(O,{icon:"back",onClick:o,rightContent:e.jsx(M,{})}),e.jsxs("div",{className:"flex flex-col px-[32px] py-[30px] gap-[30px]",children:[e.jsx(V,{slidesPerView:1,spaceBetween:0,loop:!0,className:"mySwiper w-full h-[406px] px-[32px] overflow-hidden",children:l.length>0?(S=(T=l[0])==null?void 0:T.tripReviewPics)==null?void 0:S.map((s,i)=>e.jsx(_,{className:"max-w-3xl h-[406px] bg-slate-200",children:e.jsx("img",{src:`${K}${l[0].tripReviewId}/${s}`,alt:"thum",className:"w-full h-full object-cover"})},i)):null}),e.jsx("div",{className:"flex flex-col gap-[10px]",children:e.jsxs("div",{children:[e.jsx("h2",{className:"font-bold text-[36px] text-slate-700",children:(b=l[0])==null?void 0:b.title}),e.jsxs("ul",{className:"flex gap-[10px] items-center",children:[e.jsxs("li",{className:"flex gap-[5px] items-center",children:[e.jsx(z,{className:"text-slate-300 text-[18px]"}),e.jsx("p",{className:"text-slate-500 font-bold text-[14px]",children:(y=l[0])==null?void 0:y.recentCount})]}),e.jsxs("li",{className:"flex gap-[5px] items-center",children:[e.jsx(G,{className:"text-slate-300 text-[18px]"}),e.jsx("p",{className:"text-slate-500 font-bold text-[14px]",children:(L=l[0])==null?void 0:L.likeCount})]}),e.jsxs("li",{className:"flex gap-[5px] items-center",children:[e.jsx(A,{className:"text-slate-300 text-[18px]"}),e.jsxs("p",{className:"text-slate-500 font-bold text-[14px]",children:[" ",(R=l[0])==null?void 0:R.scrapCount]})]})]})]})}),e.jsx("div",{children:e.jsx("p",{children:(k=l[0])==null?void 0:k.content})})]}),e.jsx("div",{children:e.jsx("div",{className:"flex flex-col gap-[50px]",children:(C=r==null?void 0:r.days)==null?void 0:C.map((s,i)=>e.jsx(F,{data:s,newTrip:!1,readOnly:!0},i))})}),e.jsx("div",{className:"px-[32px] mb-[30px]",children:e.jsxs(D,{variant:"filled",className:"flex gap-[10px] py-[10px] h-auto w-full",onClick:()=>p(!0),classNames:"bg-slate-100",disabled:!0,children:[e.jsx(H,{className:"w-[30px] h-[30px] text-slate-400"}),e.jsx("span",{className:"font-semibold text-[24px] text-slate-400",children:"업데이트 예정인 메뉴입니다"})]})}),x&&e.jsx(Q,{openSelectTripModal:x,setOpenSelectTripModal:p,tripLocationList:r==null?void 0:r.tripLocationList})]}):e.jsx(E,{})})};export{me as default};
