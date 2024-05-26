import React, { useState } from 'react'

import { Input, HelperText, Label, Select, Textarea } from '@roketid/windmill-react-ui'
import CTA from 'example/components/CTA'
import PageTitle from 'example/components/Typography/PageTitle'
import SectionTitle from 'example/components/Typography/SectionTitle'

import Layout from 'example/containers/Layout'
import { MailIcon } from 'icons'



function Addadmin() {

  const [admin, setadmin] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [pictureurl, setpictureurl] = useState<string>('');
  const [username, setusername] = useState<string>('');
const [idnumber, setidnumber] = useState<string>('');
const [role, setrole] = useState<string>('');


  const handleSignUp = async (e: React.SyntheticEvent) => {
    
    e.preventDefault();
    //@ts-ignore
await fetch('../api/addadmin',{method:"post",headers: {
        "Content-Type": "application/json",
      },body:JSON.stringify({
admin,
password,
pictureurl,
idnumber,
role,
username

      })}).then(e=>
 
  e.text()
  // console.log(e.text())


).then(s=>
{  
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
  };



  return (
    <Layout>
      <PageTitle>اضافة مدير </PageTitle>
      

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label>
          <span>اسم المستخدم</span>
          <Input  className="mt-1" placeholder="اسم المستخدم"  type='text' onChange={(e=>setusername(e.target.value))}/>
        </Label>
        <Label>

          <span>الرقم السري</span>
          <Input className="mt-1" placeholder="الرقم السري"  type='password' onChange={(e=>setPassword(e.target.value))}/>
        </Label>
        <Label>

          <span>الرقم التعريفي للدخول</span>
          <Input className="mt-1" placeholder="الرقم التعريفي للدخول" type='number' onChange={(e=>setidnumber(e.target.value))}/>
        </Label>

        {/* <Label>

          <span>الرتبة</span>
          <Input className="mt-1" placeholder="الرقم التعريفي للدخول" type='number' onChange={(e=>setrole(e.target.value))}/>
        </Label> */}

        <Label className='mt-6'>
          <span>صورة شخصية </span>
                   <Input  className="file-input file-input-bordered file-input-sm w-full max-w-xs"  type='file' onChange={(e=>setpictureurl(e.target.value))}/>

        </Label>
      {/* </div> */}
        {/* </Label> */}


<Label>
  <span>الرتبة</span>
  <Select  style={{fontSize:"15px" }} >

    <option disabled >------</option>

    <option  >adminstrator</option>
    <option>supervisor</option>


  </Select>
</Label>

      </div>
    </Layout>
  )
}

export default Addadmin

