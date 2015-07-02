var React = require('react');

module.exports = AtomReactStarter = {

  activate: function() {
    var panelItem = {
      item: document.createElement('div')
    };
    var HelloMessage = React.createClass({displayName: 'HelloMessage',
      render: function() {
        return React.createElement('div', null, 'Hello ', this.props.name);
      }
    });
    React.render(React.createElement(HelloMessage, {name: 'John'}), panelItem.item);
    atom.workspace.addBottomPanel(panelItem);
  },

  deactivate: function() {

  },

  serialize: function() {

  }

};
