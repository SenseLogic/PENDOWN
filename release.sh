#!/bin/sh
set -x
dmd -O -m64 pendown.d
rm *.o
