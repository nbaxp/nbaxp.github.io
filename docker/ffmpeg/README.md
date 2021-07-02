# ffmpeg
## 示例：
推视频：
```
ffmpeg -y -re -stream_loop -1 -i "file.mp4" -vcodec libx264 -acodec aac -s 640x360 -f flv -y -vf "drawtext=fontfile=lucon.ttf:text='%{localtime}':x=(w-text_w)/2:y=(h-text_h)/2:fontsize=24:fontcolor=white" "rtmp://host.docker.internal:8079/live/test?vhost=_"
```
推图片：
```
ffmpeg -f image2 -loop 1 -i "test.jpg" -vcodec libx264 -acodec aac -s 640x360 -f flv -y -vf "drawtext=fontfile=lucon.ttf:text='%{localtime}':x=(w-text_w)/2:y=(h-text_h)/2:fontsize=24:fontcolor=white" "rtmp://host.docker.internal:8079/live/test?vhost=_"
```