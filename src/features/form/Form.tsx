import {
  FormControl,
  Container,
  Progress,
  Image,
  Text,
  Link,
  HStack,
} from '@chakra-ui/react';

import { RootState } from '../../app/store';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import {
  resetForm,
  setCfgScale,
  setGpfganStrength,
  setHeight,
  setImagesToGenerate,
  setImg2imgStrength,
  setSampler,
  setSeed,
  setShouldDisplayInProgress,
  setShouldFitToWidthHeight,
  setSteps,
  setUpscalingLevel,
  setUpscalingStrength,
  setWidth,
} from './formSlice';

import SDNumberInput from './SDNumberInput';
import SDSelect from './SDSelect';
import SDSwitch from './SDSwitch';
import SDButton from './SDButton';
import PromptInput from './PromptInput';
import Header from './Header';
import FileUploadInput from './FileUploadInput';

import {
  HEIGHTS,
  SAMPLERS,
  UPSCALING_LEVELS,
  WIDTHS,
} from './constants';

const Form = () => {
  const state = useAppSelector((state: RootState) => state.form);
  const {
    imagesToGenerate,
    steps,
    cfgScale,
    height,
    width,
    sampler,
    seed,
    shouldDisplayInProgress,
    img2imgStrength,
    shouldFitToWidthHeight,
    gpfganStrength,
    upscalingLevel,
    upscalingStrength,
  } = state;

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    alert(JSON.stringify(state, null, 2));
  };

  return (
    <Container maxW='container.lg'>
      <Header />

      <form onSubmit={handleSubmit}>
        <HStack paddingTop={15}>
          <PromptInput />
          <SDButton label='Generate' type='submit' colorScheme='blue' />
        </HStack>

        <HStack paddingTop={15}>
          <SDNumberInput
            label='Images to generate'
            step={1}
            min={1}
            precision={0}
            onChange={(v) => dispatch(setImagesToGenerate(Number(v)))}
            value={imagesToGenerate}
          />

          <SDNumberInput
            label='Steps'
            min={1}
            step={1}
            precision={0}
            onChange={(v) => dispatch(setSteps(Number(v)))}
            value={steps}
          />

          <SDNumberInput
            label='CFG Scale'
            step={0.5}
            onChange={(v) => dispatch(setCfgScale(Number(v)))}
            value={cfgScale}
          />

          <SDSelect
            label='Sampler'
            value={sampler}
            onChange={(e) => dispatch(setSampler(e.target.value))}
            validValues={SAMPLERS}
          />
        </HStack>

        <HStack paddingTop={15}>
          <SDSelect
            label='Width'
            value={width}
            onChange={(e) => dispatch(setWidth(Number(e.target.value)))}
            validValues={WIDTHS}
          />

          <SDSelect
            label='Height'
            value={height}
            onChange={(e) => dispatch(setHeight(Number(e.target.value)))}
            validValues={HEIGHTS}
          />

          <SDNumberInput
            label='Seed'
            step={1}
            precision={0}
            onChange={(v) => dispatch(setSeed(Number(v)))}
            value={seed}
          />

          <SDButton label='Reset Seed' onClick={() => dispatch(setSeed(-1))} />
        </HStack>

        <HStack paddingTop={15}>
          <SDButton
            label='Reset to Defaults'
            onClick={() => dispatch(resetForm())}
          />

          <SDSwitch
            label='Display in-progress images'
            isChecked={shouldDisplayInProgress}
            onChange={(e) =>
              dispatch(setShouldDisplayInProgress(e.target.checked))
            }
          />
        </HStack>

        <HStack paddingTop={15}>
          <FileUploadInput />

          <SDNumberInput
            label='img2img Strength'
            step={0.01}
            min={0}
            max={1}
            onChange={(v) => dispatch(setImg2imgStrength(Number(v)))}
            value={img2imgStrength}
          />

          <SDSwitch
            label='Fit to Width/Height'
            isChecked={shouldFitToWidthHeight}
            onChange={(e) =>
              dispatch(setShouldFitToWidthHeight(e.target.checked))
            }
          />
        </HStack>

        <HStack paddingTop={15}>
          <SDNumberInput
            label='GPFGAN Strength'
            step={0.05}
            min={0}
            max={1}
            onChange={(v) => dispatch(setGpfganStrength(Number(v)))}
            value={gpfganStrength}
          />

          <SDSelect
            label='Upscaling Level'
            value={upscalingLevel}
            onChange={(e) => dispatch(setUpscalingLevel(e.target.value))}
            validValues={UPSCALING_LEVELS}
          />

          <SDNumberInput
            label='Upscaling Strength'
            step={0.05}
            min={0}
            max={1}
            onChange={(v) => dispatch(setUpscalingStrength(Number(v)))}
            value={upscalingStrength}
          />
        </HStack>
      </form>

      {/* WIP */}

      <FormControl>
        <Progress marginTop={15} marginBottom={15} value={50} />
        <SDButton label='Cancel' colorScheme='red' />
      </FormControl>
      <Image src='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>' />
      <Text>Postprocessing...</Text>
      <Text>1/3</Text>
      <Text>
        For news and support for this web service, visit our{' '}
        <Link href='http://github.com/lstein/stable-diffusion' isExternal>
          Github
        </Link>
      </Text>
      <div id='results'>
        <div id='no-results-message'>
          <i>
            <p>No results...</p>
          </i>
        </div>
      </div>
    </Container>
  );
};

export default Form;
