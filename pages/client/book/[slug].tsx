//@ts-nocheck
//@ts-ignore
// But


import React, { useState, useEffect, useRef } from 'react'
import * as yup from "yup"

import { useRouter } from "next/router"
// import "../../"
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
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Select,
} from '@roketid/windmill-react-ui';
// yupResolver
import { EditIcon, TrashIcon } from 'icons'
import { useReactToPrint } from "react-to-print";
import response, { ITableData } from 'utils/demo/tableData'
import Layout from 'client/containers/Layout'
import { ClipLoader, ClockLoader, GridLoader } from 'react-spinners'
import Header from 'example/components/Header'
import generatePDF, { Resolution, Margin, Options } from "react-to-pdf";
import { PrinterFilled } from '@ant-design/icons'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { jwtDecode } from 'jwt-decode'
const options: Options = {
  filename: "advanced-example.pdf",
  method: "save",
  // default is Resolution.MEDIUM = 3, which should be enough, higher values
  // increases the image quality but also the size of the PDF, so be careful
  // using values higher than 10 when having multiple pages generated, it
  // might cause the page to crash or hang.
  resolution: Resolution.EXTREME,
  page: {
    // margin is in MM, default is Margin.NONE = 0
    margin: Margin.SMALL,
    // default is 'A4'
    format: "letter",
    // default is 'portrait'
    orientation: "landscape"
  },
  canvas: {
    // default is 'image/jpeg' for better size performance
    mimeType: "image/jpeg",
    qualityRatio: 1
  },
  // Customize any value passed to the jsPDF instance and html2canvas
  // function. You probably will not need this and things can break,
  // so use with caution.
  overrides: {
    // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
    pdf: {
      compress: true
    },
    // see https://html2canvas.hertzen.com/configuration for more options
    canvas: {
      useCORS: true
    }
  }
};


// import { usePDF } from 'react-to-pdf'
// uses
// usePDF

export default function Page() {
  const router = useRouter()
const [errorEmail,setErrorEmail]=useState(false);
const [data,setData]=useState([]);
const [isModalOpen, setIsModalOpen] = useState(false)
  function openModal() {
    setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false)
  }

 const [isErrorModalOpen, setIsErrorModalOpen] = useState(false)
  function openErrorModal() {
    setIsErrorModalOpen(true)
  }
  function closeErrorModal() {
    setIsErrorModalOpen(false)
  }






  const [fetching,setFetching] = useState(false);  
const errorfunc=()=>{
setFetching(false)
openErrorModal()
}
const truefunc=()=>{
setFetching(false)
router.replace("/client/status")  
}

const erroremailfunc=()=>{
setFetching(false)
// openErrorModal()
setErrorEmail(true)
}
//@ts-ignore
const onSubmitNewclient = async (sata) => {
setFetching(true)
  const fetcher = await fetch('../../api/orderforexistingclient',{method:"post",headers: {'Accept':'application/json',
        "Content-Type": "application/json",
      },body:JSON.stringify({...sata,id:data[0].id,cvnumber:data[0].fields.Name+""})})

      const e= await fetcher.text()
      
      // console.log(fetcher.status)
if(fetcher.status == 200) {
  Cookies.set("token",e)
    truefunc();}
else if (fetcher.status == 301 ) return erroremailfunc();
else{errorfunc()
  }
  }

//@ts-ignore
const onSubmit = async (sata) => {
setFetching(true)
  const fetcher = await fetch('../../api/newclient',{method:"post",headers: {'Accept':'application/json',
        "Content-Type": "application/json",
      },body:JSON.stringify({...sata,id:data[0].id,cvnumber:data[0].fields.Name+""})})

      const e= await fetcher.text()
      
      // console.log(fetcher.status)
if(fetcher.status == 200) {
  Cookies.set("token",e)
    truefunc();}
else if (fetcher.status == 301 ) return erroremailfunc();
else{errorfunc()
  }
  }
  // // console.log(data)
  const [user,setUser] = useState({})
  const [list,setSourceList] = useState([]);

const Schema =yup.object({ id:yup.string(),source:yup.string().notRequired(),email:yup.string().notRequired() , phonenumber:yup.string(),password:yup.string().notRequired(),fullname:yup.string().typeError("الرجاء كتابة الاسم ثلاثي")
})
  const{register,handleSubmit,formState:{errors}} = useForm({resolver:yupResolver(Schema)})

  useEffect(() => {
try {
 const token =  Cookies.get("token")
 const decoder = jwtDecode(token)
 setUser(decoder)
} catch (error) {
  // console.log(error)
  setUser(null)
} 




try {
  name()
} catch (error) {
  console.log(error)
}
    


}, [])

  async function name() {
     await fetch(`../../api/cv/${router.query.slug}`).then(response => response.json())
     .then(json  => {
      // console.log(json)
setData(json)
  } 
  
)
 const fetcher = await fetch(`../../api/sourcelist`);
 const f = fetcher.json()
     .then(json  => {
setSourceList(json)
  } 
  
)
  }
