@description('The Custom domain name to create the certificate and bind it to the app.')
param domainName string
@description('The tags to associate with the certificate.')
param tags object = {}
@description('The region in which the certificate should be created.')
param location string
@description('The app name to bind the certificate to.')
param appName string

resource app 'Microsoft.Web/sites@2021-02-01' existing = {
  name: appName
}

resource certificate 'Microsoft.Web/certificates@2023-01-01' = {
  name: domainName
  location: location
  tags: tags
  properties: {
    hostNames: [domainName]
    canonicalName: domainName
    serverFarmId: app.properties.serverFarmId
  }
}

module enableCertificates 'dns-binding.bicep' = {
  name: 'bindCertificateToDomain'
  params: {
    appName: app.name
    customDomainName: domainName
    sslState: 'SniEnabled'
    thumbprint: certificate.properties.thumbprint
  }
}
