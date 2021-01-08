import * as m from "mithril";
import { Changeset } from "@arco-tech/changeset";
interface Attrs {
    name: string;
    changeset: Changeset;
    [property: string]: any;
}
export declare const Input: m.Component<Attrs>;
export {};
