import { useState,useEffect } from 'react'
import { Tab } from '@headlessui/react'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function MembershipTabs() {
  const [selectedCategory, setSelectedCategory] = useState('BLUE');
  const [selectedMembership, setSelectedMembership] = useState();
  const [type, setType] = useState({});

  useEffect(() => {
    console.log("selectedMembership: ", selectedMembership)
  },[selectedMembership])

  const [categories] = useState({
    BLUE: [
      {
        id: 'Blue-Basic',
        title: 'Access one gym and amenities only',
        price: '$19.9',
        term: "per week",
        starting: '4 weeks at least',
      },
      {
        id: 'Blue-Premium',
        title: 'Access one gym and amenities with training classes',
        price: '$22.9',
        term: "per week",
        starting: '4 weeks at least',
      }
    ],
    PLATINUM: [
      {
        id: 'Platnum-Basic',
        title: 'Access three gyms and amenities only',
        price: '$22.9',
        term: "per week",
        starting: '4 weeks at least',
      },
      {
        id: 'Platnum-Premium',
        title: 'Access to statewide gyms and amenities with training classes',
        price: '$26.9',
        term: "per week",
        starting: '4 weeks at least',
      },
    ],
    'PLATINUM PLUS': [
      {
        id: 'Plus-Basic',
        title: 'Access to nationwide gyms and amenities',
        price: '$30.9',
        term: "per week",
        starting: '4 weeks at least',
      },
      {
        id: 'Plus-Ultimate',
        title: 'Access to nationwide gyms, amenities with training classes',
        price: '33.9',
        term: "per week",
        starting: '4 weeks at least',
      },
    ],
  })

  const handleCategoryClick = (category, index) => {
    setSelectedCategory(category)
    const selecetedType = categories[category][index];
    setType(selecetedType);
  }

  const handleMembershipClick = (membership) => {
    setSelectedMembership(membership)
    console.log(membership)
    console.log(membership.title)
    console.log(membership.price)
  }

  return (
    <div className='flex flex-row justify-betwen'>
      <div className='flex flex-col mx-10 flex-shrink-0'>
        <div className="flex flex-col max-w-xl px-1 py-8 sm:px-0">
          <Tab.Group defaultIndex={1}>
            <Tab.List className="flex space-x-1 h-24 w-xl rounded-xl bg-blue-900/20 p-1">
              {Object.keys(categories).map((category, index) => (
                <Tab
                  key={index}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-2xl font-medium leading-5',
                      'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white text-blue-700 shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                  }
                  onClick={(index) => handleCategoryClick(category, index)}
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.entries(categories).map(([category, memberships], idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'rounded-xl bg-white p-3',
                    'ring-white/60 ring-offset-2 h-80 ring-offset-blue-400 focus:outline-none focus:ring-2'
                  )}
                >
                  <ul>
                    {memberships.map((membership) => (
                      <li
                        key={membership.id}
                        className="relative text-gray-700 rounded-md p-3 hover:bg-gray-100"
                        onClick={() => handleMembershipClick(membership)}
                      >
                        <h3 className="lg:text-2xl md:text-3xl sm:text-xl font-medium leading-8 mt-5">
                          {membership.title}
                        </h3>

                        <ul className="mt-1 flex flex-wraps items-center space-x-1 text-base font-normal leading-4 text-gray-500">
                          <li className='lg:text-2xl md:text-lg sm:text-lg text-cyan-400 mx-6 mt-5'>AUD {membership.price}</li>
                          <li className='lg:text-2xl md:text-lg sm:text-lg mt-5 mx-6'>&middot;</li>
                          <li className='lg:text-2xl md:text-lg sm:text-lg mt-5 mx-6'>{membership.term}</li>
                          <li className='lg:text-2xl md:text-lg sm:text-lg mt-5 mx-6'>&middot;</li>
                          <li className='lg:text-2xl md:text-lg sm:text-lg mt-5 mx-6'>{membership.starting} </li>
                        </ul>

                        <a
                          href='#'
                          className={classNames(
                            'absolute inset-0 rounded-md',
                            'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                          )}
                        />
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      <div className='flex flex-col mx-20  flex-shrink-0'>
        <div className="hidden sm:flex max-w-lg flex-col px-5 py-8 mx-2 sm:px-0">
            <div 
              className="w-full rounded-2xl bg-white p-6 text-left">
              <p
                as="h3"
                className="text-2xl text-center font-medium leading-6 text-gray-900"
              >
                SUMMARY  
              </p>
              <div className="mt-2">
                <p className="text-xl text-gray-500">
                  Your have submitted a join form, we will contact you soon.
                  Please choose a membership now.
                </p>
                <p className='mt-2 text-xl text-gray-700'>Type: {selectedCategory}</p>
                {selectedMembership && (<ul>
                  <li className='mt-2 text-xl text-gray-700'>Level:  {selectedMembership.id}</li>
                  <li className='mt-2 text-xl text-blue-400'>Price:  {selectedMembership.price}</li>
                  <li className='mt-2 text-xl text-gray-700'>Detail: {selectedMembership.title}</li>
                  <li className='mt-2 text-xl text-gray-700'>Term: {selectedMembership.term}</li>
                  <li className='mt-2 text-xl text-gray-700'>Starting: {selectedMembership.starting}</li>
                </ul>)
                }
              </div>
              <div className="flex flex-row mt-4">
                <Link href='/payment'>
                  <button
                    type="button"
                    className="inline-flex justify-between rounded-md border border-transparent 
                      bg-blue-100 px-4 py-2 mx-auto text-xl font-medium text-blue-900 hover:bg-blue-200 
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Go and Pay
                  </button>
                </Link>
                <Link 
                  className='mx-auto'
                  href='/'>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent 
                      bg-blue-100 px-4 py-2 text-xl font-medium text-blue-900 hover:bg-blue-200 
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Cancel
                  </button>
                </Link>
              </div>
              </div>
        </div>
      </div>
    </div>
  )
}
