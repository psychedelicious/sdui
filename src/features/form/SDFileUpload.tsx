import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const SDFileUpload = () => {
  return (
    <FormControl>
      <FormLabel>Initial image</FormLabel>
      <Input type='file' accept='.jpg, .jpeg, .png' />
    </FormControl>
  );
};

export default SDFileUpload;
