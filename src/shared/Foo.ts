import { BackendMethod, Entity, EntityBase, Fields } from "remult";

@Entity("foo", {
  allowApiCrud: true,
})
export class Foo extends EntityBase {
  @Fields.cuid()
  id = "";

  @Fields.integer()
  a = 0;

  @BackendMethod({ allowed: true/*, paramTypes: [Foo]*/ }) async backendMethod(bar: Foo) {
    return this.a + bar.a;
  }
}
