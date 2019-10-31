// @flow

import React, { useState } from 'react';
import imgReplacement from '../../assets/replacement.png';

const ImageComponent = ({ src, alt }: {src: string, alt:string}) => {
  const [error, setError] = useState();
  const [useSrc, setUseSrc] = useState();
  return (
    <img
      height="128px"
      alt={alt}
      src={useSrc || src}
      onError={() => {
        if (!error) {
          setError(true);
          setUseSrc(imgReplacement);
        }
      }}
    />
  );
};

export default ImageComponent;
