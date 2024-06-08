//@ts-ignore
//@ts-nocheck
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { Input, HelperText, Label, Select, Textarea, Button, Modal, ModalHeader, ModalBody, ModalFooter } from '@roketid/windmill-react-ui'
import CTA from 'example/components/CTA'
import PageTitle from 'example/components/Typography/PageTitle'
import SectionTitle from 'example/components/Typography/SectionTitle'

import Layout from 'example/containers/Layout'
import { MailIcon } from 'icons'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import dayjs from 'dayjs'



function Female() {

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
    client: yup.string().required(),
mobilenumber: yup.string().required(),
    nationalidnumber:yup.string().required(),
passportnumber:yup.string().required(),
homemaid:yup.string().required(),
nationality:yup.number(),
kingdomentrydate:yup.string(),
daydate:dayjs().get("year")+"-"+(dayjs().get("month")+1) +"-"+dayjs().get("D"), 
workduration:yup.number(),
newclientname:yup.string(),
newclientmobilenumber:yup.string(),
newclientnationalidnumber:yup.string(),
newclientcity:yup.date(),
experimentstart:yup.date(),
experimentend:yup.string(),
dealcost:yup.string(),
paid:yup.string(),
restofpaid:yup.string(),
experimentresult:yup.string(),
accomaditionnumber:yup.string(),

marketeername:yup.string(),



notes:yup.string()
})
  .required()


  const { register,formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  })

  const handleSignUp = async (e: React.SyntheticEvent) => {
    
    e.preventDefault();

  };
//@ts-ignore
const onSubmit = async (data) => {
  // console.log(errors)
  await fetch('../api/addtransfer',{method:"post",headers: {
        "Content-Type": "application/json",
      },body:JSON.stringify(data)}).then(e=>
 
  e.text()
  // console.log(e.text())


).then(s=>
{  
  openModal()
  console.log(s)
}
)
    
      .then((response) => {

        console.log(response);
        
        
        // router.replace('/example/dashboard');
      })
      .catch((error) => {
        console.log(error);
      });
}



