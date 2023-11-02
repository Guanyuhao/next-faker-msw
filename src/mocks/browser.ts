import { setupWorker } from 'msw/browser'
import mocks from './index';

export const worker = setupWorker(...mocks);