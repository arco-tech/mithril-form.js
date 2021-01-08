import * as m from "mithril"
import { Changeset } from "@arco-tech/changeset"

interface Attrs {
  name: string
  changeset: Changeset
  className?: string
  [property: string]: any
}

export const Input: m.Component<Attrs> = {
  view: ({ attrs: { name, changeset, className, ...attrs } }) => {
    return m("input.form__input", {
      name,
      value: changeset.getValue(name),
      oninput: (event: InputEvent) => {
        const target = event.target as HTMLInputElement
        changeset.setChange(name, target.value)
      },
      class: className,
      ...attrs,
    })
  },
}
