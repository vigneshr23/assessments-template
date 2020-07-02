import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal');

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

class ModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //showModal: this.props.showModal ? this.props.showModal : true
      showModal: false
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow() {
    this.setState({ showModal: true });
  }

  handleHide() {
    this.setState({ showModal: false });
  }

  render() {
    const { title, modalSize = '' } = this.props;
    const modalClass = modalSize ? `modal--${modalSize}` : ' ';

    const modal = this.state.showModal && (
      <Modal>
        <div className={`modal ${modalClass}`}>
          <div className="modal__header">
            <div className="modal__header__actions">
              <span style={{ fontWeight: '700', fontSize: '24px', padding: '15px' }} onClick={this.handleHide}>
                X
              </span>
            </div>

            {/* <div className="modal__title">{title}</div> */}
          </div>
          <h4 className="modal__title">{title}</h4>
          <div style={{ padding: '1rem' }}>{this.props.display(this.handleHide)}</div>
        </div>
      </Modal>
    );

    return (
      <Fragment>
        <div onClick={this.handleShow}>{this.props.children}</div>
        {modal}
      </Fragment>
    );
  }
}

export default ModalContainer;
