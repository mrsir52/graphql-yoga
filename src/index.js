const { GraphQLServer } = require('graphql-yoga')
const fetch = require('node-fetch')

const URL = `https://api.chucknorris.io/jokes/random`

const typeDefs = `

type Query {
  getJoke: results
}

type results {
  icon_url: String
  value: String
}
`

const resolvers = {
  Query: {
    async getJoke() {
      return await fetch(`${URL}`).then(res => res.json())
    },
  },
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

server.start(() => console.log('Server is running on http://localhost:4000'))
