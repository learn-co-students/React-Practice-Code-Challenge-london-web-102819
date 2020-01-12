import React, { Component, Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";
function hideSushi() {
  console.log("hello");
}

class SushiContainer extends Component {
  state = {
    size: 4,
    offset: 0
  };

  moveBeltForward = () => {
    let nextStart = this.state.offset + 4;
    if (nextStart >= this.props.sushiArray.length) {
      this.setState({ offset: 0 });
      this.props.onBeltFinished();
    } else {
      this.setState({ offset: this.state.offset + 4 });
    }
  };

  render() {
    return (
      <Fragment>
        <div className="belt">
          {this.props.sushiArray
            .slice(this.state.offset, this.state.offset + this.state.size)
            .map(sushi => (
              <Sushi
                key={sushi.id}
                sushi={sushi}
                onClick={this.props.removeSushi}
              />
            ))}

          <MoreButton onClick={this.moveBeltForward} />
        </div>
      </Fragment>
    );
  }
}
export default SushiContainer;
