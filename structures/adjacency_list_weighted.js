load_structure("Adjacency List [Weighted]", {
    code: "\nvoid print_adjacency_list_weighted(const vector<vector<pair<int, int>>>& graph) {\n    std::cout << graph.size() << ' ';\n    for (int node = 0; node < graph.size(); ++node) {\n        std::cout << graph[node].size() << ' ';\n        for (const auto& edge : graph[node])\n            std::cout << edge.second << ' ' << edge.first << ' ';\n    }\n    std::cout << std::endl;\n}\n    ",
    render: function (text) {
        var array = split_whitespace(text);
        var node_count = Number(array[0]);
        var elements = [];
        var index = 1;
        for (var node = 0; node < node_count; node++) {
            elements.push({ data: { id: node.toString() } });
            var neighbour_count = Number(array[index++]);
            for (var edge = 0; edge < neighbour_count; edge++) {
                var _a = [array[index], array[index + 1]], target = _a[0], weight = _a[1];
                elements.push({ data: { source: node, target: target, label: weight } });
                index += 2;
            }
        }
        render_graph(elements);
    }
});
//# sourceMappingURL=adjacency_list_weighted.js.map