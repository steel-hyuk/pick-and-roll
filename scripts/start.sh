#!/bin/bash
cd /home/ubuntu/pick-and-roll/server
authbind --deep pm2 start app.js