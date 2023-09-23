import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import Header from "./components/layout/Header";
import ProtectedRoutes from "./routes/ProtectedRoutes";

// Lazy load your components
const LazyLogin = lazy(() => import("./pages/auth/Login"));
const LazyForgotPassword = lazy(() =>
  import("./pages/auth/forgot/Forgotpassword")
);
const LazyResetPassword = lazy(() =>
  import("./pages/auth/forgot/Resetpassword")
);
const LazyHome = lazy(() => import("./pages/home/Home"));
const LazyProfile = lazy(() => import("./pages/profile/Profile"));
const LazyStats = lazy(() => import("./pages/statistics/Ranking"));
const LazyNotFoundPage = lazy(() => import("./pages/error/404"));

function App() {
  const [showModal, setShowModal] = useState(false);

  const loading = (
    <Transition.Root show={true} as={Fragment}>
    <Dialog
      as="div"
      className="relative z-10"
      initialFocus={true}
      onClose={()=>setShowModal(false)}
     
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
  const { user } = useSelector((state) => state.auth);
 

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense>
          <ToastContainer />
          {/* {user && <Header />} */}
          <Routes>
            {/* <Route element={<ProtectedRoutes />}> */}
              <Route
                path="/"
                element={<LazyHome />}
              />
              <Route path="/stats" element={<LazyStats />} />
              <Route path="/profile" element={<LazyProfile />} />
            {/* </Route> */}
            {/*  public routes */}
            {/* <Route path="/" element={<LazyLogin />} />
            <Route path="/forgot-password" element={<LazyForgotPassword />} />
            <Route path="/reset-password" element={<LazyResetPassword />} /> */}

            <Route exact path="/404" name="Page 404" element={<LazyNotFoundPage />} />
            <Route exact path="*" element={<LazyNotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;


// gitkeys
// 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
