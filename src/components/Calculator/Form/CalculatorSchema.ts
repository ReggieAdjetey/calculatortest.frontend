import { z } from "zod";

const min = -2147483648;
const max = 2147483647;

export const calculatorSchema = z.object({
    start: z.string({
        required_error: 'Start is invalid'
    })
        .refine((x) => {
            const parsed = parseInt(x);
            return !Number.isNaN(parsed) && (parsed >= min && parsed <= max);
        }, {
            message: `Start must be between ${max} and ${min}`
        }),
    amount: z.string({
        required_error: 'Amount is invalid'
    })
        .refine((x) => {
            const parsed = parseInt(x);
            return !Number.isNaN(parsed) && (parsed >= min && parsed <= max);
        }, {
            message: `Amount must be between ${max} and ${min}`
        })
});