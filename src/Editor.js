import React, { Component } from 'react';
import './App.css';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import LinkTool from '@editorjs/link';
import List from '@editorjs/list';
import ImageTool from '@editorjs/image';

class App extends Component {

  saveData = (editor) => {
    editor.save().then((outputData) => {
      console.log('Article data: ', outputData)
    }).catch((error) => {
      console.log('Saving failed: ', error)
    });
  }
  render() {

    const editor = new EditorJS({
      /**
       * Id of Element that should contain Editor instance
       */
      placeholder: 'Let`s write an awesome story!',
      holderId: 'test-editor',
      tools: {
        header: Header,
        list: {
          class: List,
          inlineToolbar: true,
        },
        linkTool: {
          class: LinkTool,
          config: {
            endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching
          }
        },
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
              byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
            }
          }
        }
      },
    });

    editor.isReady
      .then(() => {
        console.log('Editor.js is ready to work!')
        /** Do anything you need after editor initialization */
      })
      .catch((reason) => {
        console.log(`Editor.js initialization failed because of ${reason}`)
      });

    console.log(editor)

    return (
      <>
        <div className="test-editor" id='test-editor'></div>
        <button onClick={() => this.saveData(editor)}>SAVE!</button>
      </>
    );
  }

}

export default App;
