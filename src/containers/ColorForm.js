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

  onGoBtnClick = () => {
    const fromColor = this.state.fromColor;
    const toColor = this.state.toColor;

    if(fromColor[0]!=='#' || fromColor.length !== 7){
      alert("Введите первый цвет в формате #rrggbb");
    } else {
      for(let i = 1; i < fromColor.length; i++) {
        if(fromColor.charCodeAt(i) < 48 ||
        fromColor.charCodeAt(i) > 57 && fromColor.charCodeAt(i) < 65 ||
        fromColor.charCodeAt(i) > 70 && fromColor.charCodeAt(i) < 97 ||
        fromColor.charCodeAt(i) > 102
        ) {
          alert("Введите первый цвет в формате #rrggbb");
          return;
        }
      }
    }

    if(toColor[0]!=='#' || toColor.length !== 7){
      alert("Введите второй цвет в формате #rrggbb");
    } else {
      for(let i = 1; i < toColor.length; i++) {
        if(toColor.charCodeAt(i) < 48 ||
        toColor.charCodeAt(i) > 57 && toColor.charCodeAt(i) < 65 ||
        toColor.charCodeAt(i) > 70 && toColor.charCodeAt(i) < 97 ||
        toColor.charCodeAt(i) > 102
        ) {
          alert("Введите второй цвет в формате #rrggbb");
          return;
        }
      }
    }

    const gradient = document.querySelector('form');
      gradient.style.backgroundImage = `linear-gradient(to bottom, ${fromColor}, ${toColor})`;
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
      <form style={{height: '100vh'}}>
        <TextBox
          value={this.state.fromColor}
          onChange={this.onFromColorChange}
        />
        <TextBox
          value={this.state.toColor}
          onChange={this.onToColorChange}
        />
        <Button onClick={this.onGoBtnClick}>Go</Button>
      </form>
    );
  }
}
