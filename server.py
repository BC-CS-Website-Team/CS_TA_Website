
import http.server
import socketserver
import webbrowser
from datetime import datetime

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        print(f"[{timestamp}] {args[0]} {args[1]} {args[2]}")

PORT = 8000

print("\n🌐 Server starting...")
print(f"📎 Access your site at: \033[94mhttp://localhost:{PORT}\033[0m")
print("⌨️  Press Ctrl+C to stop the server\n")

with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
    print(f"Serving at port {PORT}...")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 Server stopped by user")
        httpd.server_close()