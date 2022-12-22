import Article from '../components/Article.tsx'
import Footer from '../components/Footer.tsx'
import VerticalMenu from '../components/VerticalMenu.tsx'

export default function() {
    return (
        <div id=':app' class='m-auto max-w-screen-sm h-screen disable'>
            <div id=':menu' class='h-full grid drop-shadow-lg transition-all duration-[375ms]'>
                <VerticalMenu />
                <Article class='p-[0.5rem_1rem] pb-24 block col-[2] row-[1/4] prose prose-sm prose-invert prose-blockquote:my-5' />
                <div class='col-[2] row-[1/4] pointer-events-none z-[16383]'>
                    <div id='effect:snow' class='w-full h-full opacity-0 transition-all duration-[1200ms] transform-gpu'></div>
                </div>
            </div>
            <div class='inset-x-0 bottom-0 fixed grid grid-cols-[1fr_640px_1fr] pointer-events-none'>
                <div id=':fixed' class='col-[2] grid transition-all duration-[375ms]'>
                    <Footer class='text-xs col-[1] row-[2/4] transition-all duration-[275ms] backdrop-blur-sm'>
                        <span id='sub' class='px-3 inset-x-0 -bottom-[1px] max-w-full h-0 rounded-t text-[var(--on-tertiary-container)] bg-[var(--tertiary-container)] absolute text-sm truncate transition-all supports-[backdrop-filter]:backdrop-blur-sm select-none'></span>
                    </Footer>
                </div>
            </div>
        </div>
    )
}