#!/bin/sh
set -x
dmd -m64 pendown.d
rm *.o
