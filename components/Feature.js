export default function Feature({ title, children, image, reverse }) {
    return (
        <div className={`lg:flex${reverse ? ' flex-row-reverse' : ''}`}>
            <div
                className={`lg:w-1/2 pt-16${
                    reverse ? ' bg-blue px-16 text-white pb-24' : ' px-16 pb-10'
                }`}
            >
                <h2 className='text-4xl font-black mb-4'>{title}</h2>
                <div className='font-medium text-lg max-w-3xl'>{children}</div>
            </div>
            <div className='lg:w-1/2 lg:max-h-[564px]'>
                <img
                    src={image}
                    alt={title}
                    className='w-full h-full object-cover'
                />
            </div>
        </div>
    )
}
