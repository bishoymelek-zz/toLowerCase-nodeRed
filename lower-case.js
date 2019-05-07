module.exports = function (RED) {
    function LowerCaseNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        try {
            node.on('input', function (msg) {

                msg.payload = msg.payload.toLowerCase();
                node.send(msg);
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    RED.nodes.registerType("lower-case", LowerCaseNode);
}
