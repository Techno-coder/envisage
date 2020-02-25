load_structure("Tree", {
    code: `
void print_tree(const vector<int>& parents) {
    std::cout << parents.size() << ' ';
    for (int node = 1; node < parents.size(); ++node)
        std::cout << parents[node] << ' ';
    std::cout << std::endl;
}
    `,
    render: (text) => {
        let array = split_whitespace(text);
        let node_count = Number(array[0]);
        let elements = [];

        for (let node = 0; node < node_count; node++) {
            elements.push({data: {id: node.toString()}});
            if (node > 0) elements.push({data: {source: node, target: array[node]}});
        }

        render_graph(elements);
    }
});
