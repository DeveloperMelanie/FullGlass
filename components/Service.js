export default function Service({ title, children, image }) {
    return (
        <section className='container flex flex-col lg:flex-row justify-between items-center gap-16 pt-20 text-lg'>
            <div className='max-w-2xl'>
                <h2 className='text-5xl font-black text-blue mb-5'>{title}</h2>
                {children}
            </div>
            <div>
                <img
                    src={image}
                    alt={`FullGlass ${title}`}
                    className='lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[750px] rounded-3xl'
                />
            </div>
        </section>
    )
}