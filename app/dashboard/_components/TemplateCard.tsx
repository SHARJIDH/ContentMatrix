import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

function TemplateCard(item:TEMPLATE) {
  return (
    <Link href={'/dashboard/content/'+item?.slug}>
      <div className='p-5 shadow-md rounded-md border bg-[##8328D3] dark:bg-primary dark:border-primary-foreground
      flex flex-col gap-3  bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900
        dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-700  cursor-pointer h-full hover:scale-105 transition-all'>
          <Image src={item.icon} alt='icon' 
          width={50} height={50} />
          <h2 className='font-bold text-gray-100 text-lg'>{item.name}</h2>
          <p className='text-gray-300 line-clamp-3'>{item.desc}</p>
      </div>
    </Link>
  )
}

export default TemplateCard