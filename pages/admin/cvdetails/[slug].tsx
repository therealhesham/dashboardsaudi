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



return (   <Layout>
   <header>

    
   </header>


    <Footer/>
    
    
    
       </Layout>
)
}