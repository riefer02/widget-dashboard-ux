import React from "react";

export default function UTMApp() {

    return (
        <div className="container bg-indigo-400 mx-auto h-screen flex justify-center items-center">
            <div className="bg-indigo-300 w-full sm:w-3/4 p-3 text-xl shadow-lg">
                <div className="bg-gray-100 w-full p-1">
                    <div className="bg-blue-900 text-white w-full flex justify-between items-center p-2">
                        <div className="text-2xl">PERC UTM Tool</div>
                        <div className="flex mr-2">
                            <div className="mr-2 border border-white p-1 shadow-sm rounded-lg bg-blue-700"> Username</div>
                            <div className="mr-2 border border-white p-1 shadow-sm rounded-lg bg-blue-700"> Logout</div>
                            <div className="mr-2 border border-white p-1 shadow-sm rounded-lg bg-blue-700"> Help</div>
                        </div>
                    </div>
                    <div className="flex p-2">
                        <button className="bg-green-600 text-white shadow-md text-xl rounded-lg p-1 border border-black">Create New UTM</button>
                    </div>
                    <div className="flex p-2">
                        <div className="bg-yellow-500 w-full flex divide-x-2 divide-white border border-black rounded-lg shadow-md">
                            <div className="w-1/6">Date</div>
                            <div className="w-1/6">User</div>
                            <div className="w-1/12">Org</div>
                            <div className="w-5/12">Group Name</div>
                            <div className="w-1/12"># UTMs</div>
                            <div className="bg-blue-700 text-white w-1/6">Actions</div>
                        </div>
                    </div>

                    <div className=" flex p-2 text-sm">
                        <div className="bg-gray-300 w-full p-1 flex items-center text-left border-black border">
                            <div className="w-1/6 pl-1">8:00 am  Mar 16, 2021</div>
                            <div className="w-1/6 pl-1 flex flex-col"><div className="flex-grow">Sophi Sandoval</div></div>
                            <div className="w-1/12 pl-1">PERC</div>
                            <div className="w-5/12 pl-1">Vanity Name 1</div>
                            <div className="w-1/12 pl-1 text-center">38</div>
                            <div className="w-1/12 pl-1 text-center">
                                <button className="text-sm bg-blue-700 px-2 py-1 text-white rounded-lg shadow-md">
                                    Edit
                                </button>
                                </div>
                            <div className="w-1/12 pl-1 text-center">
                            <button className="text-sm bg-blue-700 px-2 py-1 text-white rounded-lg shadow-md">
                                    Archive
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className=" flex p-2 text-sm">
                        <div className="bg-gray-300 w-full p-1 flex items-center divide-x-2 text-left">
                            <div className="w-1/6 pl-1">8:00 am  Mar 16, 2021</div>
                            <div className="w-1/6 pl-1">Sophi Sandoval</div>
                            <div className="w-1/12 pl-1">PERC</div>
                            <div className="w-5/12 pl-1">Vanity Name 1</div>
                            <div className="w-1/12 pl-1 text-center">38</div>
                            <div className="w-1/12 pl-1 text-center">
                                <button className="text-sm bg-blue-700 px-2 py-1 text-white rounded-lg shadow-md">
                                    Edit
                                </button>
                                </div>
                            <div className="w-1/12 pl-1 text-center">
                            <button className="text-sm bg-blue-700 px-2 py-1 text-white rounded-lg shadow-md">
                                    Archive
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className=" flex p-2 text-sm">
                        <div className="bg-gray-300 w-full p-1 flex items-center divide-x-2 text-left">
                            <div className="w-1/6 pl-1">8:00 am  Mar 16, 2021</div>
                            <div className="w-1/6 pl-1">Sophi Sandoval</div>
                            <div className="w-1/12 pl-1">PERC</div>
                            <div className="w-5/12 pl-1">Vanity Name 1</div>
                            <div className="w-1/12 pl-1 text-center">38</div>
                            <div className="w-1/12 pl-1 text-center">
                                <button className="text-sm bg-blue-700 px-2 py-1 text-white rounded-lg shadow-md">
                                    Edit
                                </button>
                                </div>
                            <div className="w-1/12 pl-1 text-center">
                            <button className="text-sm bg-blue-700 px-2 py-1 text-white rounded-lg shadow-md">
                                    Archive
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}