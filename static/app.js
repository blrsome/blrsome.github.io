!function(lng) {
    const subQueue = []
    let post = null,
        page = null,
        tale = null,
        conf = null,
        prev = null,
        undr = null
    tailwind.config = {
        theme: {
            screens: {
                sm: { max: '576px' },
                md: { min: '577px' },
            }
        }
    }
    function move(t, a) {
        t = String(t || 0)
        const u = new URL(/^http(s)?:(\/{2})?/.test(t) ? t : `blr:${/^(\/|\\)/.test(t) ? t.replace(/\\/g, '/') : `/${t}`}`),
            s = t.replace(/^\//, ''),
            r = new RegExp(location.pathname.replace(/^\//, '') || 0)
        function through(url) {
            typeof history.pushState === 'undefined'
                ? (location.href = (url || u.href))
                : /^http(s)?:(\/{2})?/.test(url || u.href)
                ? window.open(url || u.href, '_blank').focus()
                : history.pushState(null, url || u.pathname, url || u.pathname)
        }
        if (r.test(s)) {
            a && a.caption && a.element && setSub(a.caption, a.element, 'sameUrl')
            return
        } else if (conf.guc.enable && undr) {
            through(undr)
            return
        }
        through()
    }
    function setSub(t, a, q = 'caption') {
        subQueue.push({
            b: t,
            c: q,
            e: a,
            d: Object.assign({}, a.dataset)})
    }
    function scriptsInject(t) {
        function documentModule(t, b) {
            const e = document.createElement('script'),
                a = new TextEncoder('utf8').encode(t || b),
                x = btoa(String.fromCharCode(...new Uint8Array(a)))
            e.id = `__DOCUMENT_MODULE_${x.replace(/={1,2}$/, '')}`
            e.innerText = t
            document.body.appendChild(e)
        }
        t.split(';').forEach(async t => {
            const p = fetch(t),
                j = (await p).headers.get('content-type') === 'application/javascript'
            j && documentModule(await (await p).text(), t)
        })
    }
    function setStatus(t, a) {
        if (true) return
        const stu = document.getElementById('status'),
            title = stu && stu.querySelector('[id*=\'title\']'),
            alter = stu && stu.querySelector('[id*=\'alt\']')
        title.textContent = t || ''
        alter.textContent = a || ''
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
        return page[location.pathname.replace(/\//, '') || 0]
    }
    function tr(t) {
        Array.isArray(t) || (t = (t.split('/') || [t]))
        function dir(p) {
            const l = (p || tale)[t.shift() || '&']
            return typeof l === 'object' ? dir(l) : l
        }
        return dir() || null
    }
    !function(d) {
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
    document.addEventListener('DOMContentLoaded', () => (
        document.documentElement.lang = lng,
        document.body.classList.add('opacity-0')))
    self.addEventListener('load', async function init() {
        const SB = { thumbMinSize: 15 },
            menu = document.getElementById('\:menu'),
            subc = document.getElementById('sub'),
            artc = menu.querySelector('article'),
            IO = {
                Experience: {
                    Data(t, s, e) {
                        let d = null;
                        d === void 0 || (
                            d = Reflect.get(Documentation.Data, t),
                            s && s(d),
                            e && setInterval(() => (d = Reflect.get(Documentation.Data, t), e(d)), 10))
                    },
                    Season: {
                        current(callback) {
                            const date = luxon.DateTime,
                                now = date.fromISO(date.now().toISO(), {zone: 'utc'}),
                                snowStart = date.fromISO(`${now.year}-12-07T00:00:00`),
                                snowEnd = date.fromISO(`${now.year + 1}-01-22T00:00:00`),
                                rainStart = date.fromISO(`${now.year}-06-05T00:00:00`),
                                rainEnd = date.fromISO(`${now.year + 1}-07-13T00:00:00`),
                                season = snowStart < now && now < snowEnd ? 'winter'
                                    : rainStart < now && now < rainEnd && 'rainy'
                            return callback ? callback(season) : season
                        }
                    }
                },
                Scroll(t) {
                    t.map(t => (Scrollbar.init(t, SB), t))
                },
                Funcinter(t) {
                    function untilled(e) {
                        e.addEventListener('click', () => (
                            e.dataset.caption && setSub(subc, e),
                            e.getAttribute('href') && move(e.getAttribute('href'), { caption: subc, element: e })))
                    }
                    document.querySelectorAll(t.join()).forEach(t => (
                        untilled(t),
                        statusRoute(t, [[
                            tr('footer/bites'),
                            t.getAttribute('href') && `~${t.getAttribute('href')}`]])))
                },
                HighlightCode() {
                    hljs.highlightAll()
                },
                UnderConstruction(path) {
                    location.origin.includes('localhost') || (undr = path, move())
                },
                LoadedPage(t, a, c) {
                    t.forEach(t => document.body.classList.add(t))
                    a.forEach(t => document.body.classList.remove(t))
                    typeof c === 'function' && c()
                },
                WritePage(loop = true) {
                    function parse(t) {
                        return marked.parse(t
                                    .replace(/\\br/g, '<br>')
                                    .replace(/\\hr/g, '<hr>')
                                    .replace(/\\b/g, '\b')
                                    .replace(/\\f/g, '\f')
                                    .replace(/\\n/g, '\n')
                                    .replace(/\\r/g, '\r')
                                    .replace(/\\t/g, '\t')
                                    .replace(/\\&/g, '\&')
                                    .replace(/\\"/g, '\"')
                                    .replace(/\\'/g, '\'')
                                ).replace(/&quot;/g, '"')
                                .replace(/<p>\s+?<code>(.*)<\/code>\s+?<\/p>/ig, '<pre class="hljs"><code class="language-plaintext">$1</code></pre>')
                    }
                    let dpt = null,
                        mkd = null,
                        ctt = null
                    const i = setInterval(() => {
                        try {
                            dpt = routePage() || { content: tr('error/notfound') }
                            mkd = parse(dpt.content)
                        } catch {
                            mkd = parse(tr('error/notfound'))
                        } finally {
                            ctt = artc.querySelector('.scroll-content')
                            location.pathname === prev || (Documentation.Edit = false)
                            ctt.innerHTML !== mkd && artc.dataset.documentationEdit !== 'true' && (
                                prev = location.pathname,
                                ctt.innerHTML = mkd,
                                dpt.include && scriptsInject(dpt.include))
                        }
                    }, 10)
                    loop || clearInterval(i)
                },
                TranslatePage() {
                    document.querySelectorAll('*').forEach(t => {
                        setInterval(() => {
                            const HTML = t.innerHTML
                            Object.keys(Object.fromEntries(Array.from(t.attributes).map(t => [t.name, t.value]))).forEach(f =>
                                /^%\S+/.test(t.getAttribute(f)) && (f === 'name' || (
                                    t.setAttribute(f, tr(t.getAttribute(f).replace(/^%/, '')) || t.getAttribute(f)))))
                            ;/^\u0025\S+/.test(HTML) && tr(HTML.replace(/^\u0025/, '')) && (t.innerHTML = tr(HTML.replace(/^\u0025/, '')))
                        }, 10)
                    })
                },
                SetDocumentationData(data, value) {
                    artc.dataset[`documentation${data}`] = value
                },
                SetPageLanguage(lng) {
                    self.localStorage.setItem('lng', lng)
                    location.reload()
                },
            }
        post = await fetch('./api/r1').then(t => t.json())
        page = post[lng || 'en']
        tale = page.translate
        conf = post._conf
        snowfall.config = {
            container: document.querySelector('#effect\\:snow'),
            density: 150,
            wave: { amplitude: 0.3 },
            gravity: { strength: 0.15 },
            bg: 'rgba(0,0,0,0)',
            primary: 'rgba(255,255,255,0.6)',
            secondary: 'rgba(255,255,255,0.34)'
        }
        /** Window */
        self.Documentation = new Proxy({
            Data: new Proxy(JSON.parse(self.localStorage.getItem('data')) || {}, {
                get(target, prop, receiver) { return Reflect.get(target, prop, receiver) },
                set(target, prop, value, receiver) {
                    Reflect.set(target,prop, value, receiver)
                    self.localStorage.setItem('data',
                        JSON.stringify(Object.assign({}, target)))
                }
            }),
            Edit: false,
            Element: artc,
            Work: new Proxy(JSON.parse(self.localStorage.getItem('processes')) || {}, {
                get(target, prop, receiver) { return Reflect.get(target, prop, receiver) },
                set(target, prop, value, receiver) {
                    Reflect.set(target,prop, value, receiver)
                    self.localStorage.setItem('processes',
                        JSON.stringify(Object.assign({}, target)))
                },
                deleteProperty(target, prop) {
                    Reflect.deleteProperty(target, prop)
                    self.localStorage.setItem('processes',
                        JSON.stringify(Object.assign({}, target)))
                }
            }),
        }, {
            get(target, prop, receiver) { return Reflect.get(target, prop, receiver) },
            set(target, prop, value, receiver) {
                prop === 'Edit' && (
                    IO.SetDocumentationData(prop, value),
                    Reflect.set(target,prop, value, receiver))
                prop === 'Element' && Reflect.set(target,prop, value, receiver)
            },
            deleteProperty() {}
        })
        self.Translate = new Proxy({
            Default: conf.ref,
            Language: lng,
            Languages: Object.keys(post).filter(t => /^[a-z]+/i.test(t)),
            Path(query) { return tr(query) }
        }, {
            get(target, prop, receiver) { return Reflect.get(target, prop, receiver) },
            set(target, prop, value, receiver) {
                prop === 'Language' && (
                    IO.SetPageLanguage(value),
                    Reflect.set(target,prop, value, receiver))
            },
            deleteProperty() {}
        })
        /** FF */
        IO.UnderConstruction('/under:construction')
        IO.Scroll([menu.querySelector('nav'), artc])
        IO.HighlightCode()
        IO.Funcinter(['[name][href]', '[name][data-caption]'])
        IO.WritePage()
        IO.TranslatePage()
        IO.LoadedPage(
            ['transition-all', 'ease-out'],
            ['opacity-0'],
            () => document.getElementById(':app').classList.remove('disable'))
        IO.Experience.Data('theme',
            t => document.documentElement.setAttribute('theme', t),
            t => {
                const a = document.documentElement.getAttribute('theme'),
                    m = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
                    b = t === 'auto' ? m : t || m
                function whiteSnow(t) {
                    t === 'light' && (
                        snowfall.setPrimary('rgba(0,0,0,0.78)'),
                        snowfall.setSecondary('rgba(0,0,0,1)'))
                    t === 'dark' && (
                        snowfall.setPrimary(snowfall.config.primary),
                        snowfall.setSecondary(snowfall.config.secondary))
                }
                a === b || (
                    whiteSnow(b),
                    document.documentElement.setAttribute('theme', b))
            })
        IO.Experience.Season.current(s => {
            function start(t, c) {
                t ? c.container.classList.remove('opacity-0') : (
                    !c.container.children.length && snowfall.start(c),
                    c.container.classList.add('opacity-0'))
            }
            IO.Experience.Data('seasonal',
                t => t && (s === 'winter' && snowfall.start(snowfall.config)),
                t => (s = IO.Experience.Season.current(), s === 'winter' && start(t, snowfall.config)))
        })
        artc.dataset.scrollbar && (self.Documentation.Element = artc.querySelector('.scroll-content'))
    })
}(self.localStorage.getItem('lng') || ((navigator.languages && navigator.languages.length && navigator.languages[0]) || navigator.language || Intl.DateTimeFormat().resolvedOptions().locale).replace(/(\w+)-[\w]+/i, '$1'))
