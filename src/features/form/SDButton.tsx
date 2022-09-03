import { Button } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

type Props = {
    label: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    colorScheme?: string;
};

const SDButton = ({ label, type, onClick, colorScheme }: Props) => {
    return (
        <Button
            minInlineSize={'sm'}
            height={8}
            colorScheme={colorScheme}
            onClick={onClick}
            type={type}
        >
            {label}
        </Button>
    );
};

export default SDButton;
