load_structure("Tree", {
    code: "\nvoid print_tree(const vector<int>& parents) {\n    std::cout << parents.size() << ' ';\n    for (int node = 1; node < parents.size(); ++node)\n        std::cout << parents[node] << ' ';\n    std::cout << std::endl;\n}\n    ",
    render: function (text) {
        var array = split_whitespace(text);
        var node_count = Number(array[0]);
        var elements = [];
        for (var node = 0; node < node_count; node++) {
            elements.push({ data: { id: node.toString() } });
            if (node > 0)
                elements.push({ data: { source: node, target: array[node] } });
        }
        render_graph(elements);
    }
});
//# sourceMappingURL=tree.js.map