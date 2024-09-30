import CheckboxInput from "./inputs/checkbox";
import InputField from "./inputs/htmlInputs";
import saveToFireBase from "@/pages/api/saveToFirebase";

export default function StaffingForm() {
    const GeneralInfoInputs = [
        { name: 'company', type: 'text', placeholder: 'Company Name', required: 'Please Enter your Company Name' },
        { name: 'website', type: 'url', placeholder: 'Company Website', required: 'Please Enter your Company Website' },
        { name: 'firstName', type: 'text', placeholder: 'First Name', required: 'Please Enter your First Name' },
        { name: 'lastName', type: 'text', placeholder: 'Last Name', required: 'Please Enter your Last Name' },
        { name: 'email', type: 'email', placeholder: 'Email Address', required: 'Please Enter a Valid Email Address' },
        { name: 'phoneNumber', type: 'tel', placeholder: 'Phone Number', pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}', required: 'The Format should be 123-456-7890' }
    ];

    const AdditonalInfoInputs = [
        { name: 'address', type: 'text', placeholder: 'Company Address' },
    ];

    const PositionInputs = [
        { title: 'General Labour', id: 'GeneralLabour' },
        { title: 'Machine Operator', id: 'MachineOperator' },
        { title: 'Office', id: 'Office' },
        { title: 'Managerial', id: 'Managerial' },
        { title: 'Forklift', id: 'Forklift' },
        { title: 'Driver', id: 'Driver' },
        { title: 'Tech', id: 'Tech' },
        { title: 'Other', id: 'Other' }
    ];

    const Availability = [
        { title: 'Part-Time', id: 'PartTime' },
        { title: 'Full-Time', id: 'FullTime' },
        { title: 'Weekends', id: 'Weekends' }
    ];

    const PerferedShifts = [
        { title: 'Morning', id: 'Morning' },
        { title: 'Afternoon', id: 'Afternoon' },
        { title: 'Night', id: 'Night' }
    ];

    async function storeStaffingRequest(e) {
        e.preventDefault();
        const formData = {
            company: e.target.company.value,
            website: e.target.website.value,
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            phoneNumber: e.target.phoneNumber.value,
            address: e.target.address.value,
            Positions: PositionInputs
                .filter((position) => e.target[position.id].checked)
                .map((position) => position.title)
                .join(', '),
            Availability: Availability
                .filter((availability) => e.target[availability.id].checked)
                .map((availability) => availability.title)
                .join(', '),
            Shifts: PerferedShifts
                .filter((shift) => e.target[shift.id].checked)
                .map((shift) => shift.title)
                .join(', '),
        };
        console.log(formData)

        try {
            await saveToFireBase(formData, 'staffingRequests');
            console.log("Data successfully saved to Firestore.");
        } catch (error) {
            console.error("Failed to save data: ", error.message);
        }
    }


    return (
        <div className="py-24">
            <section className="mx-4 xl:mx-auto max-w-5xl flex flex-col bg-white rounded-lg p-20">
                <form autoComplete="off" className="font-dText" onSubmit={storeStaffingRequest}>
                    <div className="flex flex-col">
                        <h2 className="font-medium text-2xl font-headings mb-4">
                            General Information
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {GeneralInfoInputs.map((info, index) => (
                                <section key={index}>
                                    <InputField
                                        name={info.name}
                                        type={info.type}
                                        placeholder={info.placeholder}
                                        pattern={info.pattern}
                                        required={info.required}
                                    />
                                </section>
                            ))}

                            <div className="grid grid-cols-subgrid gap-4 col-span-2">
                                <InputField
                                    name={AdditonalInfoInputs[0].name}
                                    type={AdditonalInfoInputs[0].type}
                                    placeholder={AdditonalInfoInputs[0].placeholder}
                                    pattern={AdditonalInfoInputs[0].pattern}
                                    required={AdditonalInfoInputs[0].required}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h2 className="font-medium text-2xl font-headings mt-12 mb-4">
                            Additonal Information
                        </h2>
                        <div className="grid grid-cols gap-4">
                            <CheckboxInput inputs={PositionInputs} title="What Positions Are You Looking For?" size="2" />
                            <CheckboxInput inputs={Availability} title="Position Type" size="3" />
                            <CheckboxInput inputs={PerferedShifts} title="Perfered Shift" size="3" />
                        </div>
                    </div>

                    <div className="mt-10">
                        <button type="submit" className="bg-plum text-white rounded-full py-1 px-6 hover:bg-opacity-80 transition-opacity duration-300 text-lg font-medium font-headings w-fit">
                            Sumbit
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}