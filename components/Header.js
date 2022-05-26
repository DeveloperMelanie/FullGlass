import { useState, useEffect } from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'

export default function Header() {
    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    }, [isOpen])

    return (
        <>
            <header className='absolute top-0 left-0 w-full py-4 text-lg text-white'>
                <div className='container flex justify-between items-center'>
                    <Link href='/'>
                        <a className='block'>
                            <img
                                src='/assets/images/logo.png'
                                alt='FullGlass'
                                className='w-[80px]'
                            />
                        </a>
                    </Link>
                    <nav className='hidden sm:flex gap-8'>
                        <Link href='/'>
                            <a className='relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>
                                Inicio
                            </a>
                        </Link>
                        <Link href='/sobre-nosotros'>
                            <a className='relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>
                                Sobre nosotros
                            </a>
                        </Link>
                        <Link href='/servicios'>
                            <a className='relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>
                                Servicios
                            </a>
                        </Link>
                        <Link href='/contacto'>
                            <a className='relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>
                                Contacto
                            </a>
                        </Link>
                    </nav>
                    <MobileMenu isActive={isOpen} changeState={setOpen} />
                </div>
            </header>
        </>
    )
}
