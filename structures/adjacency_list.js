load_structure("Adjacency List", {
    code: "\nvoid print_adjacency_list(const vector<vector<int>>& graph) {\n    std::cout << graph.size() << ' ';\n    for (int node = 0; node < graph.size(); ++node) {\n        std::cout << graph[node].size() << ' ';\n        for (const auto& neighbour : graph[node])\n            std::cout << neighbour << ' ';\n    }\n    std::cout << std::endl;\n}\n    ",
    render: function (text) {
        var array = split_whitespace(text);
        var node_count = Number(array[0]);
        var elements = [];
        var index = 1;
        var _loop_1 = function (node) {
            elements.push({ data: { id: node.toString() } });
            var neighbour_count = Number(array[index++]);
            var neighbours = array.slice(index, index + neighbour_count);
            neighbours.map(function (target) { return elements.push({ data: { source: node, target: target } }); });
            index += neighbour_count;
        };
        for (var node = 0; node < node_count; node++) {
            _loop_1(node);
        }
        render_graph(elements);
    }
});
//# sourceMappingURL=adjacency_list.js.map