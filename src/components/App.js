import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  // this is a callback function, so you know; make it arrow function
  //  and do all event handlers as well
  onSearchSubmit = async term => {
    const response = await unsplash.get(
      "/search/photos",
      /* */ {
        params: {
          query: term
        }
      }
    );

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmitReturn={this.onSearchSubmit} />
        {/* This is how you pass data up the tree from child
          to parent. I'm giving the child component, SearchBar, a referene
          to my funciton onSearchSubmit in the App itself as a prop. So,
          when the child needs to pass something back up, it will use that prop*/}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
