import React from 'react'
import Image from 'next/image'
import {Circle, CheckCircle2 } from "lucide-react"

export default function HowItWorks() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-sm font-medium uppercase tracking-wider inline-block pb-1 mb-2">
          <Image src="/how.png" alt='' width={200} height={200}/>
        </h2>
        <h1 className="mt-2 text-3xl font-semibold text-blue-500 sm:text-4xl lg:text-5xl">Empower Employes and </h1>
        <h1 className="text-3xl font-semibold text-blue-900 sm:text-4xl lg:text-5xl">Automate HR Process</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Donec tempor risus ut magna egestas, ut placerat ligula 
          aliquet. Morbi fermentum felis in urna suscipit.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-12 mr-10">
      <div className="flex flex-col md:flex-row  p-4">
       <div className="bg-blue-50 md:w-1/2 max-w-md mx-auto mb-8 md:mb-0">
            <header className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
               <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center">
                    <Image src="/circle.png" alt='' width={20} height={20}/>
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
                <div className="w-16 h-2 bg-blue-400 rounded"></div>
                <div className="w-8 h-2 bg-blue-400 rounded"></div>
              </div>
              <div className="flex items-center space-x-4">
                  <Image src="/bell.png" alt='' width={27} height={25}/>
                  <div><Image src="/ahad.png" alt='' width={25} height={25}/></div>
              </div>
            </header>

        <div className="bg-white rounded-b-lg shadow-md p-4 mb-4">
          <div className="flex items-center mb-4">
            <div className="mr-3">
              <Image src="/ahad.png" alt="Syed Ahad" width={40} height={40} className="rounded-full" />
            </div>
            <div>
              <h2 className="font-bold text-blue-700">Syed Ahad</h2>
              <p className="text-sm text-gray-600">Web Development</p>
            </div>
          </div>

          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckCircle2 className="text-green-500 mr-2" size={20} />
              <span className="text-sm">Ask candidate if they want Mac or Windows</span>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="text-green-500 mr-2" size={20} />
              <span className="text-sm">Invite candidate to our next team lunch</span>
            </li>
            <li className="flex items-center">
              <Circle className="text-gray-300 mr-2" size={20} />
              <span className="text-sm text-blue-600">Collecting Documents</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center">
            <div className="mr-3">
              <Image src="/ahad.png" alt="Syed Ahmed" width={40} height={40} className="rounded-full" />
            </div>
            <div>
              <h2 className="font-bold text-blue-600">Syed Ahmed</h2>
              <p className="text-sm text-gray-600">Product Designer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-6 md:pl-8">
        <h2 className="text-[#0f47a6] text-2xl md:text-3xl font-bold">
          Create a Great Experience Before and After Joining
        </h2>
        <p className="text-gray-600">
          Donec tempor risus ut magna egestas, ut placerat ligula aliquet. Morbi fermentum felis in urna suscipit, non tincidunt lorem malesuada.
        </p>  
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
        </p>
      </div>
      </div>
      </div>
    </div>
  )
}