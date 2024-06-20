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
  Button,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
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
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'

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
  }
  
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  useEffect(() => {
    
    try {
    
  
      (async function data( )  {
     await fetch("../api/clients")
     .then(response => response.json())
  .then(json  => {
console.log(json)
    json?setLength(json.length):"";
    setFulldata(json)
    json?setPaginatedData(json?.slice((0) * resultsPerPage, page * resultsPerPage)):console.log("e");})
})()

} catch (error) {
  console.log(error)
}  

}, [])
    function openModal() {
    setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false)
  }

const confirm=async (id)=>{

  const fetcher = await fetch('../api/adminconfirmation',{method:"post",headers: {'Accept':'application/json',
        "Content-Type": "application/json",
      },body:JSON.stringify({id,status:"Done"})})

      const e= await fetcher.json()
      if(fetcher.status == 200) return alert("Changed to Done in Airtable Database")
      // console.log(fetcher.status)
// closeModal()

    }
// const [fullname,setFullname]=useState("")
const [clientlistOrders,setClientOrderslist]= useState([])
const fetchClientinfo=async (fullname)=>{
  // axios.post
await axios.post('../api/fetchClientinfo',{fullname},{ headers: {
    'Content-Type': 'application/json'
  }}).then((e)=>{
setClientOrderslist(e.data)
    openModal() 
// console.log( e.data)
})
  

    }
    
 
    return (

  <Layout>
    {clientlistOrders.length>0?
<>
       <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader>Check orders</ModalHeader>
        <ModalBody>
          Cv List for Client <strong>{clientlistOrders[0].fields["العملاء"]}</strong>
          <ul >
{clientlistOrders.map((e,i)=>
  <div style={{display:"flex",flexWrap:"nowrap" ,justifyContent:"space-around",marginBottom:"15px",rowGap:"15px"}}>
  <li>{e.fields["م"]} </li>
  
  <li>{e.fields["Name - الاسم"]} </li>
  <li><Button onClick={()=>confirm(clientlistOrders[i].id)} >Confirm</Button> </li>
  {/* <li><Button onClick={()=>router.push()} >Check Cv</Button></li> */}
  </div>
)
}
</ul>
        </ModalBody>
        <ModalFooter>
          <Button className="w-full sm:w-auto" layout="outline" onClick={closeModal}>
            Close
          </Button>
         {/* <Button onClick={()=>confirm(
          
          
          clientlistOrders[0].fields["العملاء"])}>
          استلام الطلب
         </Button> */}
        </ModalFooter>
      </Modal>
</>:""}

  <>
   <PageTitle>Our Clients</PageTitle>
  <div className="grid gap-6 mb-8 md:grid-cols-2 ">
      </div>

      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Full Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>رقم الطلب</TableCell>

              <TableCell>Notes</TableCell>
              <TableCell>Created At</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {paginatedData.map((e, i) => (
              <TableRow >
                
{/* <Li */}
                <TableCell onClick={()=>fetchClientinfo(e.fields["اسم العميل"])}>
                  <span className="text-md">{e.fields["اسم العميل"]}</span>

                </TableCell>
      
      {/* </Link> */}

                <TableCell>
                  <span className="text-md">{e.fields["رقم العميل"]}</span>

                  {/* <Badge type={user.status}>{user.status}</Badge> */}
                </TableCell>

 <TableCell>
                  <span className="text-md">{i+1}</span>

                  {/* <Badge type={user.status}>{user.status}</Badge> */}
                </TableCell>


                <TableCell>
                  <span className="text-md">
               
               <Link href={"/admin/cvdetails/"+e.Cvnumber} >
                  <span className="text-md" style={{textDecorationLine:"underline",textDecorationColor:"blueviolet"}}>{e.Cvnumber}</span>
</Link>
                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  </span>
                </TableCell>
                <TableCell>
                  <span className="text-md">
                  <span className="text-md">{e?.Cvnumber}</span>

                    
                    {/* {new Date(user.date).toLocaleDateString()} */}
                  </span>
                </TableCell>
                <TableCell>
                  {/* <Link href={"/admin/officeinfo/"+e?.fields.office}  >                  */}
                  {/* <span className="text-sm"> */}
                  <span className="text-sm">{e?.Created?e?.Created:""}</span>

                    
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
      </TableContainer></>
    </Layout>

     
  )
}

export default ClientsList