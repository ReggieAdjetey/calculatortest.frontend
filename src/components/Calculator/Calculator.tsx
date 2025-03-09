"use client";

import {ReactNode, useState} from "react";
import {btnDesigner} from "ct.frontend/helpers/BtnDesigner/BtnDesigner";
import Button from "ct.frontend/components/helpers/Button/Button";
import Modal from "ct.frontend/components/helpers/Modal/Modal";
import Form from "ct.frontend/components/Calculator/Form/Form";

function Calculator(): Readonly<ReactNode> {
    const [active, setActive] = useState<boolean>(false);
    const ToggleModal = () => setActive(!active);

    return (
        <>
            <Button
                className={`bg__t--iii w__fit-content ${btnDesigner({
                    padding: {x: 24, y: 16}
                })}`}
                onClick={ToggleModal}
            >
                <p className={"color__light"}>{"Get started"}</p>
            </Button>
            <Modal
                visible={active}
                ToggleVisibility={ToggleModal}
                title={"Calculator"}
            >
                <Form />
            </Modal>
        </>
    )
}

export default Calculator;