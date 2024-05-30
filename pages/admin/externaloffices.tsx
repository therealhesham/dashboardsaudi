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

function Employees() {
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

  

  const [page, setPage] = useState(1)
  const [length,setLength]=useState(0)
  const [data, setData] = useState([])
  const [time,setTime]=useState(0)
  const [office,setOffice]=useState([])
  
  const [fulldata,setFulldata]=useState([])
  const resultsPerPage = 10
  const totalResults = fulldata.length
const router = useRouter()  
  const [paginatedData,setPaginatedData]=useState([])
  
  const [listType,setTypeList] = useState("workers")


function onPageChange(p: number) {
  
setPaginatedData(fulldata.slice((p - 1) * resultsPerPage, p * resultsPerPage))
    // setPage(p)
  }
  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    try {
    
  
      async function names( )  {
     await fetch("../api/externaloffices").then(response => response.json())
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

      <PageTitle>ُForeign Offices</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2 ">
      </div>

      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Office Name</TableCell>
              <TableCell>Location</TableCell>
              
              <TableCell>Fiscal</TableCell>
              <TableCell>Flag</TableCell>
              <TableCell>Registered CV</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {paginatedData?.map((e, i) => (
              <TableRow key={i}>
                
                <TableCell>
                  <span className="text-md">{e?.fields.Name}</span>

                </TableCell>
                <TableCell>
                  <span className="text-md">{e?.fields.Status}</span>

                  {/* <Badge type={user.status}>{user.status}</Badge> */}
                </TableCell>
                
                <TableCell>
                  <span className="text-md">
                  <span className="text-md">{e?.fields["المالية"]}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  </span>
                </TableCell>

                <TableCell>
                  {/* <span className="text-md"> */}
                  <img className="text-md" src={e?.fields["العلم"][0].url} width="30px" height="20px"/>
                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  {/* </span> */}
                </TableCell>
                <TableCell>
                 {e.fields["Assignee"] ? <span className="text-md">
                {e.fields["Assignee"].split(",").map(s=><Link href={"./cvdetails/"+s}><span className="text-md" style={{textDecorationLine:"underline",textDecorationColor:"blueviolet"}}>{s}</span></Link>)}  
                   
                  </span>:""}
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

                
    </Layout>
  )
}

export default Employees