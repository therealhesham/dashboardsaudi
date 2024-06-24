

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
import { FileOutlined, PlusOutlined, PrinterFilled, ShareAltOutlined } from '@ant-design/icons'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { jwtDecode } from 'jwt-decode'
import dayjs from 'dayjs'
import { useMediaQuery } from '@mui/material'
import { WhatsappShareButton } from 'next-share'
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

const media = useMediaQuery('(max-width:820px)',{noSsr:false})

  const [errorEmail,setErrorEmail]=useState(false);
  const [data,setData]=useState({fields:{"Name - الاسم":null}});

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
const onSubmit = async (sata) => {
  // console.log(sata)
  // return
setFetching(true)
  const fetcher = await fetch('../../api/orderforexistingclient',{method:"post",headers: {'Accept':'application/json',
        "Content-Type": "application/json",
      },body:JSON.stringify({fullname:user.fullname,phonenumber:user.phonenumber,email:user.email,id:data.id,cvnumber:data.fields.Name})})


      const e= await fetcher.text()
      
      // console.log(fetcher.status)
if(fetcher.status == 200) {
  // Cookies.set("token",e)
    truefunc();}
else if (fetcher.status == 301 ) return erroremailfunc();
else{errorfunc()
  }
  }

//@ts-ignore
const onSubmitNewclient = async (sata) => {
  console.log(sata)
setFetching(true)
  const fetcher = await fetch('../../api/newclient',{method:"post",headers: {'Accept':'application/json',
        "Content-Type": "application/json",
      },body:JSON.stringify({...sata,id:data.id,cvnumber:data.fields.Name})})

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
    // if(data.fields["Name - الاسم"] == null)return;
    if(!router.isReady )return;
try {
 const token =  Cookies.get("token")
 const decoder = jwtDecode(token)
 console.log(user.isUser)
 setUser(decoder)
} catch (error) {
  // console.log(error)
  setUser({isUser:false})
} 



try {
 (async function fecher() {
  
  const sss =await fetch("https://api.airtable.com/v0/app1mph1VMncBBJid/%D8%A7%D9%84%D8%B3%D9%8A%D8%B1%20%D8%A7%D9%84%D8%B0%D8%A7%D8%AA%D9%8A%D8%A9/"+router.query.slug,{method:"get",headers:{"Authorization":"Bearer patqpqm8yUGAdhSoj.b42530f3bb52b3073c8a30eb1507a54227cb17fdc0d8ce0368ee61a8acf1c66d"}})
          const waiter = await sss.json()
          setData(waiter)


          
 const fetcher = await fetch(`../../api/sourcelist`);
 const f = fetcher.json()
     .then(json  => {
setSourceList(json)
  } 
  
)
})()
// name()
} catch (error) {
  console.log(error)
}
    
}, [router.isReady])
  async function name() {
     
  }
