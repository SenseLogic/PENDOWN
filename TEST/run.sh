#!/bin/sh
set -x
../pendown --process --style --path ../ test.pd test.html
../pendown --script --style --path ../ test.pd test_script.html
../pendown --colorize --language d ../pendown.d pendown.pd
../pendown --colorize --process --style --path ../ ../pendown.d pendown_direct.html
../pendown --colorize --script --style --path ../ ../pendown.d pendown_script_direct.html
../pendown --process --style --path ../ pendown.pd pendown_indirect.html
../pendown --script --style --path ../ pendown.pd pendown_script_indirect.html
