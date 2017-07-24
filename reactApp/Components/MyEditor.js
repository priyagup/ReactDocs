import React from 'react';
import ReactDOM from 'react-dom';
import ButtonToolbar from './ButtonToolbar.js';
import {Editor, EditorState, RichUtils} from 'draft-js';


const styleMap = {
  'STRIKETHROUGH': {
    textDecoration: 'line-through',
},
'BOLD': {
    fontWeight: 'bold'
}
};

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        editorState: EditorState.createEmpty()
    };
    this.onChange = (editorState) => this.setState({editorState});
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      'BOLD'
    ));
  }

  // onStyleChange(editorState, styleString) {
  //     //takes in this.state.editorState and a string representing a style 'BOLD'
  //     this.setState({editorState: RichUtils.toggleInlineStyle(
  //       this.state.editorState,
  //       styleString
  //     )})
  // }

  render() {
    return (
      <div >
          IN EDITOR. CODE IS WORKING.
          <button onClick={this._onBoldClick.bind(this)}>Bold</button>
          {/* <button onClick={() => this.onChange(this.state.editorState, 'BOLD')}>Bold</button> */}

          <ButtonToolbar />
          <div style={{border: '1px solid black'}} className="editor">
              <Editor customStyleMap={styleMap} editorState={this.state.editorState} onChange={this.onChange} />
          </div>
        </div>
    );
  }
}

export default MyEditor;