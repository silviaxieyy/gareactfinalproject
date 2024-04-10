import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MembershipTabs() {
  let [categories] = useState({
    BLUE: [
      {
        id: 1,
        title: 'Access one gym and amenities only',
        price: '$19.9',
        period: "per week",
        starting: '4 weeks at least',
      },
      {
        id: 2,
        title: 'Access one gym and amenities only and all training classes',
        price: '$22.9',
        period: "per week",
        starting: '4 weeks at least',
      }
    ],
    PLATINUM: [
      {
        id: 1,
        title: 'Access three gyms and amenities only',
        price: '$22.9',
        period: "per week",
        starting: '4 weeks at least',
      },
      {
        id: 2,
        title: 'Access to statewide gyms and amenities only',
        price: '$26.9',
        period: "per week",
        starting: '4 weeks at least',
      },
    ],
    'PLATINUM PLUS': [
      {
        id: 1,
        title: 'Access to nationwide gyms and amenities',
        price: '$30.9',
        period: "per week",
        starting: '4 weeks at least',
      },
      {
        id: 2,
        title: 'Access to nationwide gyms and amenities and all traing classes',
        price: '33.9',
        period: "per week",
        starting: '4 weeks at least',
      },
    ],
  })

  return (
    <div className="w-full max-w-md px-2 py-8 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white text-blue-700 shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
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
  )
}
