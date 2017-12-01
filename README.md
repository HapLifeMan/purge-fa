# Purge-FA
[![Downloads](https://img.shields.io/npm/dt/purge-fa.svg)](https://www.npmjs.com/package/purge-fa)
[![Realease](https://img.shields.io/npm/v/purge-fa.svg)](https://github.com/HapLifeMan/purge-fa/releases)
[![License](https://img.shields.io/npm/l/purge-fa.svg)](https://github.com/HapLifeMan/purge-fa/blob/master/LICENSE)

Remove your unused FontAwesome JS icons.

```
npm install purge-fa
```

Command line only for now:
```
./bin/purge-fa -c <content> -s <sources> -o <output> [options]
```

## Required parameters

- `-c <content>`: folder that contains your files to search icons in
- `-s <sources>`: folder where your FA JS icons files **not minified** are (files named `fa-(solid|light|regular|brands).js`)
- `-o <output>`: output folder of purged icon files

## Optional parameters

### `-w` to whitelist icons

If you want to whitelist icons for some reason, you can add them as many as you want as follow:
```
-w.fa=lock          // Will add the solid lock icon to whitelist
-w.fal=user         // Will add the light user icon to whitelist
-w.far=cogs         // Will add the regular cogs icon to whitelist
-w.fab=github       // Will add the brand GitHub icon to whitelist
```

## To do
- [x] Add a whitelist option
- [ ] Create a webpack plugin
- [ ] Find FA JS source files automatically
- [ ] Option to bundle files
- [ ] Option to minify file(s)
- [ ] Option to include `fontawesome.min.js` in bundle
- [ ] Make command line prettier (help, flags...)

Feel free to send pull requests 👍🏻