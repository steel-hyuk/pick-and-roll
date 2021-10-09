#!/bin/bash
cd /home/ubuntu/pick-and-roll/server

export NODE_ENV=$(aws ssm get-parameters --region ap-northeast-2 --names NODE_ENV --query Parameters[0].Value | sed 's/"//g')
export ACCESS_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names ACCESS_SECRET --query Parameters[0].Value | sed 's/"//g')
export REFRESH_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names REFRESH_SECRET --query Parameters[0].Value | sed 's/"//g')
export COOKIE_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names COOKIE_SECRET --query Parameters[0].Value | sed 's/"//g')
export DB_USERNAME=$(aws ssm get-parameters --region ap-northeast-2 --names DB_USERNAME --query Parameters[0].Value | sed 's/"//g')
export DB_PASSWORD=$(aws ssm get-parameters --region ap-northeast-2 --names DB_PASSWORD --query Parameters[0].Value | sed 's/"//g')
export DB_PORT=$(aws ssm get-parameters --region ap-northeast-2 --names DB_PORT --query Parameters[0].Value | sed 's/"//g')
export DB_HOST=$(aws ssm get-parameters --region ap-northeast-2 --names DB_HOST --query Parameters[0].Value | sed 's/"//g')
export DB_DBNAME=$(aws ssm get-parameters --region ap-northeast-2 --names DB_DBNAME --query Parameters[0].Value | sed 's/"//g')

authbind --deep pm2 start app.js