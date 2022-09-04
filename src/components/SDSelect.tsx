import { FormControl, HStack, Select, Text } from '@chakra-ui/react';
import { ChangeEventHandler } from 'react';

type Props = {
    label: string;
    value: string | number;
    onChange: ChangeEventHandler<HTMLSelectElement>;
    validValues: Array<string | number>;
};

const SDSelect = ({ label, value, onChange, validValues }: Props) => {
    return (
        <FormControl>
            <HStack>
                <Text fontSize={'sm'} whiteSpace='nowrap'>
                    {label}
                </Text>
                <Select
                    fontSize={'sm'}
                    size={'sm'}
                    onChange={onChange}
                    value={value}
                >
                    {validValues.map((val, i) => (
                        <option key={i} value={val}>
                            {val}
                        </option>
                    ))}
                </Select>
            </HStack>
        </FormControl>
    );
};

export default SDSelect;