import {
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  Text,
} from '@chakra-ui/react';

type Props = {
  label: string;
  value: number;
  onChange: (valueAsString: string, valueAsNumber: number) => void;
  step?: number;
  min?: number;
  max?: number;
  precision?: number;
};

const SDNumberInput = ({
  label,
  value,
  onChange,
  step,
  min,
  max,
  precision,
}: Props) => {
  return (
    <FormControl>
      <HStack>
        <Text fontSize={'xs'} whiteSpace='nowrap'>{label}</Text>
        <NumberInput
          size={'xs'}
          step={step}
          min={min}
          max={max}
          precision={precision}
          onChange={onChange}
          value={value}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </HStack>
    </FormControl>
  );
};

export default SDNumberInput;
