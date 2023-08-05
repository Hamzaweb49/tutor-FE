import { Link } from "react-router-dom";
import _DatePicker from "../../components/_DatePicker";

export default function TutorDetail() {
  return (
    <div className="lg:px-20 container px-10 mx-auto">
      <h1 className="my-20 text-5xl font-semibold text-center">
        Tutor Details
      </h1>
      <div className="space-y-10">
        <div className="w-full max-w-lg p-6 mx-auto bg-white rounded-lg shadow-xl">
          <div className="flex justify-center w-full">
            <img
              alt="..."
              src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              className="ring-2 ring-primary object-cover w-24 h-24 p-1 rounded-full shadow-xl"
            />
          </div>
          <div className="w-full mt-5 text-center">
            <div className="flex justify-center">
              <div className="p-3 mr-4 text-center">
                <span className="block text-xl font-medium tracking-wide text-black uppercase">
                  22
                </span>
                <span className="text-sm font-normal text-gray-500">
                  Classes
                </span>
              </div>
              <div className="lg:mr-4 p-3 text-center">
                <span className="block text-xl font-medium tracking-wide text-black uppercase">
                  89
                </span>
                <span className="text-sm font-normal text-gray-500">
                  Total Classes
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5 text-center">
            <h3 className="text-2xl font-medium text-black">Jenna Stones</h3>
            <div className="text-sm font-normal text-gray-500 uppercase">
              Los Angeles, California
            </div>
            <div className="mt-5 text-base text-gray-700">
              Solution Manager - Creative Tim Officer
            </div>
            <div className=" text-base text-gray-700">
              University of Computer Science
            </div>
          </div>
          <div className="pt-5 mt-5 border-t border-gray-200">
            <div className="flex flex-wrap gap-2 mb-5">
              {[0, 1, 2, 3, 4, 5].map((i, index) => (
                <div
                  key={index}
                  className="px-4 py-1.5 hover:bg-gray-300 cursor-pointer text-sm bg-gray-200 rounded-full">
                  Subjects
                </div>
              ))}
            </div>
            <p className="text-sm text-center text-gray-500">
              An artist of considerable range, Jenna the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and
              records all of his own music, giving it a warm, intimate feel with
              a solid groove structure. An artist of considerable range.
            </p>
          </div>
        </div>
        <div className="w-full p-6 bg-white rounded-lg shadow-xl">
          <h1 className=" my-5 text-2xl font-semibold">Schedule Class</h1>
          <div className="relative overflow-auto" id="scrollbar">
            <_DatePicker />
          </div>
        </div>
      </div>
    </div>
  );
}
