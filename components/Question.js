import { useState, useEffect, useRef } from 'react'
import $ from 'jquery'

export default function Question({ title, children, isOpen }) {
    const [open, setOpen] = useState(isOpen)
    const panel = useRef(null)

    useEffect(() => {
        if (open) {
            $(panel.current).slideDown()
        } else {
            $(panel.current).slideUp()
        }
    }, [open])

    return (
        <div
            className='bg-gray-100 rounded-3xl px-4 py-1 max-w-2xl mx-auto mb-4'
            role='button'
            onClick={() => setOpen(!open)}
        >
            <div className='flex gap-8 items-center'>
                <div
                    className={`text-7xl self-start${
                        open ? ' text-blue2' : ' text-gray-300'
                    }`}
                >
                    {open ? '−' : '+'}
                </div>
                <div className={open ? 'pt-4' : 'py-4'}>
                    <h3
                        className={`text-xl font-medium${
                            open ? ' text-blue2 mb-5' : ' text-gray-300'
                        }`}
                    >
                        {title}
                    </h3>
                    <div ref={panel} className='text-lg max-w-lg pb-7'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
