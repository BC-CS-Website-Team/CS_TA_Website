import http.server
import socketserver
from datetime import datetime
from typing import Any, Optional


class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format: str, *args: Any) -> None:
        """Log an arbitrary message with timestamp.

        Args:
            format: Format string for the message
            *args: Variables to be formatted into the message
        """
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        try:
            message = format % args
            print(f"[{timestamp}] {message}")
        except Exception as e:
            print(f"[{timestamp}] Error logging message: {e}")

    def send_error(self, code: int, message: Optional[str] = None, explain: Optional[str] = None) -> None:
        """Send and log an error reply.

        Args:
            code: HTTP error code
            message: Optional error message
            explain: Optional error explanation
        """
        try:
            super().send_error(code, message, explain)
        except Exception as e:
            print(f"Error sending error response: {e}")


def run_server(port: int = 8000) -> None:
    """Run the HTTP server on the specified port.

    Args:
        port: Port number to run the server on (default: 8000)
    """
    handler = CustomHTTPRequestHandler

    try:
        with socketserver.TCPServer(("", port), handler) as httpd:
            print("\n🌐 Server starting...")
            print(f"📎 Access your site at: http://localhost:{port}")
            print("⌨️  Press Ctrl+C to stop the server\n")
            print(f"Serving at port {port}...")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 Server stopped by user")
        httpd.server_close()
    except Exception as e:
        print(f"\n❌ Error starting server: {e}")


if __name__ == "__main__":
    run_server()