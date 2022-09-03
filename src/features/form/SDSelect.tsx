import { FormControl, FormLabel, Select } from '@chakra-ui/react';
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
            <FormLabel size={'sm'}>{label}</FormLabel>
            <Select size={'sm'} onChange={onChange} value={value}>
                {validValues.map((val, i) => (
                    <option key={i} value={val}>
                        {val}
                    </option>
                ))}
            </Select>
        </FormControl>
    );
};

export default SDSelect;
