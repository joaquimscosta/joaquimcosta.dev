resource "azurerm_service_plan" "plan" {
  name                = "${var.app_name}-plan"
  resource_group_name = var.resource_group_name
  location            = var.location
  os_type             = "Linux"
  sku_name            = "B1"
  tags                = var.common_tags
}

resource "azurerm_linux_web_app" "app" {
  name                = var.app_name
  resource_group_name = var.resource_group_name
  location            = var.location
  service_plan_id     = azurerm_service_plan.plan.id
  tags                = var.common_tags
  site_config {
    application_stack {
      docker_image_name = var.docker_image_name
      docker_registry_url = "https://ghcr.io"
    }
  }
}
