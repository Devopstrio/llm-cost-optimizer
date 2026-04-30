export enum LLMProvider {
  OPENAI = "OPENAI",
  AZURE_OPENAI = "AZURE_OPENAI",
  ANTHROPIC = "ANTHROPIC",
  GOOGLE = "GOOGLE",
  COHERE = "COHERE",
  LOCAL = "LOCAL"
}

export enum ModelTier {
  FRONTIER = "FRONTIER", // e.g. GPT-4, Claude 3 Opus
  MID_TIER = "MID_TIER",  // e.g. GPT-3.5, Claude 3 Sonnet
  ECONOMY = "ECONOMY"     // e.g. Claude 3 Haiku, Gemini Flash
}

export interface TokenUsage {
  id: string;
  provider: LLMProvider;
  model: string;
  inputTokens: number;
  outputTokens: number;
  totalCost: number;
  timestamp: string;
  userId?: string;
  applicationId?: string;
}

export interface OptimizationRecommendation {
  id: string;
  targetApp: string;
  currentModel: string;
  suggestedModel: string;
  estMonthlySaving: number;
  reasoning: string;
  performanceImpact: "NEUTRAL" | "SLIGHT_DECREASE" | "IMPROVED";
}

export interface BudgetStatus {
  totalBudget: number;
  currentSpend: number;
  forecastedSpend: number;
  period: "MONTHLY" | "QUARTERLY" | "ANNUAL";
  isOverBudget: boolean;
}
