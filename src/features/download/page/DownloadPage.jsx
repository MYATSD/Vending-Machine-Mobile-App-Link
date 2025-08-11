import Container from '@/components/Container'
import React from 'react'

const DownloadPage = () => {
  return (

    <Container>


      <section>

       <div className='md:flex gap-5 '>
       <div className='order-2 md:mt-40'>
         <h1 className='font-bold  text-xl sm:text-2xl md:text-5xl lg:text-7xl text-center '>Download This App</h1>
         <p className='font-medium text-md mt-10 px-5'>Download the latest version of our application to enjoy improved features, enhanced performance, and a smoother experience. Click the button below to start your download instantly. Ensure that your device meets the system requirements before installation. All files are verified and safe to use, giving you a secure and reliable setup process.</p>
         <button className='w-40 h-14 mx-5 mt-10 bg-blue-500 font-bold text-xl text-white rounded-md'>Download</button>
       </div>
         <img src="/assets/mobile-app-download.jpg" alt=""  className=''/>
       </div>

      </section>
    </Container>

  )
}

export default DownloadPage