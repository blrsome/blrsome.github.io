!(function () {
    Documentation.Edit = !0;
    const P = {
            Create(n, t) {
                const e = document.createElement(n);
                t.text && (e.textContent = t.text, delete t.text),
                Object.entries(t).forEach(([p, d]) => e.setAttribute(p, Array.isArray(d) ? d.join(' ') : d));
                return e
            },
            Include(d, t, ...e) {
                e.forEach(f => t.appendChild(f)),
                d && d.appendChild(t)
            },
            RadioButton(t) {
                t.section &&= t.section.replace(/\:/g, '\\:'),
                t.a || (t.a = null),
                t.b || (t.b = null),
                t.type || (t.type = null),
                t.translatePath || (t.translatePath = 'error');
                t.changeCallback || (t.changeCallback = () => {});
                let d = Documentation.Element.querySelector(`#${t.section}`),
                    n = null,
                    a = null,
                    l = null;
                n = P.Create('div', {
                    'data-checked': t.a === t.b,
                    'class': [
                        'my-1',
                        'py-1',
                        'pl-3',
                        'rounded',
                        'hover:bg-[var(--secondary-container)]',
                        'flex',
                        'items-center',
                        'opacity-50',
                        'hover:opacity-100',
                        `data-[checked=true]:opacity-100`,
                        'blur-[0.7px]',
                        'hover:blur-none',
                        `data-[checked=true]:blur-none`,
                        'transition-all',
                        'duration-300',
                        'cursor-pointer']
                }),
                a = P.Create('input', {
                    id: `${t.section.replace(/\\/g, '')}:${t.a}`,
                    type: 'radio',
                    name: t.dependence,
                    value: t.a,
                    'class': [
                        `peer/${t.a}`,
                        'w-3',
                        'h-3',
                        'rounded-xl',
                        'relative',
                        'grayscale',
                        'cursor-[inherit]',
                        'appearance-none',
                        'checked:bg-[var(--on-secondary-container)]',
                        'checked:opacity-100',
                        'checked:blur-none',
                        'before:content-[""]',
                        'before:-inset-1',
                        'before:rounded-xl',
                        'before:border-2',
                        'before:border-[var(--on-secondary-container)]',
                        'before:absolute']
                }),
                (t.a === t.b && a.setAttribute('checked', true)),
                l = P.Create('label', {
                    text: Translate.Path(t.translatePath),
                    for: `${t.section}:${t.a}`,
                    'class': [
                        'pl-3',
                        'w-full',
                        `peer-checked/${t.a}:opacity-100`,
                        `peer-checked/${t.a}:blur-none`,
                        'cursor-[inherit]']
                }),
                (a.addEventListener('change', e => (
                    t.changeCallback(e),
                    d.querySelectorAll('div').forEach(t =>
                        t === e.target.parentElement || delete t.dataset.checked),
                    n.dataset.checked = e.target.checked))),
                (l.addEventListener('click', () => a.click())),
                P.Include(d, n, a, l)
            },
            ToggleButton(t) {
                t.section &&= t.section.replace(/\:/g, '\\:'),
                t.label || (t.label = Translate.Path('error')),
                t.state || (t.state = false);
                t.dependence || (t.dependence = null), 
                t.changeCallback || (t.changeCallback = () => {});
                let d = Documentation.Element.querySelector(`#${t.section}`),
                    n = null,
                    a = null,
                    l = null;
                n = P.Create('div', {
                    'data-checked': t.state,
                    'class': [
                        'my-1',
                        'py-1',
                        'pl-3',
                        'rounded',
                        'hover:bg-[var(--secondary-container)]',
                        'flex',
                        'items-center',
                        'opacity-50',
                        'hover:opacity-100',
                        `data-[checked=true]:opacity-100`,
                        'blur-[0.7px]',
                        'hover:blur-none',
                        `data-[checked=true]:blur-none`,
                        'transition-all',
                        'duration-300',
                        'cursor-pointer']
                }),
                a = P.Create('input', {
                    id: `${t.section.replace(/\\/g, '')}:${t.dependence}`,
                    type: 'checkbox',
                    name: t.dependence,
                    'class': [
                        `peer/${t.a}`,
                        'w-[calc(1.5rem+1px)]',
                        'h-3',
                        'relative',
                        'grayscale',
                        'cursor-[inherit]',
                        'appearance-none',
                        'checked:opacity-100',
                        'checked:blur-none',
                        'before:content-[""]',
                        'before:-inset-1',
                        'before:rounded-xl',
                        'before:border-2',
                        'before:border-[var(--on-secondary-container)]',
                        'before:absolute',
                        'after:block',
                        'after:content-[""]',
                        'after:mx-auto',
                        'after:w-3',
                        'after:h-3',
                        'after:rounded-xl',
                        'after:bg-[var(--on-secondary-container)]',
                        'after:[&:not(:checked)]:-translate-x-2/4',
                        'after:checked:translate-x-2/4',
                        'after:transition-all',
                        'after:ease-out']
                }),
                (t.state && a.setAttribute('checked', true)),
                l = P.Create('label', {
                    text: t.label,
                    for: `${t.section}:${t.a}`,
                    'class': [
                        'pl-3',
                        'w-full',
                        `peer-checked/${t.a}:opacity-100`,
                        `peer-checked/${t.a}:blur-none`,
                        'truncate',
                        'cursor-[inherit]']
                }),
                (a.addEventListener('click', e => (
                    t.changeCallback(e),
                    n.dataset.checked = e.target.checked))),
                (l.addEventListener('click', () => a.click())),
                P.Include(d, n, a, l)
            }
        };
    Object.entries({
        auto: 'theme/auto',
        light: 'theme/light',
        dark: 'theme/dark'
    }).forEach(([n, t]) =>
        P.RadioButton({
            section: 'p\:theme',
            a: n,
            b: Documentation.Data.theme || 'auto',
            dependence: 'theme',
            translatePath: t,
            changeCallback: e => Documentation.Data.theme = e.target.value,
        })),
    Translate.Languages.forEach(t =>
        P.RadioButton({
            section: 'p\:lang',
            a: t,
            b: document.documentElement.lang,
            dependence: 'lang',
            translatePath: `language/${t}`,
            changeCallback: e => Translate.Language = e.target.value,
        })),
    Object.entries({
        seasonal: {
            name: Translate.Path('experimental/seasonal'),
            toggle: d => Documentation.Data.seasonal = d
        }
    }).forEach(([n, t]) =>
        P.ToggleButton({
            section: 'p\:exp',
            dependence: n,
            label: t.name,
            state: Documentation.Data.seasonal || false,
            changeCallback: e => t.toggle(e.target.checked)
        }))
})();