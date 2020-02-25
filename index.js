// @ts-nocheck
var editorElement = document.getElementById("editor");
var editor = CodeMirror.fromTextArea(editorElement, { lineNumbers: true });
editor.on("changes", function () { return render(); });
var clipboard = new ClipboardJS("button", { text: function () { return current().code; } });
var clipboardHover = tippy(document.querySelector("button"), {
    onHidden: function (instance) { return instance.disable(); },
    theme: "material",
});
clipboardHover.disable();
clipboard.on("success", function () {
    clipboardHover.enable();
    clipboardHover.show();
});
var structureSelector = document.getElementById("structure");
var structures = {};
function load_structure(name, structure) {
    structureSelector.add(new Option(name, name));
    structure.code = structure.code.trim();
    structures[name] = structure;
}
function render() {
    current().render(editor.getValue());
}
function current() {
    return structures[structureSelector.value];
}
function split_whitespace(string) {
    return string.match(/\S+/g) || [];
}
function render_graph(elements) {
    cytoscape({
        container: document.getElementById("graph"),
        elements: elements, style: graph_style(),
        layout: { "name": "breadthfirst" },
    });
}
function graph_style() {
    return [{
            selector: "node",
            style: {
                "label": "data(id)",
                "text-valign": "center",
                "text-halign": "center",
            }
        }, {
            selector: "edge",
            style: {
                "label": "data(label)",
                "curve-style": "bezier",
                "target-arrow-shape": "triangle",
                "text-background-shape": "rectangle",
                "text-background-color": "beige",
                "text-background-opacity": 1,
            }
        }];
}
//# sourceMappingURL=index.js.map