resource "aws_s3_bucket" "ml_artifacts" {
  bucket = "mlflow-enterprise-artifacts-${var.env}"
  
  tags = {
    Name        = "MLflow Artifacts"
    Environment = var.env
  }
}

resource "aws_s3_bucket_versioning" "ml_artifacts_versioning" {
  bucket = aws_s3_bucket.ml_artifacts.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "ml_artifacts_encryption" {
  bucket = aws_s3_bucket.ml_artifacts.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}
