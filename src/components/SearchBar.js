import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // Hey buddy, always make your event handlers arrow functions.
  //  And in general, just make all things arrow functions
  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmitReturn(this.state.term);
    /*This is where the searchbar uses the function
    that it was allowed to have from the parent. By calling
    this function, control is given back to the parent for this function,
    which is async because this is JS lol */
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          {/*This is where the child function, which calls the parent
        is called. From the default JSX prop "onSubmit", we do this thing
        Super neat.*/}
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
