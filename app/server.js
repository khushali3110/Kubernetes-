const express = require('express');
const os = require('os');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


const appMode = process.env.APP_MODE || "Local Development";
const dbPassword = process.env.DB_PASSWORD || "Hidden-Local";
const podName = os.hostname(); 

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>K8s EKS Dashboard</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
            <style>
                body { background-color: #0d1117; color: #c9d1d9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
                .card { background-color: #161b22; border: 1px solid #30363d; color: white; border-radius: 12px; }
                .status-badge { background-color: #238636; color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.9rem; }
                .k8s-icon { color: #326ce5; font-weight: bold; }
                .variable-box { background: #010409; padding: 10px; border-left: 4px solid #326ce5; border-radius: 4px; margin-top: 10px; }
            </style>
        </head>
        <body>
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-8 text-center mb-4">
                        <h1 class="display-5 fw-bold"><span class="k8s-icon">☸</span> Kubernetes + EKS Demo</h1>
                        <p class="text-secondary">Full Project Flow & Infrastructure Visualization</p>
                        <span class="status-badge">● Active & Running</span>
                    </div>
                </div>

                <div class="row g-4">
                    <!-- Infrastructure Status -->
                    <div class="col-md-6">
                        <div class="card p-4 h-100">
                            <h5 class="text-info">Cluster Information</h5>
                            <hr>
                            <p><strong>Environment:</strong> <span class="badge bg-primary">${appMode}</span></p>
                            <p><strong>Current Pod Name:</strong></p>
                            <div class="variable-box"><code>${podName}</code></div>
                        </div>
                    </div>

                    <!-- Config & Secrets -->
                    <div class="col-md-6">
                        <div class="card p-4 h-100">
                            <h5 class="text-warning">K8s Managed Data</h5>
                            <hr>
                            <p><strong>ConfigMap Value (Mode):</strong></p>
                            <div class="variable-box text-success">${appMode}</div>
                            
                            <p class="mt-3"><strong>Secret Value (DB Password):</strong></p>
                            <div class="variable-box text-danger">******** (Encrypted in K8s)</div>
                        </div>
                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col-md-12 text-center text-secondary">
                        <small>Refreshed at: ${new Date().toLocaleTimeString()} | Intern Profile: Khushi</small>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Professional Dashboard running on port ${PORT}`);
});