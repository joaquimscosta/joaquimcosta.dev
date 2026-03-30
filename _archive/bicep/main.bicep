@description('Location for all resources')
param location string = resourceGroup().location

@description('The name of the App Service. This must be globally unique.')
param appName string

@description('Docker image full name. repository/image:tag')
param dockerImageName string

@description('List of custom domain names to bind to the App Service.')
param customDomainNames array = []

@description('Common tags for all resources')
param commonTags object

@description('The environment where the app is deployed.')
@allowed([
  'prod'
  'dev'
])
param environmentType string
var configurations = {
  prod: {
    appServiceSku: 'B1'
    appServiceCapacity: 1
  }
  dev: {
    appServiceSku: 'F1'
    appServiceCapacity: 1
  }
}

module appService './modules/app-service.bicep' = {
  name: 'appService'
  params: {
    appName: appName
    skuName: configurations[environmentType].appServiceSku
    capacity: configurations[environmentType].appServiceCapacity
    dockerImageName: dockerImageName
    tags: commonTags
    location: location
  }
}

// setting batchSize to 1 because getting intermittent errors when creating multiple resources in parallel
@batchSize(1)
module hostNameBinding 'modules/dns-binding.bicep' = [
  for name in customDomainNames: {
    name: 'hostNameBinding-${name}'
    params: {
      appName: appService.outputs.appName
      customDomainName: name
      sslState: 'Disabled'
    }
  }
]

module tlsCerfiticate 'modules/tls-certificates.bicep' = [
  for name in customDomainNames: {
    name: 'tlsCertificate-${name}'
    params: {
      location: location
      tags: commonTags
      appName: appService.outputs.appName
      domainName: name
    }
    /*
    The we need to bind the domain name with the application, then we need to bind the certificate with the domain name.
    Therefore, we need to explicitly wait for the hostNameBinding to be created before creating the certificate, 
    which will bind the certificate with the domain name and update the sslState
    */
    dependsOn: [
      hostNameBinding
    ]
  }
]
output appHostname string = appService.outputs.hostname
