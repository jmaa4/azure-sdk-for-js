// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Configures Messaging Connect options to send an SMS directly via a customer partner
 */

import type { SmsSendRequest, SmsSendOptions } from "@azure/communication-sms";
import { SmsClient } from "@azure/communication-sms";

// Load the .env file if it exists
import "dotenv/config";

export async function main(): Promise<void> {
  console.log("== Send SMS Message With Options ==");

  // You will need to set this environment variable or edit the following values
  const connectionString =
    process.env.COMMUNICATION_SAMPLES_CONNECTION_STRING ||
    "endpoint=https://<resource-name>.communication.azure.com/;<access-key>";

  // create new client
  const client = new SmsClient(connectionString);

  // construct send request
  let phoneNumbers: string[];
  if (process.env.TO_PHONE_NUMBERS !== undefined) {
    phoneNumbers = process.env.TO_PHONE_NUMBERS.split(",");
  } else if (process.env.AZURE_PHONE_NUMBER !== undefined) {
    phoneNumbers = [process.env.AZURE_PHONE_NUMBER];
  } else {
    phoneNumbers = ["<to-phone-number-1>", "<to-phone-number-2>"];
  }

  const sendRequest: SmsSendRequest = {
    from: process.env.FROM_PHONE_NUMBER || process.env.AZURE_PHONE_NUMBER || "<from-phone-number>",
    to: phoneNumbers,
    message: "Hello World via SMS!",
  };

  // construct send options
  const sendOptions: SmsSendOptions = {
    messagingConnect: {
      // Represents the API key associated with the customer's account in the Messaging Connect Partner portal.
      apiKey: "<messaging-connect-api-key>",
      // Specifies the partner associated with the API key.
      partner: "<messaging-connect-partner>",
    },
  };

  // send sms with request and options
  const sendResults = await client.send(sendRequest, sendOptions);

  // individual messages can encounter errors during sending
  // use the "successful" property to verify
  for (const sendResult of sendResults) {
    if (sendResult.successful) {
      console.log("Success: ", sendResult);
    } else {
      console.error("Something went wrong when trying to send this message: ", sendResult);
    }
  }

  console.log("== Done: Send SMS Message With Messaging Connect Options ==");
}

main().catch((error) => {
  console.error("Encountered an error while sending SMS: ", error);
  process.exit(1);
});
