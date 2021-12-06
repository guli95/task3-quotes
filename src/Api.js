import React from "react";
import Quoete from "./Quote";
import Button from "./Button";
class Api extends React.Component {
  state = {
    data: ["https://picsum.photos/id/220/1280/853"],
    index: 0,
    error: false,
    imgId: [],
    quotesHistory: [],
    url: "https://picsum.photos/id/49/1280/853",
    loader: true,
  };
  fetchImg = () =>
    fetch(this.state.url)
      .then(() =>
        this.setState({
          loader: false,
        })
      )
      .catch((error) => {
        console.error("Error:", error);
      });
  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState((prevState) => ({
          data: prevState.data.concat(data),
        }))
      )
      .catch((error) => {
        console.error("Error:", error);
      });
    this.fetchImg();
  }
  getPreviousQuote = () => {
    if (this.state.index > 0) {
      this.setState((prevState) => ({
        index: prevState.index - 1,
        url: prevState.imgId[prevState.index - 1],
        loader: true,
      }));
    } else {
      return this.setState({
        error: true,
      });
    }
    this.fetchImg();
  };

  addQuote = () => {
    const quotesIndex = Math.floor(Math.random() * this.state.data.length);
    this.setState((prevState) => ({
      quotesHistory: prevState.quotesHistory.concat(
        this.state.data[quotesIndex]
      ),
      index: prevState.index + 1,
      error: false,
      url: `https://picsum.photos/id/${prevState.index + 50}/1280/853`,
      imgId: prevState.imgId.concat(this.state.url),
      loader: true,
    }));
    fetch(this.state.url)
      .then(() =>
        this.setState({
          loader: false,
        })
      )
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  render() {
    const { index, quotesHistory, error } = this.state;
    return (
      <div>
        <div
          className="img"
          style={{
            backgroundImage: `url(${this.state.url})`,
          }}
        >
          {this.state.loader ? <div className="loader"></div> : ""}
          <Quoete error={error} index={index} quotesHistory={quotesHistory} />
        </div>
        <div className="button-wrapper">
          <Button action={this.addQuote} text="Next Quote" />
          <Button action={this.getPreviousQuote} text="Previous Quote" />
        </div>
      </div>
    );
  }
}

export default Api;
