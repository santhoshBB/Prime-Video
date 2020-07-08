import React, { Component, Fragment } from "react";
import AddVideos from "./AddVideos";
import { uuid } from "uuidv4";

class ListVideos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
    this.addVideo = this.addVideo.bind(this);
  }

  renderVideo() {
    return (
      <Fragment>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>name</th>
              <th>genre</th>
              <th>rating</th>
              <th>language</th>
              <th>type</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((x) => (
              <tr>
                <td>{x.name}</td>
                <td>{x.genre}</td>
                <td>{x.rating}</td>
                <td>{x.language}</td>
                <td>{x.type}</td>
                <td>{x.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
  addVideo(x) {
    let allVideo = { ...x, id: uuid() };
    this.setState((y) => ({
      items: [...y.items, allVideo],
    }));
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          {this.state.items.length > 0 ? this.renderVideo() : ""}
        </div>
        <AddVideos addVideo={this.addVideo} />
      </Fragment>
    );
  }
}
export default ListVideos;
