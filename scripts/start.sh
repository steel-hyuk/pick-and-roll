#!/bin/bash
cd /home/ubuntu/im-sprint-practice-deploy/server

export COOKIE_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names COOKIE_SECRET --query Parameters[0].Value | sed 's/"//g')
export DB_DBNAME=$(aws ssm get-parameters --region ap-northeast-2 --names DB_DBNAME --query Parameters[0].Value | sed 's/"//g')
export DB_HOST=$(aws ssm get-parameters --region ap-northeast-2 --names DB_HOST --query Parameters[0].Value | sed 's/"//g')
export DB_PASSWORD=$(aws ssm get-parameters --region ap-northeast-2 --names DB_PASSWORD --query Parameters[0].Value | sed 's/"//g')
export DB_PORT=$(aws ssm get-parameters --region ap-northeast-2 --names DB_PORT --query Parameters[0].Value | sed 's/"//g')
export DB_USERNAME=$(aws ssm get-parameters --region ap-northeast-2 --names USERNAME --query Parameters[0].Value | sed 's/"//g')

authbind --deep pm2 start app.js