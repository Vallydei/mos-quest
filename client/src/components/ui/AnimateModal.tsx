import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiAlertCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function Modal({ isOpen, setIsOpen }): JSX.Element  {
  const navigate = useNavigate();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="modal"
        >
          <motion.div
            initial={{ scale: 0, rotate: '14.5deg' }}
            animate={{ scale: 1, rotate: '0deg' }}
            exit={{ scale: 0, rotate: '0deg' }}
            onClick={(e) => e.stopPropagation()}
            className="modal-box"
          >
            <FiAlertCircle className="modal-bg-icon" />

            <div className="modal-content">
              <FiAlertCircle className="modal-content__icon" />

              <h3 className="modal-content__header">One more thing!</h3>
              <p className="modal-content__description">А тебе есть 18? -_- А?</p>
              <div className="modal-content__btns">
                <button onClick={() => setIsOpen(false)} type="button" className="btn-secondary">
                  Оу, ну на*ер
                </button>
                <button
                  type="button"
                  onClick={() => {
                    void setIsOpen(false);
                    void navigate('/quest/1');
                  }}
                  className="btn-primary"
                >
                  Атож!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
