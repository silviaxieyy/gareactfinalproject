import { useState, Fragment } from 'react'
import { Tab } from '@headlessui/react'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function MembershipTabs() {
  const [selectedCategory, setSelectedCategory] = useState('BLUE');
  const [type, setType] = useState({});

  const [categories] = useState({
    BLUE: [
      {
        id: 'Blue-Basic',
        title: 'Access one gym and amenities only',
        price: '$19.9',
        period: "per week",
        starting: '4 weeks at least',
      },
      {
        id: 'Blue-Premium',
        title: 'Access one gym and amenities only and all training classes',
        price: '$22.9',
        period: "per week",
        starting: '4 weeks at least',
      }
    ],
    PLATINUM: [
      {
        id: 'Platnum-Basic',
        title: 'Access three gyms and amenities only',
        price: '$22.9',
        period: "per week",
        starting: '4 weeks at least',
      },
      {
        id: 'Platnum-Premium',
        title: 'Access to statewide gyms and amenities only',
        price: '$26.9',
        period: "per week",
        starting: '4 weeks at least',
      },
    ],
    'PLATINUM PLUS': [
      {
        id: 'Plus-Basic',
        title: 'Access to nationwide gyms and amenities',
        price: '$30.9',
        period: "per week",
        starting: '4 weeks at least',
      },
      {
        id: 'Plus-Ultimate',
        title: 'Access to nationwide gyms and amenities and all traing classes',
        price: '33.9',
        period: "per week",
        starting: '4 weeks at least',
      },
    ],
  })

  const handleCategoryClick = (category, index) => {
    setSelectedCategory(category)
    const selecetedType = categories[category][index];
    setType(selecetedType);
  }

  return (
    <div className='flex flex-row justify-center'>
      <div className='flex flex-col mx-20 flex-shrink-0'>
        <div className="flex flex-col  max-w-md px-1 py-8 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              {Object.keys(categories).map((category, index) => (
                <Tab
                  key={index}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
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
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'rounded-xl bg-white p-3',
                    'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                  )}
                >
                  <ul>
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="relative text-gray-700 rounded-md p-3 hover:bg-gray-100"
                      >
                        <h3 className="text-lg font-medium leading-5">
                          {post.title}
                        </h3>

                        <ul className="mt-1 flex flex-wraps items-center space-x-1 text-base font-normal leading-4 text-gray-500">
                          <li className='text-lg text-cyan-400 '>AUD {post.price}</li>
                          <li className='mx-auto'>&middot;</li>
                          <li>{post.period}</li>
                          <li>&middot;</li>
                          <li>{post.starting} </li>
                        </ul>

                        <a
                          href="#"
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
      <div className='flex flex-col mx-20 flex-shrink-0'>
        <div className="flex flex-col w-72 h-full max-w-md px-1 py-8 mx-2 sm:px-0">
            <div className="w-full max-w-md transform mx-auto 
              overflow-hidden rounded-2xl bg-white p-6 text-left align-middle 
              shadow-xl transition-all">
              <p
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                SUMMARY  
              </p>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Your have submit an join form, we will contact you soon.
                  Please choose a membership now.
                </p>
                <p className='text-gray-700 mt-2'>Type:  {selectedCategory}</p>
              </div>
              <div className="flex flex-row mt-4">
                <button
                  type="button"
                  className="inline-flex justify-between rounded-md border border-transparent 
                    bg-blue-100 px-4 py-2 mx-auto text-sm font-medium text-blue-900 hover:bg-blue-200 
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      /*                         onClick={handlePayment} */
                >
                  Go and Pay
                </button>
                <Link 
                  className='mx-auto'
                  href='/'>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent 
                      bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 
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
