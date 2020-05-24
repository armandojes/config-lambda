import security from 'models/security'
import { store } from '../../../models/database'

const getToken = async (request, response) => {
  const status = await store.create({ name: 'hello' })
  response.send(status)
  response.end()
}

export default getToken
