!(function () {
    Documentation.Edit = !0;
    function create(n, t) {
        const e = document.createElement(n);
        t.text && (e.textContent = t.text, delete t.text),
        Object.entries(t).forEach(([p, d]) => e.setAttribute(p, Array.isArray(d) ? d.join(' ') : d));
        return e
    }
    function include(d, t, ...e) {
        e.forEach(f => t.appendChild(f)),
        d && d.appendChild(t)
    }
    function radioButton(t) {
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
        n = create('div', {
            'class': [
                'my-1',
                'py-1',
                'pl-3',
                'rounded',
                'flex',
                'items-center',
                'hover:bg-[var(--secondary-container)]',
                'cursor-pointer']
        }),
        a = create('input', {
            id: `${t.section.replace(/\\/g, '')}:${t.a}`,
            type: 'radio',
            name: t.dependence,
            value: t.a,
            'class': [
                `peer/${t.a}`,
                'w-3',
                'h-3',
                'rounded-xl',
                'outline-2',
                'outline-[var(--on-secondary-container)]',
                'outline-offset-2',
                'checked:bg-[var(--on-secondary-container)]',
                'opacity-50',
                'hover:opacity-100',
                'checked:opacity-100',
                'blur-[0.7px]',
                'hover:blur-none',
                'checked:blur-none',
                'grayscale',
                'transition-all',
                'duration-300',
                'cursor-[inherit]',
                'appearance-none']
        }),
        (t.a === t.b && a.setAttribute('checked', true)),
        l = create('label', {
            text: Translate.Path(t.translatePath),
            for: `${t.section}:${t.a}`,
            'class': [
                'pl-3',
                'w-full',
                'opacity-50',
                `peer-hover/${t.a}:opacity-100`,
                `peer-checked/${t.a}:opacity-100`,
                'blur-[1px]',
                'hover:blur-none',
                `peer-checked/${t.a}:blur-none`,
                'transition-all',
                'duration-300',
                'cursor-[inherit]']
        }),
        (a.addEventListener('change', t.changeCallback)),
        (l.addEventListener('click', () => a.click())),
        include(d, n, a, l)
    }
    function toggleButton(t) {
        t.section &&= t.section.replace(/\:/g, '\\:'),
        t.label || (t.label = Translate.Path('error')),
        t.state || (t.state = false);
        t.dependence || (t.dependence = null), 
        t.changeCallback || (t.changeCallback = () => {});
        let d = Documentation.Element.querySelector(`#${t.section}`),
            n = null,
            a = null,
            l = null;
        n = create('div', {
            'class': [
                'my-1',
                'py-1',
                'pl-3',
                'rounded',
                'flex',
                'items-center',
                'hover:bg-[var(--secondary-container)]',
                'cursor-pointer']
        }),
        a = create('input', {
            id: `${t.section.replace(/\\/g, '')}:${t.dependence}`,
            type: 'checkbox',
            name: t.dependence,
            checked: t.state,
            'class': [
                `peer/${t.a}`,
                'w-6',
                'h-3',
                'rounded-xl',
                'outline-2',
                'outline-[var(--on-secondary-container)]',
                'outline-offset-2',
                'checked:bg-[var(--on-secondary-container)]',
                'opacity-50',
                'hover:opacity-100',
                'checked:opacity-100',
                'blur-[0.7px]',
                'hover:blur-none',
                'checked:blur-none',
                'grayscale',
                'transition-all',
                'duration-300',
                'cursor-[inherit]',
                'appearance-none']
        }),
        l = create('label', {
            text: t.label,
            for: `${t.section}:${t.a}`,
            'class': [
                'pl-3',
                'w-full',
                'opacity-50',
                `peer-hover/${t.a}:opacity-100`,
                `peer-checked/${t.a}:opacity-100`,
                'blur-[1px]',
                'hover:blur-none',
                `peer-checked/${t.a}:blur-none`,
                'truncate',
                'transition-all',
                'duration-300',
                'cursor-[inherit]']
        }),
        (a.addEventListener('click', t.changeCallback)),
        (l.addEventListener('click', () => a.click())),
        include(d, n, a, l)
    }
    Object.entries({
        auto: 'theme/auto',
        light: 'theme/light',
        dark: 'theme/dark'
    }).forEach(([n, t]) =>
        radioButton({
            section: 'p\:theme',
            a: n,
            b: self.localStorage.getItem('theme') || 'auto',
            dependence: 'theme',
            translatePath: t,
            changeCallback: e => self.localStorage.setItem('theme', e.target.value),
        })),
    Translate.Languages.forEach(t =>
        radioButton({
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
            toggle(value) {
                console.log(value)
            }
        }
    }).forEach(([n, t]) =>
        toggleButton({
            section: 'p\:exp',
            dependence: n,
            label: t.name,
            state: false,
            changeCallback: e => t.toggle(e.target.checked)
        }))
})();