#!/bin/sh
set -x
../pendown ../pendown.d > pendown.pd
cat pendown_header.html pendown.pd pendown_footer.html > pendown.html
