import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

    return (
        <Link href="/" className="flex items-center gap-2">
            <Image
                src="/images/logo/logo_helpdesk.jpg"  
                alt="logo"
                width={32}
                height={32}
                className='dark:hidden object-contain rounded-full'
            />
            <Image
                src="/images/logo/logo_helpdesk.jpg"
                alt="logo"
                width={32}
                height={32}
                className='dark:block hidden object-contain rounded-full'
            />
            <span className="text-lg font-bold text-secondary dark:text-white">
                HelpDesk
            </span>
        </Link>
    );
};

export default Logo;