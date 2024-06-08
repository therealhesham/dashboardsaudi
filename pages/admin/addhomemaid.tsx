//@ts-ignore
//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { Input, HelperText, Label, Select, Textarea, Button, Modal, ModalHeader, ModalBody, ModalFooter } from '@roketid/windmill-react-ui'
import CTA from 'example/components/CTA'
import PageTitle from 'example/components/Typography/PageTitle'
import SectionTitle from 'example/components/Typography/SectionTitle'

import Layout from 'example/containers/Layout'
import { MailIcon } from 'icons'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ClipLoader } from 'react-spinners'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import { useRouter } from 'next/router'
// Cookies
// jwtDecode
// useRouter
// useEffect

function Waitinglist() {
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
  const [office, setOffice] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false)
  function openModal() {
    setIsModalOpen(true)
  }
  function closeModal() {
    setIsModalOpen(false)
  }

const schema = yup
  .object({
    clientname: yup.string().required(),
clientnameinenglishlanguage: yup.string().required(),
    internalmusanedContract:yup.string().required(),
nationalidnumber:yup.string().required(),
contacntnumber:yup.string().required(),
passportnumber:yup.string(),
kingdomentrydate:yup.string(),
daydate:yup.number(),
workduration:yup.string(),
cost:yup.string(),
homemaidnumber:yup.string(),
notes:yup.string()


  })
  .required()


  const { register,formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  })

  const handleSignUp = async (e: React.SyntheticEvent) => {
    
    e.preventDefault();

  };

  
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
  openModal();
  
}
//@ts-ignore
const onSubmit = async (data) => {
  // console.log(errors)

setFetching(true)
  const fetcher = await fetch('../api/addfemaleworker',{method:"post",headers: {'Accept':'application/json',
        "Content-Type": "application/json",
      },body:JSON.stringify(data)})

      const e= await fetcher.text()
      console.log(fetcher.status)
if(fetcher.status == 200) return truefunc();
errorfunc()

}

// console.log(errors)
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
{fetching?<div  style={{display:"flex",justifyContent:"center"}}><ClipLoader  cssOverride={{width:"390px",height:"390px",alignSelf:"center"}}/>  
</div>
: <form onSubmit={handleSubmit(onSubmit)}>
      <PageTitle>اضافة عمالة ذكور</PageTitle>
       <div dir='rtl' style={{display:"grid",gridTemplateColumns: "auto auto auto",gap:"19px"}} className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>اسم العميل</span>
          <Input aria-invalid={errors.clientname ? "true" : "false"} {...register("clientname", { required: true })} className="mt-1" placeholder="اسم العميل"  type='text' onChange={(e=>setOffice(e.target.value))}/>
        {errors.clientname?<span style={{backgroundColor:"pink"}}>{errors.clientname.message}</span>:""}
        
        </Label>
        <Label>

          <span>Client Name in English</span>
          <Input   aria-invalid={errors.internalmusanedContract ? "true" : "false"} {...register("clientnameinenglishlanguage", { required: true })}    className="mt-1" placeholder="التأمين"  type='text' onChange={(e=>setOffice(e.target.value))}/>
        {errors.clientnameinenglishlanguage?<span style={{backgroundColor:"pink"}}>{errors.clientnameinenglishlanguage.message}</span>:""}
        
        </Label>
        <Label>
          
          <span>عقد مساند داخلي</span>
          <Input   aria-invalid={errors.internalmusanedContract ? "true" : "false"} {...register("clientnameinenglishlanguage", { required: true })}    className="mt-1" placeholder="التأمين"  type='text' onChange={(e=>setOffice(e.target.value))}/>
        {errors.internalmusanedContract?<span style={{backgroundColor:"pink"}}>{errors.internalmusanedContract.message}</span>:""}
        
        </Label>
        <Label>

          <span>رقم الهوية</span>
          <Input className="mt-1" aria-invalid={errors.nationalidnumber ? "true" : "false"} {...register("nationalidnumber", { required: true })}  placeholder="عقد مساند" type='text'/>
        {errors.nationalidnumber?<span style={{backgroundColor:"pink"}}>{errors.nationalidnumber.message}</span>:""}
      
        
        </Label>

        <Label className="mt-4">
          <span>رقم التواصل</span>
          <Input aria-invalid={errors.contacntnumber ? "true" : "false"} {...register("contacntnumber", { required: true })} className="mt-1" placeholder="رقم التأشيرة" />
        {errors.contacntnumber?<span style={{backgroundColor:"pink"}}>{errors.contacntnumber.message}</span>:""}
       
        </Label>
          <Label className="mt-4">
          <span>رقم الجواز</span>
          <Input aria-invalid={errors.passportnumber ? "true" : "false"} {...register("passportnumber", { required: true })} className="mt-1" placeholder="رقم التأشيرة" />
        {errors.passportnumber?<span style={{backgroundColor:"pink"}}>{errors.passportnumber.message}</span>:""}
       
        </Label>


<Label className="mt-4">
          <span>تاريخ دخول المملكة</span>
          <Input aria-invalid={errors.kingdomentrydate ? "true" : "false"} {...register("kingdomentrydate", { required: true })} className="mt-1" placeholder="رقم التأشيرة" />
        {errors.kingdomentrydate?<span style={{backgroundColor:"pink"}}>{errors.kingdomentrydate.message}</span>:""}
       
        </Label>





<Label className="mt-4">
          <span>تاريخ دخول المملكة</span>
          <Input aria-invalid={errors.kingdomentrydate ? "true" : "false"} {...register("kingdomentrydate", { required: true })} className="mt-1" placeholder="رقم التأشيرة" />
        {errors.kingdomentrydate?<span style={{backgroundColor:"pink"}}>{errors.kingdomentrydate.message}</span>:""}
       
        </Label>




<Label className="mt-4">
          <span>تاريخ اليوم</span>
          <Input aria-invalid={errors.daydate ? "true" : "false"} {...register("daydate", { required: true })} className="mt-1" placeholder="رقم التأشيرة" />
        {errors.daydate?<span style={{backgroundColor:"pink"}}>{errors.daydate.message}</span>:""}
       
        </Label>



<Label className="mt-4">
          <span>التكلفة</span>
          <Input aria-invalid={errors.cost ? "true" : "false"} {...register("cost", { required: true })} className="mt-1" placeholder="رقم التأشيرة" />
        {errors.cost?<span style={{backgroundColor:"pink"}}>{errors.cost.message}</span>:""}
       
        </Label>


<Label className="mt-4">
          <span>رقم جوال العاملة</span>
          <Input aria-invalid={errors.homemaidnumber ? "true" : "false"} {...register("homemaidnumber", { required: true })} className="mt-1" placeholder="رقم التأشيرة" />
        {errors.homemaidnumber?<span style={{backgroundColor:"pink"}}>{errors.homemaidnumber.message}</span>:""}
       
        </Label>

<Label className="mt-4">
          <span>ملاحظات</span>
        <Textarea  aria-invalid={errors.notes ? "true" : "false"} {...register("notes", { required: true })} cols={50} rows={5}/>
        </Label>  




      {/* </div> */}

        {/* </Label> */}
      </div>
  <Button type="submit" > <h2>Submit</h2>
</Button>

</form>} 
    </Layout>
  )
}

export default Waitinglist;
