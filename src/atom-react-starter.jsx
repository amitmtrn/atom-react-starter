var React = require("react");

module.exports = AtomReactStarter = {
  panelItem: {},
  activate: function() {
      atom.commands.add('atom-workspace', {
        'atom-react-starter:toggle': AtomReactStarter.toggle
      });
    },

    deactivate: function() {

    },

    serialize: function() {

    },

    toggle: function() {
      AtomReactStarter.panelItem
        .item = document.createElement("div");
      React.render(
        <div>my src test</div>,
          AtomReactStarter.panelItem.item
        );
      atom.workspace.addBottomPanel(AtomReactStarter.panelItem);
    }

  };
