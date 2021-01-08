import * as m from "mithril"

interface Attrs {
  error: any
}

export const ErrorMessage: m.Component<Attrs> = {
  view: ({ attrs: { error } }) => {
    if (typeof error === "string") {
      return m(".form__error-message", error)
    } else if (Array.isArray(error)) {
      return error.map((err) => {
        return m(ErrorMessage, { error: err })
      })
    } else if (
      typeof error === "object" &&
      error !== null &&
      typeof error.message === "string"
    ) {
      return m(".form__error-message", error.message)
    }
  },
}
