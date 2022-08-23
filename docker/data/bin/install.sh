#!/bin/sh

if [ -f "/var/www/html/wp-config.php" ]; then

    rm -rf /var/www/html/wp-content/plugins/akismet
    rm -f /var/www/html/wp-content/plugins/hello.php

    # Display version
    wp cli version

    if ! wp core is-installed; then
        wp core install --url='localhost' --title='Solbeg' --admin_user='admin' --admin_password='admin' --admin_email='admin@example.com'
    fi

    # Install Wordpress
    wp language core install ru_RU
    wp language core activate ru_RU

    # Setup rewrite rules
    wp rewrite structure '%postname%/'
    wp rewrite flush --hard

    # Graph QL
    wp plugin install wp-graphql --activate

    # Template
    wp theme activate silence

    echo "php_value upload_max_filesize 256M" >> /var/www/html/.htaccess
    echo "php_value post_max_size 256M" >> /var/www/html/.htaccess
    echo "php_value memory_limit 256M" >> /var/www/html/.htaccess
fi