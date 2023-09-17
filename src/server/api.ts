import { remultExpress } from 'remult/remult-express';
import { Foo } from '../shared/Foo'

export const api = remultExpress({ entities: [ Foo ] });
