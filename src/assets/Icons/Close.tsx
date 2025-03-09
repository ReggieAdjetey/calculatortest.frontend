import RemCalculator from "ct.frontend/components/helpers/RemCalculator";
import {ReactNode, SVGProps} from "react";

type Props = SVGProps<never> & {
    width: number;
    height: number;
};

function Close({
    width,
    height,
    ...props
}: Props): ReactNode {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 96 960 960"
            {...props}
            width={RemCalculator(width)}
            height={RemCalculator(height)}
        >
            <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
        </svg>
    )
}

export default Close;