
// @ts-nocheck 
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import Style from "styles/Home.module.css"

// import {
import { FileOutlined, LogoutOutlined, PlusOutlined } from '@ant-design/icons'
import link from 'next/link'
import Link from 'next/dist/client/link'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import { useRouter } from 'next/router'
import { Button, Label, Pagination, Select } from '@roketid/windmill-react-ui'
import { GridLoader } from 'react-spinners'
import { useMediaQuery } from '@mui/material'



function DashboardClient() {
  // console.log(repos)
    const resultsPerPage = 10
  // const totalResults = response.length

  // pagination change control
  function onPageChange(p: number) {
    setPage(p)
  }


const post=async()=>{
// console.log("religon",religion)
const fetcher = await fetch('../api/filterdataforclient',{method:"post",headers: {'Accept':'application/json',
        "Content-Type": "application/json",
      },body:JSON.stringify({religion:religion,time,ironing,cleaning,cooking,babysitting,sewing,nationality,maritalstatus,education,experience,oldCare,arabic,experiencetype,english,laundry})})
if(fetcher.status == 300) return console.log("no data")

      const waiter = await fetcher.json()
setData(waiter)



}
  
 
  const [array,setArray]=useState([])
  const [times,setTimes]=useState(Date.now())

  // And(REGEX_MATCH({fldUXlZQMZR89xcot} , experience),REGEX_MATCH({fldtal17RtxfMGKFb} , education),REGEX_MATCH({Ironing - كوي} , ironing),REGEX_MATCH({Experience - الخبرة} , experiecetype),REGEX_MATCH({fldJvA6tYkfWokgkC} , arabic),REGEX_MATCH({fldW0JTWrXNBJgll9} , english),REGEX_MATCH({Old people care - رعاية كبار السن} , old),REGEX_MATCH({Experience - الخبرة} , 'Intermediate | مدربة بخبرة متوسطة'),REGEX_MATCH({Babysitting - العناية بالأطفال} , 'Expert - ممتاز'),REGEX_MATCH({sewing - الخياطة} , 'Expert - ممتاز'),REGEX_MATCH({cleaning - التنظيف} , 'Expert - ممتاز'),REGEX_MATCH({laundry - الغسيل} , 'Expert - ممتاز'),REGEX_MATCH({Cooking - الطبخ} ,'Expert - ممتاز' ),REGEX_MATCH({fldEYaSy8nlV1btk6} ,'Islam - الإسلام' ),REGEX_MATCH({fldVp4gvVPuUJnbyR} ,'Married - متزوجة' ))
const [data,setData] = useState([]);
const [religion,setReligon]=useState("(.*)")
const [nationality,setNationality]=useState("(.*)")
const [maritalstatus,setMaritalStatus]=useState("(.*)")
const [education,setEducation]=useState("(.*)")
const [experience,setExperience]=useState("(.*)")
const [oldCare,setOldCare]=useState("(.*)")
const [arabic,setArabic]=useState("(.*)")
const[experiencetype,setExperienceType]=useState("(.*)")
const [english,setEnglish]=useState("(.*)")
const [laundry,setLaundry]=useState("(.*)")
const [ironing,setIroning]=useState("(.*)")
const [cleaning,setCleaning]=useState("(.*)")
const [cooking,setCooking]=useState("(.*)")
const [babysitting,setBabySetting]=useState("(.*)")
const [sewing,setSewing]=useState("(.*)")
const [age,setAge]=useState(0);
const [time,setTime]=useState()
const media = useMediaQuery('(max-width:820px)',{noSsr:false})


const [offset,setOffset] = useState("")
  const [previousNationality,setPreviousNationality]=useState("");
const [previousreligion,setPreviousreligion]=useState("");
const [user,setUser]=useState({})
const router=useRouter()
const [dataTopages,setDatepages]=useState(0)
useEffect(()=>{
  
try {
 const token =  Cookies.get("token")
 const decoder = jwtDecode(token)
 console.log(decoder.isUser)
 setUser(decoder)
} catch (error) {
  setUser({isUser:false})
} 
(async function getname(){

const fetcher = await fetch('../api/listfifty',{method:"get"})
const waiter = await fetcher.json()
setData(waiter)




}
)()
  
  },[])
// useEffect(()=>{
//   // console.log(dataTopages)
//   // console.log(encodeURIComponent(english))
// (async function get() {
//  const waiter = await  fetch("https://api.airtable.com/v0/app1mph1VMncBBJid/%D8%A7%D9%84%D8%B3%D9%8A%D8%B1%20%D8%A7%D9%84%D8%B0%D8%A7%D8%AA%D9%8A%D8%A9?filterByFormula=%22And(REGEX_MATCH(%7BfldUXlZQMZR89xcot%7D+%2C+"+encodeURIComponent(experience)+")%2CREGEX_MATCH(%7Bfldtal17RtxfMGKFb%7D+%2C+"+encodeURIComponent(education)+")%2CREGEX_MATCH(%7BIroning+-+%D9%83%D9%88%D9%8A%7D+%2C"+encodeURIComponent(ironing)+")%2CREGEX_MATCH(%7BExperience+-+%D8%A7%D9%84%D8%AE%D8%A8%D8%B1%D8%A9%7D+%2C"+encodeURIComponent(experiecetype)+")%2CREGEX_MATCH(%7BfldJvA6tYkfWokgkC%7D+%2C"+encodeURIComponent(arabic)+")%2CREGEX_MATCH(%7BfldW0JTWrXNBJgll9%7D+%2C"+encodeURIComponent(english)+")%2CREGEX_MATCH(%7BOld+people+care+-+%D8%B1%D8%B9%D8%A7%D9%8A%D8%A9+%D9%83%D8%A8%D8%A7%D8%B1+%D8%A7%D9%84%D8%B3%D9%86%7D+%2C+"+encodeURIComponent(oldCare)+")%2CREGEX_MATCH(%7BBabysitting+-+%D8%A7%D9%84%D8%B9%D9%86%D8%A7%D9%8A%D8%A9+%D8%A8%D8%A7%D9%84%D8%A3%D8%B7%D9%81%D8%A7%D9%84%7D+%2C+"+encodeURIComponent(babysitting)+")%2CREGEX_MATCH(%7Bsewing+-+%D8%A7%D9%84%D8%AE%D9%8A%D8%A7%D8%B7%D8%A9%7D+%2C+"+encodeURIComponent(sewing)+")%2CREGEX_MATCH(%7Bcleaning+-+%D8%A7%D9%84%D8%AA%D9%86%D8%B8%D9%8A%D9%81%7D+%2C"+encodeURIComponent(cleaning)+"+)%2CREGEX_MATCH(%7Blaundry+-+%D8%A7%D9%84%D8%BA%D8%B3%D9%8A%D9%84%7D+%2C+"+encodeURIComponent(laundry)+")%2CREGEX_MATCH(%7BCooking+-+%D8%A7%D9%84%D8%B7%D8%A8%D8%AE%7D+%2C"+encodeURIComponent(cooking)+"+)%2CREGEX_MATCH(%7BfldEYaSy8nlV1btk6%7D+%2C"+encodeURIComponent(religion)+")%2CREGEX_MATCH(%7BfldVp4gvVPuUJnbyR%7D+%2C"+encodeURIComponent(maritalstatus)+"))%22&pageSize=100&offset="+offset+"&view=%D8%A7%D9%84%D8%A7%D8%B3%D8%A7%D8%B3%D9%8A",{method:"get",headers: {'Authorization':'Bearer patqpqm8yUGAdhSoj.b42530f3bb52b3073c8a30eb1507a54227cb17fdc0d8ce0368ee61a8acf1c66d'}})
//  const dataextracted = await waiter.json()
//  {dataextracted.offset?setOffset(dataextracted.offset):setOffset("")}
//  setData(dataextracted.records)
  
// })()
// },[])
// LogoutOutlined
// console.log()
// document.addEventListener("change",()=>{

// })
// console.log()
return (
  // {media?}
<div  style={{backgroundColor:"rgba(204, 204, 204, 0.1882352941)"}}>
<nav  style={{position:"sticky",zIndex:+1}} className={"flex items-center justify-between px-6 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg"}>
  <img style={{width:"50px", height:"50px"}} src='https://res.cloudinary.com/duo8svqci/image/upload/v1716302380/dkqowbgajxgcy8auxskm.svg'/>
  <a className="text-gray-700 dark:text-gray-400" href="#">
  </a>
  {user.isUser == true?<ul className="flex space-x-4">
    <li>
      <Link href="/client/status">
      <Button style={{backgroundColor:"dodgerblue"}}>حالة الطلب</Button></Link>
    </li>
    <li>
      <Button style={{backgroundColor:"darkcyan"}} onClick={()=>{

        Cookies.remove("token")
router.reload()
      }}>تسجيل الخروج</Button>
    </li>
  </ul>:<ul className="flex space-x-4">
    
    <li>
      <Button style={{backgroundColor:"dodgerblue"}} onClick={()=>router.push("/client/login")}>Login</Button>
    </li>
  </ul>
}
</nav>
  
 
 <div>
  
  <div style={{display:'grid',gridTemplateColumns:media?"100%":"20% 80%"}}>
 
<div style={{marginTop:"60px",margin:"20px",borderRadius:"10px",gridRowStart:media?"1":null,gridRowEnd:media?"2":null,gridColumnStart:media?null:1,gridColumnEnd:media?null:1,overflow:"scroll"}}>
        
<Label >
          <span>Arabic</span>
            <Select className="mt-1" onChange={e=>{
              
              setArabic(e.target.value);
              
// post();
}}>



{/* <option placeholder='الكل'>الكل</option> */}

<option value="(.*)">الكل</option>
<option value="Expert - ممتاز">ممتاز</option>
<option value="Advanced - جيد جداً">جيد جدا</option>
<option value="Intermediate - جيد">جيد</option>
<option value="Beginner - مبتدأ">مبتدأ</option>


{/* <option value="Christianity - المسيحية">المسيحية</option>
<option value="Non-Muslim - غير مسلم">غير مسلم</option> */}

  </Select>

  


  
        </Label>

<Label >
          <span>English</span>
            <Select className="mt-1" onChange={e=>{
              
              setEnglish(e.target.value);
              
// post();
}}>



{/* <option placeholder='الكل'>الكل</option> */}

<option value="(.*)">الكل</option>
<option value="Expert - ممتاز">ممتاز</option>
<option value="Advanced - جيد جداً">جيد جدا</option>
<option value="Intermediate - جيد">جيد</option>
<option value="Beginner - مبتدأ">مبتدأ</option>


{/* <option value="Christianity - المسيحية">المسيحية</option>
<option value="Non-Muslim - غير مسلم">غير مسلم</option> */}

  </Select>

  


  
        </Label>

<Label >
          <span>Religion</span>
            <Select className="mt-1" onChange={e=>{
              
              setReligon(e.target.value);
              
// post();
}}>



<option placeholder='(.*)' value="(.*)">الكل</option>

<option value="Islam - الإسلام">الاسلام</option>
<option value="Christianity - المسيحية">المسيحية</option>
<option value="Non-Muslim - غير مسلم">غير مسلم</option>

  </Select>

  


  
        </Label>

<Label >
          <span>Old Care</span>
            <Select className="mt-1" onChange={e=>{
              
              setOldCare(e.target.value);
              
// post();
}}>



<option placeholder='(.*)'>الكل</option>

<option value="Yes - نعم">نعم</option>
<option value="No - لا">لا</option>

  </Select>

  


  
        </Label>
<div style={{display:"flex",justifyContent:"center",marginTop:"5px"}}><Button style={{alignItems:"center",backgroundColor:"#2C4C46"}} onClick={()=>post()}>Filter</Button></div>
</div>

 <div>
  
  {data.length>0?<div  className={Style.divbox} style={{marginTop:"60px", gridTemplateColumns: media?"repeat(1, auto)":"repeat(2, auto)"}}>{data?.map((e,i)=>
  <div style={{width:"90%",backgroundColor:"white"}}  key={i} className="card card-compact card-side w-100 bg-base-100 shadow-xl"  onClick={()=>console.log(e)}>
  <div className="pic"> 
    <div  style={{width:"80px",height:"70px"}}> 
      {e?.fields.Picture?<img     src={e?.fields.Picture[0].url}  />:""}
</div>
</div>
  <div className="card-body" >
    <h2 className="card-title">{e.fields["Name - الاسم"]}</h2>
    <div className="textcard">
      {/* e?.fields[ksd["age - العمر"] }
      {/* <p  >{e?.fields['age - العمر']?e.fields['age - العمر']:""}</p> */}
      <p  >{e?.fields["marital status - الحالة الاجتماعية"]}</p>
      <p  >{e?.fields["External office - المكتب الخارجي (from External office - المكتب الخارجي)"][0]}</p>
      <p  >{e?.fields["Religion - الديانة"]}</p>

      
      
      {/* <p  >If a dog chews shoes whose shoes does he choose?</p> */}
      
      </div>
    <div className="card-actions justify-end  pointer">
<div style={{display:"inline-flex"}}>
<div  onClick={()=>router.push("../client/book/"+e.id)} style={{display:"inline-flex",cursor:"pointer",}}> 
  {/* <Link href={"../client/book/"+e.id} > */}

 <span style={{backgroundColor:"dodgerblue",cursor:"pointer",borderRadius:"6px",padding:"4px",color:"whitesmoke"}}>حجز العاملة</span>
{/* </Link> */}
 
  <PlusOutlined  />


</div>
<div style={{display:"inline-flex",cursor:"pointer"}}> 
  {/* <Link href={"../client/cvdetails/"+e.id} > */}
 <span style={{backgroundColor:"darkcyan",borderRadius:"6px",padding:"4px",color:"whitesmoke"}} onClick={()=>router.push("../client/cvdetails/"+e.id)}>السيرة الذاتية</span>

{/* </Link> */}
  <FileOutlined />

</div>

 
</div>
   
</div>
    
  </div>    
</div>


)}
  </div>:<div style={{display:"flex",justifyContent:"center"}}><GridLoader style={{width:"800px",height:"600px"}}/></div>}
  
  </div></div>
 </div>
  
  
<div>
 



  </div>
  </div>
  )
}
// 
  // Fetch data from external API
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // Pass data to the page via props
  // const repo: Repo = await res.json()


export default DashboardClient
