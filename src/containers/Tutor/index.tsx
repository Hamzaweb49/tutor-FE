import { Link } from "react-router-dom";

const data = [
  {
    src: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    subject: "Data Science",
    tutor_name: "John Smith",
  },
  {
    src: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    subject: "Math",
    tutor_name: "Dallas ",
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    subject: "English",
    tutor_name: "Mapzen Pok",
  },
  {
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    subject: "Math",
    tutor_name: "Dlesia",
  },
  {
    src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    subject: "Computer Science",
    tutor_name: "Vpoe N",
  },
  {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    subject: "Architecture",
    tutor_name: "Prof. Stakke",
  },
];
export default function Tutor() {
  return (
    <div className="lg:px-20 container px-10 mx-auto">
      <h1 className="my-20 text-5xl font-semibold text-center">Tutors</h1>
      <div className="xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 xl:gap-5 grid grid-cols-1 gap-8">
        {data.map((item, index) => (
          <Link
            to="/tutor-details"
            key={index}
            className=" rounded-xl p-3 overflow-hidden bg-white shadow-xl">
            <div className="group h-96 relative w-full overflow-hidden">
              <img
                className="rounded-xl h-96 object-cover w-full"
                src={item.src}
              />
              <div className="rounded-xl bg-primary group-hover:h-full group-hover:opacity-100 absolute top-0 left-0 flex flex-col items-center justify-center w-full h-0 p-5 duration-500 opacity-0">
                <p className="w-full text-base font-medium text-left text-white">
                  Description:
                </p>
                <p className="text-xs text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing opularised in the
                  1960s with the release of Letraset sheets containing
                  opularised in the 1960s with the release of Letraset sheets
                  containing
                </p>
              </div>
            </div>
            <div className="pt-4 space-y-2">
              <p className="text-primary text-lg font-medium text-center">
                {item.tutor_name}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {[0, 1, 2, 3, 4, 5].map((i, index) => (
                  <div
                    key={index}
                    className="px-4 py-1.5 hover:bg-gray-300 cursor-pointer text-sm bg-gray-200 rounded-full">
                    Subjects
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
