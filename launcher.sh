
#!/bin/bash
{
    python server.py
}&
if [[ $# -ne 1 ]]; then
	chromium-browser --kiosk --app=http://127.0.0.1:4242/ --window-size=1366,768 --start-fullscreen --user-data-dir=/tmp
elif [ $1 = "devmode" ] || [ $1 = "devMode" ]; then
	sleep 0.5
fi