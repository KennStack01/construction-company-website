import React from "react"
import { RiPhoneFill } from "react-icons/ri"
import { HiOutlineMail } from "react-icons/hi"
import { AiOutlineFieldTime } from "react-icons/ai"

const ContactBarInfo = () => {
  return (
    <div className="flex flex-row justify-center bg-white p-2 w-full text-sadi-blue-600 text-xs">
      <div className="flex flex-row mx-2 md:mx-4">
        <div className="my-auto text-xl mx-2">
          <RiPhoneFill />
        </div>
        <div className="my-auto flex flex-col">
          <h5 className="">Appelez-nous</h5>
          <p className="font-semibold">+1 (123) 456-7890</p>
        </div>
      </div>
      <div className="flex flex-row mx-2 md:mx-4">
        <div className="my-auto text-xs">
          <div className="my-auto text-xl mx-2">
            <HiOutlineMail />
          </div>
        </div>
        <div className="my-auto flex flex-col">
          <h5>Envoyez un e-mail</h5>
          <p className="font-semibold">info@gmail.com</p>
        </div>
      </div>
      <div className="flex flex-row mx-2 md:mx-4">
        <div className="my-auto text-2xl mx-2">
          <AiOutlineFieldTime />
        </div>
        <div className="my-auto flex flex-col">
          <h5>Disponible</h5>
          <p className="font-semibold">Lun-Sam: 8h00 - 16h00</p>
        </div>
      </div>
    </div>
  )
}

export default ContactBarInfo
