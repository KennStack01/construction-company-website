import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactTypingEffect from "react-typing-effect"

const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query {
      graphCmsPageAccueilBanner {
        greatWelcomeText
        welcomeTextDescription
        imageBackground {
          fileName
          url
        }
      }
    }
  `)

  const image = data.graphCmsPageAccueilBanner.imageBackground.url
  const greatWelcomeText = data.graphCmsPageAccueilBanner.greatWelcomeText
  const welcomeTextDescription =
    data.graphCmsPageAccueilBanner.welcomeTextDescription

  return (
    <div className="mt-0 w-full text-white">
      <div className="flex flex-col absolute ">
        <h1 className="text-3xl md:text-7xl font-bold z-40 mt-24 md:mt-14 ml-3 md:ml-10 w-1/3 invisible md:visible">
          <ReactTypingEffect
            text={[
              greatWelcomeText,
              "Ensemble, nous construisons un meilleur futur",
            ]}
            speed={50}
            typingDelay={100}
            eraseSpeed={20}
          />
          {/* {greatWelcomeText}{" "} */}
        </h1>
        <p className="text-xl font-medium mx-14 z-40 mt-10 mb-8 md:w-2/3">
          {welcomeTextDescription}
        </p>
      </div>

      <img
        src={image}
        loading="lazy"
        placeholder="blurred"
        className=" relative inset-0 bg-cover bg-center z-0 filter brightness-50"
        alt="Photo by Jeriden Villegas on Unsplash"
      />
    </div>
  )
}

export default HeroSection
