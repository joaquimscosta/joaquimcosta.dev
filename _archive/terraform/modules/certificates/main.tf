

resource "azurerm_app_service_managed_certificate" "certificate" {
  custom_hostname_binding_id = var.hostname_binding_id
  tags = var.common_tags
  
}
resource "azurerm_app_service_certificate_binding" "binding" {
  hostname_binding_id = var.hostname_binding_id
  certificate_id = azurerm_app_service_managed_certificate.certificate.id
  ssl_state = "SniEnabled"
}
