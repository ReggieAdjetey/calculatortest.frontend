import {NextResponse} from "next/server";
import {Decrypt} from "ct.frontend/helpers/Crypto";

export async function POST(
    req: Request
) {
    try {
        const requestBody = await req.json();
        const decryptedData: {
            start: string;
            amount: string;
            operation: string;
        } = Decrypt(requestBody);

        const response: Response = await fetch(`${process.env.API_HOST}/v1/calculator/${decryptedData.operation}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                start: decryptedData.start,
                amount: decryptedData.amount
            })
        });

        const resJson = await response.json();

        return NextResponse.json({
            message: resJson.message ? resJson?.message : resJson,
            status: response?.status
        },
        { status: response?.status });
    }
    catch (error) {
        let message = "";
        if(error instanceof Error) message = `Message: ${error.message}. Name: ${error.name}`;
        console.error(message);

        return new Response(
            JSON.stringify({
                message: "We apologize, but an unforeseen error prevented us from completing this. Please try again later.",
                status: 500
            }),
            { status: 500 }
        );
    }
}