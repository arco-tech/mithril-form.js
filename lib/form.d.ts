import * as m from "mithril";
import { Changeset } from "@arco-tech/changeset";
interface Attrs {
    changeset: Changeset;
    onSubmit?: (changeset: Changeset) => void;
    className?: string;
}
export declare const Form: m.Component<Attrs>;
export {};
