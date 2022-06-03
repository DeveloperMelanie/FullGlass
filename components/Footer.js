import Link from 'next/link'

export default function Footer() {
    const actualYear = new Date().getFullYear()

    return (
        <footer className='bg-dark-blue text-white pt-20 pb-7'>
            <div className='pb-10 text-center'>
                <h1 className='text-5xl font-black'>FullGlass</h1>
                <div className='max-w-[720px] mx-auto pt-6 px-4'>
                    <div className='overflow-hidden pb-[56.25%] relative h-0'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1496.5574876249086!2d2.1654386719990883!3d41.39330938835463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2ed1cd7c73d%3A0xc92f51ba2eb02077!2sCarrer%20de%20Pau%20Claris%2C%20Barcelona%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2suy!4v1654287324564!5m2!1ses-419!2suy'
                            width={700}
                            height={400}
                            className='border-0 left-0 top-0 w-full h-full absolute'
                            allowFullScreen
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                        />
                    </div>
                </div>
            </div>
            <div className='container flex items-center flex-col md:flex-row gap-16'>
                <div>
                    <img
                        src='/assets/images/logo.png'
                        alt='FullGlass'
                        loading='lazy'
                        className='w-[170px]'
                    />
                    <div className='flex gap-4 pt-7'>
                        <a href='#' target='_blank' rel='noopener noreferrer'>
                            <img
                                src='/assets/images/fb.svg'
                                alt='FullGlass Facebook'
                                loading='lazy'
                                className='w-full max-w-[45px]'
                            />
                        </a>
                        <a href='#' target='_blank' rel='noopener noreferrer'>
                            <img
                                src='/assets/images/twitter.svg'
                                alt='FullGlass Twitter'
                                loading='lazy'
                                className='w-full max-w-[45px]'
                            />
                        </a>
                        <a href='#' target='_blank' rel='noopener noreferrer'>
                            <img
                                src='/assets/images/yt.svg'
                                alt='FullGlass Youtube'
                                loading='lazy'
                                className='w-full max-w-[45px]'
                            />
                        </a>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className='bg-black flex flex-wrap gap-y-8 justify-around px-5 py-10 text-gray-400'>
                        <div className='flex flex-col font-bold'>
                            <h4 className='text-2xl font-black mb-5 text-white'>
                                Información
                            </h4>
                            <Link href='/aviso-legal'>
                                <a className='mb-1 hover:text-yellow transition-colors duration-300'>
                                    Aviso legal
                                </a>
                            </Link>
                            <Link href='/politica-de-cookies'>
                                <a className='mb-1 hover:text-yellow transition-colors duration-300'>
                                    Política de cookies
                                </a>
                            </Link>
                            <Link href='/politica-de-privacidad'>
                                <a className='mb-1 hover:text-yellow transition-colors duration-300'>
                                    Política de privacidad
                                </a>
                            </Link>
                            <Link href='/contacto'>
                                <a className='hover:text-yellow transition-colors duration-300'>
                                    Contacto
                                </a>
                            </Link>
                        </div>
                        <div className='flex flex-col font-bold'>
                            <h4 className='text-2xl font-black mb-5 text-white'>
                                Nosotros
                            </h4>
                            <Link href='/servicios'>
                                <a className='mb-1 hover:text-yellow transition-colors duration-300'>
                                    Servicios
                                </a>
                            </Link>
                            <Link href='/sobre-nosotros'>
                                <a className='mb-1 hover:text-yellow transition-colors duration-300'>
                                    Sobre nosotros
                                </a>
                            </Link>
                            <Link href='/trabaja-con-nosotros'>
                                <a className='mb-1 hover:text-yellow transition-colors duration-300'>
                                    Trabaja con nosotros
                                </a>
                            </Link>
                        </div>
                        <div className='flex flex-col font-bold'>
                            <h4 className='text-2xl font-black mb-5 text-white'>
                                Newsletter
                            </h4>
                            <form className='flex flex-col gap-4'>
                                <input
                                    type='text'
                                    placeholder='Nombre'
                                    className='p-3 bg-gray-500 placeholder:text-gray-400 font-bold outline-none'
                                />
                                <input
                                    type='email'
                                    placeholder='Email'
                                    className='p-3 bg-gray-500 placeholder:text-gray-400 font-bold outline-none'
                                />
                                <div>
                                    <input
                                        id='check'
                                        type='checkbox'
                                        className='mr-2'
                                    />
                                    <label
                                        htmlFor='check'
                                        className='max-w-[100px]'
                                    >
                                        Acepto el aviso legal y política de
                                        privacidad.
                                    </label>
                                </div>
                                <input
                                    type='submit'
                                    value='Suscribirme'
                                    className='py-3 px-8 bg-yellow border-2 border-yellow hover:text-yellow hover:bg-black transition-all duration-300 text-black font-black text-xl w-fit cursor-pointer'
                                />
                            </form>
                        </div>
                    </div>
                    <div className='bg-gray-500 text-gray-400 text-center lg:text-left lg:pl-44 font-bold py-3'>
                        Copyright {actualYear} ©. Todos los derechos reservados.
                    </div>
                </div>
            </div>
        </footer>
    )
}
