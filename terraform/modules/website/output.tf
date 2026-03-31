
output "domain_name" {
  description = "Domain name of the app"
  value = azurerm_linux_web_app.app.default_hostname
}
output "app_name" {
  description = "Name of the App Service"
  value = azurerm_linux_web_app.app.name
}