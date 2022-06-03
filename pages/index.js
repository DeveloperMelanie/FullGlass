import Link from 'next/link'
import Feature from 'components/Feature'
import Card from 'components/Card'
import Question from 'components/Question'
import Service from 'components/Service'

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
                <Feature title='Sobre nosotros' image='/assets/images/p.png'>
                    <p className='mb-4'>
                        <strong>FullGlass</strong> desde sus orígenes ha
                        participado en la mayoría de <strong>proyectos</strong>{' '}
                        de <strong>andamiaje</strong> realizados en España y
                        también ha colaborado en{' '}
                        <strong>
                            multitud de proyectos internacionales ofreciendo sus
                            montadores
                        </strong>
                        .
                    </p>
                    <p className='mb-4'>
                        Contando con un equipo técnico, con experiencia en
                        dirección de personal de más de 100 trabajadores a su
                        cargo.{' '}
                        <strong>
                            Ofrecemos montadores de andamios con amplia y
                            contrastada experiencia
                        </strong>
                        .
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
                    image='/assets/images/a.png'
                >
                    <p className='mb-4'>
                        <strong>
                            Proporcionamos montadores de andamios cualificados,
                            a empresas de andamios de toda Europa.
                        </strong>
                    </p>
                    <p className='mb-4'>
                        <strong>Actualmente, trabajamos</strong> con{' '}
                        <strong>empresas alemanas</strong> e{' '}
                        <strong>inglesas ofreciendo</strong> un{' '}
                        <strong>servicio</strong> a <strong>medida</strong>.
                    </p>
                    <p className='mb-4'>
                        Para dar servicio a las carencias de personal
                        cualificado existentes.
                    </p>
                </Feature>
            </section>
            <Service
                title='Pinturas'
                image='/assets/images/pintura.png'
                className='pt-20'
            >
                <p className='mb-4'>
                    Sabemos que <strong>pintar una casa habitada</strong>, es
                    engorroso y las dificultades que tiene hacer este tipo de
                    trabajo, <strong>a veces es incómodo</strong> y es por ello
                    que <strong>disponemos de un servicio técnico</strong>, que
                    te hará una visita previa{' '}
                    <strong>para detallarte y asesorarte</strong> cómo se
                    realizarán los trabajos.
                </p>
                <p className='mb-8'>
                    Te haremos una planificación del trabajo en cuanto al orden
                    y a las fechas de comienzo, finalización y entrega de las
                    estancias a pintar. Pídenos presupuesto sin compromiso y
                    deje su casa en manos de profesionales con la garantía que
                    da nuestra empresa.
                </p>
                <h3 className='text-2xl font-black mb-4'>
                    NUESTRA FORMA DE TRABAJO
                </h3>
                <p className='mb-4'>
                    Antes de comenzar cualquier trabajo de pintura, es
                    imprescindible tapar todos los elementos de nuestra
                    vivienda, invirtiendo un tiempo proporcional a la
                    satisfacción del cliente al término del trabajo realizado.
                </p>
                <p className='mb-4'>
                    Te garantizamos un precio equilibrado en cuanto a «
                    <strong>calidad-precio</strong>», ajustandonos a tus
                    necesidades económicas, aplicamos productos de pintura de 1ª
                    calidad con certificados de garantía y nos comprometemos con
                    nuestros clientes con las fechas de entrega y garantizando
                    nuestros productos si hubiera problemas con la pintura
                    aplicada durante un año.
                </p>
                <p>
                    Aplicamos pinturas de primeras marcas para garantizar
                    trabajos de <strong>pintura de buena calidad</strong> y{' '}
                    <strong>buenos acabados</strong>.
                </p>
            </Service>
            <Service
                reverse={true}
                title='Albañilería'
                image='/assets/images/albañileria.png'
                className='pt-36'
            >
                <p className='mb-4'>
                    Contamos con un <strong>servicio de albañilería</strong>{' '}
                    puesto a tu disposición para ayudarte en lo que necesites.
                </p>
                <p className='mb-8'>
                    Trabajamos en estrecha colaboración con nuestros clientes
                    para asegurar siempre un servicio impecable.
                </p>
                <h3 className='text-2xl font-black mb-4'>
                    CÓMO PODEMOS AYUDARTE
                </h3>
                <p className='mb-4'>
                    Nos encargaremos de tus <strong>pequeñas reformas</strong>,
                    baños, etc. Garantizando siempre el cumplimiento absoluto de
                    tus expectativas.
                </p>
                <p className='mb-4'>
                    Te aseguramos una excelente relación «coste-beneficio»,
                    ofreciéndote el <strong>mejor presupuesto</strong> para la
                    labor a realizar. Nuestra mano de obra está altamente
                    cualificada, con gran experiencia en el sector, por lo que
                    puedes esperar lo mejor de nuestros servicios, con la
                    garantía de nuestra empresa.
                </p>
                <p>
                    Tenemos un total compromiso con nuestros clientes,{' '}
                    <strong>
                        estaremos encantados de brindarte nuestra ayuda
                    </strong>
                    .
                </p>
            </Service>
            <section className='container text-center pt-44'>
                <h2 className='text-center text-5xl font-black text-blue'>
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
                    <Card image='/assets/images/tools.png' title='Herramientas'>
                        <p>
                            El Personal técnico de FullGlass ofrece soluciones
                            online, para garantizar la eficiencia de nuestras
                            verificaciones y su bajo coste.
                        </p>
                    </Card>
                    <Card image='/assets/images/service.png' title='Servicio'>
                        <p>
                            Asesoramiento comercial stock y alquiler material de
                            andamios. Montadores de andamios, y Supervisión y
                            jefes de producción.
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
