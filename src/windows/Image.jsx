import React from 'react';
import WindowWrapper from '../hoc/WindowWrapper';
import { WindowControls } from '../components';
import useWindowStore from '../store/window';

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows?.imgfile?.data;

  if (!data) return null;

  const { name, image, imageUrl } = data;
  const previewImage = image || imageUrl;

  return (
    <>
      <div id='window-header'>
        <WindowControls target='imgfile' />
        <p>{name || 'Image Preview'}</p>
      </div>

      <div className='preview'>
        {previewImage ? (
          <img src={previewImage} alt={name || 'Preview image'} />
        ) : null}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, 'imgfile');

export default ImageWindow;