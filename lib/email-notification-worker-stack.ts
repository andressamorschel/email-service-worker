import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction, OutputFormat } from "aws-cdk-lib/aws-lambda-nodejs";

export class EmailNotificationWorkerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new NodejsFunction(this, "EmailNotificationWorker", {
      runtime: Runtime.NODEJS_20_X,
      entry: "src/index.ts",
      bundling: {
        format: OutputFormat.ESM,
      }
    });
  }
}
