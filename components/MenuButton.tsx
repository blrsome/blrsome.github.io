import { JSX } from 'preact'

export default function(props: JSX.HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...props}
            class={`m-1 rounded hover:text-[var(--on-primary-container)] hover:drop-shadow-md
                cursor-pointer transition-all ${props.class ?? ''}`}>
                    <span class='px-2 py-1 w-full block truncate'>{props.name}</span>
        </div>
    )
}