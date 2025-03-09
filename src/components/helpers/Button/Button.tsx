import {AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";
import Link from "next/link";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return 'href' in props;
}

function Button(props : ButtonProps | AnchorProps): Readonly<ReactNode> {
    if (isAnchorProps(props)) {
        return (
            <Link href={props.href ?? ""} passHref legacyBehavior>
                <a {...props}>{props.children}</a>
            </Link>
        )
    }
    else {
        return <button {...props}>{props.children}</button>
    }
}

export default Button;