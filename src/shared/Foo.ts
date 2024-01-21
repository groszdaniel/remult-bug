import { Entity, Fields } from "remult";

@Entity("foo", {
  allowApiCrud: true,
})
export class Foo {
  @Fields.cuid()
  id = "";

  @Fields.integer()
  a = 0;
}
