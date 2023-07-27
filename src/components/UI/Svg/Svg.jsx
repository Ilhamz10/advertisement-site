import React, { cloneElement } from 'react'
import { icons } from './icons'

export default function Svg({ icon, fill, size }) {
    return (
        <>
            {cloneElement(icons[icon], {
                fill: fill,
                width: size,
                height: size
            })}
        </>
    )
}
