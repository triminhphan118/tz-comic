'use client';

import useGlobalStore from '@/store/useGlobalStore';
import Container from '../Container';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';

const Navbar = () => {
    const { isSticky, setSticky } = useGlobalStore((state) => ({
        isSticky: state.isStickyActionBar,
        setSticky: state.setToggleStickyActionBar,
    }));
    return (
        <div className={`fixed w-full bg-white z-10 shadow-sm ${isSticky ? 'hidden' : ''}`}>
            <div className="py-2 border-b-[1px]">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo />
                        <Search />
                        <UserMenu />
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;
