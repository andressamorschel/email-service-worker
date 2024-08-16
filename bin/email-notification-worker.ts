#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { EmailNotificationWorkerStack } from '../lib/email-notification-worker-stack';

const app = new cdk.App();
new EmailNotificationWorkerStack(app, 'EmailNotificationWorkerStack', {});