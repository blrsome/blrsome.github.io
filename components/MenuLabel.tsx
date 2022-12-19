import { JSX } from 'preact'

export default function(props: JSX.HTMLAttributes<HTMLElement>) {
    return (
        <span class={`px-3 text-[var(--on-primary-label)] text-xs ${props.class ?? ''}`} {...props}>{
            props.name
        }</span>
    )
}