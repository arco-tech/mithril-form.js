import * as m from "mithril";
import { Changeset } from "@arco-tech/changeset";
interface Attrs {
    changeset: Changeset;
    name: string;
    label?: string;
    className?: string;
    input: m.Component<any, any>;
    inputAttrs?: {
        [key: string]: any;
    };
}
export declare const FormField: m.Component<Attrs>;
export {};
