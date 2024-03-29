declare namespace Dialog {
    function prompt(message: any, def: any): Promise<any>;
    function alert(message: any): Promise<any>;
}
