import "./index.css"
import {useState, Fragment} from "react"
import {Button, MenuItem} from "../Styled"
import { Link, useNavigate } from "react-router-dom"
import Cookies from "universal-cookie"
import {motion, AnimatePresence} from "framer-motion"
import { Dialog, Transition } from '@headlessui/react';
function Avatar() {
    const navigate=useNavigate()
    let [isOpen, setIsOpen] = useState(false)
   const[toggleMenu, setToggleMenu]=useState(false)
   function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
    showHideMenu()
  }
    const showHideMenu=()=>{
        setToggleMenu(!toggleMenu)
    }
    const logout=()=>{
        console.log("loggingout")
        const cookie=new Cookies()
        cookie.remove("token")
        navigate("/app/login/")
    }
    return ( <div className="avatarCon"><div className="avatar" onClick={showHideMenu}>
        {/*<Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <div className="fixed inset-0 flex items-center justify-center p-4">
      <Dialog.Panel>
        <Dialog.Title className="w-full max-w-sm rounded bg-white">Log out account</Dialog.Title>
        <Dialog.Description>
          This will log out from your account. You need to login again to enter the application. </Dialog.Description>

        <p>
          Are you sure you want to Logout?
        </p>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
        <button onClick={logout}>Deactivate</button>
      </Dialog.Panel>
      </div>
</Dialog>*/}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We've sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      
    </div>  <AnimatePresence mode="wait">
    {toggleMenu&& <motion.div
    initial={{ y: 30 ,opacity:0}}
    animate={{ y: 0 ,opacity:1}}
    exit={{ y: 30 ,opacity:0}}
    transition={{ duration: 0.5 }}
    className="menu"><MenuItem ><Link to="/app/passenger/settings">Settings</Link></MenuItem> <hr/> <MenuItem $red onClick={openModal}>Logout</MenuItem></motion.div>}
    </AnimatePresence>
    </div> );
}

export default Avatar;