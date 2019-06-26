#!/bin/bash
echo "start"
rm -rf /var/www/html/
mv www/* /var/www/html/*
echo "finished!"