console.log(list)
return (   
<>
{user.isUser?

<nav  className="flex items-center justify-between px-6 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg">
  <a className="text-gray-700 dark:text-gray-400" href="#">
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
        <Button style={{backgroundColor:"dodgerblue"}} onClick={()=>router.replace("/client/login")}>Login</Button>

    </li>
  </ul>
</nav> }
  
  
<Modal  isOpen={isErrorModalOpen} onClose={closeErrorModal}>
        <ModalHeader color='pink' style={{color:"red"}}>Error Inserting Data</ModalHeader>
        <ModalBody>
          Check Internet Connectivity
        </ModalBody>
        <ModalFooter>
          <Button className="w-full sm:w-auto" layout="outline" onClick={closeErrorModal}>
            Close
          </Button>
         
        </ModalFooter>
      </Modal>
    




       <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader>Data Inserted Successfully</ModalHeader>
        <ModalBody>
          Thank you for inserting Data , check DataBase in case of you need to update Data
        </ModalBody>
        <ModalFooter>
          <Button className="w-full sm:w-auto" layout="outline" onClick={closeModal}>
            Close
          </Button>
         
        </ModalFooter>
      </Modal>
    
{fetching?
<div  style={{display:"flex",justifyContent:"center"}}><ClipLoader  cssOverride={{width:"390px",height:"390px",alignSelf:"center"}}/>  
</div>
:<>{user.user & data.length>0?  
  
<form onSubmit={handleSubmit(onSubmitNewclient)} style={{margin:"80px",display:"block",flexDirection:"column",alignItems:"center"}}>
  <Label className="mt-4">
  

  
  <span>اسم العميل</span>

          <Input className="mt-1" placeholder="Full Name" type='text' {...register("fullname",{required:true})}/>
            {errors.fullname?<span>{errors.fullname.message}</span>:""}
          {/* <h1 className="mt-1"  >{data[0].fields["Name - الاسم"]}</h1> */}
        </Label>





  <Label className="mt-4">
  
  
  
  <span>الاسم</span>
          <Input className="mt-1" value={data[0].fields["Name - الاسم"]} />

        </Label>

<Label className="mt-4" style={{gridColumnStart:2,gridColumnEnd:4}}>
          <span>الجنسية</span>
          <Input className="mt-1" value={data[0].fields["Nationality copy"]} />
        </Label>
<Label className="mt-4">
          <span>تاريخ الميلاد</span>
          <Input className="mt-1" value={data[0].fields["date of birth - تاريخ الميلاد"]} />
        </Label>
<Label className="mt-4">
          <span>العمر</span>
          <Input className="mt-1" value={data[0].fields["age - العمر"]} />
        </Label>
<Label className="mt-4">
          <span>الديانة</span>
               <Input className="mt-1" value={data[0].fields["Religion - الديانة"]} />
        </Label>
<Label className="mt-4">
          <span>كيف تعرفت علينا</span>

<Select >
  {list.map(e=><option>{e?.fields["المصدر"]}</option>
)}

</Select>

        </Label>




        <div  style={{display:"flex",justifyContent:"center",marginTop:"3px"}}>
<Button  type='submit' >  حجز</Button>        </div>
        </form>:<>
  <form onSubmit={handleSubmit(onSubmit)} style={{margin:"80px",display:"block",flexDirection:"column",alignItems:"center"}}>
  <Label className="mt-4">
  

  
  <span>اسم العميل</span>

          <Input className="mt-1" placeholder="Full Name" type='text' {...register("fullname",{required:true})}/>
            {errors.fullname?<span>{errors.fullname.message}</span>:""}
          {/* <h1 className="mt-1"  >{data[0].fields["Name - الاسم"]}</h1> */}
        </Label>

  <Label className="mt-4">
  
  
  
  <span>البريد الالكتروني </span>
  
          <Input className="mt-1" placeholder="Email" type='text' {...register("email",{required:true})}/>
{errorEmail?<span style={{color:"red"}}>البريد الالكتروني مسجل في قاعدة البيانات لستجيل الدخول اضغط <Link href="/client/login" ><span style={{color:"black",cursor:"pointer"}}>هنا</span></Link></span>:""}
        </Label>
  
  <Label className="mt-4">
  
  
  
  <span>رقم الهاتف </span>
  
          <Input className="mt-1" placeholder="phonenumber" {...register("phonenumber",{required:true})}/>
{/* <span>رقم الجوال سيتم استخدامه كرقم سري لمتابعة الطلب</span> */}
          {/* <h1 className="mt-1"  >{data[0].fields["Name - الاسم"]}</h1> */}
        </Label>
  

 <Label className="mt-4">
  
  
  
  <span>الرقم السري لتسجيل الدخول ومتابعة حالة الطلب</span>
  
          <Input className="mt-1" placeholder="password" {...register("password",{required:true})}/>
{/* <span>رقم الجوال سيتم استخدامه كرقم سري لمتابعة الطلب</span> */}
          {/* <h1 className="mt-1"  >{data[0].fields["Name - الاسم"]}</h1> */}
        </Label>
  






  <Label className="mt-4">
  
  
  
  <span>الاسم</span>
          <Input className="mt-1" value={data[0]?data[0].fields["Name - الاسم"]:""} />

        </Label>

<Label className="mt-4" style={{gridColumnStart:2,gridColumnEnd:4}}>
          <span>الجنسية</span>
          <Input className="mt-1" value={data[0]?data[0].fields["Nationality copy"]:""} />
        </Label>
<Label className="mt-4">
          <span>تاريخ الميلاد</span>
          <Input className="mt-1" value={data[0]?data[0].fields["date of birth - تاريخ الميلاد"]:""} />
        </Label>
<Label className="mt-4">
          <span>العمر</span>
          <Input className="mt-1" value={data[0]?data[0].fields["age - العمر"]:""} />
        </Label>
<Label className="mt-4">
          <span>الديانة</span>
               <Input className="mt-1" value={data[0]?data[0].fields["Religion - الديانة"]:""} />
        </Label>
<Label className="mt-4">
          <span>كيف تعرفت علينا</span>

<Select>
  {list.map(e=><option>{e?.fields["المصدر"]}</option>
)}

</Select>

        </Label>




        <div  style={{display:"flex",justifyContent:"center",marginTop:"3px"}}>
<Button  type='submit' >  حجز</Button>        </div>
        </form>      
        </>}
  </>}
          </>

)}