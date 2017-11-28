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
./bin/purge-fa <content> <js> <output>
```

- `content`: folder that contains your files to search icons in
- `js`: folder where your FA JS icons files **not minified** are
- `output`: output folder of purged icon files

Feel free to send pull requests 👍🏻

## To do
- [ ] Create a webpack plugin
- [ ] Find FA JS source files automatically
- [ ] Option to bundle files
- [ ] Option to minify file(s)
- [ ] Option to include `fontawesome.min.js` in bundle
- [ ] Make command line prettier (help, flags...)