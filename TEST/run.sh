#!/bin/sh
set -x
../pendown --process --style --path ../ test.pd test.html
../pendown --process --writer --style --path ../ test.pd test_writer.html
../pendown --script --style --path ../ test.pd test_script.html
../pendown --colorize --process --style --path ../ ../pendown.d pendown_d.html
../pendown --colorize --process --style --path ../ ../pendown.js pendown_js.html
../pendown --colorize --script --style --path ../ ../pendown.d pendown_d_script.html
../pendown --colorize --script --style --path ../ ../pendown.js pendown_js_script.html
../pendown --colorize ../pendown.d pendown_d.pd
../pendown --colorize ../pendown.js pendown_js.pd
../pendown --process --style --path ../ pendown_d.pd pendown_d_2.html
../pendown --process --style --path ../ pendown_js.pd pendown_js_2.html
../pendown --script --style --path ../ pendown_d.pd pendown_d_script_2.html
../pendown --script --style --path ../ pendown_js.pd pendown_js_script_2.html
