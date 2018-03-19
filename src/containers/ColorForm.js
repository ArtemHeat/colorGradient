import React from 'react';
import Button from '../components/Button';
import TextBox from '../components/TextBox';

export default class ColorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromColor: '',
      toColor: ''
    };
  }

  onGoClick = () => {
    const fromColor = this.state.fromColor;
    const toColor = this.state.toColor;
    document.querySelector(main).style.backgroundImage =
      `linear-gradient(to bottom, ${fromColor}, ${toColor});`;
  };

  onFromColorChange = (color) => {
    this.setState({
      fromColor: color
    });
  };

  onToColorChange = (color) => {
    this.setState({
      toColor: color
    });
  };

  render() {
    return (
      <div>
        <TextBox
          value={this.state.fromColor}
          onChange={this.onFromColorChange}
        />
        <TextBox
          value={this.state.toColor}
          onChange={this.onToColorChange}
        />
        <Button onClick={this.onGoClick}>Go</Button>
      </div>
    );
  }
}
