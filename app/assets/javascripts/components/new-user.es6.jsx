class NewUser extends React.Component {
  constructor() {
    super();
    this.state={
      showSignUp: false
    }

  }

  signUp(e) {
    e.preventDefault();
    this.setState({showSignUp: true});
  }

  createUser(e){
    e.preventDefault();
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    $.ajax({
      url: '/users/new',
      method: 'POST',
      data: {newUser: {name: username, password: password}}
    }).done((response) => {
      console.log(response)
    })
  }

  render(){
    return(
      <div>
        <a href='/' onClick={this.signUp.bind(this)}>sign up</a>
        <div>
          { this.state.showSignUp ?
            <form onSubmit={this.createUser.bind(this)}>
              <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input id="email" type="text" className="form-control" name="name" ref="username" placeholder="username"/>
              </div>
              <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                <input id="password" type="password" className="form-control" name="password" ref="password" placeholder="Password"/>
              </div>
              <input type="submit" value="sign up"/>
            </form>
           : null}
         </div>
       </div>
      );
  }
}