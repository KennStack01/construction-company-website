import React from "react"
import Footer from "./Footer"
import Header from "./header"
import ContactBarInfo from "./ContactBarInfo"

export default function Layout(props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* <Header /> */}

      <ContactBarInfo />
      <Header />

      <main className="relative flex-1 lg:container px-4 py-3 mx-auto md:px-0 md:py-0 overflow-x-auto overflow-auto">
        {props.children}
      </main>

      {/* <Footer /> */}
      <Footer />
    </div>
  )
}
