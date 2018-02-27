#!/bin/sh
set -x
rm /tmp/pendown.js
rm /tmp/pendown.d
../../PATCHUP/patchup --verbose compare.patchup
meld /tmp/pendown.js /tmp/pendown.d
