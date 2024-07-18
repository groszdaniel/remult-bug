import {
  BackendMethod,
  Controller,
  Entity,
  Fields,
  IdEntity,
  remult,
} from 'remult';

@Entity('foo', {
  allowApiCrud: true,
})
export class Foo extends IdEntity {
  @Fields.integer()
  a = 0;
}

@Controller('FooController')
export class FooController {
  @BackendMethod({ allowed: true })
  static async backendMethod() {
    const foo = await remult.repo(Foo).insert({ a: 1 });
    setTimeout(async () => {
      await remult!.repo(Foo).update(foo.id, { a: 2 });
    }, 1000);
  }
}
