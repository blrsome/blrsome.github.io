!(function () {
    Documentation.Edit = !0;
    const e = document.documentElement.lang;
    (i1 = Documentation.Element.querySelector('#q-1')),
    Translate.Languages.forEach((t) => {
        const n = document.createElement('div'),
            a = document.createElement('input'),
            l = document.createElement('label');
        n.classList.add('flex', 'items-center'),
        (a.id = `q-1:${t}`),
        (a.type = 'radio'),
        (a.name = 'lng'),
        (a.value = t),
        (a.checked = t === e),
        a.classList.add(
            `peer/${t}`,
            'ml-3',
            'w-3',
            'h-3',
            'rounded-xl',
            'outline-2',
            'outline-[var(--secondary-container)]',
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
            'appearance-none'),
        (a.addEventListener('change', e => Translate.Language = e.target.value)),
        l.setAttribute('for', `q-1:${t}`),
        l.classList.add(
            'pl-2',
            'w-full',
            'opacity-50',
            `peer-hover/${t}:opacity-100`,
            `peer-checked/${t}:opacity-100`,
            'blur-[1px]',
            'hover:blur-none',
            `peer-checked/${t}:blur-none`,
            'transition-all',
            'duration-300'),
        (l.textContent = Translate.Path(`language/${t}`)),
        n.appendChild(a),
        n.appendChild(l),
        i1.appendChild(n);
    });
})();