export default function Card({ image, title, children }) {
    return (
        <div>
            <div className='bg-blue rounded-full w-fit mx-auto p-5 mb-7'>
                <img src={image} alt={title} className='max-w-[50px]' />
            </div>
            <h3 className='text-3xl font-black pb-4'>{title}</h3>
            <div className='font-medium'>{children}</div>
        </div>
    )
}
