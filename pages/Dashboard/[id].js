import React from 'react'
import DisplayButtons from '../../components/DisplayButtons'
import Sidebar from '../../components/Sidebar'
import RenderLineChart from '../../components/BigGraph'

import Navbar from '../../components/Navbar'
import Schedule from '../../components/Schedule'
import PieChart from '../../components/PieChart'
import PieChartss from '../../components/PieChart'
import { CgSearch } from 'react-icons/cg'
import { signOut, useSession } from 'next-auth/react'


function Dashboard() {
    const { data: session } = useSession();
  return (
    <div className="lg:flex bg-[#F5F5F5] min-h-screen  lg:flex-row lg:gap-60">
      <Navbar />
      <div className="p-1 gap-5 flex flex-col ">
        <div className=" flex flex-row ">
          <div className=" text-black font-montserrat font-bold  text-2xl flex-1">
            Dashboard
          </div>
          <div className="flex flex-row gap-3 ">
            <div className=" flex flex-row px-3 text-sm bg-white rounded-2xl shadow-xl ">
              <input
                type="text"
                placeholder="Search..."
                className="text-[#B0B0B0] font-lato font-normal  h-8 border-none  rounded-2xl "
              ></input>
              <div className="">
                <CgSearch className="h-8" />
              </div>
            </div>
            <div className="h-8 w-8 mt-1">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 11.586V8C16 4.783 13.815 2.073 10.855 1.258C10.562 0.52 9.846 0 9 0C8.154 0 7.438 0.52 7.145 1.258C4.185 2.074 2 4.783 2 8V11.586L0.293001 13.293C0.199958 13.3857 0.126171 13.4959 0.0758854 13.6172C0.0256001 13.7386 -0.000189449 13.8687 1.04767e-06 14V16C1.04767e-06 16.2652 0.105358 16.5196 0.292894 16.7071C0.480431 16.8946 0.734785 17 1 17H17C17.2652 17 17.5196 16.8946 17.7071 16.7071C17.8946 16.5196 18 16.2652 18 16V14C18.0002 13.8687 17.9744 13.7386 17.9241 13.6172C17.8738 13.4959 17.8 13.3857 17.707 13.293L16 11.586ZM16 15H2V14.414L3.707 12.707C3.80004 12.6143 3.87383 12.5041 3.92412 12.3828C3.9744 12.2614 4.00019 12.1313 4 12V8C4 5.243 6.243 3 9 3C11.757 3 14 5.243 14 8V12C14 12.266 14.105 12.52 14.293 12.707L16 14.414V15ZM9 20C9.6193 20.0008 10.2235 19.8086 10.7285 19.4502C11.2335 19.0917 11.6143 18.5849 11.818 18H6.182C6.38566 18.5849 6.76648 19.0917 7.27151 19.4502C7.77654 19.8086 8.3807 20.0008 9 20Z"
                  fill="black"
                />
              </svg>
            </div>
            <div
              onClick={() => signOut({ callbackUrl: "/" })}
              className="rounded-full w-8 "
            >
              <img
                class="w-8 h-8 rounded-full"
                src={session?.user?.image}
                alt="Jese Leos avatar"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5 gap-1  ">
          <div className="mt-5">
            <DisplayButtons />
          </div>
          <div className="bg-white shadow-2xl p-1  invisible lg:visible">
            <div className="flex flex-row gap-3">
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex-1 font-montserrat font-bold text-xl ">
                  {" "}
                  Acitvites
                </div>
                <div className="text-[#858585] flex flex-row  gap-4 text-sm  font-montserrat font-normal ">
                  <div>May-June 2021</div>
                  <div className="pt-2">
                    {" "}
                    <svg
                      width="8"
                      height="5"
                      viewBox="0 0 8 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.218599 0.255719C0.5193 -0.0722496 0.937938 -0.097987 1.30554 0.255719L4.00082 3.0111L6.69609 0.255719C7.0637 -0.097987 7.48302 -0.0722496 7.78166 0.255719C8.08236 0.582952 8.06305 1.13594 7.78166 1.44332C7.50164 1.7507 4.5436 4.75389 4.5436 4.75389C4.47316 4.83173 4.38873 4.89364 4.29536 4.93592C4.20198 4.97821 4.10157 5 4.00013 5C3.89868 5 3.79827 4.97821 3.7049 4.93592C3.61152 4.89364 3.5271 4.83173 3.45666 4.75389C3.45666 4.75389 0.499989 1.7507 0.218599 1.44332C-0.0634812 1.13594 -0.0821026 0.582952 0.218599 0.255719Z"
                        fill="#858585"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className=" p-2 pr-10">
                <div className="flex flex-row gap-10">
                  <div className=" text-black flex flex-row gap-1 font-lato font-normal text- ">
                    <div className=" pt-1 rounded-full w-3 h-3  bg-[#E9A0A0]"></div>
                    <div className="mb-2">Guest</div>
                  </div>
                  <div className="flex flex-row gap-3 text-black">
                    <div className="rounded-full w-3 h-3  bg-[#9BDD7C]"></div>
                    <div>User</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2">
              <RenderLineChart />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 ">
            <div className=" bg-white p-4 rounded-xl shadow-lg">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 font-montserrat font-bold text-xl p-2 ">
                  Top Products
                </div>
                <div className="text-[#858585] flex flex-row gap-4  font-montserrat font-normal p-2 ">
                  <div>May-June 2021</div>
                  <div className="pt-2">
                    {" "}
                    <svg
                      width="8"
                      height="5"
                      viewBox="0 0 8 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.218599 0.255719C0.5193 -0.0722496 0.937938 -0.097987 1.30554 0.255719L4.00082 3.0111L6.69609 0.255719C7.0637 -0.097987 7.48302 -0.0722496 7.78166 0.255719C8.08236 0.582952 8.06305 1.13594 7.78166 1.44332C7.50164 1.7507 4.5436 4.75389 4.5436 4.75389C4.47316 4.83173 4.38873 4.89364 4.29536 4.93592C4.20198 4.97821 4.10157 5 4.00013 5C3.89868 5 3.79827 4.97821 3.7049 4.93592C3.61152 4.89364 3.5271 4.83173 3.45666 4.75389C3.45666 4.75389 0.499989 1.7507 0.218599 1.44332C-0.0634812 1.13594 -0.0821026 0.582952 0.218599 0.255719Z"
                        fill="#858585"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row   p-2">
                <div className="p-1">
                  <PieChartss />
                </div>
                <div className="flex flex-col gap-4 p-4">
                  <div className="flex flex-row gap-5">
                    <div className="rounded-full bg-[#98D89E] p-2 w-[10px] h-[10px] "></div>
                    <div className="flex flex-col">
                      <p className="font-bold font-montserrat text-sm text-black">
                        Basic Tees
                      </p>
                      <div className="font-normal font-lato">55%</div>
                    </div>
                  </div>

                  <div className="flex flex-row gap-5">
                    <div className="rounded-full bg-[#F6DC7D] p-2 w-[10px] h-[10px] "></div>
                    <div className="flex flex-col">
                      <p className="font-bold font-montserrat text-sm text-black">
                        Custom Short Pants
                      </p>
                      <div className="font-normal font-lato">31%</div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row gap-5">
                      <div className="rounded-full bg-[#EE8484] p-2   w-[10px] h-[10px] "></div>
                      <div className="flex flex-col">
                        <p className="font-bold font-montserrat text-sm text-black">
                          Super Hoodies
                        </p>
                        <div className="font-normal font-lato">14%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" p-3">
              <Schedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard