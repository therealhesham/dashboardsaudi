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

function Dashboard() {
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

  
  const [officelist,setofficelist]=useState([])
  function datas() {
    
  }
  
  const doughnutOptions={
  data: {
    datasets: [
      {
        data: [67, 33],
        /**
         * These colors come from Tailwind CSS palette
         * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
         */
        backgroundColor: ['#0694a2', '#1c64f2',"#3cb44b"],
        label: 'Dataset 1',
      },
    ],
    labels: officelist.length>0?[...officelist]:0,
  },
  options: {
    responsive: true,
    cutoutPercentage: 80,
  },
  legend: {
    display: false,
  },
}
// console.log(officelist)
  const [page, setPage] = useState(1)
  const [length,setLength]=useState(0)
  const [data, setData] = useState([])
  const [time,setTime]=useState(0)
  const [office,setOffice]=useState([])
  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length
setTimeout(() => {
  setTime(new Date().getSeconds())
}, 10000);
// pagination change control
const [fulldata,setFulldata]=useState([])
  const [paginatedData,setPaginatedData]=useState([])
// console.log(time)


function onPageChange(p: number) {
    // json?setData(json?.slice((page - 1) * resultsPerPage, page * resultsPerPage)):console.log("e");
setPaginatedData(fulldata.slice((p - 1) * resultsPerPage, p * resultsPerPage))
    // setPage(p)
  }
  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    try {
    (async function names( )  {
      fetch("./api/hello").then(response => response.json())
  .then(json  => {
    json?setLength(json.length):"";
    // console.log('parsed json', json) // access json.body here
    setFulldata(json)
    json?setPaginatedData(json?.slice((0) * resultsPerPage, page * resultsPerPage)):console.log("e");
  // setData(json)   
const arr=[];
  json?.length>0?json.map(e=>{if(!arr.includes(e.fields.office)) arr.push(e.fields.office)}):console.log(json.length)
  setofficelist(arr)
    
  } 
  // names();
  )
})()


} catch (error) {
  console.log(error)
}  

}, [])

return (
    <Layout>

      <PageTitle>Charts</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2 ">
      {/* <div  style={{scale:"40%"}}> */}
        <ChartCard title="معلومات عن العمالة" > 
          <Pie {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>
{/* </div> */}
        <ChartCard title="المكاتب الاكثر ادراجا للعمالة">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>
      </div>
      <PageTitle>Dashboard</PageTitle>

      {/* <CTA /> */}

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title=" المتاح من العاملين" value={length}>
          {/* @ts-ignore */}
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard  title="المكاتب الخارجية" value={officelist.length}>
          {/* @ts-ignore */}
          <RoundIcon
          
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-yellow-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="المشرفين" value="1">
          {/* @ts-ignore */}
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="استقدامات" value="35">
          {/* @ts-ignore */}
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>اسم العامل</TableCell>
              <TableCell>العمر</TableCell>
              <TableCell>الحالة الاجتماعية</TableCell>
              <TableCell>الجنسيات</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {paginatedData?.map((e, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm" style={{width:"200px"}}>
                    <Avatar
                      className="hidden mr-3 md:block"
                      src={e?.fields.Picture[0].url}
                      alt="User image"
                    />
                    <div>
                      <p className="font-semibold" >{e?.fields.fname}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{e?.fields.age}</span>

                </TableCell>
                <TableCell>
                  <span className="text-sm">{e?.fields.maritalstatus}</span>

                  {/* <Badge type={user.status}>{user.status}</Badge> */}
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                  <span className="text-sm">{e?.fields.nationality}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  </span>
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

export default Dashboard