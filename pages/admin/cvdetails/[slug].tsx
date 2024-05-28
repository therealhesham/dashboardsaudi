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
<div style={{display: "grid" ,gridTemplateColumns: "repeat(3, auto)",gridRowGap: "1px",gridColumnGap: "9px",alignItems:"center",width:"100%"}}>

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


</div>


    
 <footer>
<img  src='https://res.cloudinary.com/duo8svqci/image/upload/v1716924374/40a3153b-1b92-43c1-a1d9-d0476d37a0df.png'/>
  
  
  </footer>   
       </Layout>
)
}