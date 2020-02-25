load_structure("Edge List", {
    code: "\nvoid print_edge_list(const vector<pair<int, int>>& graph, int node_count) {\n    std::cout << node_count << ' ' << graph.size() << ' ';\n    for (int edge = 0; edge < graph.size(); ++edge)\n        std::cout << edge.first << ' ' << edge.second << ' ';\n    std::cout << std::endl;\n}\n    ",
    render: function (text) {
        var array = split_whitespace(text);
        var node_count = Number(array[0]);
        var edge_count = Number(array[1]);
        var elements = [];
        var index = 2;
        for (var node = 0; node < node_count; node++)
            elements.push({ data: { id: node.toString() } });
        for (var edge = 0; edge < edge_count; edge++) {
            var _a = [array[index], array[index + 1]], source = _a[0], target = _a[1];
            elements.push({ data: { source: source, target: target } });
            index += 2;
        }
        render_graph(elements);
    }
});
//# sourceMappingURL=edge_list.js.map