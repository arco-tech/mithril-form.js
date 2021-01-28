import * as m from "mithril"
import { sblk } from "@arco-tech/bem"
import { Changeset } from "@arco-tech/changeset"

interface Option {
  label: any
  value: any
}

interface Attrs {
  name: string
  changeset: Changeset
  options: Option[]
  className?: string
}

export const Radio: m.Component<Attrs> = {
  view: ({ attrs: { name, changeset, options, className } }) => {
    const currentValue = changeset.getValue(name)

    return m(".form__radio-list", { class: className }, [
      options.map(({ label, value }) => {
        const active = currentValue === value

        return m(sblk("form__radio-input", active && "active"), {
          onclick: () => {
            changeset.setChange(name, value)
          },
        }, [
          m(sblk("form__radio-input__button", active && "active")),
          m(sblk("form__radio-input__label", active && "active"), label),
        ])
      })
    ])
  },
}
