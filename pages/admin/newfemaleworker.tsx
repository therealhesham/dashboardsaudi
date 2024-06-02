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
import { AntCloudOutlined } from '@ant-design/icons'



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
    clientname: yup.string().required(),
insurance: yup.string().required(),
    musanedContract:yup.string().required(),
visanumber:yup.string().required(),
idnumber:yup.string().required(),
mobilenumber:yup.number(),
passportnumber:yup.string(),
workername:yup.string(),
age:yup.number(),
experience:yup.string(),
contractstatus:yup.string(),
city:yup.string(),
orderDate:yup.date(),
dayDate:yup.date(),
duration:yup.string(),
externaloffice:yup.string(),
nationality:yup.string(),
externalmusanedcontract:yup.string(),
visaordernumber:yup.string(),
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
  const fetcher = await fetch('../api/addfemaleworker',{method:"post",headers: {'Accept':'application/json',
        "Content-Type": "application/json",
      },body:JSON.stringify(data)})
      const e= await fetcher.text()
if(fetcher.status == 200) return openModal;

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
      <PageTitle>اضافة عمالة نسائية </PageTitle>
       <div dir='rtl' style={{display:"grid",gridTemplateColumns: "auto auto auto",gap:"19px"}} className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>اسم العميل</span>
          <Input aria-invalid={errors.clientname ? "true" : "false"} {...register("clientname", { required: true })} className="mt-1" placeholder="اسم العميل"  type='text' onChange={(e=>setOffice(e.target.value))}/>
        
        </Label>
        <Label>

          <span>التأمين</span>
          <Input   aria-invalid={errors.insurance ? "true" : "false"} {...register("insurance", { required: true })}    className="mt-1" placeholder="التأمين"  type='text' onChange={(e=>setOffice(e.target.value))}/>
        
        </Label>
        <Label>

          <span>عقد مساند</span>
          <Input className="mt-1" aria-invalid={errors.musanedContract ? "true" : "false"} {...register("musanedContract", { required: true })}  placeholder="عقد مساند" type='text'/>
      
        
        </Label>

        <Label className="mt-4">
          <span>رقم التأشيرة</span>
          <Input aria-invalid={errors.visanumber ? "true" : "false"} {...register("visanumber", { required: true })} className="mt-1" placeholder="رقم التأشيرة" />
        </Label>

        <Label className="mt-4">
          <span>رقم الهوية</span>
          <Input className="mt-1" placeholder="رقم الهوية" aria-invalid={errors.idnumber ? "true" : "false"} {...register("idnumber", { required: true })}/>
        </Label>
        <Label className="mt-4">
          <span>رقم الجوال</span>
          <Input className="mt-1" placeholder="رقم الجوال"  aria-invalid={errors.mobilenumber ? "true" : "false"} {...register("mobilenumber", { required: true })}/>
        </Label><Label className="mt-4">
          <span>رقم الجواز</span>
          <Input className="mt-1" placeholder="رقم الجواز" aria-invalid={errors.passportnumber ? "true" : "false"} {...register("passportnumber", { required: true })}/>
        </Label><Label className="mt-4">
          <span>اسم العاملة</span>
          <Input className="mt-1" placeholder="رقم اسم العاملة" aria-invalid={errors.workername ? "true" : "false"} {...register("workername", { required: true })}/>
        </Label>
<Label className="mt-4">
          <span>العمر</span>
          <Input className="mt-1"  aria-invalid={errors.age ? "true" : "false"}  {...register("age", { required: true })} placeholder="العمر" />
        </Label><Label className="mt-4">
          <span>الخبرة العملية</span>
          <Input className="mt-1" placeholder="الخبرة العملية" aria-invalid={errors.experience ? "true" : "false"} {...register("experience", { required: true })} />
        </Label><Label className="mt-4">
          <span>حالة العقد</span>
          <Input className="mt-1" placeholder="حالة العقد" aria-invalid={errors.contractstatus ? "true" : "false"} {...register("contractstatus", { required: true })} />
        </Label>

<Label className="mt-4">
          <span>المدينة</span>
          <Input className="mt-1" placeholder="المدينة" aria-invalid={errors.city ? "true" : "false"} {...register("city", { required: true })} />
        </Label>
        <Label className="mt-4">
          <span>تاريخ تقديم الطلب</span>
          <Input className="mt-1" placeholder="تاريخ تقديم الطلب"  type="date" aria-invalid={errors.orderDate ? "true" : "false"} {...register("orderDate", { required: true })}/>
        </Label>
  <Label className="mt-4">
          <span>تاريخ اليوم</span>
          <Input className="mt-1"     aria-invalid={errors.dayDate ? "true" : "false"} {...register("dayDate", { required: true })}  placeholder="تاريخ اليوم"  type="date" />
        </Label>  
        <Label className="mt-4">
          <span>مدة التقديم</span>
          <Input className="mt-1" placeholder="مدة التقديم" aria-invalid={errors.duration ? "true" : "false"} {...register("duration", { required: true })} type="date" />
        </Label>  
<Label className="mt-4">
          <span>المكتب الخارجي</span>
          <Input className="mt-1"   aria-invalid={errors.externaloffice ? "true" : "false"} {...register("externaloffice", { required: true })} placeholder="المكتب الخارجي"  type="text" />
        </Label>  



<Label className="mt-4">
          <span>الجنسية</span>
          <Input className="mt-1" placeholder="الجسنية" aria-invalid={errors.nationality ? "true" : "false"} {...register("nationality", { required: true })}  type="text" />
        </Label>  

<Label className="mt-4">
          <span>عقد مساند الخارجي</span>
          <Input className="mt-1" aria-invalid={errors.externalmusanedcontract ? "true" : "false"} {...register("externalmusanedcontract", { required: true })} placeholder="عقد مساند الخارجي"  type="text" />
        </Label>  

<Label className="mt-4">
          <span>رقم طلب التأشيرة</span>
          <Input className="mt-1" aria-invalid={errors.visaordernumber ? "true" : "false"} {...register("visaordernumber", { required: true })} placeholder="رقم طلب التأشيرة"  type="text" />
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
