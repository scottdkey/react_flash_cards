import React from "react";
import { Form } from "semantic-ui-react"

export default class CardForm extends React.Component {
  state = {
    front: "",
    back: ""
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.newCard(this.state)
  }
}