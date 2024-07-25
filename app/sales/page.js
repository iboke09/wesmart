import React, { Suspense } from 'react';
import Navbar from "../_component/Navbar/Navbar";
import { color } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import image from "../img/IMG_0455.webp"
import Loading from '../loading';
export default function Sales() {
    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <Navbar />
            <div className="container">
                <div>
                    <nav aria-label="Breadcrumb" style={{ paddingTop: "115px" }}>
                        <ol className="flex items-center gap-1 text-sm text-gray-600" style={{ color: "#FFFFFF" }}>
                            <li>
                                <Link href="/" className="block transition blawh hover:text-gray-500">
                                    <span className="sr-only">Home</span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                </Link>
                            </li>

                            <li className="rtl:rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 blawh"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </li>

                            <li>
                                <Link href="/#sales" className="block transition hover:text-gray-500 blawh"> Sales Manager </Link>
                            </li>

                            <li className="rtl:rotate-180">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 blawh"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </li>

                            <li>
                                <Link href="/Sales" className="block transition text-gray-400"> Abdullah </Link>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className='container'>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 maskat" style={{ position: "relative", top: "120px" }}>
                        <div className='' style={{ display: "flex", justifyContent: "center" }}><Suspense fallback={<Loading/>}><Image load='lazy'className='sura' alt={"Sap"} src={image} width={400} height={400} style={{
                            borderRadius: "0px 67px"
                        }} /></Suspense></div>
                        <div className='' style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <div className='contento'>
                                <h2 className="title blawh text-xl yoga" >
                                    Sales Manager
                                </h2>
                                <h1 className="title-2 agib2 text-4xl"  style={{
                                    marginTop: "-20px"
                                }}>
                                    SAP
                                </h1>
                                <p className="blawh titleo" style={{
                                    fontSize: "25px",
                                    padding: "10px 0",
                                    // width: "50%",
                                    lineHeight: "34px"
                                }}>
                                    AUDIENCE WITH INNOVATIVE AND ATTRACTIVE DESIGNS.
                                </p>
                                <p className='titleo2 blawh' style={{
                                    borderTop: "1px solid var(--agib2-color)",
                                    fontSize: "15px",
                                    padding: "5px 0",
                                    // width: "50%",
                                    lineHeight: "34px",
                                }}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor officia blanditiis repellat in, vero, aperiam porro ipsum laboriosam consequuntur exercitationem incidunt tempora nisi?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
