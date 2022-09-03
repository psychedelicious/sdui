import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FormState {
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
}

const initialState: FormState = {
  prompt: 'Cyborg pickle shooting lasers',
  imagesToGenerate: 1,
  steps: 50,
  cfgScale: 7.5,
  height: 512,
  width: 512,
  sampler: 'KLMS',
  seed: -1,
  shouldDisplayInProgress: false,
  img2imgStrength: 0.75,
  shouldFitToWidthHeight: false,
  gpfganStrength: 0.8,
  upscalingLevel: 'None',
  upscalingStrength: 0.75,
};

export const formSlice = createSlice({
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
    resetForm: () => initialState,
  },
});

// Action creators are generated for each case reducer function
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
  resetForm,
} = formSlice.actions;

export default formSlice.reducer;
