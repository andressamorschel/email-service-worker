import * as cdk from 'aws-cdk-lib';
import * as sqs from "aws-cdk-lib/aws-sqs";
import { Construct } from 'constructs';
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { SqsEventSource } from "aws-cdk-lib/aws-lambda-event-sources";
import { NodejsFunction, OutputFormat } from "aws-cdk-lib/aws-lambda-nodejs";

export class EmailNotificationWorkerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    var queue = new sqs.Queue(this, "email-notification-queue", {
      queueName: "email-notification-queue",
    });

    const worker = new NodejsFunction(this, "EmailNotificationWorker", {
      runtime: Runtime.NODEJS_20_X,
      entry: "src/index.ts",
      bundling: {
        format: OutputFormat.ESM,
      }
    });

    worker.addEventSource(new SqsEventSource(queue));
  }
}
