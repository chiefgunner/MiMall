let baseUrl

switch (process.env.NODE_ENV) {
  case 'development':
    baseUrl = 'http://dev-domain.com/api'
    break
  case 'test':
    baseUrl = 'http://test-domain.com/api'
    break
  case 'production':
    baseUrl = 'http://domain.com/api'
    break
  default:
    baseUrl = 'http://domain.com/api'
    break
}

export default {
  baseUrl
}
