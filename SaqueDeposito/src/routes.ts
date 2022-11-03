import { Router } from 'express'
import { CreateDeposito } from './controllers/CreateDepositoController'

import { UserController } from './controllers/UserController'



const routes = Router()

routes.post("/saldo", new UserController().handle)

routes.post("/deposito/:cpf", new CreateDeposito().handle)



export { routes }