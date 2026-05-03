
echo "Starting Deployment Flow..."


docker build -t your-docker-username/intern-app:latest ./app


docker push your-docker-username/intern-app:latest


kubectl apply -f k8s/

echo "Deployment Successful! Check status using: kubectl get pods"