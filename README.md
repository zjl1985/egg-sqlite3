# egg-sqlite3

<!--
Description here.
-->

## Install

```bash
$ yarn add git+https://github.com/zjl1985/egg-sqlite3.git
```

## Usage

```js
// {app_root}/config/plugin.js
exports.sqlite3 = {
  enable: true,
  package: 'egg-sqlite3',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.sqlite3 = {
  client:{
    file:''
  }
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
