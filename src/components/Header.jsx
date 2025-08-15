import React from 'react'
import Container from './Container'

const Header = () => {
  return (
   <Container>

     <header className=" px-5 sm:px-0 py-3 border-b border-stone-200 sticky top-0 z-50 bg-white">
      <div className=" flex justify-between items-center">
        <div className=" flex items-center">
          <div className=" flex items-end gap-3">
            <img
              src={'/assets/Menstruation.png'}
              className="h-16"
              alt=""
            />
            {/* <h1 className="text-xl font-bold leading-tight tracking-tight text-stone-900  md:text-3xl dark:text-white">
              Vending Machine
            </h1> */}
          </div>
        </div>
        <a  href='/dashboard' className=" flex gap-3 items-center">
          <img
           src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
            alt="account photo"
            className="border-2 border-white shadow-sm size-12 rounded-full object-cover object-top"
          />
          <div>
            <p  className="font-bold text-wrap"> Dashboard</p>
           
          </div>
          {/* <LogoutButton> Logout </LogoutButton> */}
        </a>
      </div>
    </header>
   </Container>
  )
}

export default Header