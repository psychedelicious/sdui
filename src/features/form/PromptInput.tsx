import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { setPrompt } from './formSlice';

const PromptInput = () => {
  const { prompt } = useAppSelector((state: RootState) => state.form);
  const dispatch = useAppDispatch();

  return (
    <FormControl isRequired variant='floating'>
      <FormLabel>Prompt</FormLabel>
      <Input
        size={'sm'}
        id='prompt'
        name='prompt'
        type='text'
        onChange={(e) => dispatch(setPrompt(e.target.value))}
        value={prompt}
        placeholder="I'm dreaming of..."
      />
    </FormControl>
  );
};

export default PromptInput;
