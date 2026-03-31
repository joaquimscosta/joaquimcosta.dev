@description('Name of the app service')
param appName string
@description('Custom domain name to bind to the app.')
param customDomainName string

@description('SSL state of the binding')
@allowed([
  'Disabled'
  'SniEnabled'
  'IpBasedEnabled'
])
param sslState string

@description('Thumbprint of the certificate to bind to the app')
param thumbprint string = ''

// Assert that thumbprint is not empty when sslState is 'SniEnabled'
// @experimentalFeatures('Assertions')
// assert(!(sslState == 'SniEnabled' && length(thumbprint) == 0), 'Thumbprint cannot be empty when sslState is SniEnabled')

resource app 'Microsoft.Web/sites@2023-01-01' existing = {
  name: appName
}

resource binding 'Microsoft.Web/sites/hostNameBindings@2023-01-01' = {
  parent: app
  name: customDomainName
  properties: {
    siteName: appName
    hostNameType: 'Verified'
    sslState: sslState
    thumbprint: thumbprint
  }
}

output hostNameBinding object = binding
