provider "aws" {
  region = "us-east-2"
}

terraform {
  backend "s3" {
    bucket  = "app-cinema66061-tf-state"
    key     = "app-cinema66061.tfstate"
    region  = "us-east-2"
    encrypt = true
  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManagedBy   = "Terraform"
    Owner       = "Wayne Wollesen"
  }
}