import React from "react"
import { Link } from "gatsby"

import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5"

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between bg-sadi-blue-700 py-10 px-3 md:p-4 w-full text-white font-sans">
      {/* Logos Social Media */}
      <div className="flex flex-row justify-evenly md:justify-evenly mb-5 md:my-auto font-semibold">
        <a
          href="https://www.linkedin.com/in/kennkibadi/"
          target="__blank"
          className="flex flex-row justify-center mx-3 text-white hover:text-turbo-500"
        >
          <div className="text-xl lg:text-2xl">
            <IoLogoLinkedin />
          </div>
          <h1 className="text-sm md:text-md my-auto mx-1 font-sans">
            LinkedIn
          </h1>
        </a>
        <a
          href="https://twitter.com/KennKIBADI"
          target="__blank"
          className="flex flex-row justify-center mx-3 text-white hover:text-turbo-500"
        >
          <div className="text-xl lg:text-2xl">
            <IoLogoTwitter />
          </div>
          <h1 className="text-sm md:text-md my-auto mx-1 font-sans">Twitter</h1>
        </a>

        <a
          href="https://github.com/KennStack01"
          target="__blank"
          className="flex flex-row justify-center mx-3 text-white hover:text-turbo-500"
        >
          <div className="text-xl lg:text-2xl">
            <IoLogoGithub />
          </div>
          <h1 className="text-sm md:text-md my-auto mx-1 font-sans">Github</h1>
        </a>
      </div>

      <div className="md:my-auto my-5 text-sm md:text-md">
        © {new Date().getFullYear()}, {"  "}
        <Link to="/services" className="font-medium hover:text-yellow-500">
          {" "}
          SADI sarl Business
        </Link>
      </div>
    </footer>
  )
}

export default Footer
