# Purge-FA

Remove your unused FontAwesome JS icons.

Command line only for now:
```js
purge-fa <content> <js> <output>
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