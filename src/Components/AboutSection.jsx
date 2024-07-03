

export default function AboutSection() {

    return (
            <div className="pt-6">               
                <div className="mx-auto max-w-xl pb-10 pt-10 lg:grid lg:max-w-6xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-4 lg:pb-10 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-10">
                        <img src="http://www.tamtas.net/Uploads/Content/Thumbs/d9b9ba36-49de-4146-bfdb-a40e02c10cd1.jpg?v-637898399542898573" alt="" />
                    </div>

                    <div className="mt-4 lg:row-span-3 lg:pl-0 lg:mt-0">
                        <p className="text-3xl tracking-tight text-blue-900">About Us</p>

                        <div className="mt-6">
                            <div className="flex items-center">
                                <p className=" text-3xl font-bold text-black-600">
                                    Tam-Tas Packaging
                                </p>
                            </div>
                        </div>

                            <div className='mt-6'>
                                <p className=" text-xs">
                                    Tam-Tas Packaging & Processing Machinery was established in 1971 and since then we are proud to be one of the leading packaging & processing machines manufacturer in Turkey.
<br /><br />
                                    In the first years of it’s foundation the machine equipment had been imported and in the year 1975 Tam-Tas has started manufacturing of it’s own brand of packaging machines. The Company carried out it’s activity in Istanbul-Mecidiyekoy between the years 1975 – 1983 and in the year 1983 the Company moved to Merter in a 8.000 m² production area.
                                    <br /><br />
                                    We have carried out our production activities in Merter between the years 1983-2013 until we have moved to our new facility at Istanbul-Ikitelli in 2014.
                                    
                                </p>
                            </div>

                            <button
                                className="mt-5  hvr-pulse flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                More
                            </button>
                    </div>


                </div>
            </div>
    )
}
