import { JSX } from 'preact'

export default function(props: JSX.HTMLAttributes<HTMLElement>) {
    return (
        <footer {...props} class={`px-3 text-[var(--on-tertiary)] bg-[var(--tertiary)] ${props.class ?? ''}`}>
            { props.children }
        </footer>
    )
}