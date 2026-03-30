resource_group_name = "mywebrg"
app_name            = "costacodecraft"
docker_image_name   = "joaquimcosta/costacodecraft-ui:v0.3.5"
custom_domain_names = [
  "costacodecraft.com",
  "www.costacodecraft.com"
]
common_tags = {
  environment = "Production"
  purpose     = "Personal Website"
}