return (   
<div style={{backgroundColor:"Eff7f9"}}>

<nav dir='rtl' style={{position:"sticky",zIndex:+1 ,height:"70px"}} className={"flex items-center justify-between px-6 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg"}>
  <img style={{width:"50px", height:"50px"}} src='https://res.cloudinary.com/duo8svqci/image/upload/v1716302380/dkqowbgajxgcy8auxskm.svg'/>
  <a className="text-gray-700 dark:text-gray-400" href="#">
  </a>
  {user.isUser == true?<ul className="flex space-x-4">
 <li>Home</li>
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
:<>{user.isUser  ?  
  <div >
    <div style={{isplay:media?"flex":"block",marginLeft:"auto",marginRight:"auto",width:media?"100%":"60%",backgroundColor:"white"}}   className="card card-compact card-side w-100 bg-base-100 shadow-xl"  onClick={()=>console.log(e)}>
  <div className="pic"> 
    <div  style={{width:"80px",height:"70px"}}> 
    <div style={{right:"15px",cursor:"pointer",top:"10px",position:"absolute"}}
    
    >
    
    </div>
      {data.fields.Picture?<img     src={data.fields.Picture[0].url}  />:""}
</div>
</div>
  <div className="card-body" >
    <h2 className="card-title">{data.fields["Name - الاسم"]}</h2>
    <div className="textcard">
      {/* data.fields[ksd["age - العمر"] }
      {/* <p  >{data.fields['age - العمر']?data.fields['age - العمر']:""}</p> */}
      <p  >{data.fields["marital status - الحالة الاجتماعية"]}</p>
      <p  >{data.fields["External office - المكتب الخارجي "]}</p>
      <p  >{data.fields["Religion - الديانة"]}</p>

      
      
      
      </div>
    <div className="card-actions justify-end  pointer">
<div style={{display:"inline-flex"}}>
<div  onClick={()=>router.push("../client/book/"+data.id)} style={{display:"inline-flex",cursor:"pointer"}}> 
  {/* <Link href={"../client/book/"+e.id} > */}

 <span style={{backgroundColor:"#003749",cursor:"pointer",borderRadius:"6px",padding:"4px",color:"whitesmoke"}}>حجز العاملة</span>
{/* </Link> */}
 
  <PlusOutlined  />


</div>
<div style={{display:"inline-flex",cursor:"pointer"}}> 
  {/* <Link href={"../client/cvdetails/"+e.id} > */}
 <span style={{backgroundColor:"#Ecc383",borderRadius:"6px",padding:"4px",color:"whitesmoke"}} onClick={()=>router.push("../client/cvdetails/"+data.id)}>السيرة الذاتية</span>

{/* </Link> */}
  <FileOutlined />

</div>

 
</div>
   
</div>
    
  </div>    
</div>
  <form onSubmit={onSubmit} style={{display:media?"flex":"block",marginLeft:"auto",marginRight:"auto",width:media?"100%":"60%",flexDirection:"column",justifyContent:"center"}}>

{/* <form onSubmit={onSubmit} style={{margin:"80px",display:"block",flexDirection:"column",alignItems:"center"}}> */}
  




  <Label className="mt-4">
  
  
  
  <span>الاسم</span>
        {data.fields["Name - الاسم"] != null?  <Input className="mt-1" value={data.fields["Name - الاسم"]} />:""}

        </Label>

<Label className="mt-4" style={{gridColumnStart:2,gridColumnEnd:4}}>
          <span>الجنسية</span>
        {data.fields["Name - الاسم"] != null?  <Input className="mt-1" value={data.fields["Nationality copy"]} />:""}

        </Label>
<Label className="mt-4">
          <span>تاريخ الميلاد</span>
        {data.fields["Name - الاسم"] != null?  <Input className="mt-1" value={data.fields["date of birth - تاريخ الميلاد"]} />:""}

        </Label>
<Label className="mt-4">
          <span>العمر</span>
        {data.fields["Name - الاسم"] != null?  <Input className="mt-1" value={data.fields["age - العمر"]} />:""}

        </Label>
<Label className="mt-4">
          <span>الديانة</span>
        {data.fields["Name - الاسم"] != null?  <Input className="mt-1" value={data.fields["Religion - الديانة"]} />:""}

          </Label>
<Label className="mt-4">
          <span>كيف تعرفت علينا</span>

<Select >
  {list.map(e=><option>{data.fields["المصدر"]}</option>
)}

</Select>

        </Label>




        <div  style={{display:"flex",justifyContent:"center",marginTop:"3px"}}>
<Button color='#003749' style={{backgroundColor:"#003749"}} type='submit' >  حجز</Button>        </div>
        </form></div>:
        <div >
  
  
<div style={{width:"95%",display:"flex",justifyContent:"center",flexDirection:"column"}}>
    <div style={{isplay:media?"flex":"block",marginLeft:"auto",marginRight:"auto",width:media?"100%":"60%",backgroundColor:"white"}}   className="card card-compact card-side w-100 bg-base-100 shadow-xl"  onClick={()=>console.log(e)}>

  {/* <div style={{width:"95%",alignSelf:"center",backgroundColor:"white"}}  className="card card-compact card-side w-100 bg-base-100 shadow-xl"  > */}
  <div className="pic"> 
    <div  style={{width:"80px",height:"70px"}}> 
    <div style={{right:"15px",cursor:"pointer",top:"10px",position:"absolute"}}
    
    >
   
    </div>
      {data.fields.Picture?<img     src={data.fields.Picture[0].url}  />:""}
</div>
</div>
  <div className="card-body" >
    <h2 className="card-title">{data.fields["Name - الاسم"]}</h2>
    <div className="textcard">
      <p  >{data.fields["marital status - الحالة الاجتماعية"]}</p>
      <p  >{data.fields["Nationality copy"]}</p>

      {/* <p  >{data.fields["External office - المكتب الخارجي (from External office - المكتب الخارجي)"][0]}</p> */}
      <p  >{data.fields["Religion - الديانة"]}</p>
      <p  >{data.fields["age - العمر"]}</p>

      
      
      
      </div>
    <div className="card-actions justify-end  pointer">
<div style={{display:"inline-flex"}}>
<div  onClick={()=>router.push("../client/book/"+data.id)} style={{display:"inline-flex",cursor:"pointer"}}> 
  {/* <Link href={"../client/book/"+e.id} > */}

 <span style={{backgroundColor:"#003749",cursor:"pointer",borderRadius:"6px",padding:"4px",color:"whitesmoke"}}>حجز العاملة</span>
{/* </Link> */}
 
  <PlusOutlined  />


</div>
<div style={{display:"inline-flex",cursor:"pointer"}}> 
  {/* <Link href={"../client/cvdetails/"+e.id} > */}
 <span style={{backgroundColor:"#Ecc383",borderRadius:"6px",padding:"4px",color:"whitesmoke"}} onClick={()=>router.push("../client/cvdetails/"+data.id)}>السيرة الذاتية</span>

{/* </Link> */}
  <FileOutlined />

</div>

 
</div>
   
</div>
    
  </div>    
</div>

  
  <form onSubmit={handleSubmit(onSubmitNewclient)} style={{display:media?"flex":"block",marginLeft:"auto",marginRight:"auto",width:media?"100%":"60%",flexDirection:"column",justifyContent:"center"}}>
  <Label className="mt-4">
  

  
  <span>اسم العميل</span>

          <Input className="mt-1" placeholder="Full Name" type='text' {...register("fullname",{required:true})}/>
            {errors.fullname?<span>{errors.fullname.message}</span>:""}
          {/* <h1 className="mt-1"  >{data.fields["Name - الاسم"]}</h1> */}
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
          {/* <h1 className="mt-1"  >{data.fields["Name - الاسم"]}</h1> */}
        </Label>
  

 <Label className="mt-4">
  
  
  
  <span>الرقم السري لتسجيل الدخول ومتابعة حالة الطلب</span>
  
          <Input className="mt-1" placeholder="password" {...register("password",{required:true})}/>
{/* <span>رقم الجوال سيتم استخدامه كرقم سري لمتابعة الطلب</span> */}
          {/* <h1 className="mt-1"  >{data.fields["Name - الاسم"]}</h1> */}
        </Label>
  


<Label className="mt-4">
          <span>كيف تعرفت علينا</span>

<Select>
  {list.map(e=><option>{data.fields["المصدر"]}</option>
)}

</Select>

        </Label>




        <div  style={{display:"flex",justifyContent:"center",marginTop:"3px"}}>
<Button color='#003749' style={{backgroundColor:"#003749"}} type='submit' >  حجز</Button>        </div>
        </form>      </div>
        </div>}
  </>}
          </div>

)}