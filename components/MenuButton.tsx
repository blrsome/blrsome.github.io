import { JSX } from 'preact'

import icons from '../static/config/fluent-icons.json' assert { type: 'json' }

export default function(props: JSX.HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props} class={`m-1 rounded hover:text-[var(--on-primary-container)] relative hover:drop-shadow-md cursor-pointer transition-all ${props.class ?? ''}`}>
            <span class='px-2 py-1 w-full block truncate sm:opacity-0 md:opacity-100 transition-all'>{props.name}</span>
            <div class='p-1 inset-0 w-[32px] h-[32px] absolute opacity-0 sm:opacity-100 transition-all'>
                <svg class='fill-current hover:fill-[var(--on-primary-container)] transition-all'
                    viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path d={icons[props.icon ?? 'TextBulletListSquareWarning24Filled']}></path>
                </svg>
            </div>
        </div>
    )
}