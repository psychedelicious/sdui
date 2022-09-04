import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { testImages, testLogs } from './testingData';

export interface SDMetadata {
  prompt: string;
}

export interface SDImage {
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
  gfpganStrength: number;
  upscalingLevel: string;
  upscalingStrength: number;
  // gallery
  currentImageIndex: number;
  images: Array<SDImage>;
  // status
  isProcessing: boolean;
  progress: number;
  log: Array<string>;
  // system
  isGFPGANAvailable: boolean;
  isESRGANAvailable: boolean;
}

// Initial state for the main generation parameters
const initialDreamMenuState = {
  prompt: 'Cyborg pickle shooting lasers',
  imagesToGenerate: 1,
  steps: 50,
  cfgScale: 7.5,
  height: 512,
  width: 512,
  sampler: 'k_lms',
  seed: -1,
  img2imgStrength: 0.75,
  gfpganStrength: 0.8,
  upscalingLevel: 'None',
  upscalingStrength: 0.75,
};

// Initial state for image viewing
const initialGalleryState = {
  currentImageIndex: 0,
  images: testImages,
};

// Initial system state
const initialSystemState = {
  isProcessing: false,
  progress: 50,
  log: testLogs,
  shouldFitToWidthHeight: false,
  shouldDisplayInProgress: false,
  isGFPGANAvailable: true,
  isESRGANAvailable: true,
};

const initialState: SDState = {
  ...initialDreamMenuState,
  ...initialGalleryState,
  ...initialSystemState,
};

export const sdSlice = createSlice({
  name: 'sd',
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
    setGfpganStrength: (state, action: PayloadAction<number>) => {
      state.gfpganStrength = action.payload;
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
        ...initialDreamMenuState,
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
    addImage: (state, action: PayloadAction<string>) => {
      state.images.push({
        url: action.payload,
        metadata: { prompt: `added image test prompt ${state.images.length}` },
      });
    },
    setProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    },
    appendLog: (state, action: PayloadAction<string>) => {
      state.log.push(action.payload);
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
  setGfpganStrength,
  setUpscalingLevel,
  setUpscalingStrength,
  setIsProcessing,
  resetSeed,
  resetForm,
  setCurrentImage,
  deleteImage,
  addImage,
  setProgress,
  appendLog,
} = sdSlice.actions;

export default sdSlice.reducer;
