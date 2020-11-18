import React from 'react';
import './CompTextInput.css'

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
        this.otroTextInput =  <input type="text" />;
    }
    focusTextInput() {
        this.textInput.current.focus();
    }
    styleTextInput = () => {
        this.textInput.current.className = "verde" ;//{ backgroundColor: "red"};
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.textInput} className={this.props.colorInput}/>
                <input  type="button" value="Focus the text input"  onClick={this.focusTextInput}
                />
                <input  type="button" value="Style the text input"  onClick={this.styleTextInput}
                />
            </div>
        );
    }
}

export default class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.compTextInput = React.createRef();
    }
    componentDidMount() {
        this.compTextInput.current.focusTextInput();
    }
    render() {
        return <CustomTextInput ref={this.compTextInput} colorInput="verde" />;
    }
}
