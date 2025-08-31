#!/bin/bash

# Clear file
echo "" > dynfile.js

# Dikningsföretag
echo "var dikning_files = [" >> dynfile.js
find res/dynamic/dikningsforetag/ -type f | sort | xargs basename -a | sed "s/^\(.*\)$/{file: '\1'},/" >> dynfile.js
echo "];" >> dynfile.js

# Vägsamfällighet
echo "var vag_files = [" >> dynfile.js
find res/dynamic/vagsamfallighet/ -type f | sort | xargs basename -a | sed "s/^\(.*\)$/{file: '\1'},/" >> dynfile.js
echo "];" >> dynfile.js

# Byalag
echo "var by_files = [" >> dynfile.js
find res/dynamic/byalag/ -type f | sort | xargs basename -a | sed "s/^\(.*\)$/{file: '\1'},/" >> dynfile.js
echo "];" >> dynfile.js



