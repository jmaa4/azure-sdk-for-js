hhttps://www.typescriptlang.org/play/?&dtPR=73194&install-plugin=playground-dt-review#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCbvCwDKgU8JkY7p7ehCTkVDQS2E6gnPCxGcwmZqDSTgzxxWWVoASMFmgYkAAeRJTInN3ymj4d-jSCeNsMq-wuoPaOltigAKoASgAywhK7SbGQZIIz5VWCFzSeCrZagNYbChbHaxUDcCjJZLfSDbExIAgUdxkUBIursJzCFJtXydajBBCcQQ0MwAUVWDEQC0gADVHBQGNJ3KAALygABEAAkYNAMOB4GRonzFBTBPB3AERcwABS0+mM9ysygc9wASmCKhwzQ8ZC8iHFzmB7BoXzcZmY7AYzEg-Fg0HUiQ58D0Ii8fLpDKZgj5SWxfPADlQAHJhAA5SASPlBFQAeS+QugIpdHGioEM7FA2GgBDEBAIbG9NoyVIYGbqDS8RJtAGF4NxIAgdCXi41QABxeQC9jSHHipL4kPMMwUABedcaAH5QEKnNGsCgW22O5VS6AAJKU1A1xj1HtuhL5AuoVAEAogbSxIcBBCIYAMUuCYAITde4BVw+1k9KWAQQYHbVAAH1DzIJ1UDId4QP4GCrighRXGkPBQCcM0dGGNcQLRRBoWES4bQkcUc1EPNsQWJhWA4RR4GmIA
# Azure SDK for JavaScript

