import {ReactNode, MouseEvent} from "react";
import Button from "ct.frontend/components/helpers/Button/Button";
import Close from "ct.frontend/assets/Icons/Close";

type Props = {
    visible: boolean;
    ToggleVisibility: () => void;
    children: ReactNode;
    title?: string;
    disableOverlayDefaultBehavior?: boolean;
}

function Modal({
    children,
    title,
    ToggleVisibility,
    visible,
    disableOverlayDefaultBehavior
}: Props): ReactNode {
    function HandleClick(e: MouseEvent<HTMLDivElement>) {
        if((e.target as Element).id === `${disableOverlayDefaultBehavior ? "---" : "modal--overlay"}`) {
             ToggleVisibility();
        }
    }

    return (
        <div
            className={`modal__overlay ${visible ? "overlay__visible" : ""}`}
            onClick={HandleClick}
            id={"modal--overlay"}
            aria-label={"Modal overlay"}
        >
            <div
                className={`modal__content p__24 flex__col g__32 ${visible ? "content__visible" : ""} rounded__8`}
                aria-label={"Modal content"}
            >
                <header
                    className={"flex__row align__center justify__between g__24"}
                    aria-label={"Modal Header"}
                >
                    <Button
                        className={"flex__col align__center justify__center"}
                        onClick={() => ToggleVisibility()}
                        aria-label={"Close modal"}
                        data-name={"close__modal"}
                    >
                        <Close width={16*1.35} height={16*1.35} fill={"var(--secondary__color)"} />
                    </Button>
                    {
                        title &&
                        <p
                            className={"color__secondary font__md"}
                            aria-label={"Modal title"}
                        >
                            {title?.length > 25 ? title.substring(0, 25) + "..." : title}
                        </p>
                    }
                </header>
                <div aria-label={"Modal content container"}>{children}</div>
                <footer
                    aria-label={"Modal Footer"}
                    className={"flex__col border__t--1 p__t--16"}
                >
                    <p className={"small color__secondary opacity__6"}>{visible ? "Ready to perform operations" : "Closed"}</p>
                </footer>
            </div>
        </div>
    )
}

export default Modal;