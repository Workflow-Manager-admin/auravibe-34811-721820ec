#!/bin/bash
cd /home/kavia/workspace/code-generation/auravibe-34811-721820ec/auraVibe_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

