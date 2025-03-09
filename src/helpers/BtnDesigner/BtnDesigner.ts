interface IProps<N> {
    padding?: {
        x?: N;
        y?: N;
    };
    borderRadius?: number;
}

function btnDesigner ({
  padding,
  borderRadius,
}: Readonly<IProps<number>>): string {
    let _padding: string;

    if(!padding) _padding = "p__8";
    else if(padding.x && padding.y) _padding = `p__l--${padding.x} p__r--${padding.x} p__t--${padding.y} p__b--${padding.y}`;
    else _padding = `${padding.x ? `p__l--${padding.x} p__r--${padding.x}` : `p__t--${padding.y} p__b--${padding.y}`}`

    return `${_padding} rounded__${borderRadius ? borderRadius : 8}`;
}

export {
    btnDesigner
}