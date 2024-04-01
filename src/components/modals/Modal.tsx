'use client';

import { FC, useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Button from '../Button';

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabbel?: string;
    disabled?: boolean;
    secoundaryAction?: () => void;
    secoundaryLabel?: string;
}

const Modal: FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabbel,
    disabled,
    secoundaryAction,
    secoundaryLabel,
}) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }

        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [disabled, onClose]);

    const hadleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }

        onSubmit();
    }, [disabled, onSubmit]);

    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secoundaryAction) {
            return;
        }

        secoundaryAction();
    }, [disabled, secoundaryAction]);

    if (!isOpen) {
        return;
    }

    return (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
            <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/6 mt-6 mx-auto h-full lg:h-auto md:h-auto">
                <div
                    className={`translate duration-300 h-full ${showModal ? 'translate-y-0' : 'translate-y-full'} ${
                        showModal ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-center p-6 rounded-r justify-center relative border-b-[1px]">
                            <button
                                onClick={handleClose}
                                className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                            >
                                <IoMdClose />
                            </button>
                            <div className="text-lg  font-semibold">{title}</div>
                        </div>
                        <div className="relative p-6 flex-auto">{body}</div>

                        <div className="flex flex-col gap-2 p-6">
                            <div className="flex flex-row items-center gap-4 w-full">
                                {secoundaryAction && secoundaryLabel && (
                                    <Button
                                        outline
                                        disabled={disabled}
                                        label={secoundaryLabel || ''}
                                        onClick={secoundaryAction}
                                    ></Button>
                                )}

                                <Button disabled={disabled} label={actionLabbel || ''} onClick={onSubmit}></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Modal;
