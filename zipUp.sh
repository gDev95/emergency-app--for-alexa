#!/bin/bash
if [ ! -f ./safetrekApi.zip ]; then
    echo 'safetrekApi does not exist'
    echo 'zipping up project as safetrekApi..'
    zip -r -q ./safetrekApi *
else 
  echo 'deleting old zip and zip new project...'
  rm -rf safetrekApi.zip & zip -r -q ./safetrekApi *
fi
