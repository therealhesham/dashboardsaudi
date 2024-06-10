//@ts-nocheck

import React, { useEffect, useState } from 'react'
import { Input, HelperText, Label, Select, Textarea, Button, Modal, ModalHeader, ModalBody, ModalFooter } from '@roketid/windmill-react-ui'
import CTA from 'example/components/CTA'
import PageTitle from 'example/components/Typography/PageTitle'
import SectionTitle from 'example/components/Typography/SectionTitle'
import Layout from 'example/containers/Layout'
import { MailIcon } from 'icons'
import axios from 'axios'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { jwtDecode } from 'jwt-decode';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ClipLoader } from 'react-spinners'
import { DeleteOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
function Addadmin() {
// console.log(dayjs(new Date()).get("year"),dayjs(new Date()).get("M")+1,dayjs(new Date()).get("date"))
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [admin, setadmin] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [pictureurl, setpictureurl] = useState<string>('');
  const [username, setusername] = useState<string>('');
const [idnumber, setidnumber] = useState(0);
const [role, setrole] = useState<string>('');
const [cloudinaryImage, setCloudinaryImage] = useState("")
const router = useRouter()
useEffect(()=>{
try {

    const token = Cookies.get("token")
  const decoder = jwtDecode(token);
      if(!decoder.admin)return router.replace("/client");
  
// console.log(decoder.idnumber)
  } catch (error) {
    router.replace("/client")
  }

  

},[])
// DeleteOutlined
 const [isErrorModalOpen, setIsErrorModalOpen] = useState(false)
   function openErrorModal() {
    setIsErrorModalOpen(true)
  }
  function closeErrorModal() {
    setIsErrorModalOpen(false)
  }
  function openModal() {
    setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false)
  }


  const [fetching,setFetching] = useState(false);  
const errorfunc=()=>{
setFetching(false)
openErrorModal()
}
const truefunc=()=>{
setFetching(false)
  openModal();
  
}
//@ts-ignore
const handleSignUp = async (data) => {
  // console.log(errors)
console.log(data)
setFetching(true)
  const fetcher = await fetch('../api/addadmin',{method:"post",headers: {'Accept':'application/json',
        "Content-Type": "application/json",
      },body:JSON.stringify({...data,admin:true})})

      const e= await fetcher.text()
      console.log(fetcher.status)
if(fetcher.status == 200) return truefunc();
errorfunc()

}

const Schema =yup.object({admin:true,password:yup.string(),role:yup.string(),role:yup.string(),idnumber:yup.number(),admin:yup.boolean(),username:yup.string()})
  
const{register,handleSubmit,formState:{errors}} = useForm({resolver:yupResolver(Schema)})

//@ts-nocheck
//@ts-ignore
const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append(
      "upload_preset",
      "z8q1vykv"
    );
    formData.append("cloud_name","duo8svqci");
    formData.append("folder", "samples");
// axios
   await axios.post(
      `https://api.cloudinary.com/v1_1/duo8svqci/image/upload`,
      formData
    )
     .then((response) => {
       setCloudinaryImage(response.data.secure_url);
     })
     .catch((error) => {
     });  
  };



  return (
    <Layout>

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


      <PageTitle>اضافة مدير </PageTitle>
      
{fetching?<div  style={{display:"flex",justifyContent:"center"}}><ClipLoader  cssOverride={{width:"390px",height:"390px",alignSelf:"center"}}/>  </div>:
 <form onSubmit={handleSubmit(handleSignUp)}>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">

        <Label>
          <span>اسم المستخدم</span>
          
<Input  className="mt-1"   {...register("username",{required:true})} placeholder="اسم المستخدم"  type='text' />
       {errors.username ?<span style={{color:"red"}}>{errors.username.message}</span>:null }
       
        </Label>
        <Label>

          <span>الرقم السري</span>
          <Input className="mt-1" placeholder="الرقم السري" {...register("password",{required:true})}  type='password' onChange={(e=>setPassword(e.target.value))}/>
        {errors.password?<span style={{color :"red"}}>{errors.password.message}</span>:null}
        </Label>
        <Label>

          <span>الرقم التعريفي للدخول</span>
          <Input className="mt-1" {...register("idnumber",{required:true})} placeholder="الرقم التعريفي للدخول" type='number' onChange={(e=>setidnumber(e.target.value))}/>
        {errors.idnumber?<span style={{color:"red"}}>{errors.idnumber.message}</span>:null}
        </Label>


        <Label className='mt-6'>
          <span>صورة شخصية </span>
                   <Input  className="file-input file-input-bordered file-input-sm w-full max-w-xs"  type='file' onChange={handleUpload}/>

        </Label>
      {/* </div> */}
        {/* </Label> */}


<Label>
  <span>الرتبة</span>
  <Select  style={{fontSize:"15px" }} {...register("role",{required:false})} onChange={(e)=>setrole(e.target.value)} >

    <option disabled >------</option>

    <option  >adminstrator</option>
    <option>supervisor</option>


  </Select>
</Label>
<Button type='submit'>Add Admin</Button>

      </div>
</form>}
    </Layout>
  )
}

export default Addadmin

