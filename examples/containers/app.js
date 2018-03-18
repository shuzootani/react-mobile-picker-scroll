import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NamePicker from './NamePicker';
import BirthPicker from './BirthPicker';

export default class App extends Component {
  render() {
    return (
      <div className="page">
        <header className="page-header">
          <h1 className="page-title">React Mobile Picker</h1>
        </header>
        <main className="page-body">
          <p className="description">Note: This is a fork of the original React Mobile Picker, with added support for mouse scroll and keyboard up/down events.</p>
          <p className="description">React Mobile Picker is a super simple component with no restriction, which means you can use it in any way you want.</p>
          <p className="description">Here are two examples:</p>
          <NamePicker />
          <BirthPicker />
        </main>
      </div>
    );
  }
}
