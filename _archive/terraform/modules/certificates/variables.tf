variable "hostname_binding_id" {
  description = "The custom hostname binding id"
  type = string
}

variable "common_tags" {
  description = "Common tags to be used in all resources"
  type        = map(string)
  default     = {}
}