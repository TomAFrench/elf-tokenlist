# Copy the modules and types over to dist/
cp compiled/src/index.js dist
cp compiled/src/types.d.ts dist
cp compiled/src/tags.js dist
cp compiled/src/tags.d.ts dist

# Copy over the *.address.json files to dist/
cp -R src/addresses/*.addresses.json dist