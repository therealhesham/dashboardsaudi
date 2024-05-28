//@ts-nocheck
//@ts-ignore

import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router"

import PageTitle from 'example/components/Typography/PageTitle'
import SectionTitle from 'example/components/Typography/SectionTitle'
import CTA from 'example/components/CTA'
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Badge,
  Avatar,
  Button,
  Pagination,
  Input,
  Label,
} from '@roketid/windmill-react-ui'
import { EditIcon, TrashIcon } from 'icons'

import response, { ITableData } from 'utils/demo/tableData'
import Layout from 'example/containers/Layout'
import { ClipLoader, ClockLoader } from 'react-spinners'
import Header from 'example/components/Header'


const response2 = response.concat([]);
export default function Page() {
  const router = useRouter()
  console.log(router.query.slug)
  const [data,setData]=useState([]);
  useEffect(() => {
  (async function name() {
     await fetch(`../../api/admin/${router.query.slug}`).then(response => response.json())
     .then(json  => {
   setData(json)
  } 
  // names();
  
)
  })()
    


}, [new Date().getMilliseconds()])


// Label
return (   <Layout>
   <header>
<img  src='https://res.cloudinary.com/duo8svqci/image/upload/v1716924206/b5e8988f-ae8d-4f15-9eff-43e174b8d7a0.png'/>

   </header>
<div style={{direction:"rtl", display: "grid" ,gridTemplateColumns: "repeat(3, auto)",gridRowGap: "1px",gridColumnGap: "9px",alignItems:"center",width:"100%"}}>

        <Label className="mt-4">
          <span>الاسم</span>
          <Input className="mt-1" value="الاسم" />
        </Label>

<Label className="mt-4" style={{gridColumnStart:2,gridColumnEnd:4}}>
          <span>الجنسية</span>
          <Input className="mt-1" value="الجنسية" />
        </Label>
<Label className="mt-4">
          <span>تاريخ الميلاد</span>
          <Input className="mt-1" value="تاريخ الميلاد" />
        </Label>
<Label className="mt-4">
          <span>العمر</span>
          <Input className="mt-1" value="العمر" />
        </Label>
<Label className="mt-4">
          <span>الديانة</span>
          <Input className="mt-1" value="الديانة" />
        </Label>
<Label className="mt-4">
          <span>جواز السفر</span>
          <Input className="mt-1" value="جواز السفر" />
        </Label>
<Label className="mt-4">
          <span>تاريخ الاصدار</span>
          <Input className="mt-1" value="تاريخ الاصدار" />
        </Label>

<Label className="mt-4">
          <span>تاريخ الانتهاء</span>
          <Input className="mt-1" value="تاريخ الانتهاء" />
        </Label>

<Label className="mt-4">
          <span>الحالة الاجتماعية</span>
          <Input className="mt-1" value="الحالة الاجتماعية" />
        </Label>


<Label className="mt-4">
          <span>عدد الاطفال</span>
          <Input className="mt-1" value="عدد الاطفال" />
        </Label>



<Label className="mt-4">
          <span>الراتب</span>
          <Input className="mt-1" value="الراتب" />
        </Label>


<Label className="mt-4">
          <span>الدرجة العلمية</span>
          <Input className="mt-1" value="الدرجة العلمية" />
        </Label>


<Label className="mt-4">
          <span>العربية   </span>
          <Input className="mt-1" value="الدرجة العلمية" />
        </Label>



<Label className="mt-4">
          <span>   الانجليزي</span>
          <Input className="mt-1" value="الانجليزي" />
        </Label>


{/* <div style={{}}> */}
<div style={{display :'grid',gridTemplateColumns: "repeat(2, auto)",gridColumnStart:1,gridColumnEnd:4}}>

<Label className="mt-4" style={{gridColumnStart:1,gridColumnEnd:3}}>
          <span>   سنوات وأماكن الخبرات</span>
          <Input className="mt-1" value="الانجليزي" />
        </Label>


<Label className="mt-4" >
          <span>   سنوات وأماكن الخبرات</span>
          <Input className="mt-1" value="الانجليزي" />
        </Label>


<Label className="mt-4" >
          <span>   الغسيل</span>
          <Input className="mt-1" value="" />
        </Label>

<Label className="mt-4" >
          <span>   الكوي</span>
          <Input className="mt-1" value="الانجليزي" />
        </Label>

<Label className="mt-4" >
          <span>التنظيف</span>
          <Input className="mt-1" value="الانجليزي" />
        </Label>

<Label className="mt-4" >
          <span>العناية بالأطفال</span>
          <Input className="mt-1" value="الانجليزي" />
        </Label>

<Label className="mt-4" >
          <span>رعاية كبار السن</span>
          <Input className="mt-1" value="الانجليزي" />
        </Label>


<Label className="mt-4" >
          <span>الطبخ</span>
          <Input className="mt-1" value="الانجليزي" />
        </Label>



</div>

{/* </div> */}



</div>


    
 <footer>
<img  src='https://res.cloudinary.com/duo8svqci/image/upload/v1716924374/40a3153b-1b92-43c1-a1d9-d0476d37a0df.png'/>
  
  
  </footer>   
       </Layout>
)
}