// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary This sample demonstrates how to create a job which will deidentify all files within a specific folder of a blob storage container.
 */

import createClient, {
  DeidentificationJob,
  isUnexpected,
} from "@azure-rest/health-deidentification";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

export async function main(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const serviceEndpoint =
    process.env["DEID_SERVICE_ENDPOINT"] || "https://example.api.cac001.deid.azure.com";
  const storageLocation = `https://${process.env["STORAGE_ACCOUNT_NAME"]}.blob.core.windows.net/${process.env["STORAGE_CONTAINER_NAME"]}`;
  const location = storageLocation || "defaultSasUri";
  const OUTPUT_FOLDER = "_output";
  const inputPrefix = "example_patient_1";
  const client = createClient(serviceEndpoint, credential);
  const jobName = "exampleJob";

  const job: DeidentificationJob = {
    operation: "Surrogate",
    sourceLocation: { location, prefix: inputPrefix },
    targetLocation: { location, prefix: OUTPUT_FOLDER, overwrite: true },
    customizations: {
      surrogateLocale: "en-US",
    }
  };
  const response = await client.path("/jobs/{name}", jobName).put({ body: job });

  if (isUnexpected(response)) {
    throw response.body.error;
  }

  console.log(response.body);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
