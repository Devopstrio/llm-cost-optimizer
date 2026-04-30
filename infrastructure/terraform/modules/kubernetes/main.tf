resource "aws_eks_cluster" "cost_opt_cluster" {
  name     = "llm-cost-cluster-${var.env}"
  role_arn = var.eks_role_arn

  vpc_config {
    subnet_ids = var.subnet_ids
  }
}

resource "aws_eks_node_group" "cost_opt_nodes" {
  cluster_name    = aws_eks_cluster.cost_opt_cluster.name
  node_group_name = "cost-opt-workers"
  node_role_arn   = var.node_role_arn
  subnet_ids      = var.subnet_ids

  scaling_config {
    desired_size = 3
    max_size     = 10
    min_size     = 3
  }

  instance_types = ["c6i.xlarge"] // Compute intensive for processing usage logs
}
