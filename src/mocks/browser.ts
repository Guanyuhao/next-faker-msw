import { setupWorker  } from 'msw/browser'
import users from "./user"

export const worker = setupWorker(...users);
