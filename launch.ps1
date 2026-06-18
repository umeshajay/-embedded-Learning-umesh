$port = 8080
$dir = Split-Path -Parent $MyInvocation.MyCommand.Path

Write-Host "Starting server at http://localhost:$port" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop" -ForegroundColor Yellow

Start-Process "http://localhost:$port"

python -m http.server $port -d $dir
