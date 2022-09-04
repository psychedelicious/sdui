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
        <Switch size='sm' onChange={onChange} isChecked={isChecked} />
        <FormLabel fontSize='sm' whiteSpace='nowrap' fontWeight={'normal'}>{label}</FormLabel>
      </HStack>
    </FormControl>
  );
};

export default SDSwitch;