// console.log(errors)
  return (

  
    <Layout>
      <CTA />
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
      {/* <SectionTitle>Elements</SectionTitle> */}
<form onSubmit={handleSubmit(onSubmit)}>
      <PageTitle>نقل كفالة </PageTitle>
       <div dir='rtl' style={{display:"grid",gridTemplateColumns: "auto auto auto",gap:"19px"}} className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <Label>
          <span>اسم العميل المستقدم</span>
          <Input aria-invalid={errors.clientname ? "true" : "false"} {...register("clientname", { required: true })} className="mt-1" placeholder="اسم العميل"  type='text' onChange={(e=>setOffice(e.target.value))}/>
        {errors.clientname?<span style={{backgroundColor:"pink"}}>{errors.clientname.message}</span>:""}
        </Label>
        <Label>

          <span>رقم جوال صاحب العمل المستقدم</span>
          <Input   aria-invalid={errors.mobilenumber ? "true" : "false"} {...register("mobilenumber", { required: true })}    className="mt-1" placeholder="التأمين"  type='text' onChange={(e=>setOffice(e.target.value))}/>
        {errors.mobilenumber?<span style={{backgroundColor:"pink"}}>{errors.mobilenumber.message}</span>:""}
        
        </Label>
        <Label>
 


          <span>رقم هوية المستقدم</span>
          <Input className="mt-1" aria-invalid={errors.nationalidnumber ? "true" : "false"} {...register("nationalidnumber", { required: true })}  placeholder="عقد مساند" type='text'/>
        {errors.nationalidnumber?<span style={{backgroundColor:"pink"}}>{errors.nationalidnumber?.message}</span>:""}
      
        
        </Label>

        <Label className="mt-4">
          <span>اسم العاملة</span>
          <Input aria-invalid={errors.homemaid ? "true" : "false"} {...register("homemaid", { required: true })} className="mt-1" placeholder="رقم التأشيرة" />
        {errors.homemaid?<span style={{backgroundColor:"pink"}}>{errors.homemaid.message}</span>:""}
      
        </Label>

        <Label className="mt-4">
          <span>الجنسية</span>
          <Input className="mt-1" placeholder="الجنسية" aria-invalid={errors.nationality ? "true" : "false"} {...register("nationality", { required: true })}/>
        {errors.nationality?<span style={{backgroundColor:"pink"}}>{errors.nationality.message}</span>:""}
        
        </Label>
        <Label className="mt-4">
          <span>تاريخ وصول المملكة</span>
          <Input className="mt-1" placeholder="تاريخ وصول المملكة"  aria-invalid={errors.kingdomentrydate ? "true" : "false"} {...register("kingdomentrydate", { required: true })}/>
        
        {errors.kindomentrydate?<span style={{backgroundColor:"pink"}}>{errors.kingdomentrydate.message}</span>:""}
        
        </Label>
        <Label className="mt-4">
          <span>المدة</span>
          <Input className="mt-1" placeholder="المدة" aria-invalid={errors.workduration ? "true" : "false"} {...register("workduration", { required: true })}/>
        
        {errors.workduartion?<span style={{backgroundColor:"pink"}}>{errors.workduartion.message}</span>:""}
        
        </Label><Label className="mt-4">
          <span>اسم العميل الجديد</span>
          <Input className="mt-1" placeholder="اسم العميل الجديد" aria-invalid={errors.newclientname ? "true" : "false"} {...register("newclientname", { required: true })}/>
        {errors.newclientname?<span style={{backgroundColor:"pink"}}>{errors.newclientname.message}</span>:""}
       
        </Label>
<Label className="mt-4">
          <span>رقم جوال العميل الجديد</span>
          <Input className="mt-1"  aria-invalid={errors.newclientmobilenumber ? "true" : "false"}  {...register("newclientmobilenumber", { required: true })} placeholder="رقم جوال العميل الجديد" />
        {errors.newclientmobilenumber?<span style={{backgroundColor:"pink"}}>{errors.newclientmobilenumber.message}</span>:""}
       
        </Label>
        
        <Label className="mt-4">
          <span>الهوية الوطنية الجديدة</span>
          <Input className="mt-1"  aria-invalid={errors.newclientnationalidnumber ? "true" : "false"}  {...register("newclientnationalidnumber", { required: true })} placeholder="رقم الهوية الجديدة" />
        {errors.newclientnationalidnumber?<span style={{backgroundColor:"pink"}}>{errors.newclientnationalidnumber.message}</span>:""}
        
        
        </Label>
        
        <Label className="mt-4">
          <span>مدينة العميل الجديد</span>
          <Input className="mt-1" placeholder="مدينة العميل الجديد" aria-invalid={errors.newclientcity ? "true" : "false"} {...register("newclientcity", { required: true })} />
        {errors.newclientcity?<span style={{backgroundColor:"pink"}}>{errors.newclientcity.message}</span>:""}
       
       
       
        </Label>



 <Label className="mt-4">
          <span>بداية التجربة</span>
          <Input className="mt-1" placeholder="بداية التجربة" aria-invalid={errors.experimentstart ? "true" : "false"} {...register("experimentstart", { required: true })} />
        {errors.experimentstart?<span style={{backgroundColor:"pink"}}>{errors.experimentstart.message}</span>:""}
       
       
       
        </Label>




 <Label className="mt-4">
          <span>نهاية التجربة</span>
          <Input className="mt-1" placeholder="نهاية التجربة" aria-invalid={errors.experimentstart ? "true" : "false"} {...register("experimentend", { required: true })} />
        {errors.experimentend?<span style={{backgroundColor:"pink"}}>{errors.experimentend.message}</span>:""}
       
       
       
        </Label>


 <Label className="mt-4">
          <span>التكلفة</span>
          <Input className="mt-1" placeholder="التكلفة" aria-invalid={errors.dealcost ? "true" : "false"} {...register("dealcost", { required: true })} />
        {errors.dealcost?<span style={{backgroundColor:"pink"}}>{errors.dealcost.message}</span>:""}
       
       
       
        </Label>





accomaditionnumber:yup.string(),

marketeername:yup.string(),



notes:yup.string()






        <Label className="mt-4">
          <span>المدفوع</span>
          <Input className="mt-1" placeholder="المدفوع" aria-invalid={errors.paid ? "true" : "false"} {...register("paid", { required: true })} />
        {errors.paid?<span style={{backgroundColor:"pink"}}>{errors.paid.message}</span>:""}
      
      
        </Label>



 <Label className="mt-4">
          <span>المتبقى من المدفوع</span>
          <Input className="mt-1" placeholder="المتبقي من المدفوع" aria-invalid={errors.restofpaid ? "true" : "false"} {...register("restofpaid", { required: true })} />
        {errors.restofpaid?<span style={{backgroundColor:"pink"}}>{errors.restofpaid.message}</span>:""}
      
      
        </Label>



 <Label className="mt-4">
          <span>نتيجة التجربة</span>
          <Input className="mt-1" placeholder="نتيجة التجربة" aria-invalid={errors.experimentresult ? "true" : "false"} {...register("experimentresult", { required: true })} />
        {errors.experimentresult?<span style={{backgroundColor:"pink"}}>{errors.experimentresult.message}</span>:""}
      
      
        </Label>











         <Label className="mt-4">
          <span>رقم الاقامة</span>
          <Input className="mt-1" placeholder="المدفوع" aria-invalid={errors.accomaditionnumber ? "true" : "false"} {...register("accomaditionnumber", { required: true })} />
        {errors.accomaditionnumber?<span style={{backgroundColor:"pink"}}>{errors.accomaditionnumber.message}</span>:""}
      
      
        </Label>










         <Label className="mt-4">
          <span>اسم المسوق</span>
          <Input className="mt-1"  aria-invalid={errors.marketeername ? "true" : "false"} {...register("marketeername", { required: true })} />
        {errors.marketeername?<span style={{backgroundColor:"pink"}}>{errors.marketeername.message}</span>:""}
      
      
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

</form>
 
    </Layout>
  )
}

export default Female;
