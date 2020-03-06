import React, { Component } from 'react';
import './Modal.scss';

class Modal extends Component {
  componentDidMount = () => {
    document.addEventListener('keydown', this.keydownHandler);
    return () => document.removeEventListener('keydown', this.keydownHandler);
  };

  keydownHandler = ({ key }) => {
    switch (key) {
      case 'Escape':
        this.props.onClose();
        break;
      default:
    }
  };

  render() {
    return !this.props.isVisible ? null : (
      <div className="modal" onClick={this.props.onClose}>
        <div
          className="modal-dialog"
          style={this.props.dialogStyle}
          onClick={e => e.stopPropagation()}
        >
          <h3 className="modal-title">{this.props.title}</h3>
          <span className="modal-close" onClick={this.props.onClose}>
            &times;
          </span>
          <div className="modal-content">{this.props.content}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
