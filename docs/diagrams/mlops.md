# MLOps & Lifecycle Diagrams

## 11. Industrial ML Lifecycle (Detailed)
*The end-to-end orchestration of an ML model from discovery to production.*

```mermaid
graph TD
    subgraph "Phase 1: Experimentation"
        E1[Data Ingestion]
        E2[Feature Engineering]
        E3[Model Training]
        E4[Hyperparameter Tuning]
    end
    subgraph "Phase 2: Validation"
        V1[Accuracy Check]
        V2[Bias Detection]
        V3[Latency Benchmarking]
    end
    subgraph "Phase 3: Registry & Governance"
        R1[MLflow Registration]
        R2[Stage Transition: Staging]
        R3[Executive Approval]
    end
    subgraph "Phase 4: Deployment"
        D1[Inference Service Build]
        D2[Canary Rollout]
        D3[Promote to Production]
    end
    subgraph "Phase 5: Monitoring"
        M1[Drift Detection]
        M2[Performance Analytics]
        M3[Automated Retraining]
    end

    E1 --> E2 --> E3 --> E4 --> V1 --> V2 --> V3 --> R1 --> R2 --> R3 --> D1 --> D2 --> D3 --> M1 --> M2 --> M3 --> E3
```

## 15. MLflow Tracking Persistence Architecture
```mermaid
graph LR
    subgraph "Experiment Run"
        SDK[Python SDK]
    end
    subgraph "Control Plane"
        API[MLflow Server]
        DB[(PostgreSQL)]
    end
    subgraph "Storage"
        S3[(S3 Bucket)]
    end

    SDK -->|Metrics/Params| API
    API -->|Metadata| DB
    SDK -->|Artifacts/Models| S3
```

## 20. Model Drift Detection Logic
```mermaid
graph TD
    Prod[Prod Predictions] --> Analyzer[Drift Analyzer]
    Training[Training Baseline] --> Analyzer
    Analyzer -->|Stat Threshold Met| Alert[Drift Alert]
    Alert --> Retrain[Trigger Pipeline]
```
