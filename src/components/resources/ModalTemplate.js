import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class ModalTemplate extends Component {
    render() {
        return ReactDOM.createPortal(
            <div className="modal" >
                <div className="modal-background" onClick={this.props.closeModal}></div>
                <div className="modal-body">
                    <div className="modal-title">{this.props.title}</div>
                    <div className="modal-content">
                        {this.props.children}
                    </div>
                </div>
            </div>,
            document.querySelector(this.props.target));
    }
}


export default ModalTemplate;


