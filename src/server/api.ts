import { remultExpress } from 'remult/remult-express';
import { Foo, FooController } from '../shared/Foo';

export const api = remultExpress({
  entities: [Foo],
  controllers: [FooController],
});
