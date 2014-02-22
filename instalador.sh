#!/bin/sh
#instalacion de mongo
apt-get install mongodb mongodb-clients mongodb-server
service mongodb start
mongo
update-rc.d mongodb defaults
