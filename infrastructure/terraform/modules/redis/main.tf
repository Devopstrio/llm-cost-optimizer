resource "aws_elasticache_replication_group" "usage_queue" {
  replication_group_id          = "llm-usage-queue-${var.env}"
  replication_group_description = "Queue for LLM token and cost ingestion"
  node_type                     = "cache.t4g.small"
  port                          = 6379
  parameter_group_name          = "default.redis7"
  automatic_failover_enabled    = true

  cluster_mode {
    replicas_per_node_group = 1
    num_node_groups         = 2
  }

  subnet_group_name = var.subnet_group_name
}
