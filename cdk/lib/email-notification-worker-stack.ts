import * as cdk from 'aws-cdk-lib';
import * as sqs from "aws-cdk-lib/aws-sqs";
import { Construct } from 'constructs';
import { Code, Runtime } from "aws-cdk-lib/aws-lambda";
import { SqsEventSource } from "aws-cdk-lib/aws-lambda-event-sources";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
// import path from 'path';
import * as path from 'path';

export class EmailNotificationWorkerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    var queue = new sqs.Queue(this, "email-notification-queue", {
      queueName: "email-notification-queue",
    });

    console.log("hello! " + __dirname);
    console.log("hello 2! " + path);

    const worker = new NodejsFunction(this, "EmailNotificationWorker", {
      runtime: Runtime.NODEJS_20_X,
      entry: path.join(__dirname, `/../../src/index.ts`),
      handler: "handler",
    });

    worker.addEventSource(new SqsEventSource(queue));
  }
}