import { FaTelegram, FaYoutube, FaInstagram } from 'react-icons/fa';
import { BsArrowUpCircle } from 'react-icons/bs';
import Link from 'next/link';
import { FooterInfo } from '@/i18n/layouts/footer.i18n';
import { useTranslation } from '@/helper/translate';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="text-white border-t border-gray-500 pb-5 pt-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">

                    <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
                        <h3 className="text-xl font-bold mb-3">{t(FooterInfo.aboutUs)}</h3>
                        <p className="mb-5">
                        {t(FooterInfo.aboutUsDesc)}
                        </p>
                    </div>

                    <div className="w-full md:w-1/3 lg:w-1/4 mb-3 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">{t(FooterInfo.contactUs)}</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="ml-2">{t(FooterInfo.address)}</span>
                            </li>
                            <li className="flex items-center">
                                <span className="ml-2">info@example.com</span>
                            </li>
                            <li className="flex items-center">
                                <span className="ml-2">021-12345678</span>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center md:items-end gap-4">
                        <div className='flex flex-col items-center'>
                            <div className='mb-5'>
                                <span className='font-bold text-xl'>bet365</span>
                            </div>

                            <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse mt-5">
                                <Link href="/">
                                    <FaYoutube size={27} />
                                </Link>
                                <Link href="/">
                                    <FaTelegram size={27} />
                                </Link>
                                <Link href="/">
                                    <FaInstagram size={27} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white border-opacity-20 pt-3 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-x-3 text-center md:text-right mb-4 md:mb-0">
                        <Link
                            className="cursor-pointer text-blue-600 hover:text-blue-800"
                            href={'/'}
                        >
                            <BsArrowUpCircle className='text-white hover:text-gray-400 transition size-[35px]' />
                        </Link>
                        <div>
                            <span>
                            {t(FooterInfo.moralRights)}
                            </span>
                            <span>© {new Date().getFullYear()}</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center space-x-6 rtl:space-x-reverse space-x-reverse">
                        <Link href="/" className="hover:text-gray-300 transition mb-2 md:mb-0">{t(FooterInfo.privacy)}</Link>
                        <Link href="/" className="hover:text-gray-300 transition mb-2 md:mb-0 ms-4">{t(FooterInfo.terms)}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}