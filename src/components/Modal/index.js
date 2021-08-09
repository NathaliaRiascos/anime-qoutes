import PropTypes from 'prop-types';
import Portal from './Portal'


function Modal(props) {

  const { children, toggle, active, titulo } = props;
  return (
    <Portal>
      { active && (
        <div className='modal'>
          <div
            className='header-modal'
          >
            <p
             className='titulo-modal'
            >{titulo}</p>
            <button  
             onClick={toggle}
             className='btn-close'
            ><i className='fas fa-times icon-close'></i></button>
          </div>
         
          <div
            className='container-img-modal'
          >{ children }</div>
        </div>
      )}
    </Portal>
  )
 }

Modal.propTypes = {
  children: PropTypes.element,
  toggle: PropTypes.func,
  active: PropTypes.bool,
  titulo: PropTypes.string
}

export default Modal