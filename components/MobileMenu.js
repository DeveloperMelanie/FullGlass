import Link from 'next/link'

export default function MobileMenu({ isActive, changeState }) {
    return (
        <>
            <div
                className='sm:hidden w-7 cursor-pointer z-50'
                role='button'
                onClick={() => changeState(!isActive)}
            >
                <div
                    className={`w-full h-px bg-white mb-2 transition-transform duration-300${
                        isActive ? ' -rotate-45 translate-y-[6px]' : ''
                    }`}
                ></div>
                <div
                    className={`w-full h-px bg-white mb-2 transition-opacity duration-300${
                        isActive ? ' opacity-0' : ''
                    }`}
                ></div>
                <div
                    className={`w-full h-px bg-white transition-transform duration-300${
                        isActive ? ' rotate-45 -translate-y-[12px]' : ''
                    }`}
                ></div>
            </div>
            <div
                className={`sm:hidden fixed z-40 top-0 left-0 w-full bg-gray-500 h-screen flex justify-center items-center text-center transition-all ease-in duration-300 ${
                    isActive ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                <ul className='flex flex-col gap-5 text-lg'>
                    <li>
                        <Link href='/'>
                            <a className='relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>
                                Inicio
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/sobre-nosotros'>
                            <a className='relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>
                                Sobre nosotros
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/servicios'>
                            <a className='relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>
                                Servicios
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/contacto'>
                            <a className='relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>
                                Contacto
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
