#!/bin/sh
set -x
rm /tmp/pendown.js
rm /tmp/pendown.d
../../BATCHED/batched --verbose compare.batched
meld /tmp/pendown.js /tmp/pendown.d
