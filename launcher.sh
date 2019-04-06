
#!/bin/bash
if [[ $1 = "stop" ]]; then
	sleep 0.5
	killall python server.py
else
	{
    python server.py
	}&
fi
if [ $# = 0 ]; then
	chromium-browser --kiosk --app=http://127.0.0.1:4242/ --window-size=1366,768 --start-fullscreen --user-data-dir=/tmp
fi