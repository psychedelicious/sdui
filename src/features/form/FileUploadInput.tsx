import { FormControl, FormLabel, Input } from '@chakra-ui/react';

const FileUploadInput = () => {
  return (
    <FormControl variant="floating">
      <FormLabel>Initial image</FormLabel>
      <Input type='file' accept='.jpg, .jpeg, .png' />
    </FormControl>
  );
};

export default FileUploadInput;
