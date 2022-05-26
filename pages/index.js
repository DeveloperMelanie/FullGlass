import Link from 'next/link'
import Feature from 'components/Feature'
import Card from 'components/Card'
import Question from 'components/Question'

export default function Home() {
    if (typeof window !== 'undefined') {
        const txts = document.querySelector('.slider').children
        const txtsLen = txts.length
        let index = 0
        const textInTimer = 3000
        const textOutTimer = 2800

        function animateText() {
            for (let i = 0; i < txtsLen; i++) {
                txts[i].classList.remove('text-in', 'text-out')
            }
            txts[index].classList.add('text-in')

            setTimeout(() => {
                txts[index].classList.add('text-out')
            }, textOutTimer)

            setTimeout(() => {
                if (index === txtsLen - 1) {
                    index = 0
                } else {
                    index++
                }
                animateText()
            }, textInTimer)
        }

        window.onload = animateText
    }

    return (
        <>
            <section className='text-center text-white w-full h-screen flex flex-col justify-center items-center bg-hero-image bg-cover bg-no-repeat bg-fixed bg-center bg-blend-darken bg-[#00000033]'>
                <div className='w-full overflow-hidden slider'>
                    <h1 className='hidden text-4xl extramini:text-5xl mini:text-6xl md:text-8xl lg:text-9xl xl:text-[11rem] uppercase font-black text-yellow leading'>
                        ANDAMIOS
                    </h1>
                    <h1 className='hidden text-4xl extramini:text-5xl mini:text-6xl md:text-8xl lg:text-9xl xl:text-[11rem] uppercase font-black text-yellow leading'>
                        PINTURA
                    </h1>
                    <h1 className='hidden text-4xl extramini:text-5xl mini:text-6xl md:text-8xl lg:text-9xl xl:text-[11rem] uppercase font-black text-yellow leading'>
                        ALBAÑILERÍA
                    </h1>
                </div>
                <p className='text-lg sm:text-xl md:text-2xl max-w-xl mx-auto lg:-mt-10'>
                    te ofrecemos una gran variedad de servicios, nos encargamos
                    de todo por tu seguridad.
                </p>
            </section>
            <section>
                <Feature
                    title='Sobre nosotros'
                    image='/assets/images/about.jpg'
                >
                    <p className='mb-4'>
                        AM andamios desde sus orígenes ha participado en la
                        mayoría de proyectos de andamiaje realizados en España y
                        también ha colaborado en multitud de proyectos
                        internacionales ofreciendo sus montadores.
                    </p>
                    <p className='mb-4'>
                        Contando con un equipo técnico, con experiencia en
                        dirección de personal de más de 100 trabajadores a su
                        cargo. Ofrecemos montadores de andamios con amplia y
                        contrastada experiencia.
                    </p>
                    <Link href='/contacto'>
                        <a className='block w-fit py-4 px-10 bg-blue border-2 border-blue hover:bg-white hover:text-blue transition-all duration-300 rounded-full font-black text-white'>
                            Contáctanos
                        </a>
                    </Link>
                </Feature>
                <Feature
                    reverse={true}
                    title='Servicios'
                    image='/assets/images/services.jpg'
                >
                    <p className='mb-4'>
                        Proporcionamos montadores de andamios cualificados, a
                        empresas de andamios de toda Europa.
                    </p>
                    <p className='mb-4'>
                        Actualmente, trabajamos con empresas alemanas e inglesas
                        ofreciendo un servicio a medida.
                    </p>
                    <p className='mb-4'>
                        Para dar servicio a las carencias de personal
                        cualificado existentes.
                    </p>
                </Feature>
            </section>
            <section className='container text-center'>
                <h2 className='text-center text-5xl font-black mt-20 text-blue'>
                    Qué te aportamos
                </h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 pt-20 pb-32 gap-x-7 max-w-7xl mx-auto gap-y-14'>
                    <Card image='/assets/images/back.png' title='Experiencia'>
                        <p>
                            Nuestro equipo está formado por los mejores
                            montadores de andamios. Técnicos con experiencia en
                            dirección de los más complejos proyectos. Que
                            aseguran tú rentabilidad y producción.
                        </p>
                    </Card>
                    <Card image='/assets/images/back.png' title='Experiencia'>
                        <p>
                            Nuestro equipo está formado por los mejores
                            montadores de andamios. Técnicos con experiencia en
                            dirección de los más complejos proyectos. Que
                            aseguran tú rentabilidad y producción.
                        </p>
                    </Card>
                    <Card image='/assets/images/back.png' title='Experiencia'>
                        <p>
                            Nuestro equipo está formado por los mejores
                            montadores de andamios. Técnicos con experiencia en
                            dirección de los más complejos proyectos. Que
                            aseguran tú rentabilidad y producción.
                        </p>
                    </Card>
                </div>
                <h2 className='text-4xl mini:text-5xl sm:text-6xl font-black mb-16'>
                    ¿Preguntas?
                </h2>
                <div className='text-left pb-56'>
                    <Question
                        title='¿Qué me ofrecen por trabajar con ustedes?'
                        isOpen={true}
                    >
                        <p className='pb-4'>
                            AM-andamios te ofrece unas condiciones laborales,
                            superiores a las del mercado standar.
                        </p>
                        <p>
                            Evidentemente una sustancial mejora a nivel
                            económico, pero también exijimos a los mejores
                            profesionales.
                        </p>
                    </Question>
                    <Question title='¿Qué me ofrecen por trabajar con ustedes?'>
                        <p className='pb-4'>
                            AM-andamios te ofrece unas condiciones laborales,
                            superiores a las del mercado standar.
                        </p>
                        <p>
                            Evidentemente una sustancial mejora a nivel
                            económico, pero también exijimos a los mejores
                            profesionales.
                        </p>
                    </Question>
                    <Question title='¿Qué me ofrecen por trabajar con ustedes?'>
                        <p className='pb-4'>
                            AM-andamios te ofrece unas condiciones laborales,
                            superiores a las del mercado standar.
                        </p>
                        <p>
                            Evidentemente una sustancial mejora a nivel
                            económico, pero también exijimos a los mejores
                            profesionales.
                        </p>
                    </Question>
                </div>
            </section>
        </>
    )
}
