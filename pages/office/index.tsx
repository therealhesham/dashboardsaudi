// @ts-nocheck 
import React, { useState, useEffect } from 'react'
import { Doughnut, Line } from 'react-chartjs-2'

import CTA from 'office/components/CTA'
import InfoCard from 'office/components/Cards/InfoCard'
import ChartCard from 'office/components/Chart/ChartCard'
import ChartLegend from 'office/components/Chart/ChartLegend'
import PageTitle from 'office/components/Typography/PageTitle'
import RoundIcon from 'office/components/RoundIcon'
import Layout from 'office/containers/Layout'
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
  doughnutOptions,
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

  const [page, setPage] = useState(1)
  const [data, setData] = useState([])

  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChange(p: number) {
    setPage(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
      async function names( )  {
      fetch("./api/hello").then(response => response.json())
  .then(json  => {
    console.log('parsed json', json) // access json.body here
    setData(json?.slice((page - 1) * resultsPerPage, page * resultsPerPage))
  // setData(json)   
  } ) 
    }

    names()
  }, [page])

  return (
    <Layout>
      <PageTitle>Dashboard</PageTitle>

      {/* <CTA /> */}

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title=" المتاح من العاملين" value="9820">
          {/* @ts-ignore */}
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="المكاتب الخارجية" value="8">
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
            {data.map((e, i) => (
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

      <PageTitle>Charts</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="Revenue">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Traffic">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>
      </div>
    </Layout>
  )
}

export default Dashboard
