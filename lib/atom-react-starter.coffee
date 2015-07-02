AtomReactStarterView = require './atom-react-starter-view'
{CompositeDisposable} = require 'atom'

module.exports = AtomReactStarter =
  atomReactStarterView: null
  modalPanel: null
  subscriptions: null

  activate: (state) ->
    @atomReactStarterView = new AtomReactStarterView(state.atomReactStarterViewState)
    @modalPanel = atom.workspace.addModalPanel(item: @atomReactStarterView.getElement(), visible: false)

    # Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    @subscriptions = new CompositeDisposable

    # Register command that toggles this view
    @subscriptions.add atom.commands.add 'atom-workspace', 'atom-react-starter:toggle': => @toggle()

  deactivate: ->
    @modalPanel.destroy()
    @subscriptions.dispose()
    @atomReactStarterView.destroy()

  serialize: ->
    atomReactStarterViewState: @atomReactStarterView.serialize()

  toggle: ->
    console.log 'AtomReactStarter was toggled!'

    if @modalPanel.isVisible()
      @modalPanel.hide()
    else
      @modalPanel.show()
