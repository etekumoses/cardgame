import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export const Loader = ({ showprocessingModal, onClose }) => {
  console.log(showprocessingModal);
  return (
    <Transition.Root show={showprocessingModal} as={Fragment}>
    <Dialog
      as="div"
      className="relative z-10"
      initialFocus={true}
      onClose={onClose}
     
    >
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </Transition.Child>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <Dialog.Panel className="">
             
              <img src="/assets/frontend/img/loader.gif" alt="loading" width={50} height={50}/>
           
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
  );
};
