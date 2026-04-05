import React from 'react';
import WindowWrapper from '../hoc/WindowWrapper';
import { WindowControls } from '../components';
import useWindowStore from '../store/window';

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows?.txtfile?.data;

  if (!data) return null;

  const {
    name,
    image,
    imageUrl,
    subtitle,
    subttile,
    descriptions,
    description,
  } = data;

  const previewImage = image || imageUrl;
  const previewSubtitle = subtitle || subttile;
  const previewDescriptions = descriptions || description || [];

  return (
    <>
      <div id='window-header'>
        <WindowControls target='txtfile' />
        <h2>{name || 'About.txt'}</h2>
      </div>

      <div className='p-5 space-y-4 text-sm text-gray-700 bg-white'>
        {previewImage ? (
          <img
            src={previewImage}
            alt={name || 'Text file preview'}
            className='w-full max-h-52 object-contain object-center rounded-md bg-gray-100 p-2'
          />
        ) : null}

        {previewSubtitle ? (
          <p className='font-semibold text-gray-900'>{previewSubtitle}</p>
        ) : null}

        {Array.isArray(previewDescriptions) && previewDescriptions.length ? (
          <ul className='list-disc pl-5 space-y-2'>
            {previewDescriptions.map((item, index) => (
              <li key={`${name || 'txt'}-${index}`}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, 'txtfile');

export default TextWindow;