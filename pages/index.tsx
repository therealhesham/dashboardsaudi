import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Label, Input, Button, WindmillContext } from '@roketid/windmill-react-ui'
import { GithubIcon, TwitterIcon} from 'icons'

function LoginPage() {
  const { mode } = useContext(WindmillContext)
  const imgSource = mode === 'dark' ? '/assets/img/rpng.png' : '/assets/img/rpng.png'

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
                Login
              </h1>
              <Label>
                <span>Email</span>
                <Input
                  className='mt-1'
                  type='email'
                  placeholder='Email Address'
                />
              </Label>

              <Label className='mt-4'>
                <span>Password</span>
                <Input
                  className='mt-1'
                  type='password'
                  placeholder='***************'
                />
              </Label>

              <Link href='/admin' passHref={true}>
                <Button className='mt-4' block style={{backgroundColor:"#003749"}}>
                  Log in
                </Button>
              </Link>

     
              <hr className='my-8' />

              <Button block layout='outline'>
                {/* <GithubIcon className='w-4 h-4 mr-2' aria-hidden='true' /> */}
                visit us on Facebook
              </Button>
              <Button className='mt-4' block layout='outline'>
                <TwitterIcon className='w-4 h-4 mr-2' aria-hidden='true' />
                visit us on Twitter
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

export default LoginPage
