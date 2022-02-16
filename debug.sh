#!/bin/sh
set -x
dmd -debug -g -gf -gs -m64 pendown.d
rm *.o
