import Article from '../components/Article.tsx'
import Div from '../components/Div.tsx'
import Footer from '../components/Footer.tsx'
import VerticalMenu from '../components/VerticalMenu.tsx'

const SubCaption = Div

export default function() {
    return (
        <div id=':app' class='m-auto max-w-screen-sm h-screen border-0 border-x border-[var(--outline)] disable'>
            <div id=':menu' class='h-full grid transition-all duration-[375ms]'>
                <VerticalMenu />
                <Article class='p-[0.5rem_1rem] pb-24 block col-[2] row-[1/4]
                    prose prose-sm prose-invert prose-blockquote:my-5' />
                <div class='inset-x-0 bottom-0 fixed grid grid-cols-[1fr_640px_1fr] pointer-events-none'>
                    <div id=':fixed' class='col-[2] grid transition-all duration-[375ms]'>
                        <Footer id='status' class='col-[1] row-[2/4] transition-all duration-[275ms]'
                            title='Blrsome' alt='since 2022 ⋯ soyne' />
                        <SubCaption id='sub'
                            class='relative grid sm:col-[1/3] md:col-[2] row-[3/4]'>
                                <span id='sub:content'
                                    class={`px-3 inset-x-0 -bottom-[1px] w-full h-0
                                        border-0 border-t border-[var(--outline-variant)]
                                        text-[var(--on-secondary-container)] bg-[var(--secondary-container)]
                                        absolute text-sm truncate transition-all backdrop-blur-sm select-none`}>
                                </span>
                        </SubCaption>
                    </div>
                </div>
            </div>
        </div>
    )
}