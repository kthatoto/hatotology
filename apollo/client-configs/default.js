import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default () => {
  const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql' })

  const token = '74eaee6dd9946b2254dd235902bd883b2ef12b4b'

  const middlewareLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: { Authorization: `bearer ${token}` }
    })
    return forward(operation)
  })
  const link = middlewareLink.concat(httpLink)
  return {
    link,
    cache: new InMemoryCache()
  }
}
