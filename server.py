import sys
import BaseHTTPServer
import os, time
from SimpleHTTPServer import SimpleHTTPRequestHandler

from signal import signal, SIGPIPE, SIG_DFL

signal(SIGPIPE,SIG_DFL) 

HandlerClass = SimpleHTTPRequestHandler
ServerClass  = BaseHTTPServer.HTTPServer
Protocol     = "HTTP/1.0"

if sys.argv[1:]:
    port = int(sys.argv[1])
else:
    port = 4242
server_address = ('127.0.0.1', port)

HandlerClass.protocol_version = Protocol
httpd = ServerClass(server_address, HandlerClass)

sa = httpd.socket.getsockname()
print "Serving HTTP on", sa[0], "port", sa[1], "..."

httpd.serve_forever()