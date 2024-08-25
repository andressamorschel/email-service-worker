import { Handler, SQSEvent } from "aws-lambda";

export const handler: Handler = async (event: SQSEvent) => {
    const messages = event.Records;
    for (let message of messages) {
        console.log("Handling: ", message);
    }
};