import { CanvasTurtle } from "./turtle";

// declare function LogoInterpreter(turtle: any, stream: any, savehook: any): void;
export declare class LogoInterpreter {
    constructor(turtle: CanvasTurtle, stream: {
        read: (prompt?: string) => Promise<string>;
        write: (...text: string[]) => Promise<void>;
        clear: () => Promise<void>;
        readback: () => Promise<string>;
        textsize: number;
        font: string;
        color: string;
    }, savehook: (name: string, def: string | undefined) => void);
    localize: any;
    keywordAlias: any;
    turtle: any;
    stream: any;
    /**
     * @type any
     */
    routines: any;
    /**
     * @type any
     */
    scopes: any;
    /**
     * @type any
     */
    plists: any;
    /**
     * @type any
     */
    prng: any;
    forceBye: boolean;
    stack: any[];
    dispatch: (name: any, tokenlist: any, natural: any) => () => void;
    execute: (statements: any, options: any) => Promise<any>;
    bye: () => void;
    queueTask: (task: any) => Promise<any>;
    run: (string: string, options?: any) => Promise<any>;
    definition: (name: any, proc: any) => string;
    procdefs: () => string;
    copydef: (newname: any, oldname: any) => void;
    gensym_index: number;
    colorAlias: any;
    last_error: any;
}
