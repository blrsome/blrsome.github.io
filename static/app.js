!function(lng) {
    const subQueue = []
    let blv1 = null,
        post = null,
        trsl = null
    tailwind.config = {
        theme: {
            screens: {
                sm: { max: '576px' },
                md: { min: '577px' },
            }
        }
    }
    function move(t, a) {
        const u = new URL(/^http(s)?:(\/{2})?/.test(t) ? t : `blr:${/^(\/|\\)/.test(t) ? t.replace(/\\/g, '/') : `/${t}`}`)
        location.pathname === u.pathname &&
            a.caption && a.element &&
                setSub(a.caption, a.element, 'sameUrl')
        typeof history.pushState === 'undefined'
        ? (location.href = u.href)
        : /^http(s)?:(\/{2})?/.test(u.href)
        ? window.open(u.href, '_blank').focus()
        : history.pushState(null, u.pathname, u.pathname)
    }
    function scriptsInject() {
        const docModule = '__DOCUMENT_MODULE'
        document.querySelectorAll(`#${docModule}`).forEach(t => t.remove())
        document.querySelectorAll('article script').forEach(async s => {
            const l = s.getAttribute('src'),
                d = await (await fetch(l)).text()
                e = document.createElement('script')
            e.id = docModule
            e.type = 'application/javascript'
            e.innerText = d
            document.body.appendChild(e)
        })
    }
    function setSub(t, a, q = 'caption') {
        subQueue.push({
            b: t,
            c: q,
            e: a,
            d: Object.assign({}, a.dataset)})
    }
    !function runCaption(d) {
        let isRunning = false
        setInterval(async () => (
            0 < subQueue.length && !isRunning && (
                isRunning = true,
                await new Promise(t => setTimeout(t, d)),
                run(subQueue.shift()))
        ), 75)
        function run(t) {
            function clear(t) {
                subCurrent = null
                isRunning = false
                t && clearInterval(t)
            }
            !t ? clear() : (
                subCurrent = t,
                t.d.duration ??= 3800,
                t.b.classList.add('h-6'),
                t.b.classList.add('bottom-0'),
                t.b.innerText = t.d[t.c] || tr('same/url'),
                t.e.dataset.count = parseInt(t.e.dataset.count) + 1 || 1,
                setTimeout(() => {
                    t.b.classList.remove('h-6')
                    const i = setInterval(() =>
                        t.b.clientHeight === 0 && (
                            t.b.innerText = '',
                            t.b.classList.remove('bottom-0'),
                            clear(i)), 10)
                }, t.d.duration)
            )
        }
    }(270)
    function setStatus(t, a) {
        const stu = document.getElementById('status'),
            title = stu && stu.querySelector('[id*=\'title\']'),
            alter = stu && stu.querySelector('[id*=\'alt\']')
        title.textContent = t || ''
        alter.textContent = a || ''
    }
    function r1() {
        return fetch('./api/r1')
    }
    function tr(t) {
        Array.isArray(t) || (t = (t.split('/') || [t]))
        function dir(p) {
            const s = t.shift() || '&',
                l = (p || trsl)[s]
            return typeof l === 'object' ? dir(l) : l
        }
        return dir() || null
    }
    function statusRoute(t, a) {
        function route(e) {
            setStatus(...(e && a[0]) || a[1] || [tr('footer/idle'), tr('footer/idleAlt')])
        }
        Array.isArray(a) && (
            t.addEventListener('mouseover', route),
            t.addEventListener('mouseout', () => route(false)))
    }
    function routePage() {
        let v = location.pathname.replace(/\//, '')
            v ||= 0
        return post[v]
    }
    document.addEventListener('DOMContentLoaded', () => (
        document.documentElement.lang = lng,
        document.body.classList.add('opacity-0')))
    self.addEventListener('load', async () => {
        const opts_sb = { thumbMinSize: 15 },
            menu = document.getElementById('\:menu'),
            sbcp = document.getElementById('sub:content')
        blv1 = await r1().then(t => t.json())
        post = blv1[lng || 'en']
        trsl = post.translate
        conf = blv1._conf
        hljs.highlightAll()
        conf.guc.enable && move('under:construction')
        !function(t) {
            t.map(t => (Scrollbar.init(t, opts_sb), t))
        }([menu.querySelector('nav'), menu.querySelector('article')])
        setInterval(() => {
            const t = document.querySelector('article>.scroll-content'),
                dpt = routePage() || { content: tr('error/notfound') },
                mkd = marked.parse(dpt.content
                    .replace(/\\br/g, '<br>')
                    .replace(/\\hr/g, '<hr>')
                    .replace(/\\b/g, '\b')
                    .replace(/\\f/g, '\f')
                    .replace(/\\n/g, '\n')
                    .replace(/\\r/g, '\r')
                    .replace(/\\t/g, '\t')
                    .replace(/\\&/g, '\&')
                    .replace(/\\"/g, '\"')
                    .replace(/\\'/g, '\''))
                    .replace(/&quot;/g, '"')
                    .replace(/<p>\s+?<code>(.*)<\/code>\s+?<\/p>/ig, '<pre class="hljs"><code class="language-plaintext">$1</code></pre>')
                    .replace(/\s{5}/g, '\n')
            t.innerHTML !== mkd && (t.innerHTML = mkd, scriptsInject())
        }, 10)
        document.querySelectorAll(`[name][href],[name][data-caption]`).forEach(t => (
            t.addEventListener('click', () => (
                t.dataset.caption && setSub(sbcp, t),
                t.getAttribute('href') && (
                    move(t.getAttribute('href'), {caption: sbcp, element: t })))),
            statusRoute(t, [[
                tr('footer/bites'),
                t.getAttribute('href') && `~${t.getAttribute('href')}`
            ]])))
        document.querySelectorAll('*').forEach(t => {
            setInterval(() => {
                const HTML = t.innerHTML
                Object.keys(
                    Object.fromEntries(Array.from(t.attributes).map(t => [t.name, t.value])))
                    .forEach(f =>
                        /^%\S+/.test(t.getAttribute(f)) && (
                            f === 'name' || (
                                t.setAttribute(f,
                                    tr(t.getAttribute(f).replace(/^%/, ''))
                                        || t.getAttribute(f)))))
                ;/^\u0025\S+/.test(HTML) && tr(HTML.replace(/^\u0025/, '')) && (
                    t.innerHTML = tr(HTML.replace(/^\u0025/, '')))
            }, 10)
        })
        !function(t, a, c) {
            t.forEach(t => document.body.classList.add(t))
            a.forEach(t => document.body.classList.remove(t))
            typeof c === 'function' && c()
        }(['transition-all', 'ease-out'], ['opacity-0'], () =>
            document.getElementById(':app').classList.remove('disable'))
    })
}(((navigator.languages && navigator.languages.length && navigator.languages[0]) || navigator.language || Intl.DateTimeFormat().resolvedOptions().locale).replace(/(\w+)-[\w]+/i, '$1'))