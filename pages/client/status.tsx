// @ts-nocheck 
import React, { useState, useEffect, useContext } from 'react'
import { Doughnut, Line, Pie } from 'react-chartjs-2'
import CTA from 'example/components/CTA'
import InfoCard from 'example/components/Cards/InfoCard'
import ChartCard from 'example/components/Chart/ChartCard'
import ChartLegend from 'example/components/Chart/ChartLegend'
import PageTitle from 'example/components/Typography/PageTitle'
import RoundIcon from 'example/components/RoundIcon'
import Layout from 'client/containers/Layout'
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
import { User } from 'utils/usercontext'
import { useRouter } from 'next/router'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'
function Status() {
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
  const [fulldata,setFulldata]=useState([])
  const resultsPerPage = 10
  const totalResults = fulldata.length
  const user =useContext(User)
// setTimeout(() =
// pagination change control
  const [paginatedData,setPaginatedData]=useState([])
  // console.log(time)
  const [listType,setTypeList] = useState("workers")
const router = useRouter()

function onPageChange(p: number) {
  // json?setData(json?.slice((page - 1) * resultsPerPage, page * resultsPerPage)):console.log("e");
setPaginatedData(fulldata.slice((p - 1) * resultsPerPage, p * resultsPerPage))
    // setPage(p)
    }
  const [users,setUser]=useState("")
  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
        
//@ts-ignore
//@ts-nocheck
try {

    const token = Cookies.get("token")
  const decoder = jwtDecode(token);
  setUser(decoder)
  } catch (error) {
    router.replace("/client/login")
  }

    try {
      async function names( )  {
        await fetch("../../api/orderlistforclient").then(response => response.json())
        .then(json  => {
    json?setLength(json.length):"";
    setFulldata(json)
    json?setPaginatedData(json?.slice((0) * resultsPerPage, page * resultsPerPage)):console.log("e");
} 

)
}
names()

} catch (error) {
  console.log(error);
}  

}, [])
return (
  
    <>
    {users?

<nav  className="flex items-center justify-between px-6 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg">
  <a className="text-gray-700 dark:text-gray-400" href="#">
    {/* <Logo className="w-6 h-6 text-purple-600" /> */}
  </a>
  <ul className="flex space-x-4">
    <li>
      <Link href="/client/status">
      <Button style={{backgroundColor:"dodgerblue"}}>حالة الطلب</Button></Link>
    </li>
    <li>
      <Button style={{backgroundColor:"darkcyan"}} onClick={()=>{

        Cookies.remove("token")
router.reload()
      }}>تسجيل الخروج</Button>
    </li>
  </ul>
</nav>
 :<nav  className="flex items-center justify-between px-6 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg">
  <a className="text-gray-700 dark:text-gray-400" href="#">
    {/* <Logo className="w-6 h-6 text-purple-600" /> */}
  </a>
  <ul className="flex space-x-4">
    
    <li>
      <Button style={{backgroundColor:"dodgerblue"}}>Login</Button>
    </li>
  </ul>
</nav> }

<h1 style={{fontSize:"23px"}}> Welcome {users.fullname}</h1>
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              {listType =="workers"?<TableCell>اسم العامل</TableCell>:<TableCell>اسماء المكاتب</TableCell>}
              {listType =="workers"?<TableCell>العمر</TableCell>: null}
              {listType =="workers"?<TableCell>الحالة الاجتماعية</TableCell>:null}
              {listType =="workers"?<TableCell>الجنسيات</TableCell>:null}
              {listType =="workers"?<TableCell>المكتب</TableCell>:null}
              {listType =="workers"?<TableCell>حالة الطلب</TableCell>:null}
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
                      <p className="font-semibold" >{e?.fields["Name - الاسم"]}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{e?.fields["age - العمر"]}</span>

                </TableCell>
                <TableCell>
                  <span className="text-sm">{e?.fields["marital status - الحالة الاجتماعية"]}</span>

                  {/* <Badge type={user.status}>{user.status}</Badge> */}
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                  <span className="text-sm">{e?.fields["Nationality - الجنسية"]}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  </span>
               
                </TableCell>
                
                <TableCell>
                  <span className="text-sm">
                  <span className="text-sm">{e?.fields["External office - المكتب الخارجي"]}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  </span>
               
                </TableCell>
                <TableCell>


                   <span className="text-sm">
                  <span className="text-sm">{e?.fields["الحالة"]}</span>

                    
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
    </>
  )
}

export default Status