
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
	export DISPLAY=:0.0
	chromium-browser --kiosk --app=http://127.0.0.1:4242/ --window-size=1366,768 --start-fullscreen  --disable-infobars --disable-session-crashed-bubble
fi