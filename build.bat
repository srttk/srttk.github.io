echo off
cls
:: Build
java -jar closure/compiler.jar --js=src/main.js --js_output_file=dist/main.js
java -jar closure/compiler.jar --js=src/js/collapse.js --js_output_file=dist/js/collapse.js
java -jar closure/compiler.jar --js=src/js/transition.js --js_output_file=dist/js/transition.js
java -jar closure/compiler.jar --js=src/js/vendor/plax.js --js_output_file=dist/js/vendor/plax.js
java -jar closure/compiler.jar --js=src/js/vendor/jquery.fittext.js --js_output_file=dist/js/vendor/jquery.fittext.js
java -jar closure/compiler.jar --js=src/js/vendor/nprogress.js --js_output_file=dist/js/vendor/nprogress.js
java -jar closure/compiler.jar --js=src/js/transition.js --js_output_file=dist/transition.js
java -jar closure/compiler.jar --js=src/js/transition.js --js_output_file=dist/transition.js

:: CSS Build
call node ./r/r.js -o cssIn=./src/css/nprogress.css out=./dist/css/nprogress.css optimizeCss=default

copy src\index.html dist\index.html