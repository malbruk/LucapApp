import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/ext-language_tools";

function onChange(newValue) {
    console.log("change", newValue);
}

// Render editor
export default function Editor() {
    return <AceEditor
        mode="mysql"
        theme="textmate"
        fontSize={18}
        onChange={onChange}
        name="sqlEditor"
        showGutter={true}
        editorProps={{$blockScrolling: true}}
        setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
        }}/>
}