export enum ModelStage {
  NONE = "None",
  STAGING = "Staging",
  PRODUCTION = "Production",
  ARCHIVED = "Archived"
}

export enum DeploymentStatus {
  PENDING = "PENDING",
  DEPLOYING = "DEPLOYING",
  ACTIVE = "ACTIVE",
  FAILED = "FAILED",
  ROLLED_BACK = "ROLLED_BACK"
}

export interface MLModel {
  id: string;
  name: string;
  version: string;
  stage: ModelStage;
  accuracy: number;
  lastTrained: string;
  driftDetected: boolean;
  deploymentUrl?: string;
  author: string;
}

export interface ExperimentRun {
  runId: string;
  experimentId: string;
  status: "RUNNING" | "FINISHED" | "FAILED";
  metrics: Record<string, number>;
  parameters: Record<string, any>;
  artifacts: string[]; // List of artifact URIs
}

export interface MLOpsKPIs {
  totalExperiments: number;
  modelsInProduction: number;
  avgInferenceLatency: number; // ms
  totalPredictions: number;
  driftAlerts24h: number;
}
