load_structure("Adjacency List", {
    code: `
void print_adjacency_list(const vector<vector<int>>& graph) {
    std::cout << graph.size() << ' ';
    for (int node = 0; node < graph.size(); ++node) {
        std::cout << graph[node].size() << ' ';
        for (const auto& neighbour : graph[node])
            std::cout << neighbour << ' ';
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
            let neighbours = array.slice(index, index + neighbour_count);
            neighbours.map((target) => elements.push({data: {source: node, target}}));
            index += neighbour_count;
        }

        render_graph(elements);
    }
});
