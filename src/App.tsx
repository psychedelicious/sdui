import { useFormik } from 'formik';

import {
  Button,
  FormControl,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormLabel,
  Select,
  Switch,
  Heading,
  Container,
  Progress,
  Image,
  Text,
  Link,
} from '@chakra-ui/react';

const initialValues = {
  prompt: 'Cyborg pickle shooting lasers',
  imagesToGenerate: 1,
  steps: 50,
  cfgScale: 7.5,
  height: 512,
  width: 512,
  sampler: 'k_lms',
  seed: -1,
  shouldDisplayInProgress: false,
  initialImage: null,
  img2imgStrength: 0.75,
  shouldFitToWidthHeight: false,
  gpfganStrength: 0.8,
  upscalingLevel: 0,
  upscalingStrength: 0.75,
};

const App = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container>
      <Heading>Stable Diffusion Dream Server</Heading>

      <form onSubmit={formik.handleSubmit}>
        <FormControl isRequired>
          <Input
            id='prompt'
            name='prompt'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.prompt}
            placeholder="I'm dreaming of..."
          />
        </FormControl>
        <Button type='submit'>Generate</Button>
        <FormControl>
          <FormLabel>Images to generate</FormLabel>
          <NumberInput
            id='images_to_generate'
            name='images_to_generate'
            step={1}
            min={1}
            precision={0}
            onChange={(v) => {
              formik.setFieldValue('imagesToGenerate', v);
            }}
            value={formik.values.imagesToGenerate}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Steps</FormLabel>
          <NumberInput
            step={1}
            min={1}
            precision={0}
            onChange={(v) => {
              formik.setFieldValue('steps', v);
            }}
            value={formik.values.steps}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>CFG Scale</FormLabel>
          <NumberInput
            step={0.5}
            onChange={(v) => {
              formik.setFieldValue('cfgScale', v);
            }}
            value={formik.values.cfgScale}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Sampler</FormLabel>
          <Select
            onChange={(e) => {
              formik.setFieldValue('sampler', e.target.value);
            }}
            value={formik.values.sampler}
          >
            <option value='ddim'>DDIM</option>
            <option value='plms'>PLMS</option>
            <option value='k_lms'>KLMS</option>
            <option value='k_dpm_2'>KDPM_2</option>
            <option value='k_dpm_2_a'>KDPM_2A</option>
            <option value='k_euler'>KEULER</option>
            <option value='k_euler_a'>KEULER_A</option>
            <option value='k_heun'>KHEUN</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Width</FormLabel>
          <Select
            onChange={(e) => {
              formik.setFieldValue('width', e.target.value);
            }}
            value={formik.values.width}
          >
            <option value='64'>64</option> <option value='128'>128</option>
            <option value='192'>192</option>
            <option value='256'>256</option>
            <option value='320'>320</option>
            <option value='384'>384</option>
            <option value='448'>448</option>
            <option value='512'>512</option>
            <option value='576'>576</option>
            <option value='640'>640</option>
            <option value='704'>704</option>
            <option value='768'>768</option>
            <option value='832'>832</option>
            <option value='896'>896</option>
            <option value='960'>960</option>
            <option value='1024'>1024</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Height</FormLabel>
          <Select
            onChange={(e) => {
              formik.setFieldValue('height', e.target.value);
            }}
            value={formik.values.height}
          >
            <option value='64'>64</option> <option value='128'>128</option>
            <option value='192'>192</option>
            <option value='256'>256</option>
            <option value='320'>320</option>
            <option value='384'>384</option>
            <option value='448'>448</option>
            <option value='512'>512</option>
            <option value='576'>576</option>
            <option value='640'>640</option>
            <option value='704'>704</option>
            <option value='768'>768</option>
            <option value='832'>832</option>
            <option value='896'>896</option>
            <option value='960'>960</option>
            <option value='1024'>1024</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Seed</FormLabel>
          <NumberInput
            step={1}
            precision={0}
            onChange={(v) => {
              formik.setFieldValue('seed', v);
            }}
            value={formik.values.seed}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <Button onClick={() => formik.setFieldValue('seed', -1)}>
          Reset seed
        </Button>
        <FormControl>
          <FormLabel>
            Display in-progress images (slows down generation)
          </FormLabel>
          <Switch
            onChange={(e) => {
              formik.setFieldValue('shouldDisplayInProgress', e.target.checked);
            }}
            isChecked={formik.values.shouldDisplayInProgress}
          />
        </FormControl>
        <Button onClick={formik.handleReset}>Reset to Defaults</Button>
        <FormControl>
          <FormLabel>Initial image</FormLabel>
          <Input type='file' accept='.jpg, .jpeg, .png' />
        </FormControl>
        <FormControl>
          <FormLabel>img2img Strength</FormLabel>
          <NumberInput
            step={0.01}
            min={0}
            max={1}
            onChange={(v) => {
              formik.setFieldValue('img2imgStrength', v);
            }}
            value={formik.values.img2imgStrength}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Fit to Width/Height</FormLabel>
          <Switch
            onChange={(e) => {
              formik.setFieldValue('shouldFitToWidthHeight', e.target.checked);
            }}
            isChecked={formik.values.shouldFitToWidthHeight}
          />
        </FormControl>
        <FormControl>
          <FormLabel>GPFGAN Strength (0 to disable)</FormLabel>
          <NumberInput
            step={0.05}
            min={0}
            max={1}
            onChange={(v) => {
              formik.setFieldValue('gpfganStrength', v);
            }}
            value={formik.values.gpfganStrength}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl>
          <FormLabel>Upscaling Level</FormLabel>
          <Select
            value={formik.values.upscalingLevel}
            onChange={(e) => {
              formik.setFieldValue('upscalingLevel', e.target.value);
            }}
          >
            <option value=''>None</option>
            <option value='2'>2x</option>
            <option value='4'>4x</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Upscaling Strength</FormLabel>
          <NumberInput
            step={0.05}
            min={0}
            max={1}
            onChange={(v) => {
              formik.setFieldValue('upscalingStrength', v);
            }}
            value={formik.values.upscalingStrength}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      </form>
      <Progress value={50} />
      <Button>Cancel</Button>
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

export default App;
