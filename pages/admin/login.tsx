
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getSession, signIn, signOut, useSession } from 'next-auth/react';
import { Label, Input, Button, WindmillContext } from '@roketid/windmill-react-ui'
import { GithubIcon, TwitterIcon} from 'icons'
import { useRouter } from 'next/router';
import { user } from 'utils/usercontext';

      //@ts-ignore

function LoginPage() {

const router = useRouter()
  const { mode } = useContext(WindmillContext)
  const imgSource = mode === 'dark' ? '/assets/img/rpng.png' : '/assets/img/rpng.png'

const userinfo=useContext(user)

  const { data: session } = useSession();
  console.log('Session: ', session);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignIn = async (e: React.SyntheticEvent) => {
    
    e.preventDefault();
    //@ts-ignore
await fetch('../api/signin',{method:"post",headers: {
        "Content-Type": "application/json",
      },body:JSON.stringify({
        email: "ssss"
      })}).then(e=>
 
  e.text()
  // console.log(e.text())


).then(s=>
{  
  console.log(s)
}
)
    // console.log('Email: ', email);
     await signIn('credentials', {
      redirect: false,
      email:"heshamahmedbadr@gmail.com"
      // password,
    })
      .then((response) => {

        console.log(response);
        
        
        // router.replace('/example/dashboard');
      })
      .catch((error) => {
        console.log(error);
      });
  };

      //@ts-ignore

  return (
    <div className='flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900'>
      <div className='flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800'>
        <div className='flex flex-col overflow-y-auto md:flex-row'>
          <div className='relative h-32 md:h-auto md:w-1/2'>
            <Image


aria-hidden='true'
              className='hidden object-scale-down w-full h-full'
              src={imgSource}
              alt='شعار روائس القمم'
              layout='fill'
            />
          </div>
          <main className='flex items-center justify-center p-6 sm:p-12 md:w-1/2'>
            <div className='w-full'>
              <h1 className='mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200'>
                Admin Login Page
              </h1>
              <Label className='font-serif'>
                <h1 >ID number</h1>
                <Input
                  className='mt-1'
                  type='text'
                  placeholder='ID number'
                />
              </Label>

              <Label className='mt-4'>
                <span>OTP</span>
                <Input
                  className='mt-1'
                  type='text'
                  placeholder='OTP'
                />
              </Label>

              <Link href='/example/login' passHref={true}>
                     {/* //@ts-ignore */}
                <Button className='mt-4' onClick={handleSignIn} block style={{backgroundColor:"#003749"}}>
                  Log in
                </Button>
              </Link>

              <hr className='my-8' />

              
              <Button className='mt-4' block layout='outline'>
                <TwitterIcon className='w-4 h-4 mr-2' aria-hidden='true' />
                Twitter
              </Button>

              <p className='mt-4' >
                <Link href='/example/forgot-password'>
                  <a style={{color:"#003749"}} className='text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline'>
                    اتصل بنا
                  </a>
                </Link>
              </p>
              <p className='mt-1'>
                <Link href='/example/create-account'>
                  <a style={{color:"#003749"}} className='text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline'>
                    تسجيل حساب
                  </a>
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
// getSession
// getServerSideProps


//@ts-ignore
export const getServerSideProps: GetServerSideProps = async (
//@ts-ignore
  
  context
) => {
  const session = await getSession(context);
console.log(context)
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permananet: false,
  //     },
  //   };
  // }

  return {
    props: { session },
  };
};


export default LoginPage
