import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
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
      <FormLabel>{label}</FormLabel>
      <NumberInput
      size={'sm'}
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
    </FormControl>
  );
};

export default SDNumberInput;
