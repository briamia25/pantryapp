// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PantryItem, RestockRequest, ConsumptionLog } = initSchema(schema);

export {
  PantryItem,
  RestockRequest,
  ConsumptionLog
};