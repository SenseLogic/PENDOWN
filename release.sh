#!/bin/sh
set -x
dmd -O -inline -m64 pendown.d
rm *.o
