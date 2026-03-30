output "hostname_binding_id" {
  description = "The hostname binding id"
  value = azurerm_app_service_custom_hostname_binding.hostname.id
}