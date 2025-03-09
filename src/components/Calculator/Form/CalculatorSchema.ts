import { z } from "zod";

const max = 99999;

export const calculatorSchema = z.object({
    start: z.string({
        required_error: 'Start is invalid'
    })
        .max(max, `Maximum amount is ${max}`)
        .refine((x) => !Number.isNaN(parseInt(x)), {
            message: "Start is invalid"
        }),
    amount: z.string({
        required_error: 'Amount is invalid'
    })
        .max(max, `Maximum amount is ${max}`)
        .refine((x) => !Number.isNaN(parseInt(x)), {
            message: "Amount is invalid"
        })
});