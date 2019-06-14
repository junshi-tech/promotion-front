#!/bin/bash

git pull upstream master && \cp -fr dist/* ../promotion-backstage/public/ui/dist/ && echo 'Update app successed.'
