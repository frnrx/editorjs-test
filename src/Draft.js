import {Editor, EditorState, RichUtils} from 'draft-js';
import React, { Component } from 'react';
import 'draft-js/dist/Draft.css';

class Draft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  render() {
    return (
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
    );
  }
}

export default Draft