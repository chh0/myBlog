cd ./src/mds/bin/lib
node ./maker.js
cd ../../../../
npm run build
cd ./build
git init
git add .
git commit -m 'deploy'
git push -f git@github.com:chh0/chh0.github.io.git master