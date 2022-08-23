#!/usr/bin/env bash

#Define backup procedure
term_handler() {
    echo "Container stopped, backup..."
    /usr/bin/mysqldump -hdatabase -uroot -p"$MARIADB_ROOT_PASSWORD" $MARIADB_DATABASE > /tmp/db/dump.sql
    sleep 20
}

#Trap TERM
trap "term_handler" SIGTERM

#Wait
tail --pid=$$ -f /dev/null &
wait ${!}