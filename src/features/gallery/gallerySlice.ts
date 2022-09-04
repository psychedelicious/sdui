import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import testImage1 from '../../assets/images/test1.png';
import testImage2 from '../../assets/images/test2.png';
import testImage3 from '../../assets/images/test3.png';
import testImage4 from '../../assets/images/test4.png';
import testImage5 from '../../assets/images/test5.png';
import testImage6 from '../../assets/images/test6.png';
import testImage7 from '../../assets/images/test7.png';
import testImage8 from '../../assets/images/test8.png';
import testImage9 from '../../assets/images/test9.png';
import testImage10 from '../../assets/images/test10.png';

// populate gallery for testing
const testImages: Array<SDImage> = [
  testImage1,
  testImage2,
  testImage3,
  testImage4,
  testImage5,
  testImage6,
  testImage7,
  testImage8,
  testImage9,
  testImage10,
].map((url, i) => {
  return {
    id: uuidv4(),
    url: url,
    metadata: {
      prompt: `example prompt ${i}`,
    },
  };
});

interface SDMetadata {
  prompt: string;
}

interface SDImage {
  id: string;
  url: string;
  metadata: SDMetadata;
}

export interface GalleryState {
  currentImageId: string;
  images: Array<SDImage>;
}

const initialState: GalleryState = {
  currentImageId: testImages[0].id,
  images: testImages,
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setCurrentImage: (state, action: PayloadAction<string>) => {
      state.currentImageId = action.payload;
    },
    deleteImage: (state, action: PayloadAction<string>) => {
      state.images = state.images.filter(
        (image) => image.id !== action.payload
      );
    },
    addImage: (state, action: PayloadAction<SDImage>) => {
      state.images.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentImage, deleteImage, addImage } = gallerySlice.actions;

export default gallerySlice.reducer;
