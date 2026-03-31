variable "resource_group_name" {
  description = "Name of the resource group"
  type        = string
}

variable "location" {
  description = "Name of the location for the resource"
  type = string
  
}

variable "docker_image_name" {
  description = "Name of the image to deploy in the webapp"
  type        = string
}

variable "app_name" {
  description = "Name of the App Service"
  type        = string
}

variable "common_tags" {
  description = "Common tags to be used in all resources"
  type        = map(string)
  default = {}
}