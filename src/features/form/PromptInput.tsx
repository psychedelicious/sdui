import { FormControl, Textarea } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { setPrompt } from '../../app/sdSlice';

const PromptInput = () => {
  const { prompt } = useAppSelector((state: RootState) => state.sd);
  const dispatch = useAppDispatch();

  return (
    <Textarea
      id='prompt'
      name='prompt'
      resize='none'
      size={'md'}
      onChange={(e) => dispatch(setPrompt(e.target.value))}
      value={prompt}
      placeholder="I'm dreaming of..."
    />
  );
};

export default PromptInput;
