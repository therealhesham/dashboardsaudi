// @ts-nocheck 
import React, { useState, useEffect } from 'react'
import { Doughnut, Line } from 'react-chartjs-2'
import Style from "styles/Home.module.css"
import CTA from 'office/components/CTA'
import InfoCard from 'office/components/Cards/InfoCard'
import ChartCard from 'office/components/Chart/ChartCard'
import ChartLegend from 'office/components/Chart/ChartLegend'
import PageTitle from 'office/components/Typography/PageTitle'
import RoundIcon from 'office/components/RoundIcon'
import Layout from 'office/containers/Layout'
import country from "./countries.json"
// import "../api/cv/[pid]"
// import "./cvdetails"
// import "../client"
import response, { ITableData } from 'utils/demo/tableData'
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from 'icons'

import {
  Input,
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
  Card,
  CardBody,
  Label,
  Select,
} from '@roketid/windmill-react-ui'

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from 'utils/demo/chartsData'
// import ""
import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { apiBaseUrl } from 'next-auth/client/_utils'
import image from 'next/image'
import { includeKeys } from 'filter-obj'
import { FileOutlined, PlusOutlined } from '@ant-design/icons'
import link from 'next/link'
import Link from 'next/dist/client/link'

function Dashboard({repos}) {
  Chart.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

  // const [page, setPage] = useState(1)
  // const [data, setData] = useState([])

  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChange(p: number) {
    setPage(p)
  }

  
 
// patXrez1aIa2i3whF.410e92b1b07ab85712cd0722ad462964185aecd969949bde6e36295f7a2e8fc2
  const [array,setArray]=useState([])
const [arrayreligion,setArrayReligion]=useState([])
const [searchData,setSearchdata]= useState([])
const [data,setData] = useState(repos);
const [religion,setReligon]=useState("الكل")
const [nationality,setNationality]=useState("الكل")
const [age,setAge]=useState(0);
  const [previousNationality,setPreviousNationality]=useState("");

const [previousreligion,setPreviousreligion]=useState("");

useEffect(()=>{
  setData(repos)

  function Deepsearch(){
  if (religion == "الكل" && nationality != "الكل"){

const searchdata = repos.filter(e=>e.fields["Nationality - الجنسية"] == nationality );


// const sec = searchdata.filter(e=>e.fields["Religion - الديانة"] == religion); 
  setData(searchdata)




  }

if (religion != "الكل" && nationality == "الكل"){
// const searchdata = repos.filter(e=>e.fields["Nationality - الجنسية"] == nationality );


const sec = repos.filter(e=>e.fields["Religion - الديانة"] == religion); 
  setData(sec)



}

if (religion == "الكل" && nationality == "الكل"){
//
  setData(repos)



}
if (religion != "الكل" && nationality != "الكل"){

const searchdata = repos.filter(e=>e.fields["Nationality - الجنسية"] == nationality );


const sec = searchdata.filter(e=>e.fields["Religion - الديانة"] == religion); 
  setData(sec)

}


}
// )( )

religion.length > 5 ? Deepsearch(): "";
nationality.length > 5 ?Deepsearch():"";

console.log(religion,nationality)
  const arr=[];
  repos.length>0?repos.map(e=>{if(!arr.includes(e.fields["Nationality - الجنسية"])) arr.push(e.fields["Nationality - الجنسية"])}):console.log("json.length")
setArray(arr)
const secarray=[]
  repos.length>0?repos.map(e=>{if(!secarray.includes(e.fields["Religion - الديانة"])) secarray.push(e.fields["Religion - الديانة"])}):console.log("json.length")
setArrayReligion(secarray)
  // console.log(nationality != previousNationality)


// if(nationality != previousNationality){  
//   console.log("sss")
//   // setData(repos)
//  setData([...repos.filter(e=>e.fields["Nationality - الجنسية"] == nationality)]) ;
// }

// if(religion != previousreligion)
// { 
//   setData([...data.filter(e=>e.fields["Religion - الديانة"] == religion)]);
// }

},[religion,nationality])

return (
<div>
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

</div>
  <div className={Style.divbox}>{
data.map(e=><div key={e.fields.id} className="card card-compact card-side w-100 bg-base-100 shadow-xl" onClick={()=>console.log(e)}>
  <div className="pic"> 
    <div  style={{width:"80px",height:"70px"}}>  <img     src={e.fields.Picture[0].url}  />
</div>
</div>
  <div className="card-body" >
    <h2 className="card-title">{e.fields["Name - الاسم"]}</h2>
    <div className="textcard">
      <p  >{e.fields["age - العمر"]}</p>
      <p  >{e.fields["marital status - الحالة الاجتماعية"]}</p>
      <p  >{e.fields["External office - المكتب الخارجي"]}</p>
      <p  >{e.fields["Religion - الديانة"]}</p>

      
      
      {/* <p  >If a dog chews shoes whose shoes does he choose?</p> */}
      
      </div>
    <div className="card-actions justify-end  pointer">
<div style={{display:"inline-flex"}}>
<div style={{display:"inline-flex",cursor:"pointer",}}> 
  <Link href={"../client/book/"+e.fields.Name} >

 <span style={{backgroundColor:"dodgerblue",cursor:"pointer",borderRadius:"6px",padding:"4px",color:"whitesmoke"}}>حجز العاملة</span>
</Link>
 
  <PlusOutlined  />


</div>
<div style={{display:"inline-flex",cursor:"pointer"}}> 
  <Link href={"../client/cvdetails/"+e.fields.Name} >
 <span style={{backgroundColor:"darkcyan",borderRadius:"6px",padding:"4px",color:"whitesmoke"}}>السيرة الذاتية</span>

</Link>
  <FileOutlined />
</div>


</div>
    
</div>
    
  </div>    
</div>
  )}
  </div>
  </div>
  </div>
  )
}
export async function getServerSideProps(){

//  async function names( )  {
      const repo = await fetch(`https://rawaes-dashboard.vercel.app/api/hello`)
      const repos =  await repo.json()
  
// console.log(repos)

return { props: { repos } }
    }
// 
  // Fetch data from external API
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // Pass data to the page via props
  // const repo: Repo = await res.json()


export default Dashboard
