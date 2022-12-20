import { JSX } from 'preact'

export default function(props: JSX.HTMLAttributes<HTMLElement>) {
    return <article {...props} class={`text-[var(--on-secondary)] bg-[var(--secondary)] ${props.class ?? ''}`}>
    </article>
}