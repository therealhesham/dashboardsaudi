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

function ClientsList() {
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
     await fetch("../api/clients").then(response => response.json())
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

return (
    <Layout>

      <PageTitle>Our Clients</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2 ">
      </div>
{listType =="workers"?
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Full Name</TableCell>
              <TableCell>Assignee</TableCell>
              <TableCell>رقم ال CV</TableCell>
              <TableCell>Notes</TableCell>
              <TableCell>Created At</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {paginatedData?.map((e, i) => (
              <TableRow key={i}>
                
                <TableCell>
                  <span className="text-md">{e?.fields.Name}</span>

                </TableCell>
                <TableCell>
                  <span className="text-md">{e?.fields.Assignee}</span>

                  {/* <Badge type={user.status}>{user.status}</Badge> */}
                </TableCell>
                <TableCell>
                  <span className="text-md">
               
               <Link href={"./cvdetails/"+e.fields["رقم الCV"]} >
                  <span className="text-md" style={{textDecorationLine:"underline",textDecorationColor:"blueviolet"}}>{e?.fields["رقم الCV"]}</span>
</Link>
                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="text-md">
                  <span className="text-md">{e?.fields.Notes}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  </span>
                </TableCell>
                <TableCell>
                  {/* <Link href={"/admin/officeinfo/"+e?.fields.office}  >                  */}
                  {/* <span className="text-sm"> */}
                  <span className="text-sm">{e?.fields.Created}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  {/* </span> */}
                {/* </Link> */}
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
: 
<TableBody>
<ul >
{officelist.map((e, i) => (
                <li style={{height:"150px"}} key={i}>{e}</li>
     
              ))
}          </ul>
               </TableBody>
                }
    </Layout>
  )
}

export default ClientsList