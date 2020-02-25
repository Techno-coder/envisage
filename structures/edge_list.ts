load_structure("Edge List", {
    code: `
void print_edge_list(const vector<pair<int, int>>& graph, int node_count) {
    std::cout << node_count << ' ' << graph.size() << ' ';
    for (int edge = 0; edge < graph.size(); ++edge)
        std::cout << edge.first << ' ' << edge.second << ' ';
    std::cout << std::endl;
}
    `,
    render: (text) => {
        let array = split_whitespace(text);
        let node_count = Number(array[0]);
        let edge_count = Number(array[1]);
        let elements = [];

        let index = 2;
        for (let node = 0; node < node_count; node++)
            elements.push({data: {id: node.toString()}});
        for (let edge = 0; edge < edge_count; edge++) {
            let [source, target] = [array[index], array[index + 1]];
            elements.push({data: {source, target}});
            index += 2;
        }

        render_graph(elements);
    }
});
