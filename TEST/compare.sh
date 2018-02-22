#!/bin/sh
set -x
../../PATCHUP/patchup compare.patchup
meld ../pendown.js /tmp/pendown.d
