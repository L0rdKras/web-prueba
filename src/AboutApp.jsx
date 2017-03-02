import React from 'react'
import ReactModal from 'react-modal'

import Login from './Login.jsx'

export default class AboutApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }
  handleOpenModal (event) {
    event.preventDefault()
    this.setState({ showModal: true })
  }
  handleCloseModal (event) {
    event.preventDefault()
    this.setState({ showModal: false })
  }
  render () {
    return (
      <div className='imagen-conexion'>
        <a href='#' className='wrapper' onClick={this.handleOpenModal}>
          <img src={this.props.imageUrl} className={this.props.classImage} />
          {this.props.texto && (
            <p className='texto'>{this.props.texto}</p>
          )}
        </a>
        {/* Usando react-modal se define las ventanas modales que usaran cada uno de los servicios */}
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel='Modal Login'
          className='Modal'
        >
          <img src={this.props.imageUrl} className={this.props.classImage} />
          {/* Cada modal tendra su componente de login, que conectara a un servicio de validacion */}
          <Login closeModal={this.handleCloseModal} urlRequest={this.props.serviceUrl} />
        </ReactModal>
      </div>
    )
  }
}
