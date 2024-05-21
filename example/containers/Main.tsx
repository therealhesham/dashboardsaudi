/* @ts-ignore */

import React from 'react'
import RoundIcon from 'example/components/RoundIcon';
import { TwitterIcon } from 'icons';
import { TwitchOutlined, TwitterOutlined } from '@ant-design/icons';
interface IMain{
  children: React.ReactNode
}

function Main({ children }: IMain) {
  return (
    <main className="h-full overflow-y-auto">
      <div className="container grid px-6 mx-auto">{children}</div>
    
    
                                        <footer className="rounded-xl bg-gray-100">
  <div className="container m-auto space-y-8 px-6 py-16 text-gray-600 md:px-12 lg:px-20">
    <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-8">
      <img
        width="100"
        height="42"
        src="https://res.cloudinary.com/duo8svqci/image/upload/v1716302380/dkqowbgajxgcy8auxskm.svg"
        alt="rawaeslogo"
        className="w-32"
      />
      <div className="flex gap-6">
        <a href="#" target="blank" aria-label="github" className="hover:text-cyan-600">
          <link rel="shortcut icon" href="https://res.cloudinary.com/duo8svqci/image/upload/v1716302380/dkqowbgajxgcy8auxskm.svg" /> 
        </a>
        {/* <a href="#" target="blank" aria-label="twitter" className="hover:text-cyan-600"> */}
       {/* <h1> */}
{/* <RoundIcon icon={}/> */}
       {/* <TwitterIcon/> */}
 <TwitterOutlined />
 
       {/* </h1> */}
        {/* </a> */}
        <a href="#" target="blank" aria-label="medium" className="hover:text-cyan-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-medium"
            viewBox="0 0 16 16"
          >
            <path
              d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"
            />
          </svg>
        </a>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      <div>
        <h6 className="text-lg font-medium text-cyan-900">Company</h6>
        <ul className="mt-4 list-inside space-y-4">
          <li>
            <a href="#" className="transition hover:text-cyan-600">About</a>
          </li>
          <li>
            <a href="#" className="transition hover:text-cyan-600">Customers</a>
          </li>
          <li>
            <a href="#" className="transition hover:text-cyan-600">Enterprise</a>
          </li>
          <li>
            <a href="#" className="transition hover:text-cyan-600">Partners</a>
          </li>
          <li>
            <a href="#" className="transition hover:text-cyan-600">Jobs</a>
          </li>
        </ul>
      </div>
      <div>
        <h6 className="text-lg font-medium text-cyan-900">Products</h6>
        <ul className="mt-4 list-inside space-y-4">
          <li>
            <a href="#" className="transition hover:text-cyan-600">About</a>
          </li>
          <li>
            <a href="#" className="transition hover:text-cyan-600">Customers</a>
          </li>
          <li>
            <a href="#" className="transition hover:text-cyan-600">Enterprise</a>
          </li>
          <li>
            <a href="#" className="transition hover:text-cyan-600">Partners</a>
          </li>
          <li>
            <a href="#" className="transition hover:text-cyan-600">Jobs</a>
          </li>
        </ul>
      </div>
      <div>
        <h6 className="text-lg font-medium text-cyan-900">Developers</h6>
        <ul className="mt-4 list-inside space-y-4">
          <li>
            <a href="#" className="transition hover:text-cyan-600">About</a>
          </li>
          <li>
            <a href="#" className="transition hover:text-cyan-600">Customers</a>
          </li>
          <li>
            <a href="#" className="transition hover:text-cyan-600">Enterprise</a>
          </li>
          <li>
            <a href="#" className="transition hover:text-cyan-600">Partners</a>
          </li>
          <li>
            <a href="#" className="transition hover:text-cyan-600">Jobs</a>
          </li>
        </ul>
      </div>
      <div>
        <h6 className="text-lg font-medium text-cyan-900">Ressources</h6>
        <ul className="mt-4 list-inside space-y-4">
          <li>
            <a href="#" className="transition hover:text-cyan-600">About</a>
          </li>
          <li>
            <a href="#" className="transition hover:text-cyan-600">Customers</a>
          </li>
          <li>
            <a href="#" className="transition hover:text-cyan-600">Enterprise</a>
          </li>
          <li>
            <a href="#" className="transition hover:text-cyan-600">Partners</a>
          </li>
          <li>
            <a href="#" className="transition hover:text-cyan-600">Jobs</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="flex justify-between rounded-md bg-gray-200 px-4 py-3 text-gray-600">
      <span>&copy; tailus <span id="year"></span></span>
      <a href="#" className="font-medium transition hover:text-cyan-600">Licence</a>
    </div>
  </div>
</footer>

                                    
    </main>
  );
}

export default Main
