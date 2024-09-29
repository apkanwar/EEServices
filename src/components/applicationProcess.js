import GridContainer from './gridContainer';
import { MagnifyingGlassIcon, ClipboardDocumentListIcon, InboxArrowDownIcon, ChartBarSquareIcon, UsersIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';

export default function ApplicationProcess() {
    const applicationProcessSteps = [
        {
            "step": 1,
            "heading": "Search for jobs within your area",
            "details": "Searching through hundreds of jobs located near you across different indutries that are looking to hire.",
            "icon": <MagnifyingGlassIcon />
        },
        {
            "step": 2,
            "heading": "Match your Skills",
            "details": "Contact the businesses and pass your resume to promote you for the job that fits your skills.",
            "icon": <ClipboardDocumentListIcon />
        },
        {
            "step": 3,
            "heading": "Keep you in the Loop",
            "details": "If a company has chosen to move forward with you as a leading candidate, we will ley you know what your next steps would be.",
            "icon": <InboxArrowDownIcon />
        },
        {
            "step": 4,
            "heading": "Assess Your Options",
            "details": "You can have the time to look over your options to see if our algorithm has matched you to a desired work environment.",
            "icon": <ChartBarSquareIcon />
        },
        {
            "step": 5,
            "heading": "Set up the Interview",
            "details": "After you've chosen the jobs to pursue, we invite you to an interview/online assessment.",
            "icon": <UsersIcon />
        },
        {
            "step": 6,
            "heading": "Getting Hired",
            "details": "After the interview process, the company will let us know if they want to move forward and we set up the paperwork to put the next steps in motion.",
            "icon": <ArrowRightCircleIcon />
        },
    ];

    return (
        <div className="bg-white flex flex-col items-center justify-center py-20">
            <div className="max-w-7xl pt-20 pb-12 items-center flex flex-col">
                <h1 className="font-dText text-3xl font-bold uppercase text-center mb-6">How Our Process Works</h1>
                <h2 className="font-dText text-xl font-bold text-center">Finding work is <span className='text-plum'>work</span>. Let us <span className='text-plum'>focus on that</span> for you.</h2>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 gap-y-16 max-w-7xl mx-4'>
                {applicationProcessSteps.map(({ step, heading, details, icon }) => (
                    <GridContainer key={step} heading={heading} details={details} icon={icon} />
                ))}
            </div>
        </div>
    )
}