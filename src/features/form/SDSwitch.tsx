import { FormControl, FormLabel, HStack, Switch } from '@chakra-ui/react';
import { ChangeEvent } from 'react';

type Props = {
  label: string;
  isChecked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SDSwitch = ({ label, isChecked, onChange }: Props) => {
  return (
    <FormControl>
      <HStack>
        <Switch onChange={onChange} isChecked={isChecked} />
        <FormLabel>{label}</FormLabel>
      </HStack>
    </FormControl>
  );
};

export default SDSwitch;
