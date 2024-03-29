export class CanvasTurtle {
    constructor(
        canvas_ctx: CanvasRenderingContext2D,
        turtle_ctx: CanvasRenderingContext2D,
        w: number,
        h: number,
        events?: HTMLElement,
    );
    canvas_ctx: CanvasRenderingContext2D;
    turtle_ctx: CanvasRenderingContext2D;
    width: number;
    height: number;
    x: number;
    py: number;
    y: number;
    r: number;
    sx: number;
    sy: number;
    color: string;
    bgcolor: string;
    penwidth: number;
    penmode: string;
    fontsize: number;
    fontname: string;
    turtlemode: string;
    visible: boolean;
    pendown: boolean;
    was_oob: boolean;
    filling: number;
    // _clickx: number;
    // _clicky: number;
    // _mousex: number;
    // _mousey: number;
    // _buttons: number;
    // _touches: any[];
    // _turtles: {}[];
    // _currentturtle: number;
}
