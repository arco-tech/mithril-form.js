import * as m from "mithril"
import { Changeset } from "@arco-tech/changeset"

interface Attrs {
  name: string
  changeset: Changeset
  className?: string
  [property: string]: any
}

interface State {
  value?: string | null
}

const validCharacters = "0123456789.-".split("")
const validRegex = /^-?[0-9]+\.?[0-9]*$/

export const FloatInput: m.Component<Attrs> = {
  view: ({ attrs: { name, changeset, className, ...attrs }, state }) => {
    return m("input.form__input", {
      name,
      value: getValue(state, changeset, name),
      oninput: (event: InputEvent) => {
        onInput(state, changeset, name, event)
      },
      class: className,
      ...attrs,
    })
  },
}

function getValue(
  state: State,
  changeset: Changeset,
  name: string,
): string | number | null {
  if (state.hasOwnProperty("value") && typeof state.value === "string") {
    return state.value
  } else {
    return changeset.getValue(name)
  }
}

function onInput(
  state: State, 
  changeset: Changeset, 
  name: string, 
  event: InputEvent,
): void {
  let value: any = (event.target as HTMLInputElement).value

  if (!value && value !== 0) {
    state.value = null
    changeset.setChange(name, null)
  } else {
    if (typeof value !== "string") {
      value = `${value}`
    }

    let filteredValue = ""

    value.split("").forEach((character: string) => {
      if (validCharacters.indexOf(character) !== -1) {
        filteredValue += character
      }
    })

    state.value = filteredValue

    if (validRegex.test(filteredValue)) {
      changeset.setChange(name, parseFloat(filteredValue))
    }
  }
}
