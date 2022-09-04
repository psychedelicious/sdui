import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// images for testing only
import testImage1 from '../assets/images/test1.png';
import testImage2 from '../assets/images/test2.png';
import testImage3 from '../assets/images/test3.png';
import testImage4 from '../assets/images/test4.png';
import testImage5 from '../assets/images/test5.png';
import testImage6 from '../assets/images/test6.png';
import testImage7 from '../assets/images/test7.png';
import testImage8 from '../assets/images/test8.png';
import testImage9 from '../assets/images/test9.png';
import testImage10 from '../assets/images/test10.png';

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
    uuid: uuidv4(),
    url: url,
    metadata: {
      prompt: `test image ${i} prompt`,
    },
  };
});

interface SDMetadata {
  prompt: string;
}

interface SDImage {
  uuid: string;
  url: string;
  metadata: SDMetadata;
}

export interface SDState {
  // settings
  prompt: string;
  imagesToGenerate: number;
  steps: number;
  cfgScale: number;
  height: number;
  width: number;
  sampler: string;
  seed: number;
  shouldDisplayInProgress: boolean;
  img2imgStrength: number;
  shouldFitToWidthHeight: boolean;
  gpfganStrength: number;
  upscalingLevel: string;
  upscalingStrength: number;
  // gallery
  currentImageIndex: number;
  images: Array<SDImage>;
  // status
  isProcessing: boolean;
  progress: number;
}

const initialFormState = {
  prompt: 'Cyborg pickle shooting lasers',
  imagesToGenerate: 1,
  steps: 50,
  cfgScale: 7.5,
  height: 512,
  width: 512,
  sampler: 'k_lms',
  seed: -1,
  shouldDisplayInProgress: false,
  img2imgStrength: 0.75,
  shouldFitToWidthHeight: false,
  gpfganStrength: 0.8,
  upscalingLevel: 'None',
  upscalingStrength: 0.75,
};

const initialState: SDState = {
  ...initialFormState,
  isProcessing: false,
  currentImageIndex: 0,
  images: testImages,
  progress: 0,
};

export const sdSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setPrompt: (state, action: PayloadAction<string>) => {
      state.prompt = action.payload;
    },
    setImagesToGenerate: (state, action: PayloadAction<number>) => {
      state.imagesToGenerate = action.payload;
    },
    setSteps: (state, action: PayloadAction<number>) => {
      state.steps = action.payload;
    },
    setCfgScale: (state, action: PayloadAction<number>) => {
      state.cfgScale = action.payload;
    },
    setHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload;
    },
    setWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload;
    },
    setSampler: (state, action: PayloadAction<string>) => {
      state.sampler = action.payload;
    },
    setSeed: (state, action: PayloadAction<number>) => {
      state.seed = action.payload;
    },
    setShouldDisplayInProgress: (state, action: PayloadAction<boolean>) => {
      state.shouldDisplayInProgress = action.payload;
    },
    setImg2imgStrength: (state, action: PayloadAction<number>) => {
      state.img2imgStrength = action.payload;
    },
    setShouldFitToWidthHeight: (state, action: PayloadAction<boolean>) => {
      state.shouldFitToWidthHeight = action.payload;
    },
    setGpfganStrength: (state, action: PayloadAction<number>) => {
      state.gpfganStrength = action.payload;
    },
    setUpscalingLevel: (state, action: PayloadAction<string>) => {
      state.upscalingLevel = action.payload;
    },
    setUpscalingStrength: (state, action: PayloadAction<number>) => {
      state.upscalingStrength = action.payload;
    },
    setIsProcessing: (state, action: PayloadAction<boolean>) => {
      state.isProcessing = action.payload;
    },
    resetSeed: (state) => {
      state.seed = -1;
    },
    resetForm: (state) => {
      return {
        ...state,
        ...initialFormState,
      };
    },
    setCurrentImage: (state, action: PayloadAction<number>) => {
      const newCurrentImageIndex = action.payload;
      const newPrompt: string =
        state.images[newCurrentImageIndex].metadata.prompt;

      state.currentImageIndex = newCurrentImageIndex;

      if (newPrompt) {
        state.prompt = newPrompt;
      }
    },
    deleteImage: (state, action: PayloadAction<number>) => {
      const newImages = state.images.filter(
        (_image, i) => i !== action.payload
      );

      const newCurrentImageIndex = Math.min(
        Math.max(state.currentImageIndex, 0),
        newImages.length - 1
      );

      state.images = newImages;
      state.currentImageIndex = newCurrentImageIndex;
    },
    addImage: (state, action: PayloadAction<SDImage>) => {
      state.images.push(action.payload);
    },
  },
});

export const {
  setPrompt,
  setImagesToGenerate,
  setSteps,
  setCfgScale,
  setHeight,
  setWidth,
  setSampler,
  setSeed,
  setShouldDisplayInProgress,
  setImg2imgStrength,
  setShouldFitToWidthHeight,
  setGpfganStrength,
  setUpscalingLevel,
  setUpscalingStrength,
  setIsProcessing,
  resetSeed,
  resetForm,
  setCurrentImage,
  deleteImage,
  addImage,
} = sdSlice.actions;

export default sdSlice.reducer;
