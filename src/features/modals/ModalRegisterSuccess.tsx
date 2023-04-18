import { createPortal } from 'react-dom'
import { FunctionComponent } from 'react'

const ModalRegisterSuccess: FunctionComponent = () => {
  return createPortal(
    <div className="modal">
      <div className="modal__content">
        <h3 className="modal__title">Register Success</h3>
        <p className="modal__description">Your account has been created</p>
        <a href="/login" className="modal__action">Go to login</a>
      </div>
    </div>,
    document.body
  )
}

export default ModalRegisterSuccess
