//@ts-nocheck
//@ts-ignore

import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router"
// usePDF
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
import { usePDF } from 'react-to-pdf'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import Link from 'next/dist/client/link'


export default function Page() {
  const router = useRouter()
  // console.log(router.query.slug)
  const [data,setData]=useState([]);
  
  useEffect(() => {
      try {
        const token = Cookies.get("token")
  const decoder = jwtDecode(token);
(async function name() {
     await fetch(`../../api/admin/${router.query.slug}`).then(response => response.json())
     .then(json  => {
// console.log(json)
      setData(json)
  } 
  // names();
  
)
  })()
    

  } catch (error) {
    // router.replace("/login")
  }
  

}, [])
//@ts-ignore
// ClockLoader

return (   <Layout>
      {/* <PageTitle>Tables</PageTitle> */}

      {/* <CTA /> */}

      <SectionTitle>info inserted by company {router.query.slug}</SectionTitle>
      {data.length>0?
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>العامل</TableCell>
              <TableCell>السير الذاتية</TableCell>
              <TableCell>الجنسية</TableCell>
              <TableCell>الحالة الاجتماعية</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {data?.map((user) => (
              <TableRow >
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar className="hidden mr-3 md:block" src={user?.fields["العلم"][0].url} alt="User avatar" />
                    <div>
                  <span className="text-sm"> {user.fields["الدولة copy"]}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                      {user?.fields["السير الذاتية copy"]?<p className="font-semibold">{user?.fields["السير الذاتية copy"].split(",").map(e=>
                        <Link href={"/client/cvdetails/"+e}>
                        <span>{e}</span>
                        </Link>
                        )}</p>:""}
                </TableCell>
               
                {/* <TableCell>
                  <span className="text-sm"> {user.fields.maritalstatus}</span>
                </TableCell>
                */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          {/* <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable1}
            label="Table navigation"
          /> */}
        </TableFooter>
      </TableContainer>
:<ClipLoader color="#003749" />}
    </Layout>
)
}