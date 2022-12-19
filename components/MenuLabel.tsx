import { JSX } from 'preact'

export default function(props: JSX.HTMLAttributes<HTMLElement>) {
    return (
        <span class={`px-3 text-xs ${props.class ?? ''}`} {...props}>{
            props.name
        }</span>
    )
}