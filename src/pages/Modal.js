import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'

import './modal-video.scss'

const Modal = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <React.Fragment>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />

            <button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button>
        </React.Fragment>
    )
}

export default Modal