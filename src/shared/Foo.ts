import { Entity, Fields } from "remult"

@Entity("foo", {
  allowApiCrud: true
})
export class Foo {
  @Fields.cuid()
  id = ""

  @Fields.integer(/* { allowNull: true } */)
  a = 0

  @Fields.integer(/* { allowNull: true } */)
  b = 0
}
