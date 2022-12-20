import { JSX } from 'preact'

export default function(props: JSX.HTMLAttributes<HTMLHRElement>) {
    return <hr class={`m-1 mx-1.5 border-0 border-t border-[var(--primary-line)] rounded drop-shadow ${props.class ?? ''}`} {...props} />
}