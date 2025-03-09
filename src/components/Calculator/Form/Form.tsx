import {ReactNode, useState, useTransition} from "react";
import Button from "ct.frontend/components/helpers/Button/Button";
import Add from "ct.frontend/assets/Icons/Add";
import {btnDesigner} from "ct.frontend/helpers/BtnDesigner/BtnDesigner";
import Minus from "ct.frontend/assets/Icons/Minus";
import {ICalculator} from "ct.frontend/components/Calculator/Form/ICalculator";
import {useForm} from "react-hook-form";
import {calculatorSchema} from "ct.frontend/components/Calculator/Form/CalculatorSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {Encrypt} from "ct.frontend/helpers/Crypto";
import Spinner from "ct.frontend/components/helpers/Spinner";

type OperationType = "add" | "subtract";

function Form(): Readonly<ReactNode> {
    const [isPending, startTransition] = useTransition();
    const [operation, setOperation] = useState<OperationType>();
    const operations: OperationType[] = [
        "add",
        "subtract"
    ];
    const [responseObject, setResponseObject] = useState<{
        message: string;
        status: number;
    }>();

    const ToggleOperation = (operation: OperationType) => {
        setOperation(operation);
        setResponseObject(undefined);
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ICalculator>({
        resolver: zodResolver(calculatorSchema)
    });

    const HandleSubmit = handleSubmit(async data =>  {
        startTransition(async () => {
            if(!operation) {
                return setResponseObject({
                    message: `Please specify a valid operation`,
                    status: 400,
                })
            }
            const _data = Encrypt({
                start: data.start,
                amount: data.amount,
                operation: operation
            });

            const res = await fetch("/api/calculator", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(_data)
            });

            const resJson = await res.json();
            setResponseObject(resJson);
        })
    })

    return (
        <form
            onSubmit={HandleSubmit}
            className={"flex__col g__32"}
        >
            {
                (responseObject && responseObject.status !== 200) &&
                <div className={"bg__t--ii rounded__8 p__16"}>
                    <p className={"color__light weight__sm"}>{responseObject.message}</p>
                </div>
            }
            <div className={"flex__row w__max g__16"}>
                <div className={"flex__col w__max g__16"}>
                    <label htmlFor={"start"}>
                        <p className={`${errors.start ? "color__danger" : "color__secondary opacity__6"} small`}>{errors.start ? errors.start.message : "(Required)"}</p>
                    </label>
                    <input
                        className={"h__150 rounded__16 color__secondary text__c"}
                        type="number"
                        {...register("start")}
                        id={"start"}
                        placeholder={"10"}
                        step="1"
                    />
                </div>
                <div className={"flex__col w__max g__16"}>
                    <label htmlFor={"amount"}>
                        <p className={`${errors.amount ? "color__danger" : "color__secondary opacity__6"} small`}>{errors.amount ? errors.amount.message : "(Required)"}</p>
                    </label>
                    <input
                        className={"h__150 rounded__16 color__secondary text__c"}
                        type="number"
                        {...register("amount")}
                        id={"amount"}
                        placeholder={"10"}
                        step="1"
                    />
                </div>
            </div>
            <div className={"flex__row justify__center g__8"}>
                {
                    operations.map(x => (
                        <Button
                            key={x}
                            className={`secondary__button--ii flex__col align__center justify__center border__2 ${operation === x ? "border__iii" : ""} ${btnDesigner({
                                padding: { x: 16, y: 8 }
                            })}`}
                            type={"button"}
                            onClick={() => ToggleOperation(x)}
                        >
                            {
                                x === "add" ?
                                <Add
                                    className={"w__24 h__24"}
                                    fill={"var(--secondary__color)"}
                                /> :
                                <Minus
                                    className={"w__24 h__24"}
                                    fill={"var(--secondary__color)"}
                                />
                            }
                        </Button>
                    ))
                }
                <Button
                    className={`bg__t--iii flex__col align__center justify__center ${btnDesigner({
                        padding: { x: 16, y: 8 }
                    })}`}
                    type={"submit"}
                    disabled={isPending}
                >
                    {
                        isPending ?
                        <Spinner width={32} height={32} /> :
                        <p className={"color__light weight__sm"}>{"Ans"}</p>
                    }
                </Button>
            </div>
            {
                (responseObject && responseObject.status === 200) &&
                <div className={"border__2 h__50 rounded__8 flex__col align__center justify__center"}>
                    <h1 className={"color__secondary"}>{responseObject?.message}</h1>
                </div>
            }
        </form>
    )
}

export default Form;