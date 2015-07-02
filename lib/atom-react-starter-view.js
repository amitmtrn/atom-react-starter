var AtomReactStarterView;

module.exports = AtomReactStarterView = (function() {
  function AtomReactStarterView(serializedState) {
    var message;
    this.element = document.createElement('div');
    this.element.classList.add('atom-react-starter');
    message = document.createElement('div');
    message.textContent = 'The AtomReactStarter package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  AtomReactStarterView.prototype.serialize = function() {};

  AtomReactStarterView.prototype.destroy = function() {
    return this.element.remove();
  };

  AtomReactStarterView.prototype.getElement = function() {
    return this.element;
  };

  return AtomReactStarterView;

})();
