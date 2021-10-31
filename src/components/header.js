import React from "react"
import { Link } from "gatsby"
import { useState } from "react"
import cn from "classnames"
import { CgMenuCheese, CgClose } from "react-icons/cg"
import { StaticImage } from "gatsby-plugin-image"

const activeLinkStyles = {
  borderBottomWidth: "thick",
  borderColor: "#E2DF00",
  cursor: "pointer",
  marginBottom: "1px",
}

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full text-back-color-600 bg-white shadow-sm p-2">
      <div className="flex flex-row justify-between mx-2 md:mx-4">
        <div className="flex items-center">
          <Link to="/">
            <div style={{ maxWidth: `120px`, marginBottom: `1.45rem` }}>
              <StaticImage src="../images/sadi-logo.png" alt="SADI SARL Logo" />
            </div>
          </Link>
        </div>

        <button
          className="items-center block px-3 py-2 my-auto  border rounded lg:hidden"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          {mobileMenuIsOpen ? <CgClose /> : <CgMenuCheese />}
        </button>

        <div className="my-auto hidden lg:flex flex-row justify-between">
          <ul
            className={cn(
              // "sm:grid grid-cols-2 my-auto md:mt-2 z-10 hidden lg:flex lg:flex-row lg:items-center md:justify-center text-sm w-full md:w-auto",
              "flex flex-row items-center justify-center text-md mt-2"
              // mobileMenuIsOpen ? `block` : `hidden`
            )}
          >
            {[
              { title: "Accueil", route: "/" },
              { title: "Services", route: "/services" },
              { title: "Réalisations", route: "/realisations" },
              { title: "Actualités", route: "/actu" },
            ].map(({ route, title }) => (
              <li
                className="mt-3 md:mt-0 md:ml-6 font-bold hover:bg-gray-100 p-2 my-2 mx-1 rounded-sm  transition-all duration-300 ease-linear"
                key={title}
                activeStyle={activeLinkStyles}
                activeClassName="active"
              >
                <Link to={route}>
                  <h5 className="block">{title}</h5>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex flex-row text-xs font-bold">
          {/* <UserAuthButtons /> */}
        </div>

        <div
          className={
            mobileMenuIsOpen
              ? "absolute z-20 mt-10 flex flex-col lg:hidden bg-white mx-auto w-full py-3 px-2 text-sm"
              : "hidden"
          }
        >
          <ul
            className={
              mobileMenuIsOpen
                ? `grid grid-cols-2 place-content-center`
                : `hidden`
            }
          >
            {[
              { title: "Accueil", route: "/" },
              { title: "Services", route: "/services" },
              { title: "Réalisations", route: "/realisations" },
              { title: "Actualités", route: "/actu" },
            ].map(({ route, title }) => (
              <li
                className="mt-3 md:mt-0 md:ml-6 font-bold hover:bg-gray-100 p-2 my-2 mx-1 rounded-sm  transition-all duration-300 ease-linear"
                key={title}
                activeStyle={activeLinkStyles}
                activeClassName="active"
              >
                <Link to={route}>
                  <h5 className="block">{title}</h5>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
