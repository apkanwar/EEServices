import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import styles from '@/styles/customText.module.css'

export default function Inputs_Select(props) {
    const [selected, setSelected] = useState(props.content[0])

    return (
        <div className="flex flex-col gap-1 items-start">
            <label htmlFor={props.id} className={styles.labels}>
                {props.label}
            </label>
            <input readOnly className='hidden' name={props.id} id={props.id} value={selected.value} />

            <Listbox value={selected} onChange={setSelected}>
                <div className="relative z-10">

                    <Listbox.Button className={`relative cursor-default ring-1 ring-inset ring-gray-300 rounded-lg bg-white py-2 pl-3 pr-10 text-left focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm w-48`}>
                        <span className="block truncate">{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>

                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className={"absolute w-48 mt-1 max-h-60 overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm w-" + props.spacing}>
                            {props.content.map((person, personIdx) => (
                                <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pr-10 pl-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={person}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                                {person.name}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-amber-600">
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}
