// @ts-nocheck 
import React, { useState, useEffect, useRef } from 'react'
import Style from "styles/Home.module.css"


// import {
import { FileOutlined, LogoutOutlined, PlusOutlined } from '@ant-design/icons'
import link from 'next/link'
import Link from 'next/dist/client/link'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import { useRouter } from 'next/router'
import { Button, Label, Select } from '@roketid/windmill-react-ui'
function DashboardClient({repos}) {
  // console.log(repos)
    const resultsPerPage = 10
  // const totalResults = response.length

  // pagination change control
  function onPageChange(p: number) {
    setPage(p)
  }

  
 
  const [array,setArray]=useState([])
const [arrayreligion,setArrayReligion]=useState([])
const [searchData,setSearchdata]= useState([])
const [data,setData] = useState([]);
const [religion,setReligon]=useState("الكل")
const [nationality,setNationality]=useState("الكل")
const [age,setAge]=useState(0);
  const [previousNationality,setPreviousNationality]=useState("");
const [previousreligion,setPreviousreligion]=useState("");
const [user,setUser]=useState(null)
const router=useRouter()
useEffect(()=>{
try {
 const token =  Cookies.get("token")
 const decoder = jwtDecode(token)
 setUser(decoder)
} catch (error) {
  console.log(error)
}  
  setData(repos)
  function Deepsearch(){
  if (religion == "الكل" && nationality != "الكل"){

const searchdata = repos.filter(e=>e.fields["Nationality copy"] == nationality );


// const sec = searchdata.filter(e=>e.fields["Religion - الديانة"] == religion); 
  setData(searchdata)




  }

if (religion != "الكل" && nationality == "الكل"){
// const searchdata = repos.filter(e=>e.fields["Nationaity copy"] == nationality );





const sec = repos.filter(e=>e.fields["Religion - الديانة"] == religion); 
  setData(sec)



}

if (religion == "الكل" && nationality == "الكل"){
//
  setData(repos)



}
if (religion != "الكل" && nationality != "الكل"){

const searchdata = repos.filter(e=>e.fields["Nationality copy"] == nationality );


const sec = searchdata.filter(e=>e.fields["Religion - الديانة"] == religion); 
  setData(sec)

}


}
// )( )

religion.length > 5 ? Deepsearch(): "";
nationality.length > 5 ?Deepsearch():"";

console.log(religion,nationality)
  const arr=[];
  repos.length>0?repos.map(e=>{if(!arr.includes(e.fields["Nationality copy"])) arr.push(e.fields["Nationality copy"])}):console.log("json.length")
setArray(arr)
const secarray=[]
  repos.length>0?repos.map(e=>{if(!secarray.includes(e.fields["Religion - الديانة"])) secarray.push(e.fields["Religion - الديانة"])}):console.log("json.length")
setArrayReligion(secarray)
  // console.log(nationality != previousNationality)


// if(nationality != previousNationality){  
//   console.log("sss")
//   // setData(repos)
//  setData([...repos.filter(e=>e.fields["Nationaity copy"] == nationality)]) ;
// }

// if(religion != previousreligion)
// { 
//   setData([...data.filter(e=>e.fields["Religion - الديانة"] == religion)]);
// }

},[religion,nationality])
// LogoutOutlined


return (
<>
  {user?

<nav  className="flex items-center justify-between px-6 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg">
  <a className="text-gray-700 dark:text-gray-400" href="#">
    {/* <Logo className="w-6 h-6 text-purple-600" /> */}
  </a>
  <ul className="flex space-x-4">
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
  </ul>
</nav>
 :<nav  className="flex items-center justify-between px-6 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg">
  <a className="text-gray-700 dark:text-gray-400" href="#">
    {/* <Logo className="w-6 h-6 text-purple-600" /> */}
  </a>
  <ul className="flex space-x-4">
    
    <li>
      <Button style={{backgroundColor:"dodgerblue"}} onClick={()=>router.replace("/client/login")}>Login</Button>
    </li>
  </ul>
</nav> }
  
  
  
{/* <Layout> */}
<div>
  
<div style={{width:"250px"}}>
<Label >

  
          <span>Nationality</span>
            <Select className="mt-1" onChange={e=>{
              setPreviousNationality(nationality)
              setNationality(e.target.value)}}>

<option placeholder='الكل'>الكل</option>

{array.map((e,i)=>
    <option key={i} >{e} </option>


)}
  </Select>

        </Label>

<Label >
          <span>Religion</span>
            <Select className="mt-1" onChange={e=>{
              setPreviousreligion(religion)
              setReligon(e.target.value)}}>

<option placeholder='الكل'>الكل</option>
{arrayreligion.map((e,i)=>
    <option key={i} >{e} </option>


)}
  </Select>

  


  
        </Label>
  {/* <input type="range" min={0} max="100" value="40" className="range range-warning" />  */}

</div>


  {data.length>0?<div className={Style.divbox}>{data?.map((e,i)=><div  key={i} className="card card-compact card-side w-100 bg-base-100 shadow-xl" onClick={()=>console.log(e)}>
  <div className="pic"> 
    <div  style={{width:"80px",height:"70px"}}>  <img     src={e?.fields.Picture[0].url}  />
</div>
</div>
  <div className="card-body" >
    <h2 className="card-title">{e.fields["Name - الاسم"]}</h2>
    <div className="textcard">
      {/* e?.fields["age - العمر"] }
      {/* <p  >{e?.fields['age - العمر']?e.fields['age - العمر']:""}</p> */}
      <p  >{e?.fields["marital status - الحالة الاجتماعية"]}</p>
      <p  >{e?.fields["External office - المكتب الخارجي (from External office - المكتب الخارجي)"][0]}</p>
      <p  >{e?.fields["Religion - الديانة"]}</p>

      
      
      {/* <p  >If a dog chews shoes whose shoes does he choose?</p> */}
      
      </div>
    <div className="card-actions justify-end  pointer">
<div style={{display:"inline-flex"}}>
<div style={{display:"inline-flex",cursor:"pointer",}}> 
  <Link href={"../client/book/"+e.fields["م"]} >

 <span style={{backgroundColor:"dodgerblue",cursor:"pointer",borderRadius:"6px",padding:"4px",color:"whitesmoke"}}>حجز العاملة</span>
</Link>
 
  <PlusOutlined  />


</div>
<div style={{display:"inline-flex",cursor:"pointer"}}> 
  <Link href={"../client/cvdetails/"+e.fields["م"]} >
 <span style={{backgroundColor:"darkcyan",borderRadius:"6px",padding:"4px",color:"whitesmoke"}}>السيرة الذاتية</span>

</Link>
  <FileOutlined />
</div>


</div>
    
</div>
    
  </div>    
</div>
  )}
  </div>:""}
  </div>
  </>
  )
}
export async function getServerSideProps(){
try {
//  async function names( )  {
      const repo = await fetch(`https://rawaes-dashboard.vercel.app/api/hello`)
      const repos =  await repo.json()
  
// console.log(repos)

return { props: { repos } }
  
} catch (error) {
console.log(error)  
}
    }
// 
  // Fetch data from external API
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // Pass data to the page via props
  // const repo: Repo = await res.json()


export default DashboardClient
