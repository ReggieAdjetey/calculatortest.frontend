import {ReactNode} from "react";

type Props = {
    width: number,
    height: number;
    dataName?: string;
}

export default function Spinner({
    width,
    height,
}: Props): ReactNode {
    return (
        <div
            className={`spinner w__${width} h__${height} rounded__max border__4`}
            style={{ borderColor: "white" }}
        />
    );
};