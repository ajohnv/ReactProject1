import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Dishdetail extends Component {
  renderDish(dish) {
    if (dish != null)
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    else return <div></div>;
  }

  renderComments(comments) {
    if (comments != null) {
      let comms = comments.map((comm, i) => {
        let date = new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        }).format(new Date(Date.parse(comm.date)));

        return (
          <ul key={comm.id} className="list-unstyled">
            <li className="comment">{comm.comment}</li>
            <li className="author">
              -- {comm.author}, {date}
            </li>
          </ul>
        );
      });

      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <div>{comms}</div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const { selectedDish } = this.props;
    if (selectedDish != null) {
      return (
        <div className="container">
          <div className="row">
            {this.renderDish(selectedDish)}
            {this.renderComments(selectedDish.comments)}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Dishdetail;
