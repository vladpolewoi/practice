import React, { Component } from 'react'
import './Modal.css'

export default class Modal extends Component {
  state = {
    isOpen: false
  }

  setModalState(status) {
    this.setState({ ... this.setState, isOpen: status })
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.setModalState.bind(this, true)}>
          Open Modal
        </button>

        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <h1>Modal title</h1>
              <p>I am awesome modal!</p>
              <button onClick={this.setModalState.bind(this, false)}>
                Close Modal
              </button>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}
