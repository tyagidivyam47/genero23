import React from 'react'
import './FAQ.css'
function FAQ() {
    return (
        <div id="queries" className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}><div class="container text-black">

            <h1>Frequently asked Questions</h1>

            <div class="faq-drawer">
                <input class="faq-drawer__trigger" id="faq-drawer" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer">What is the theme of the college fest?</label>
                <div class="faq-drawer__content-wrapper">
                    <div class="faq-drawer__content">
                        <p>
                            The theme of genero'23 is India's  Hidden Hues. It represents different type of cultures, traditions and people of india.
                        </p>
                    </div>
                </div>
            </div>

            <div class="faq-drawer">
                <input class="faq-drawer__trigger" id="faq-drawer-2" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-2">Can students from other colleges also participate in the events?</label>
                <div class="faq-drawer__content-wrapper">
                    <div class="faq-drawer__content">
                        <p>
                        Yes, students from other colleges can participate in genero'23.  </p>
                    </div>
                </div>
            </div>

            <div class="faq-drawer">
                <input class="faq-drawer__trigger" id="faq-drawer-3" type="checkbox" /><label class="faq-drawer__title" for="faq-drawer-3">What is the date and location of the college fest?
</label>
                <div class="faq-drawer__content-wrapper">
                    <div class="faq-drawer__content">
                        <p>
                        The location of the college fest is ABES Engineering college campus. Keep the excitement high, we will announce the dates soon. We recommend checking the college's website or social media pages for updates.
                        </p>
                    </div>
                </div>
            </div>

        </div></div>
    )
}

export default FAQ