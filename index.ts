// @ts-nocheck

let editorElement = <HTMLTextAreaElement>document.getElementById("editor");
let editor = CodeMirror.fromTextArea(editorElement, {lineNumbers: true});
editor.on("changes", () => render());

let clipboard = new ClipboardJS("button", {text: () => current().code});
let clipboardHover = tippy(document.querySelector("button"), {
    onHidden: (instance) => instance.disable(),
    theme: "material",
});

clipboardHover.disable();
clipboard.on("success", () => {
    clipboardHover.enable();
    clipboardHover.show();
});

let structureSelector = <HTMLSelectElement>document.getElementById("structure");
const structures = {};

interface Structure {
    code: string;
    render: (string) => void;
}

function load_structure(name: string, structure: Structure) {
    structureSelector.add(new Option(name, name));
    structure.code = structure.code.trim();
    structures[name] = structure;
}

function render() {
    current().render(editor.getValue());
}

function current(): Structure {
    return structures[structureSelector.value];
}

function split_whitespace(string: string): string[] {
    return string.match(/\S+/g) || [];
}

function render_graph(elements: cytoscape.ElementDefinition[]) {
    cytoscape({
        container: document.getElementById("graph"),
        elements, style: graph_style(),
        layout: {"name": "breadthfirst"},
    });
}

function graph_style(): [] {
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
