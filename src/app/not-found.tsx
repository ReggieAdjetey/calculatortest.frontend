import {ReactNode} from "react";
import Button from "ct.frontend/components/helpers/Button/Button";
import {btnDesigner} from "ct.frontend/helpers/BtnDesigner/BtnDesigner";

function NotFound(): ReactNode {
    return (
        <section className={"flex__col flex__grow w__max h__max p__16"}>
            <div className={"container__sm h__max flex__col justify__center align__center g__32"}>
                <h1 className={"color__secondary text__c"}>{"Page not found"}</h1>
                <p className={"font__md color__secondary text__c line__h--24"}>{"It seems that despite our best efforts, some pages have managed to elude our grasp."}</p>
                <Button
                    className={`bg__t--iii flex__row align__center g__8 ${btnDesigner({
                        padding: { x: 24, y: 12 }, borderRadius: 6
                    })}`}
                    href={"/"}
                >
                    <p className={"font__md color__light"}>{"Go Home"}</p>
                </Button>
            </div>
        </section>
    )
}

export default NotFound;