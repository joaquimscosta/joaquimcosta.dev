resource "azurerm_app_service_custom_hostname_binding" "hostname" {
  hostname = var.hostname
  app_service_name = var.app_name
  resource_group_name = var.resource_group_name
  # Ignore ssl_state and thumbprint as they are managed using
  # azurerm_app_service_certificate_binding
  lifecycle {
    ignore_changes = [ ssl_state, thumbprint]
  }
}
