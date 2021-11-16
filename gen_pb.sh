#!/bin/bash
# Use this to regenerate the js files for the protobuf specs
# This file works on Windows...

set -exuo pipefail

protoc -I=protobuf/pb \
  --plugin="protoc-gen-ts=node_modules/.bin/protoc-gen-ts" \
  --js_out="import_style=commonjs,binary:protobuf/js" \
  --ts_out="protobuf/js" \
  $(cd protobuf/pb && find . -name \*.proto | grep -oE '[a-z]+.*$')
  
protoc -I=protobuf/pb \
  --plugin="protoc-gen-ts=node_modules/.bin/protoc-gen-ts" \
  --js_out="import_style=commonjs,binary:protobuf/js" \
  --ts_out="service=grpc-web:protobuf/js" \
  nest.gateway.proto
