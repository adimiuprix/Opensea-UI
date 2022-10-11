import React from 'react'

const Button = ({ onClick, label, full }) => {
    return (
        <button
            onClick={onClick}
            className={`${
                full ? full : ''
            } h-[60px] bg-primary px-6 py-4 rounded-lg hover:opacity-90`}
        >
            <span className="text-primary-light font-semibold ">{label}</span>
        </button>
    )
}

export default Button
