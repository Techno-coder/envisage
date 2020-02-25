load_structure("Adjacency List [Weighted]", {
    code: `
void print_adjacency_list_weighted(const vector<vector<pair<int, int>>>& graph) {
    std::cout << graph.size() << ' ';
    for (int node = 0; node < graph.size(); ++node) {
        std::cout << graph[node].size() << ' ';
        for (const auto& edge : graph[node])
            std::cout << edge.second << ' ' << edge.first << ' ';
    }
    std::cout << std::endl;
}
    `,
    render: (text) => {
        let array = split_whitespace(text);
        let node_count = Number(array[0]);
        let elements = [];

        let index = 1;
        for (let node = 0; node < node_count; node++) {
            elements.push({data: {id: node.toString()}});
            let neighbour_count = Number(array[index++]);
            for (let edge = 0; edge < neighbour_count; edge++) {
                let [target, weight] = [array[index], array[index + 1]];
                elements.push({data: {source: node, target, label: weight}});
                index += 2;
            }
        }

        render_graph(elements);
    }
});
