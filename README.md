# rc-wizard
---

React Wizard Component


[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/rc-wizard.svg?style=flat-square
[npm-url]: http://npmjs.org/package/rc-wizard
[travis-image]: https://img.shields.io/travis/xuqingkuang/rc-wizard.svg?style=flat-square
[travis-url]: https://travis-ci.org/xuqingkuang/rc-wizard
[coveralls-image]: https://img.shields.io/coveralls/xuqingkuang/rc-wizard.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/xuqingkuang/rc-wizard?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/xuqingkuang/rc-wizard.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/xuqingkuang/rc-wizard
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/rc-wizard.svg?style=flat-square
[download-url]: https://npmjs.org/package/rc-wizard

## Development

```
npm install
npm start
```

## Example

http://localhost:8000/examples/


online example: http://xuqingkuang.github.io/rc-wizard/


## install


[![rc-wizard](https://nodei.co/npm/rc-wizard.png)](https://npmjs.org/package/rc-wizard)


## Usage

```js
import React from 'react';
import Wizard from 'rc-wizard';
const Test = () => {
  return (
    <Wizard id="test" onDone={() => { alert('Wizard is done'); }}>
      <Wizard.Step key="1">
        I am the first page.
      </Wizard.Step>
      <Wizard.Step key="2">
        I am the second page.
      </Wizard.Step>
      <Wizard.Step key="3">
        I am the third page.
      </Wizard.Step>
    </Wizard>
  )
}
React.render(<Test />, container);
```

## API

### Wizard class props

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">name</th>
      <th style="width: 50px;">type</th>
      <th style="width: 50px;">default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>String</td>
      <td></td>
      <td>Absolute identification</td>
    </tr>
    <tr>
      <td>className</td>
      <td>String</td>
      <td>wizard</td>
      <td>additional css class of root dom node</td>
    </tr>
    <tr>
      <td>displayKey</td>
      <td>String</td>
      <td></td>
      <td>The key will be displayed by default</td>
    </tr>
    <tr>
      <td>onDone</td>
      <td>Function</td>
      <td></td>
      <td>Callback when the wizard is completed</td>
    </tr>
  </tbody>
</table>

### Wizard.Step class props

<table class="table table-bordered table-striped">
  <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>onPrevious</td>
      <td>Function</td>
      <td></td>
      <td>Callback for previous button clicked</td>
    </tr>
    <tr>
      <td>onNext</td>
      <td>Function</td>
      <td></td>
      <td>Callback for next button clicked</td>
    </tr>
  </tbody>
</table>

## Test Case

```
npm test
npm run chrome-test
```

## Coverage

```
npm run coverage
```

open coverage/ dir

## License

rc-wizard is released under the MIT license.
