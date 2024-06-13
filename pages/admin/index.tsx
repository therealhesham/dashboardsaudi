// @ts-nocheck 
import React, { useState, useEffect, useContext } from 'react'
import { Doughnut, Line, Pie } from 'react-chartjs-2'
// import "./officeinfo/[slug]"
import CTA from 'example/components/CTA'
import InfoCard from 'example/components/Cards/InfoCard'
import ChartCard from 'example/components/Chart/ChartCard'
import ChartLegend from 'example/components/Chart/ChartLegend'
// import "./officeinfo/"
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
import Link from 'next/dist/client/link'

// import""
import { User } from 'utils/usercontext'
import { useRouter } from 'next/router'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'
// import link from 'next/link'
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
  const [fulldata,setFulldata]=useState([])
  const resultsPerPage = 10
  const totalResults = fulldata.length;
  const user =useContext(User)
// setTimeout(() =
// pagination change control
  const [paginatedData,setPaginatedData]=useState([])
  // console.log(time)
  const [listType,setTypeList] = useState("workers")
const router = useRouter()
const [list,setList]=useState([]);
function onPageChange(p: number) {
  console.log(p)
  // console.log(fulldata.slice((p - 1) * resultsPerPage, p * resultsPerPage))
    // json?setData(json?.slice((page - 1) * resultsPerPage, page * resultsPerPage)):console.log("e");

setPaginatedData(fulldata.slice((p - 1) * resultsPerPage, p * resultsPerPage))
    // setPage(p)
  }
  // on page change, load new sliced data
  // here you would make another server request for new data




function FindNatioinality(namenation) {
console.log(namenation)



const filtering = list.find(e=> e.id == namenation)
// console.log("filtering",filtering)
// console.log(filtering)
return filtering?.fields["الدولة"];

  
}
// console.log(list[3])


useEffect(() => {
  
  try {

    const token = Cookies.get("token")
  const decoder = jwtDecode(token);
      if(!decoder.admin)return router.replace("/admin/login");
// console.log(decoder.idnumber)
  } catch (error) {
    router.replace("/admin/login")
  }
    try {

      (async function External(){
        const fetcher =  await fetch("./api/externaloffices");
        const f = await fetcher.json()
        setofficelist(f)





})()


      async function names( )  {
    const fetcher =  await fetch("./api/hello");
    const f = await fetcher.json()

  .then(json  => {
//  console.log(json)
//  if ()
  json?setLength(json.length):"";

    // console.log('parsed json', json) // access json.body here
    setFulldata(json)
    json?setPaginatedData(json?.slice((0) * resultsPerPage, page * resultsPerPage)):console.log("e");
// console.log(new Date().getSeconds())
    // setData(json)   

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
      {/* {alert(user.username)} */}
<h1 style={{fontSize:"23px"}}> Hello {user.name}</h1>
      <PageTitle>Dashboard</PageTitle>


      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
          {/* @ts-ignore */}
          <div  style={{cursor:"pointer"}} onClick={e=>setTypeList("workers")}>
        <InfoCard title=" المتاح من العاملين" value={length}  >
                 <RoundIcon
                 
                 icon={PeopleIcon}
                 iconColorClass="text-orange-500 dark:text-orange-100"
                 bgColorClass="bg-orange-100 dark:bg-orange-500"
                 className="mr-4"
                 />
        </InfoCard>
                 </div>
 
          <div  style={{cursor:"pointer"}} onClick={e=>setTypeList("offices")}>
        <InfoCard  title="المكاتب الخارجية" value={officelist.length}  >
          {/* @ts-ignore */}
          <RoundIcon
          
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-yellow-100 dark:bg-green-500"
            className="mr-4"
            />
        </InfoCard>
            </div>

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
{listType =="workers"?
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              {listType =="workers"?<TableCell>اسم العامل</TableCell>:<TableCell>اسماء المكاتب</TableCell>}
              {listType =="workers"?<TableCell>العمر</TableCell>: null}
              {listType =="workers"?<TableCell>الحالة الاجتماعية</TableCell>:null}
              {listType =="workers"?<TableCell>المكاتب</TableCell>:null}
              {listType =="workers"?<TableCell>Religion</TableCell>:null}
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
                     {e?.fields["Name - الاسم"] ? <p className="font-semibold" >{e?.fields["Name - الاسم"]}</p>:""}
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                {e?.fields["age - العمر"]?  <span className="text-sm">{e?.fields["age - العمر"]}</span>:""}

                </TableCell>
                <TableCell>
                 {e?.fields["marital status - الحالة الاجتماعية"]? <span className="text-sm">{e?.fields["marital status - الحالة الاجتماعية"]}</span>:""}

                  {/* <Badge type={user.status}>{user.status}</Badge> */}
                </TableCell>
                <TableCell>
                  <span className="text-sm">
                  <span className="text-sm">{e?.fields["External office - المكتب الخارجي (from External office - المكتب الخارجي)"][0] }</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  </span>
                </TableCell>
                <TableCell>
                  {/* <Link href={"/admin/officeinfo/"+e?.fields["External office - المكتب الخارجي"]}  >                  */}
                  {/* <span className="text-sm"> */}
                  <span className="text-sm">{e?.fields["Religion - الديانة"]}</span>

                    
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
{officelist.map((e) => (
             
  <Link href={"./admin/officeinfo/"+ e.fields["External office - المكتب الخارجي"]}>
  <li  style={{height:"150px"}}  > 
                  {e?.fields["External office - المكتب الخارجي"]}   
              </li>
                    </Link>

              ))
}          </ul>
               </TableBody>
                }
    </Layout>
  )
}

export default Dashboard

