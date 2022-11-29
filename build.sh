#!/bin/bash
# set -e
pnpm build
echo '开始压缩'
tar -czvf  dist.tar ./dist
echo '压缩完成'
