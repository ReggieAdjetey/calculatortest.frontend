import {ReactNode, SVGProps} from "react";

type Props<S extends string> = SVGProps<never> & {
    fill?: S;
}

function Minus({
   fill,
   ...props
}: Props<string>): Readonly<ReactNode> {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill={fill}
            {...props}
        >
            <path d="M200-440v-80h560v80H200Z"/>
        </svg>
    )
}

export default Minus;