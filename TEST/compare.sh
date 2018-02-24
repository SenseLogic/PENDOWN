#!/bin/sh
set -x
../../PATCHUP/patchup --verbose compare.patchup
meld /tmp/pendown.js /tmp/pendown.d
