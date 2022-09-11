$ErrorActionPreference ="Stop"

cd ./src/mds
./save.ps1
cd ../..
npm run build
cd ./build
git init
git add .
git commit -m 'deploy'
git push -f git@github.com:chh0/chh0.github.io.git master
cd ..