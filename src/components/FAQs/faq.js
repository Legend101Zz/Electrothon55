import React from 'react'
import './faq.css';
export default function faq() {
    const FaqArray = [
        {
            title: 'What is Electrothon?',
            content: 'Electrothon is a national level hackathon where you come with an idea and leave with a community. It is a platform to develop cool projects and showcase them to internationally acclaimed Tech-Speakers and Judges. Above all, you leave with quirky T-Shirts and coolest stickers :)'
        },
        {
            title: 'Do I need to have some specific qualifications to be a participant for the Electrothon?',
            content: 'Yes, you must be a student from any designated University/College.'
        },
        {
            title: ' Do I need experience?',
            content: ' No, you do not require any prior experience in development. We will provide you with mentors to help you figure out things. Of course, a will to think, learn, and collaborate will be cherry on the cake.'
        },
        {
            title: 'Do I need to present physically?',
            content: 'No, the complete hackathon is virtual, join our discord channel to stay updated.'
        },
        {
            title: ' What kind of solutions will be accepted?',
            content: 'You can propose solutions based on the themes mentioned in the project category. Technology does not matter.'
        },
        {
            title: 'Can a college have multiple teams?',
            content: 'Yes, there is no restriction here. We also welcome inter-college teams.'
        },
        {
            title: 'Who owns my project?',
            content: 'The team that develops the project is the owner of the project. We do encourage sharing of code with others in the community or making code open source but it is not mandatory.'
        },
        {
            title: 'What are the selection criteria?',
            content: 'Evaluation criteria will include novelty of the idea, complexity, clarity and details in the prescribed format, feasibility, practicability, sustainability, scale of impact, user experience and potential for future prospects.'
        },
        {
            title: 'What do I get from the event?',
            content: 'The winners will be awarded prizes worth 30k. The short-listed participants will get certificates, schwags and a platform to showcase their talents. There will be special prizes for the best hack built on the APIs and SDKs of the partner companies.'
        },
        {
            title: 'What is the goal of the Electrothon?',
            content: ' We want to create an environment that embraces new ideas and technology solutions at the industry level. A place where technology designers and developers can come to help real life problems which can be solved through engineering. We know it takes longer than a weekend tobuild great solutions, but this is ample time to form teams of good people and begin creatinggreat solutions.'
        },
        {
            title: 'How does Electrothon promote diversity?',
            content: 'To promote active participation of females, we encourage female participation via targeted events/workshops. Also, we strictly follow our code of conduct to make a welcoming, safe and comfortable environment for everyone. To ensure this, we have separate prizes worth 10k for the best female-only team.'
        },
        {
            title: 'Do we need to apply in teams?',
            content: 'Yes, the hackathon requires you to register in a team of a minimum of 2 and a maximum of 4 participants.'
        },
        {
            title: 'Are there any sponsored challenges and API prizes?',
            content: 'Yes, the hackathon requires you to register in a team of a minimum of 2 and a maximum of 4 participants.'
        },
        {
            title: 'Do we need to apply in teams?',
            content: "There will be API prizes from multiple sponsors to build a hack on top of their APIs or SDKs. Keep an eye out on the website and social media handles, where we'll be adding more ideas to hack on closer to the event. Teams are free to pick from them as well."
        },
        {
            title: ' What if I have more queries?',
            content: 'You can reach out to us any time at spec@nith.ac.in as well as our social media platforms'
        },
    ]
    const FaqTab = (props) => {
        return (
            <div className="border-b faqs-tab">
                <div className="border-l-2 border-transparent relative">
                    <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
                    <header className="flex justify-between items-center pt-5 pb-3 px-8 cursor-pointer select-none faqs-tab-label" for="chck1">
                        <span className="text-grey-darkest font-thin text-xl">
                            {props.props.title}
                        </span>
                        <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center faqs-test">

                            <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <polyline points="6 9 12 15 18 9">
                                </polyline>
                            </svg>
                        </div>
                    </header>
                    <div className="faqs-tab-content">
                        <div className=" pb-5 text-grey-darkest">
                            <p className="mx-8">{props.props.content}</p>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>


            <div className="w-3/5 p-8 mx-auto">
                <section className="shadow row">
                    <div className="faqs-tabs">
                        {FaqArray.map((props) => {
                            return (
                                <FaqTab props={props} />
                            )
                        })}



                    </div>
                </section>
            </div>
        </div>
    )
}
