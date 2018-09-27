<template>
<el-card class="box-card">
  <el-row>
    <el-col :span="8">
      <h3>离线工具</h3>
    </el-col>
    <el-col :span="16" style="text-align:right">
        <el-button icon="el-icon-minus" circle size="mini"></el-button>
        <el-button type="success" icon="el-icon-plus" circle size="mini"></el-button>
        <el-button type="danger" icon="el-icon-close" circle size="mini"></el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <codemirror v-model="code" :options="cmOption"></codemirror>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-button size="small" @click="handleBeautify">美化(<u>B</u>eautify)</el-button>
      <el-button size="small">净化(<u>P</u>urify)</el-button>
    </el-col>
  </el-row>
</el-card>

</template>

<script>
// language
import "codemirror/mode/javascript/javascript.js";
// theme css
import "codemirror/theme/monokai.css";
// require active-line.js
import "codemirror/addon/selection/active-line.js";
// styleSelectedText
import "codemirror/addon/selection/mark-selection.js";
import "codemirror/addon/search/searchcursor.js";
// hint
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/javascript-hint.js";
import "codemirror/addon/selection/active-line.js";
// highlightSelectionMatches
import "codemirror/addon/scroll/annotatescrollbar.js";
import "codemirror/addon/search/matchesonscrollbar.js";
import "codemirror/addon/search/searchcursor.js";
import "codemirror/addon/search/match-highlighter.js";
// keyMap
import "codemirror/mode/clike/clike.js";
import "codemirror/addon/edit/matchbrackets.js";
import "codemirror/addon/comment/comment.js";
import "codemirror/addon/dialog/dialog.js";
import "codemirror/addon/dialog/dialog.css";
import "codemirror/addon/search/searchcursor.js";
import "codemirror/addon/search/search.js";
import "codemirror/keymap/sublime.js";
// foldGutter
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/brace-fold.js";
import "codemirror/addon/fold/comment-fold.js";
import "codemirror/addon/fold/foldcode.js";
import "codemirror/addon/fold/foldgutter.js";
import "codemirror/addon/fold/indent-fold.js";
import "codemirror/addon/fold/markdown-fold.js";
import "codemirror/addon/fold/xml-fold.js";

export default {
  data() {
    return {
      code: "const i = 1;",
      cmOption: {
        tabSize: 4,
        styleActiveLine: false,
        lineNumbers: true,
        styleSelectedText: false,
        line: true,
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
        mode: "text/javascript",
        // hint.js options
        hintOptions: {
          // 当匹配只有一项的时候是否自动补全
          completeSingle: false
        },
        //快捷键 可提供三种模式 sublime、emacs、vim
        keyMap: "sublime",
        matchBrackets: true,
        showCursorWhenSelecting: true,
        theme: "default",
        extraKeys: { Ctrl: "autocomplete" }
      }
    };
  },
  methods: {
    handleBeautify(){
      alert(0);
    }
  },
  mounted() {
    setTimeout(() => {
      (this.styleSelectedText = true), (this.cmOption.styleActiveLine = true);
    }, 1800);
  }
};
</script>

<style>
.CodeMirror-focused .cm-matchhighlight {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFklEQVQI12NgYGBgkKzc8x9CMDAwAAAmhwSbidEoSQAAAABJRU5ErkJggg==);
  background-position: bottom;
  background-repeat: repeat-x;
}
.cm-matchhighlight {
  background-color: lightgreen;
}
.CodeMirror-selection-highlight-scrollbar {
  background-color: green;
}
</style>