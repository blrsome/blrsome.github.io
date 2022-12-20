import { JSX } from 'preact'

export default function(props: JSX.HTMLAttributes<HTMLElement>) {
    return (
        <span {...props} class={`mx-1 px-2 text-xs ${props.class ?? ''}`}>{
            props.name
        }</span>
    )
}