[![Packages](https://img.shields.io/badge/packages-latest-blue.svg)](https://azure.github.io/azure-sdk/releases/latest/js.html) [![Dependencies](https://img.shields.io/badge/dependency-report-blue.svg)](https://azuresdkartifacts.blob.core.windows.net/azure-sdk-for-js/dependencies/dependencies.html) [![DependencyGraph](https://img.shields.io/badge/dependency-graph-blue.svg)](https://azuresdkartifacts.blob.core.windows.net/azure-sdk-for-js/dependencies/dependencyGraph/dagre.html)

This repository is for the Azure SDK for JavaScript (Node.js & Browser). It contains libraries for the breadth of Azure services. Management libraries are packages that you would use to provision and manage Azure resources. Client libraries are packages that you would use to consume these resources and interact with them.

## Getting started

A few helpful resources to get started are:

- The readme for each package contains code samples and package information. This readme can be found in the corresponding package folder under the folder of the service of your choice in the `/sdk` folder of this repository. The same readme file can be found on the landing page for the package in [npm](https://www.npmjs.com/).
- The API reference documentation of the latest versions of these packages, can be found at our [public developer docs](https://learn.microsoft.com/javascript/azure/).
- The API reference documentation of older versions, can be found in our [versioned developer docs](https://azure.github.io/azure-sdk-for-js).

Each service might have a number of libraries available from each of the following categories:

- [Client](#client)
- [Management](#management)

> NOTE: Some of these packages have beta versions. If you need to ensure your code is ready for production, use one of the stable, non-beta packages.

### Client

Given an Azure resource already exists, you would use the client libraries to consume it and interact with it.
Most of these libraries follow the [Azure SDK Design Guidelines for JavaScript & TypeScript](https://azure.github.io/azure-sdk/typescript_introduction.html) and share a number of core functionalities such as retries, logging, transport protocols, authentication protocols, etc. Others will be updated in the near future to follow the guidelines as well.

To get a list of all client libraries that follow the new guidelines, please visit our [Azure SDK releases page](https://azure.github.io/azure-sdk/releases/latest/js.html).

### Management

Management libraries enable you to provision and manage Azure resources via the [Azure Resource Manager i.e. ARM](https://learn.microsoft.com/azure/azure-resource-manager/management/overview). You can recognize these libraries by `@azure/arm-` in their package names. These are purely auto-generated based on the swagger files that represent the APIs for resource management.

Newer versions of these libraries follow the [Azure SDK Design Guidelines for TypeScript](https://azure.github.io/azure-sdk/typescript_introduction.html). These new versions provide a number of core capabilities that are shared amongst all Azure SDKs, including the intuitive Azure Identity library, an HTTP Pipeline with custom policies, error-handling, distributed tracing, and much more. A few helpful resources to get started with these are:

- [List of management libraries that follow the new guidelines](https://azure.github.io/azure-sdk/releases/latest/mgmt/js.html)
- [Documentation and code samples](https://aka.ms/azsdk/js/mgmt).
- [Migration guide](https://github.com/Azure/azure-sdk-for-js/blob/main/documentation/MIGRATION-guide-for-next-generation-management-libraries.md) that shows how to transition from older versions of libraries.

> NOTE: If you are experiencing authentication issues with the management libraries after upgrading certain packages, it's possible that you upgraded to the new versions of SDK without changing the authentication code, please refer to the migration guide mentioned above for proper instructions.

## Need help?

- For detailed documentation, visit our [Azure SDK for JavaScript documentation](https://aka.ms/js-docs)
- File an issue via [GitHub Issues](https://github.com/Azure/azure-sdk-for-js/issues)
- Check [previous questions](https://stackoverflow.com/questions/tagged/azure-sdk-js) or ask new ones on StackOverflow using `azure-sdk-js` tag.
- Read our [Support documentation](https://github.com/Azure/azure-sdk-for-js/blob/main/SUPPORT.md).

## Data Collection
The software may collect information about you and your use of the software and send it to Microsoft. Microsoft may use this information to provide services and improve our products and services. You may turn off the telemetry as described below. You can learn more about data collection and use in the help documentation and Microsoft’s [privacy statement](https://go.microsoft.com/fwlink/?LinkID=824704). For more information on the data collected by the Azure SDK, please visit the [Telemetry Guidelines](https://azure.github.io/azure-sdk/general_azurecore.html#telemetry-policy) page.

### Telemetry Configuration
Telemetry collection is on by default.

To opt out, you can disable telemetry at client construction. Create a custom HTTP pipeline policy that removes the user agent string, and then pass that policy into the `additionalPolicies` option during client creation. This will disable telemetry for all methods in the client. Do this for every new client.

The example below uses the `@azure/keyvault-secrets` package. In your code, you can replace `@azure/keyvault-secrets` with the package you are using.

```javascript
import { SecretClient } from "@azure/keyvault-secrets";
import { ManagedIdentityCredential } from "@azure/identity";

function removeUserAgentPolicy() {
  return {
    name: "removeUserAgentPolicy",
    sendRequest(request, next) {
      request.headers.delete("User-Agent");
      return next(request);
    },
  };
}

/**
 * Creates a SecretClient with managed identity authentication and empty user agent
 * @param keyvaultUri - The URI of the Azure Key Vault
 * @returns configured SecretClient instance
 */
function createSecretClientWithManagedIdentity(
  keyvaultUri: string
): SecretClient {
  // Create ManagedIdentityCredential for managed identity authentication
  const credential = new ManagedIdentityCredential();

  // Create secret client with managed identity and empty user agent
  const secretClient = new SecretClient(keyvaultUri, credential, {
    additionalPolicies: [
      {
        position: "perCall",
        policy: removeUserAgentPolicy(),
      },
    ],
  });

  return secretClient;
}

// Usage example
const keyvaultUri = "https://your-keyvault-name.vault.azure.net";
const secretClient = createSecretClientWithManagedIdentity(keyvaultUri);

// Now you can use the secret client to perform operations
// For example:
// const secretValue = await secretClient.getSecret("your-secret-name");
```

### Community

Try our [community resources](https://github.com/Azure/azure-sdk-for-js/blob/main/SUPPORT.md#community-resources).

### Reporting security issues and security bugs

Security issues and bugs should be reported privately, via email, to the Microsoft Security Response Center (MSRC) <secure@microsoft.com>. You should receive a response within 24 hours. If for some reason you do not, please follow up via email to ensure we received your original message. Further information, including the MSRC PGP key, can be found in the [Security TechCenter](https://www.microsoft.com/msrc/faqs-report-an-issue).

## Contributing

For details on contributing to this repository, see the [contributing guide](https://github.com/Azure/azure-sdk-for-js/blob/main/CONTRIBUTING.md).

This project welcomes contributions and suggestions. Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit
<https://cla.microsoft.com>.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions provided by the bot. You will only need to do this once across all repositories using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information, see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
