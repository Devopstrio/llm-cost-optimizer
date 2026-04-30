# Architecture & FinOps Diagrams

## 11. Multi-Provider Usage Topology (Detailed)
*How the platform orchestrates usage tracking across global AI endpoints.*

```mermaid
graph TD
    subgraph "AI FinOps Hub"
        Portal[Intelligence Portal]
        Engine[Cost Aggregator]
        DB[Usage Metastore]
    end
    subgraph "LLM Endpoints"
        US_East[AWS: Bedrock US-East]
        EU_West[Azure: OpenAI EU-West]
        Asia[GCP: Vertex AI Tokyo]
    end
    Portal --> Engine
    Engine --> US_East
    Engine --> EU_West
    Engine --> Asia
    DB --> Engine
```

## 13. "Token Efficiency" Scoring Logic
```mermaid
graph LR
    Input[Input Tokens] --> Ratio[Output / Input Ratio]
    Goal[Task Goal Accomplished] --> Efficiency[Efficiency Score]
    Latency[Response Time] --> Efficiency
    Ratio --> Efficiency
    Efficiency --> Grade[Efficiency Grade: A]
```

## 20. Budget Enforcement Pipeline
```mermaid
stateDiagram-v2
    Usage_Event --> Check: Evaluate against Policy
    Check --> Alert: > 80% Threshold
    Check --> RateLimit: > 100% Threshold
    RateLimit --> Action: Disable Rogue App API Key
    Action --> Success: Budget Protected
```
