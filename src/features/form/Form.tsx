import {
  FormControl,
  Container,
  Progress,
  Image,
  Text,
  Link,
  Flex,
  IconButton,
  HStack,
} from '@chakra-ui/react';

import { RootState } from '../../app/store';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { BsArrowCounterclockwise } from 'react-icons/bs';

import {
  resetForm,
  resetSeed,
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
} from '../../app/sdSlice';

import SDNumberInput from './SDNumberInput';
import SDSelect from './SDSelect';
import SDSwitch from './SDSwitch';
import SDButton from './SDButton';
import PromptInput from './PromptInput';
import SDFileUpload from './SDFileUpload';

import { HEIGHTS, SAMPLERS, UPSCALING_LEVELS, WIDTHS } from './constants';

const Form = () => {
  const state = useAppSelector((state: RootState) => state.sd);
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
    <Container>
      <form onSubmit={handleSubmit}>
        <Flex paddingTop={5} gap={5}>
          <PromptInput />
        </Flex>

        <HStack paddingTop={5}>
          <SDNumberInput
            label='Image Count'
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

          <SDNumberInput
            label='Seed'
            step={1}
            precision={0}
            onChange={(v) => dispatch(setSeed(Number(v)))}
            value={seed}
          />

          <SDSelect
            label='Sampler'
            value={sampler}
            onChange={(e) => dispatch(setSampler(e.target.value))}
            validValues={SAMPLERS}
          />
        </HStack>
        <Flex paddingTop={5} gap={5}>
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

          <IconButton
            aria-label='Reset seed to default'
            icon={<BsArrowCounterclockwise />}
            onClick={() => dispatch(resetSeed())}
          />
          <SDButton label='Reset Seed' onClick={() => dispatch(resetSeed())} />
        </Flex>
        <Flex paddingTop={5} gap={5}>
          <SDSwitch
            label='Display in-progress images'
            isChecked={shouldDisplayInProgress}
            onChange={(e) =>
              dispatch(setShouldDisplayInProgress(e.target.checked))
            }
          />
        </Flex>
        <Flex paddingTop={5} gap={5}>
          <SDFileUpload />

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
        </Flex>
        <Flex paddingTop={5} gap={5}>
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
        </Flex>
      </form>

      {/* WIP */}

      <FormControl>
        <Progress marginTop={15} marginBottom={15} value={50} />
        <SDButton label='Generate Image' type='submit' colorScheme='blue' />
        <SDButton label='Cancel' colorScheme='red' />
        <SDButton
          label='Reset to Defaults'
          colorScheme='green'
          onClick={() => dispatch(resetForm())}
        />
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
