load_structure("Edge List [Weighted]", {
    code: "\nvoid print_edge_list_weighted(const vector<pair<int, pair<int, int>>>& graph, int node_count) {\n    std::cout << node_count << ' ' << graph.size() << ' ';\n    for (int edge = 0; edge < graph.size(); ++edge)\n        std::cout << edge.second.first << ' '; << \n        edge.second.second << ' ' edge.first << ' ';\n    std::cout << std::endl;\n}\n    ",
    render: function (text) {
        var array = split_whitespace(text);
        var node_count = Number(array[0]);
        var edge_count = Number(array[1]);
        var elements = [];
        var index = 2;
        for (var node = 0; node < node_count; node++)
            elements.push({ data: { id: node.toString() } });
        for (var edge = 0; edge < edge_count; edge++) {
            var _a = [array[index], array[index + 1], array[index + 2]], source = _a[0], target = _a[1], weight = _a[2];
            elements.push({ data: { source: source, target: target, label: weight } });
            index += 3;
        }
        render_graph(elements);
    }
});
//# sourceMappingURL=edge_list_weighted.js.map