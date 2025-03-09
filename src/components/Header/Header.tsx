import {ReactNode} from "react";
import Button from "ct.frontend/components/helpers/Button/Button";

function Header(): Readonly<ReactNode> {
    return (
        <div className={"p__16"}>
            <div
                className={"container__md border__b--1 flex__row m__flex--col align__center m__align--start justify__between g__32 p__b--8"}>
                <p className={"color__secondary"}>{"Calculator Test"}</p>
                <Button
                    href={"https://github.com/ReggieAdjetey"}
                    target={"_blank"}
                    rel={"noreferrer"}
                    className={"color__secondary"}
                >
                    <p className={"small"}>{"Developed by Reginald"}</p>
                </Button>
            </div>
        </div>
    );
}

export default Header;