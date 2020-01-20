import * as React from 'react';
import FunctionalFocus from './FunctionalFocus';

class Focus extends React.PureComponent {
  firstName: HTMLInputElement | null = null;
  lastName: HTMLInputElement | null = null;
  age: HTMLInputElement | null = null;
  submit: HTMLInputElement | null = null;
  constructor(props: {}) {
    super(props);
    this.firstName = null;
    this.lastName = null;
    this.age = null;
    this.onClick = this.onClick.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }
  onClick(e) {
    alert(`${this.firstName.value} was successfully submitted.`);
  }
  onKeyUp(e, target) {
    if (e.keyCode === 13) {
      switch (target) {
        case 'firstName':
          this.lastName.focus();
          break;
        case 'lastName':
          this.age.focus();
          break;
        case 'age':
          this.submit.focus();
          break;
        default:
          break;
      }
    }
  }

  componentDidMount() {
    if (this.firstName) {
      this.firstName.focus();
    }
  }

  render() {
    return (
      <>
        <div>
          <FunctionalFocus />
        </div>
        <div>
          <span> First Name: </span>
          <input
            type="text"
            ref={(elem) => {
              this.firstName = elem;
            }}
            onKeyUp={(e) => this.onKeyUp(e, 'firstName')}
          />
        </div>

        <div>
          <span> Last Name: </span>
          <input
            type="text"
            ref={(elem) => {
              this.lastName = elem;
            }}
            onKeyUp={(e) => this.onKeyUp(e, 'lastName')}
          />
        </div>

        <div>
          <span> Age: </span>
          <input
            type="text"
            ref={(elem) => {
              this.age = elem;
            }}
            onKeyUp={(e) => this.onKeyUp(e, 'age')}
          />
        </div>

        <div>
          <span> Submit: </span>
          <input
            type="submit"
            onClick={this.onClick}
            ref={(elem) => {
              this.submit = elem;
            }}
            onKeyUp={(e) => this.onKeyUp(e, 'submit')}
          />
        </div>
      </>
    );
  }
}

export default Focus;
