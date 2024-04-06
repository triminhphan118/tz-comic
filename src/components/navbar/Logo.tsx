'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
    const router = useRouter();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        router.push('/');
    };

    return (
        <a onClick={handleClick}>
            <Image
                alt="logo"
                className="hidden md:block cursor-pointer rounded-md"
                height={30}
                width={40}
                src={'/images/turtle.jpg'}
            />
        </a>
    );
};

export default Logo;
