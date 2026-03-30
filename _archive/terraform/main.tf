terraform {
  required_version = ">= 1.0.0"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm",
      version = "~> 4.0"
    }
  }
}

provider "azurerm" {
  resource_provider_registrations = "none"
  subscription_id                 = var.subscription_id
  features {
  }
}

locals {
  default_tags = merge(var.common_tags, {
    app = var.app_name
  })
}

resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = "East US"
  tags     = local.default_tags
}

module "website" {
  source              = "./modules/website"
  app_name            = var.app_name
  common_tags         = local.default_tags
  docker_image_name   = var.docker_image_name
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
}

module "hostname" {
  source              = "./modules/hostname"
  for_each            = var.custom_domain_names
  hostname            = each.value
  app_name            = module.website.app_name
  resource_group_name = azurerm_resource_group.rg.name
}

module "certificate" {
  source              = "./modules/certificates"
  for_each            = module.hostname
  hostname_binding_id = each.value.hostname_binding_id
}