resource "kubernetes_deployment" "mlflow" {
  metadata {
    name      = "mlflow-server"
    namespace = var.namespace
    labels = {
      app = "mlflow"
    }
  }

  spec {
    replicas = 2
    selector {
      match_labels = {
        app = "mlflow"
      }
    }
    template {
      metadata {
        labels = {
          app = "mlflow"
        }
      }
      spec {
        container {
          name  = "mlflow"
          image = "ghcr.io/mlflow/mlflow:latest"
          port {
            container_port = 5000
          }
          env {
            name  = "MLFLOW_BACKEND_STORE_URI"
            value = var.db_connection_string
          }
          env {
            name  = "MLFLOW_ARTIFACT_ROOT"
            value = "s3://${var.artifact_bucket_name}"
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "mlflow" {
  metadata {
    name      = "mlflow-service"
    namespace = var.namespace
  }
  spec {
    selector = {
      app = "mlflow"
    }
    port {
      port        = 80
      target_port = 5000
    }
    type = "LoadBalancer"
  }
}
