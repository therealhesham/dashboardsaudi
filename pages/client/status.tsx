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
// useMediaQuery
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
import { useMediaQuery } from '@mui/material'
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
const media = useMediaQuery('(max-width:820px)',{noSsr:false})

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
  // const user =useContext(User)
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

const [user,setUser]=useState({})

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
        
//@ts-ignore
//@ts-nocheck
try {
 const token =  Cookies.get("token")
 const decoder = jwtDecode(token)
 console.log(decoder.isUser)
 setUser(decoder)
} catch (error) {
  setUser({isUser:false})
} 
    try {
      async function names( )  {
        await fetch("../../api/orderlistforclient").then(response => response.json())
        .then(json  => {
    json?setLength(json.length):"";
    setFulldata(json)
    json?setPaginatedData(json?.slice((0) * resultsPerPage, page * resultsPerPage)):console.log("e");
console.log(json[0])
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
{media?
<div className="navbar   bg-gray-50 dark:bg-gray-800 shadow-lg">
  <div className="navbar-start">
    <div   className="dropdown" >
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
{user.isUser?       
      <ul style={{backgroundColor:"whitesmoke"}} tabIndex={0}        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
<li  className='btn btn-ghost text-l' ><a href='rec.rawaes.com'>Home</a></li>
        
        <li  className='btn btn-ghost text-l'><a>About us</a></li>
    <li className='btn btn-ghost text-l'>
<Link href="/client/status">
      Status
      </Link>
    </li>
      
<li className='btn btn-ghost text-l' style={{backgroundColor:"#003749" ,color:"whitesmoke"}} onClick={()=>{

        Cookies.remove("token")
router.reload()
      }}>
      Sign out
    </li>
</ul>
      :
<ul style={{backgroundColor:"whitesmoke"}} tabIndex={0}        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

<li  ><a href='rec.rawaes.com'>Home</a></li>
        
        <li ><a>About us</a></li>


        <li ><Button  style={{backgroundColor:"#003749"}}>Login</Button  ></li>




      </ul>
      
      
      }
    </div>
  </div>
  <div className="navbar-center" >
    <a  className="btn btn-ghost text-xl">
  <img  style={{width:"70px", height:"50px",justifySelf:"center"}} src='https://res.cloudinary.com/duo8svqci/image/upload/v1716302380/dkqowbgajxgcy8auxskm.svg'/>
      
      {/* daisyUI */}
      
      
      </a>
  </div>
  <div className='navbar-end'></div>
</div>
:
<nav dir='rtl' style={{position:"sticky",zIndex:+1 ,height:"70px"}} className={"flex  justify-between px-6 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg"}>
  
  {/* <div className="" style={{}}>  */}
  <img style={{width:"50px", height:"70px",alignSelf:"center",justifySelf:"center",marginRight:"50px",width:"60px"}} src='https://res.cloudinary.com/duo8svqci/image/upload/v1716302380/dkqowbgajxgcy8auxskm.svg'/>
 
  <a className="text-gray-700 dark:text-gray-400" href="#">
  </a>
  {user.isUser == true?<ul className="flex space-x-4">
 
 <li className='btn btn-ghost text-l' style={{backgroundColor:"#003749" ,color:"whitesmoke"}} onClick={()=>{

        Cookies.remove("token")
router.reload()
      }}>
      Sign out
    </li>

 {/* <li className='btn  text-l'>Home</li> */}
      <Link href="/client/status">
    <li className='btn btn-ghost text-l'>
      Status
    </li>
      
      </Link>
 <li className='btn btn-ghost text-l'>About us</li>

 <li className='btn btn-ghost text-l'>Home</li>

    
  </ul>:
  
  <ul className="flex justify-between flex items-center space-x-4">
    <li onClick={()=>router.push("/client/login")}  className='btn  text-xl'>
Login
      {/* <Button style={{backgroundColor:"#164654"}} onClick={()=>router.push("/client/login")}>Login</Button> */}
    </li>
 <li  className='btn btn-ghost text-l'>About us</li>
 <li className='btn btn-ghost text-l'>Home</li>
    
  </ul>
}
</nav>
  
}




























<h1 style={{fontSize:"23px"}}> Welcome {user.fullname}</h1>
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
                      src={('fields.Picture[0].url' in e )?e.fields.Picture[0]?.url:""}
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
                  <span className="text-sm">{e?.fields["Nationality copy"]}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  </span>
               
                </TableCell>
                
                <TableCell>
                  <span className="text-sm">
                  <span className="text-sm">{e?.fields["External office copy"]}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  </span>
               
                </TableCell>
                <TableCell>


                   <span className="text-sm">
                  <span className="text-sm">{e?.fields["حالة الحجز"]}</span>

                    
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