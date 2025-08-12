import Container from '@/components/Container'
import React from 'react'
import DownloadPageLayout from '../components/DownloadPageLayout'

const DownloadPage = () => {
  return (
<DownloadPageLayout>

  
    <Container>


      <section className=' '>

       <div className='flex flex-col lg:flex lg:flex-row md:gap-5 '>
         {/* <h1 className='font-bold  text-2xl sm:text-2xl md:text-5xl lg:text-7xl text-center md:hidden block '>Download This App</h1> */}
       <div className=' lg:order-2 mt-5 lg:mt-40'>
         <h1 className='font-bold  text-4xl  md:text-5xl lg:text-7xl text-center  '>Download This App</h1>
         <p className='font-medium text-md mt-10 px-5 hidden md:block'>Download the latest version of our application to enjoy improved features, enhanced performance, and a smoother experience. Click the button below to start your download instantly. Ensure that your device meets the system requirements before installation. All files are verified and safe to use, giving you a secure and reliable setup process.</p>
         <p className='font-medium text-sm mt-5 px-5 block md:hidden'>Download the latest version of our application to enjoy improved features, enhanced performance, and a smoother experience. Click the button below to start your download instantly. </p>

        <div className='w-28 text-center flex items-center justify-center  lg:w-36 h-10 lg:h-12 bg-blue-500 mx-5 mt-5 lg:mt-10  font-bold text-md md:text-xl text-white rounded-md'>
                   <a href='/files/base.apk' download className=' '>Download</a>

        </div>
       </div>
         <img src="/assets/mobile-app-download.jpg" alt=""  className=''/>
       </div>

      </section>
    </Container>
</DownloadPageLayout>

  )
}

export default DownloadPage