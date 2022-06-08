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
            <section className='container text-center pt-44 pb-56'>
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
                <div className='text-left pb-32'>
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
                <h2 className='text-[2.5rem] mini:text-6xl sm:text-7xl font-black mb-7 mini:mb-16'>
                    Contáctanos
                </h2>
                <p className='text-2xl pb-3'>
                    ¡Puedes contactarnos vía <strong>WhatsApp</strong> y{' '}
                    <strong>obtener presupuesto en 5 minutos</strong>!
                </p>
                <p className='text-2xl pb-3'>Atendemos solo WhatsApp.</p>
                <div
                    className='flex max-w-[360px] mx-auto justify-between items-center text-xl px-4 mt-6 rounded-full bg-[#b8f1b8] cursor-pointer'
                    role='button'
                    title='Haz clic para copiar el número'
                    onClick={() =>
                        navigator.clipboard.writeText('+34 652 716 447')
                    }
                >
                    <input
                        type='tel'
                        value='+34 652 716 447'
                        disabled
                        className='bg-transparent py-4 max-w-[170px] cursor-pointer font-medium'
                    />
                    <div>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width={40}
                            height={40}
                            viewBox='0 0 24 24'
                        >
                            <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' />
                        </svg>
                    </div>
                </div>
            </section>
        </>
    )
}
