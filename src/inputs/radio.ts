import * as m from "mithril"
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

        return m(".form__radio-input", {
          class: active ? "form__radio-input--active" : "",
          onclick: () => {
            changeset.setChange(name, value)
          },
        }, [
          m(".form__radio-input__button", {
            class: active ? "form__radio-input__button--active" : "",
          }),
          m(".form__radio-input__label", {
            class: active ? "form__radio-input__label--active" : "",
          }, label),
        ])
      })
    ])
  },
}
