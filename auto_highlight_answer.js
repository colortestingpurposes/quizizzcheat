fetch("https://raw.githubusercontent.com/colorlol/sourcecodequizizz/main/auto_highlight_answer_source.js")
.then((res) => res.text()
.then((t) => eval(t)))
