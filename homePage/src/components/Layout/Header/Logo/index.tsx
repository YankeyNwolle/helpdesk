import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

    return (
        <Link href="/" className="flex items-center gap-2">
            <Image
                src="/images/logo/logo_helpdesk.jpg"  // Utilisez uniquement l'icône
                alt="logo"
                width={40}
                height={40}
                style={{ width: 'auto', height: 'auto' }}
                quality={100}
                className='dark:hidden'
            />
            <Image
                src="/images/logo/logo"  // Icône en blanc
                alt="logo"
                width={40}
                height={40}
                style={{ width: 'auto', height: 'auto' }}
                quality={100}
                className='dark:block hidden'
            />
            <span className="text-xl font-bold text-secondary dark:text-white">
                HelpDesk
            </span>
        </Link>
    );
};

export default Logo;