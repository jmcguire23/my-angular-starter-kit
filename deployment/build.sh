#!/usr/bin/env bash

if [ $JOB_NAME == "lighthouse-dev-build" ]; then
    echo $JOB_NAME
    echo "Setting up for DEV"
    cp $WORKSPACE/deployment/dev-manifest.yml $WORKSPACE/manifest.yml
elif [ $JOB_NAME == "lighthouse-pre-prod-build" ]; then
    echo $JOB_NAME
    echo "Setting up for PROD"
    cp $WORKSPACE/deployment/pre-prod-manifest.yml $WORKSPACE/manifest.yml
elif [ $JOB_NAME == "lighthouse-test-build" ]; then
    echo $JOB_NAME
    echo "Setting up for TEST"
    cp $WORKSPACE/deployment/test-manifest.yml $WORKSPACE/manifest.yml
fi
