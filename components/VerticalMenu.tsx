import { JSX } from 'preact'

import MenuButton from './MenuButton.tsx'
import MenuLabel from './MenuLabel.tsx'
import HR from './HorizontalLine.tsx'

import menu from '../static/config/menu.property.json' assert { type: 'json' }

export default function(props: JSX.HTMLAttributes<HTMLElement>) {
    let tab = 0
    return (
        <nav {...props} class={`bg-[var(--primary)] flex flex-col overflow-x-hidden overflow-y-auto ${props.class ?? ''}`}>
            {menu.map((t, i) => (
                <div data-menu-idx={String(i)}>{
                    t.divide ? <HR />
                    : <div class='select-none'>
                        {t.name && <MenuLabel class='text-[var(--on-primary-label)] sm:hidden md:inline-block' name={t.name} />}
                        {t.children?.map((t, i) => {
                            tab++
                            return <MenuButton class={`hover:bg-[var(--primary-container)] focus-visible:outline-none focus-visible:ring-2 ring-inset-1 ring-[var(--outline)]`}
                                tabIndex={tab} {...t} />
                        })}
                    </div>
                }</div>
            ))}
        </nav>
    )
}