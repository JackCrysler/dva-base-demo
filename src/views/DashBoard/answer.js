import React, { Component } from 'react'
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/paraiso-light.css'
export default class answer extends Component {
    constructor(){
        super()
        this.textarea = React.createRef()
    }
    componentDidMount(){
        let editor = CodeMirror.fromTextArea(this.textarea.current,{
            lineNumbers: true,
            lineWrapping:true,
            theme:'paraiso-light'
        });
    }
    render() {
        return (
            <div>
                答案区
                <textarea ref={this.textarea} cols={20} rows={10}></textarea>
            </div>
        )
    }
}
