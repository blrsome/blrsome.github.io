import { JSX } from 'preact'

export default function(props: JSX.HTMLAttributes<HTMLElement>) {
    return <article {...props}
        class={`border-0 border-l border-[var(--outline)] text-[var(--on-secondary)] bg-[var(--secondary)]
            ${props.class ?? ''}`}>
    </article>
}