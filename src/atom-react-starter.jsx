var React = require("react");

module.exports = AtomReactStarter = {
  panelItem: {},
  activate: function() {
      atom.commands.add('atom-workspace', {
        'atom-react-starter:toggle': (function(_this) {
          return function() {
            return _this.toggle();
          };
        })(this)
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
