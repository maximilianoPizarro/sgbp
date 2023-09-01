FROM php:7.2-apache

#postres
RUN apt-get update && apt-get install -y libpq-dev
RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql
RUN docker-php-ext-install pdo pdo_pgsql

RUN mkdir -p /var/www/html/sgbp
COPY . /var/www/html/sgbp/

COPY ./my-httpd.conf /usr/local/apache2/conf/httpd.conf