import { JSX } from 'preact'

export default function(props: JSX.HTMLAttributes<HTMLElement>) {
    return (
        <span class={`text-sm ${props.class ?? ''}`} {...props}>{
            props.name
        }</span>
    )
}