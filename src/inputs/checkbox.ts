import * as m from "mithril"
import { sblk } from "@arco-tech/bem"
import { Changeset } from "@arco-tech/changeset"

interface Attrs {
  name: string
  changeset: Changeset
  label: any
  className?: string
}

export const Radio: m.Component<Attrs> = {
  view: ({ attrs: { name, changeset, label, className } }) => {
    const active = changeset.getValue(name) ? true : false

    return m(sblk("form__checkbox", active && "active"), {
      class: className,
      onclick: () => {
        changeset.setChange(name, !active)
      },
    }, [
      m(sblk("form__checkbox__button", active && "active")),
      m(sblk("form__checkbox__label", active && "active"), label),
    ])
  },
}
