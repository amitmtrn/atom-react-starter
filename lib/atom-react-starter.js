var AtomReactStarter;
var AtomReactStarterView;
var CompositeDisposable;

AtomReactStarterView = require('./atom-react-starter-view');

CompositeDisposable = require('atom').CompositeDisposable;

module.exports = AtomReactStarter = {
  atomReactStarterView: null,
  modalPanel: null,
  subscriptions: null,
  activate: function(state) {
    this.atomReactStarterView = new AtomReactStarterView(state.atomReactStarterViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.atomReactStarterView.getElement(),
      visible: false
    });
    this.subscriptions = new CompositeDisposable();
    return this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-react-starter:toggle': (function(_this) {
        return function() {
          return _this.toggle();
        };
      })(this)
    }));
  },

  deactivate: function() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    return this.atomReactStarterView.destroy();
  },

  serialize: function() {
    return {
      atomReactStarterViewState: this.atomReactStarterView.serialize()
    };
  },

  toggle: function() {
    console.log('AtomReactStarter was toggled!');
    if (this.modalPanel.isVisible()) {
      return this.modalPanel.hide();
    } else {
      return this.modalPanel.show();
    }
  }
};
