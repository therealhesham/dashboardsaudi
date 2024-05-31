// @ts-nocheck 
import React, { useState, useEffect } from 'react'
import { Doughnut, Line, Pie } from 'react-chartjs-2'
import CTA from 'example/components/CTA'
import InfoCard from 'example/components/Cards/InfoCard'
import ChartCard from 'example/components/Chart/ChartCard'
import ChartLegend from 'example/components/Chart/ChartLegend'
import PageTitle from 'example/components/Typography/PageTitle'
import RoundIcon from 'example/components/RoundIcon'
import Layout from 'example/containers/Layout'
import response, { ITableData } from 'utils/demo/tableData'
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from 'icons'
// import"
import {
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
  Button,
} from '@roketid/windmill-react-ui'

import {
  lineOptions,
  doughnutLegends,
  lineLegends,
} from 'utils/demo/chartsData'
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
import Link from 'next/link'
import { useRouter } from 'next/router'

function FemaleWorkers() {
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

  
//   const [officelist,setofficelist]=useState([])
//   function datas() {
    
//   }
  
//   const doughnutOptions={
//   data: {
//     datasets: [
//       {
//         data: [67, 33],
//         /**
//          * These colors come from Tailwind CSS palette
//          * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
//          */
//         backgroundColor: ['#0694a2', '#1c64f2',"#3cb44b"],
//         label: 'Dataset 1',
//       },
//     ],
//     labels: officelist.length>0?[...officelist]:0,
//   },
//   options: {
//     responsive: true,
//     cutoutPercentage: 80,
//   },
//   legend: {
//     display: false,
//   },
// }
// console.log(officelist)
  const [page, setPage] = useState(1)
  const [length,setLength]=useState(0)
  const [data, setData] = useState([])
  const [time,setTime]=useState(0)
  const [office,setOffice]=useState([])
  // pagination setup
  const [fulldata,setFulldata]=useState([])
  const resultsPerPage = 10
  const totalResults = fulldata.length
const router = useRouter()  
// setTimeout(() =
// pagination change control
  const [paginatedData,setPaginatedData]=useState([])
  // console.log(time)
  const [listType,setTypeList] = useState("workers")


function onPageChange(p: number) {
    // json?setData(json?.slice((page - 1) * resultsPerPage, page * resultsPerPage)):console.log("e");
setPaginatedData(fulldata.slice((p - 1) * resultsPerPage, p * resultsPerPage))
    // setPage(p)
  }
  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    try {
    
  
      async function names( )  {
     await fetch("../api/femaleworkerslist").then(response => response.json())
  .then(json  => {
    json?setLength(json.length):"";
    // console.log('parsed json', json) // access json.body here
    setFulldata(json)
    json?setPaginatedData(json?.slice((0) * resultsPerPage, page * resultsPerPage)):console.log("e");
    // setData(json)   
// const arr=[];
  // json?.length>0?json.map(e=>{if(!arr.includes(e.fields.office)) arr.push(e.fields.office)}):console.log(json.length)
  // setofficelist(arr)
} 
  // names();

)
}
names()

} catch (error) {
  console.log(error)
}  

}, [])
console.log(paginatedData)
return (
  // <Layout>

// clientname        String
// insurance         String
// musanedContract    String
// visanumber         String
// idnumber          String
// mobilenumber      Int
// passportnumber    String
// workername        String
// age               Int
// experience            String
// contractstatus         String  
// city                   String
// orderDate           DateTime
// dayDate             DateTime
// duration            String
// externaloffice      String
// nationality         String
// externalmusanedcontract String
// visaordernumber     String
// notes           String

<div>
  <Button onClick={()=> router.back()}>الرجوع للخلف</Button>
      <PageTitle>Female Workers DataBase</PageTitle>
  
      <div className="grid gap-6 mb-8 md:grid-cols-2 ">
      </div>

      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>اسم العميل</TableCell>
              <TableCell>التأمين</TableCell>
              <TableCell>عقد مساند الداخلي</TableCell>
              <TableCell>رقم التأشيرة</TableCell>
              <TableCell>رقم الهوية</TableCell>
              <TableCell>رقم الجوال</TableCell>
              <TableCell>رقم الجواز</TableCell>
              <TableCell>اسم العاملة</TableCell>
              <TableCell>العمر</TableCell>
              <TableCell>الديانة</TableCell>
              <TableCell>الخبرة العملية</TableCell>
              <TableCell>حالة العقد</TableCell>
<TableCell>المدينة</TableCell>

              <TableCell>تاريخ تقديم الطلب</TableCell>

<TableCell>رقم طلب التأشيرة</TableCell>
<TableCell>ملاحظات</TableCell>
<TableCell>عقد مساند الخارجي
</TableCell>
<TableCell>الجنسية</TableCell>
<TableCell>المكتب الخارجي</TableCell>
<TableCell>مدة التقديم</TableCell>
<TableCell>تاريخ اليوم</TableCell>




            </tr>
          </TableHeader>
          <TableBody>
            {paginatedData?.map((e, i) => (
              <TableRow key={i}>


                
                <TableCell>
                  <span className="text-md">{e?.fields.clientname}</span>

                </TableCell>
                 <TableCell>
                  <span className="text-md">{e?.fields.insurance}</span>

                </TableCell>

                 <TableCell>
                  <span className="text-md">{e?.fields.musanedContract}</span>

                </TableCell>

                 <TableCell>
                  <span className="text-md">{e?.fields.visanumber}</span>

                </TableCell>

                 <TableCell>
                  <span className="text-md">{e?.fields.idnumber}</span>

                </TableCell>

                 <TableCell>
                  <span className="text-md">{e?.fields.mobilenumber}</span>

                </TableCell>

                 <TableCell>
                  <span className="text-md">{e?.fields.passportnumber}</span>

                </TableCell>

                 <TableCell>
                  <span className="text-md">{e?.fields.workername}</span>

                </TableCell>

                 <TableCell>
                  <span className="text-md">{e?.fields.age}</span>

                </TableCell>

                 <TableCell>
                  <span className="text-md">{e?.fields.experience}</span>

                </TableCell>

                 <TableCell>
                  <span className="text-md">{e?.fields.contractstatus}</span>

                </TableCell>


                 <TableCell>
                  <span className="text-md">{e?.fields.city}</span>

                </TableCell>


                 <TableCell>
                  <span className="text-md">{e?.fields.orderDate}</span>

                </TableCell>


                 <TableCell>
                  <span className="text-md">{e?.fields.dayDate}</span>

                </TableCell>


                 <TableCell>
                  <span className="text-md">{e?.fields.duration}</span>

                </TableCell>


                 <TableCell>
                  <span className="text-md">{e?.fields.externaloffice}</span>

                </TableCell>


                 <TableCell>
                  <span className="text-md">{e?.fields.nationality}</span>

                </TableCell>


                 <TableCell>
                  <span className="text-md">{e?.fields.externalmusanedcontract}</span>

                </TableCell>


                 <TableCell>
                  <span className="text-md">{e?.fields.visaordernumber}</span>

                </TableCell>


                 <TableCell>
                  <span className="text-md">{e?.fields.notes}</span>

                </TableCell>






              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>

                </div>
 
  )
}

export default FemaleWorkers