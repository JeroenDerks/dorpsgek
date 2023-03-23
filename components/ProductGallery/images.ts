import { SupportedZipCodes } from '../../types';

import Image1611Model from '../../public/product/1611_model.jpg';
import Image1611Front from '../../public/product/1611_front.jpg';
import Image1611CloseUp from '../../public/product/1611_closeup.jpg';

import Image3931Model from '../../public/product/3931_model.jpg';
import Image3931Front from '../../public/product/3931_front.jpg';
import Image3931CloseUp from '../../public/product/3931_closeup.jpg';

import Image4251Model from '../../public/product/4251_model.jpg';
import Image4251Front from '../../public/product/4251_front.jpg';
import Image4251CloseUp from '../../public/product/4251_closeup.jpg';

import Image4456Model from '../../public/product/4456_model.jpg';
import Image4456Front from '../../public/product/4456_front.jpg';
import Image4456CloseUp from '../../public/product/4456_closeup.jpg';

import Image5853Model from '../../public/product/5853_model.jpg';
import Image5853Front from '../../public/product/5853_front.jpg';
import Image5853CloseUp from '../../public/product/5853_closeup.jpg';

import Image6093Model from '../../public/product/6093_model.jpg';
import Image6093Front from '../../public/product/6093_front.jpg';
import Image6093CloseUp from '../../public/product/6093_closeup.jpg';

import Image6655Model from '../../public/product/6655_model.jpg';
import Image6655Front from '../../public/product/6655_front.jpg';
import Image6655CloseUp from '../../public/product/6655_closeup.jpg';

import Image7261Model from '../../public/product/7261_model.jpg';
import Image7261Front from '../../public/product/7261_front.jpg';
import Image7261CloseUp from '../../public/product/7261_closeup.jpg';

import Image8096Model from '../../public/product/8096_model.jpg';
import Image8096Front from '../../public/product/8096_front.jpg';
import Image8096CloseUp from '../../public/product/8096_closeup.jpg';

import Image9971Model from '../../public/product/9971_model.jpg';
import Image9971Front from '../../public/product/9971_front.jpg';
import Image9971CloseUp from '../../public/product/9971_closeup.jpg';

const imagesPerCity = {
  '1611': {
    front: Image1611Front,
    model: Image1611Model,
    closeUp: Image1611CloseUp
  },
  '3931': {
    front: Image3931Front,
    model: Image3931Model,
    closeUp: Image3931CloseUp
  },
  '4251': {
    front: Image4251Front,
    model: Image4251Model,
    closeUp: Image4251CloseUp
  },

  '4456': {
    front: Image4456Front,
    model: Image4456Model,
    closeUp: Image4456CloseUp
  },

  '5853': {
    front: Image5853Front,
    model: Image5853Model,
    closeUp: Image5853CloseUp
  },

  '6093': {
    front: Image6093Front,
    model: Image6093Model,
    closeUp: Image6093CloseUp
  },

  '6655': {
    front: Image6655Front,
    model: Image6655Model,
    closeUp: Image6655CloseUp
  },

  '7261': {
    front: Image7261Front,
    model: Image7261Model,
    closeUp: Image7261CloseUp
  },

  '8096': {
    front: Image8096Front,
    model: Image8096Model,
    closeUp: Image8096CloseUp
  },

  '9971': {
    front: Image9971Front,
    model: Image9971Model,
    closeUp: Image9971CloseUp
  }
};

export const getImagesPerCity = (currZipCode: SupportedZipCodes) =>
  imagesPerCity[currZipCode];
