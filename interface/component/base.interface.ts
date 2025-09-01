export interface IInputProps {
    type?: string;
    label?: string | number;
    placeholder?: string;
    className?: string;
    inputClassName?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: React.ReactNode;
}

export interface IButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    icon?: React.ReactNode;
    text?: string | number;
    className?: string;
}