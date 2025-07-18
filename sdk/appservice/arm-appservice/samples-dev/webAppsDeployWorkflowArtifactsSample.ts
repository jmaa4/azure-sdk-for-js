/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  WorkflowArtifacts,
  WebAppsDeployWorkflowArtifactsOptionalParams,
  WebSiteManagementClient,
} from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Description for Creates the artifacts for web site, or a deployment slot.
 *
 * @summary Description for Creates the artifacts for web site, or a deployment slot.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2024-11-01/examples/DeleteDeployWorkflowArtifacts.json
 */
async function deleteWorkflowArtifacts(): Promise<void> {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["APPSERVICE_RESOURCE_GROUP"] || "testrg123";
  const name = "testsite2";
  const workflowArtifacts: WorkflowArtifacts = {
    filesToDelete: ["test/workflow.json", "test/"],
  };
  const options: WebAppsDeployWorkflowArtifactsOptionalParams = {
    workflowArtifacts,
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.webApps.deployWorkflowArtifacts(
    resourceGroupName,
    name,
    options,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Description for Creates the artifacts for web site, or a deployment slot.
 *
 * @summary Description for Creates the artifacts for web site, or a deployment slot.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2024-11-01/examples/PostDeployWorkflowArtifacts.json
 */
async function deploysWorkflowArtifacts(): Promise<void> {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["APPSERVICE_RESOURCE_GROUP"] || "testrg123";
  const name = "testsite2";
  const workflowArtifacts: WorkflowArtifacts = {
    appSettings: {
      eventHub_connectionString:
        "Endpoint=sb://example.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=EXAMPLE1a2b3c4d5e6fEXAMPLE=",
    },
    files: {
      connectionsJson: {
        managedApiConnections: {},
        serviceProviderConnections: {
          eventHub: {
            displayName: "example1",
            parameterValues: {
              connectionString: "@appsetting('eventHub_connectionString')",
            },
            serviceProvider: { id: "/serviceProviders/eventHub" },
          },
        },
      },
      "test1/workflowJson": {
        definition: {
          $schema:
            "https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#",
          actions: {},
          contentVersion: "1.0.0.0",
          outputs: {},
          triggers: {
            When_events_are_available_in_Event_hub: {
              type: "ServiceProvider",
              inputs: {
                parameters: { eventHubName: "test123" },
                serviceProviderConfiguration: {
                  operationId: "receiveEvents",
                  connectionName: "eventHub",
                  serviceProviderId: "/serviceProviders/eventHub",
                },
              },
              splitOn: "@triggerOutputs()?['body']",
            },
          },
        },
        kind: "Stateful",
      },
    },
  };
  const options: WebAppsDeployWorkflowArtifactsOptionalParams = {
    workflowArtifacts,
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.webApps.deployWorkflowArtifacts(
    resourceGroupName,
    name,
    options,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await deleteWorkflowArtifacts();
  await deploysWorkflowArtifacts();
}

main().catch(console.error);
