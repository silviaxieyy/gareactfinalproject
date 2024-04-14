import { useRouter } from 'next/router';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Link from 'next/link'

export default function Comfirm({isOpen, onClose}) {
  const router = useRouter();

  function closeModal() {
    onClose();
  }

  const handleChooseMembership = () => {
    closeModal();
    router.push("/memberships");
  }

  return (
    <>
      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Join successfully
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your have submit an join form, we will contact you soon.
                      Please choose a membership now.
                    </p>
                    <p></p>

                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent 
                        bg-blue-100 px-4 py-2 mx-4 text-sm font-medium text-blue-900 hover:bg-blue-200 
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleChooseMembership}
                    >
                      Choose Membership
                    </button>
                    <Link href='/'>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent 
                          bg-blue-100 px-4 py-2 mx-4 text-sm font-medium text-blue-900 hover:bg-blue-200 
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
