import Article from '../components/Article.tsx'
import Div from '../components/Div.tsx'
import Footer from '../components/Footer.tsx'
import VerticalMenu from '../components/VerticalMenu.tsx'

const SubCaption = Div

export default function() {
    return (
        <div id=':app' class='m-auto max-w-screen-sm h-screen disable'>
            <div id=':menu' class='h-full grid drop-shadow-lg transition-all duration-[375ms]'>
                <VerticalMenu />
                <Article class='p-[0.5rem_1rem] pb-24 block col-[2] row-[1/4] prose prose-sm prose-invert prose-blockquote:my-5' />
            </div>
            <div class='inset-x-0 bottom-0 fixed grid grid-cols-[1fr_640px_1fr] pointer-events-none'>
                <div id=':fixed' class='col-[2] grid transition-all duration-[375ms]'>
                    <Footer id='status' class='col-[1] row-[2/4] transition-all duration-[275ms]'
                        title='Blrsome' alt='since 2022' />
                    <SubCaption id='sub'
                        class='relative grid sm:col-[1/3] md:col-[2] row-[3/4]'>
                            <span id='sub:content'
                                class='px-3 inset-x-0 -bottom-[1px] w-full h-0 rounded-t text-[var(--on-tertiary-container)] bg-[var(--tertiary-container)] absolute text-sm truncate transition-all supports-[backdrop-filter]:backdrop-blur-sm select-none'>
                            </span>
                    </SubCaption>
                </div>
            </div>
        </div>
    )
}