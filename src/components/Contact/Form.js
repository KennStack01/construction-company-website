/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { BiMailSend } from "react-icons/bi"

const Form = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center">Contactez-nous 👇</h1>
      <div className="flex items-center w-full">
        <div className="w-full bg-white shadow rounded p-8 m-4 md:max-w-sm md:mx-auto">
          <form
            className="mb-4 md:flex md:flex-wrap md:justify-between"
            method="post"
            action={`https://getform.io/f/1179f6c4-451a-4658-aef8-51f1689df515`}
          >
            <div className="flex flex-col mb-4 md:w-full text-sm">
              <label
                className="mb-2 tracking-wide font-bold text-sm text-gray-800"
                htmlFor="first_name"
              >
                Votre Nom
              </label>
              <input
                className="py-2 px-3 rounded-sm text-gray-800 border focus:outline-none focus:ring-2 focus:ring-sadi-blue-600 focus:ring-opacity-50"
                type="text"
                name="first_name"
                id="first_name"
                placeholder="Tshilumba Jean-Baptiste"
                required
              />
            </div>
            <div className="flex flex-col mb-4 md:w-full text-sm">
              <label className="mb-2 font-bold text-gray-800" htmlFor="email">
                Votre Adresse e-mail
              </label>
              <input
                className="py-2 px-3 rounded-sm text-gray-800 border focus:outline-none focus:ring-2 focus:ring-sadi-blue-600 focus:ring-opacity-50"
                type="email"
                name="email"
                id="email"
                placeholder="partenaire@gmail.com"
                required
              />
            </div>

            <div className="flex flex-col mt-4 md:w-full text-sm">
              <label
                className="mb-2 font-bold text-sm text-gray-800"
                htmlFor="message"
              >
                Votre Message
              </label>
              <textarea
                name="message"
                id="message"
                className="resize-none p-1 h-36 rounded focus:outline-none border focus:ring-2 focus:ring-sadi-blue-600 focus:ring-opacity-50"
                placeholder="Décrivez votre message"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="mt-10 md:mx-auto">
              <button
                type="submit"
                className="flex flex-row mx-auto justify-evenly text-white bg-sadi-blue-500 hover:bg-sadi-blue-600 font-bold py-4 md:py-2 px-6 text-xl rounded-md"
              >
                <h2 className="my-auto">Envoyez {` `}</h2>
                <BiMailSend className="text-3xl my-auto" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
