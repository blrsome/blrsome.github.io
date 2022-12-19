import { JSX } from 'preact'

export default function(props: JSX.HTMLAttributes<HTMLElement>) {
    return (
        <span {...props} class={`px-3 text-xs ${props.class ?? ''}`}>{
            props.name
        }</span>
    )
}