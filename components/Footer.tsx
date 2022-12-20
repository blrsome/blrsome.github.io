import { JSX } from 'preact'

export default function(props: JSX.HTMLAttributes<HTMLElement>) {
    return (
        <footer {...props} class={`px-3 text-[var(--on-tertiary)] bg-[var(--tertiary)] grid grid-rows-[1fr_1fr] ${props.class ?? ''}`}>{
            ['title', 'alt'].map(t =>
                <span id={`${props.id}:${t}`} class='text-xs truncate'>{props[t]}</span>)
        }</footer>
    )
}