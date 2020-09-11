function connect(mapStateToProps, mapDispatchToProps) {
  return function(WrappedComponent) {
    return class extends React.component {
      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(store.getState(), this.props)}
            {...mapDispatchToProps(store.dispatch, this.props)}
          />
        );
      }

      componentDidMount() {
        this.unsubscribe = store.subscribe(this.handleClick.bind(this));
      }

      componentWillUnMount() {
        this.unsubscribe();
      }

      handleClick() {
        this.forceUpdate();
      }
    };
  };
}
