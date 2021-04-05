import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ShareIcon from '../images/shareIcon.svg';

function ShareButton({ type, id, index }) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    await copy(`http://localhost:3000/${type}/${id}`);
    setCopied(true);
  };

  return (
    <div>
      <button
        type="button"
        onClick={ handleClick }
      >
        <img
          data-testid={ index !== undefined
            ? `${index}-horizontal-share-btn` : 'share-btn' }
          src={ ShareIcon }
          alt="share"
        />
      </button>
      { copied && 'Link copiado!' }
    </div>
  );
}

ShareButton.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default ShareButton;
