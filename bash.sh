# Agent card (capability discovery)
curl http://localhost:8080/.well-known/agent-card.json

# Send a message via REST
curl -X POST http://localhost:8080/a2a/v1/message:send \
  -H "Content-Type: application/json" \
  -H "A2A-Version: 1.0" \
  -d '{"message": {"messageId": "msg-001", "role": "ROLE_USER", "parts": [{"text": "Hello"}]}}'

# Send a message via JSON-RPC
curl -X POST http://localhost:8080/a2a/v1/rpc \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc": "2.0", "method": "SendMessage", "params": {"message": {"messageId": "msg-002", "role": "ROLE_USER", "parts": [{"text": "Hello"}]}}, "id": 1}'
