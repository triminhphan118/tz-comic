import { title } from 'process';
import { FC } from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}

const Button: FC<ButtonProps> = ({ label, onClick, disabled, icon, outline, small }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`relative whitespace-nowrap px-2 disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full 
						${outline ? 'bg-white' : 'bg-orange-500'}
						${outline ? 'border-black' : 'bg-orange-500'}
                        ${outline ? 'text-black' : 'text-white'}
						${small ? 'px-1' : 'py-3'}
						${small ? 'text-sm' : 'text-white'}
						${small ? 'small' : 'text-white'}
						${small ? 'font-light' : 'font-semibold'}
						${small ? 'border-[1px]' : 'border-2'}
						`}
        >
            {label}
        </button>
    );
};

export default Button;
