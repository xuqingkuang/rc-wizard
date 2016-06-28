// use jsx to render html, do not modify simple.html

import React from 'react';
import ReactDOM from 'react-dom';
import Wizard from 'rc-wizard';
require('rc-wizard/assets/index.less');

const Test = () => {
  return (
    <Wizard
      id="selected-step-test"
      onDone={() => { alert('Wizard is done'); }}
      displayKey="2"
    >
      <Wizard.Step key="1">
        I'm the first page.
      </Wizard.Step>
      <Wizard.Step key="2">
        I'm the default displaying second page.
      </Wizard.Step>
      <Wizard.Step key="3">
        I'm the third page.
      </Wizard.Step>
    </Wizard>
  );
};

ReactDOM.render(<Test />, document.getElementById('__react-content'));
