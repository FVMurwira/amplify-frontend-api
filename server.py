import http.server
import socketserver

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        http.server.SimpleHTTPRequestHandler.end_headers(self)

handler = MyHttpRequestHandler
port = 8000

with socketserver.TCPServer(("", port), handler) as httpd:
    print("Serving at port", port)
    httpd.serve_forever()
