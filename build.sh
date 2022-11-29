#!/bin/bash
# set -e
pnpm build
tar -czvf  dist.tar ./dist