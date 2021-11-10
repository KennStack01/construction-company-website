import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const ClientsList = () => {
  const data = useStaticQuery(graphql`
    query {
      allGraphCmsClientPartenaire {
        edges {
          node {
            clientLogo {
              url
            }
            clientCompanyName
            id
          }
        }
      }
    }
  `)

  const clients = data.allGraphCmsClientPartenaire.edges.map(({ node }) => node)

  return (
    <div>
      <h1 className="text-center font-semibold text-2xl md:text-4xl text-gray-700 my-14 md:mt-20">
        Ils nous font confiance
      </h1>
      <div className="flex flex-row justify-between md:grid grid-cols-4 mx-auto">
        {clients.map(client => (
          <div key={client.id} className="flex flex-col justify-center">
            <img
              src={client.clientLogo.url}
              alt={client.clientCompanyName}
              className="w-auto h-32 mx-auto md:w-auto md:h-32"
            />
            <h5 className="text-gray-800 text-xs mx-auto">
              {" "}
              {client.clientCompanyName}{" "}
            </h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClientsList
