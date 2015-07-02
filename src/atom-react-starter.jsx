var React = require("react");

module.exports = AtomReactStarter = {

  activate: function() {
    var panelItem = {
      item: document.createElement("div")
    };
    React.render(
        <div>my src test</div>,
        panelItem.item
      );
      atom.workspace.addBottomPanel(panelItem);
    },

    deactivate: function() {

    },

    serialize: function() {

    }

};
