import * as m from "mithril"
import { Changeset } from "@arco-tech/changeset"
import { ErrorMessage } from "./error_message"

interface Attrs {
  changeset: Changeset
  onSubmit?: (changeset: Changeset) => void
  className?: string
}

const errorMessage =
  "There were issues with the data provided, please check the errors below."

export const Form: m.Component<Attrs> = {
  view: ({ attrs: { changeset, onSubmit, className }, children }) => {
    return m("form.form", {
      class: className,
      onsubmit: (event: Event) => {
        event.preventDefault()
        if (onSubmit) { onSubmit(changeset) }
      },
    }, [
      changeset.hasAnyErrors() && m(ErrorMessage, { error: errorMessage }),
      changeset.hasErrorMessage() && m(ErrorMessage, {
        error: changeset.getErrorMessage(),
      }),
      children,
      m("input", { type: "submit", style: "display: none" }),
    ])
  },
}
