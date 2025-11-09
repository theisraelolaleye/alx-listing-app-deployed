import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Apartments in Dubai", href: "/explore/apartments-dubai" },
      { label: "Hotels in New York", href: "/explore/hotels-new-york" },
      { label: "Villa in Spain", href: "/explore/villa-spain" },
      { label: "Mansion in Indonesia", href: "/explore/mansion-indonesia" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/company/about" },
      { label: "Blog", href: "/company/blog" },
      { label: "Career", href: "/company/career" },
      { label: "Customers", href: "/company/customers" },
      { label: "Brand", href: "/company/brand" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Support", href: "/help/support" },
      { label: "Cancel booking", href: "/help/cancel-booking" },
      { label: "Refunds Process", href: "/help/refunds" },
    ],
  },
];


const Footer = () => {
  return (
    <footer className=''>

      <div className=' h-6 w-full bg-[#34967C] '>

      </div>


      <div className=' bg-[#222222] w-full font-medium leading-6 lg:px-16 px-6 mx-auto pt-10 pb-14 md:pb-5 lg:pb-6 '>

        <div className=' flex lg:flex-row flex-col justify-between lg:gap-[150px] md:gap-16 gap-8 '>

          <div className=' max-w-[600px]  '>
            <Image src="/logo.svg" alt="ALX Logo" width={60} height={30} className=' mb-6 ' />
            <p className=' text-sms '>ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.</p>
          </div>

          <div className=' ml-auto flex max-w-[793px] w-full justify-between flex-wrap '>
            {footerLinks.map((section) => (
              <div key={section.title} className=' flex-wrap shrink-0  md:w-[160px] w-[140px] '>
                <h3 className=' font-bold lg:text-2xl mb-4 '>{section.title}</h3>

                <ul className=' space-y-2 '>
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className=' hover:underline lg:text-base text-xs  '>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        <div className=' flex flex-col lg:flex-row justify-center lg:justify-between md:gap-y-10 gap-y-7 text-center border-t border-[#444444] mt-24 md:mt-14 lg:mt-20 pt-5 md:pt-11 lg:pt-4   ' >
          {/* <div className=' flex lg:flex-row flex-col text-center lg:justify-between justify-center lg:mt-20 mt-24  text-[#CACACA] py-4 border-t border-[#444444]  ' > */}

          <p className=' leading-6 font-medium '>Some hotel requires you to cancel more than 24 hours before check-in. Details <Link href={"/"} className=' text-[#34967C]' >here</Link></p>

          <div className=' flex justify-center gap-6 md:gap-9 text-xs md:text-base  '>
            {/* <div className='flex w-full md:max-w-lg mx-auto lg:justify-end gap-10 text-sm '> */}
            <Link href={"/"}>Term of Service</Link>
            <Link href={"/"}>Policy Service</Link>
            <Link href={"/"}>Cookie Policy</Link>
            <Link href={"/"} className=' hidden lg:block ' >Partners</Link>
          </div>
        </div>
      </div>

    </footer>


  )
}

export default Footer