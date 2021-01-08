import * as m from "mithril"
import { Changeset } from "@arco-tech/changeset"
import { ErrorMessage } from "./error_message"

interface Attrs {
  changeset: Changeset
  name: string
  label?: string
  className?: string
  input: m.Component<any, any>
  inputAttrs?: { [key: string]: any }
}

export const FormField: m.Component<Attrs> = {
  view: ({
    attrs: { changeset, name, label, className, input, inputAttrs = {} },
  }) => {
    return m(".form__field", { class: className }, [
      label && m(".form__field__label", label),
      m(".form__field__input", [
        m(input, { changeset, name, ...inputAttrs }),
      ]),
      changeset.hasErrors(name) && m(".form__field__errors", [
        m(ErrorMessage, { error: changeset.getErrors(name) }),
      ]),
    ])
  },
}
