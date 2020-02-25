load_structure("Edge List [Weighted]", {
    code: `
void print_edge_list_weighted(const vector<pair<int, pair<int, int>>>& graph, int node_count) {
    std::cout << node_count << ' ' << graph.size() << ' ';
    for (int edge = 0; edge < graph.size(); ++edge)
        std::cout << edge.second.first << ' '; << 
        edge.second.second << ' ' edge.first << ' ';
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
            let [source, target, weight] = [array[index], array[index + 1], array[index + 2]];
            elements.push({data: {source, target, label: weight}});
            index += 3;
        }

        render_graph(elements);
    }
});
