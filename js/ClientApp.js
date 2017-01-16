  var div = React.DOM.div
  var h1 = React.DOM.h1
  var MyTitle = React.createClass({
    render: function(){
      return (
        div(null,
          h1({style: {color: this.props.color}}, this.props.title)
        )
      )
    }
  })

  var MyTitleFactory = React.createFactory(MyTitle)

  var MyFirstComponent = React.createClass({
    render: function(){
      return (
        div(null,
        MyTitleFactory({title: 'props are the best', color: 'peru'}),
        MyTitleFactory({title: 'props are the best', color: 'black'}),
        MyTitleFactory({title: 'props are the best', color: 'tomato'}),
        MyTitleFactory({title: 'props are the best', color: 'rebeccapurple'})
      )
    )
  }
})

  ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
