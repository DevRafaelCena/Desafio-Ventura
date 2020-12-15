import {
    Router
} from 'express'


import CreateUserController from './controllers/CreateUserController' 
import ContentController from './controllers/ContentController'

const routes = Router()

routes.get('/', CreateUserController.index)

routes.post('/', CreateUserController.createUser)
routes.get('/login/:email', CreateUserController.searchUser)

routes.post('/content', ContentController.createContent)
routes.get('/contents', ContentController.index)



export default routes