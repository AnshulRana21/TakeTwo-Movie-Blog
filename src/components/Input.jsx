import React, {useId} from 'react'

 function Input({
    label,
    type = "text",
    className = "",
    ...props

}, ref){


    const id = useId()

    return (
        <div className='w-full'>

            {label && <label 
            className='inline-block mb-2 pl-1' 
            htmlFor={id}>
                {label}
            </label>
            }
            
            <input
            type={type}
            className={`px-6 py-5 rounded-3xl bg-black text-black outline-none focus:bg-white focus:text-black duration-300  w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />

        </div>
    )
}

export default React.forwardRef(Input)