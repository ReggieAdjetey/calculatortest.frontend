'use client';

import Button from "ct.frontend/components/helpers/Button/Button";
import {btnDesigner} from "ct.frontend/helpers/BtnDesigner/BtnDesigner";

export default function Error({
    reset
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    const message: string[] = [
        `We apologize, but an error has occurred and we're not sure.`,
        `Please try refreshing the page or come back later.`,
    ];

    return (
        <section className={"container__md flex__col justify__center flex__grow w__max h__max p__16"}>
            <div className={"flex__col justify__center g__32 align__center"}>
                <h1 className={`color__secondary text__c`}>{"Oops! The wheels have come off..."}</h1>
                <span className={"flex__col align__center g__16"}>
                    {
                        message.map((word, index) => (
                            <p
                                key={index}
                                dangerouslySetInnerHTML={{ __html: word }}
                                className={"color__secondary text__c"}
                            />
                        ))
                    }
                </span>
                <Button
                    onClick={() => reset()}
                    className={`bg__t--iii flex__row align__center g__8 ${btnDesigner({ 
                        padding: {x: 16, y: 12 }, borderRadius: 6 })}
                    `}
                >
                    <p className={"color__light"}>{"Try again"}</p>
                </Button>
            </div>
        </section>
    )
}