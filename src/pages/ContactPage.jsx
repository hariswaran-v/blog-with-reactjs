import FormInput from "../components/form/Form";
import FormButton from "../components/FormButton/FormButton";

const ContactPage = () => {
  return (
    <div className="pt-20 ">
      <div className="bg-white rounded m-10">
        <div>
          <img
            src="https://i.pinimg.com/736x/8a/eb/63/8aeb639c9f0356e10db1920a5d612e52.jpg"
            alt="Contact page"
            className="w-full h-96 object-cover rounded-t"
          />
        </div>
        <div className="space-y-2 px-10 py-5 text-center">
          <h3 className="font-semibold text-xl">
            Get In Touch with TechSphere
          </h3>
          <div className="text-sm ">
            <p>
              If you have any questions, ideas, or opportunities to collaborate,
              feel free to reach out! I'm always open to connecting with
              passionate individuals and teams. Let's create something amazing
              together.
            </p>

            <p>
              Whether you're looking to build innovative projects, discuss the
              latest tech trends, or simply share ideas, I'm here to engage and
              collaborate. The world of technology thrives on creativity and
              collaboration, and I'm eager to contribute to the next big thing.
            </p>

            <p className="mt-4 font-italic text-gray-600">
              "Technology is best when it brings people together." — Matt
              Mullenweg
            </p>

            <p className="mt-2 text-gray-800">
              Let's connect and build something that makes a difference!
            </p>
          </div>
        </div>
        {/* Contact Source Grid */}
        <div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-slate-800  text-white rounded-lg shadow-md flex flex-col items-center justify-center py-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3em"
                height="3em"
                viewBox="0 0 24 24"
                className="text-orange-500 mb-2"
              >
                <path
                  fill="currentColor"
                  d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 7.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22m0-12"
                ></path>
              </svg>
              <h4 className="font-semibold">Our Location</h4>
              <p>Dubai Muttu Sandhu</p>
            </div>
            <div className="bg-slate-800  text-white rounded-lg shadow-md flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                viewBox="0 0 24 24"
                className="text-orange-500 mb-2"
              >
                <path
                  fill="currentColor"
                  d="M20 12q-.4 0-.712-.288T18.925 11q-.325-2.325-1.963-3.963T13 5.076q-.425-.05-.712-.35T12 4t.3-.712t.7-.238q3.15.35 5.375 2.575T20.95 11q.05.4-.238.7T20 12m-4.175 0q-.325 0-.575-.225t-.375-.6q-.2-.725-.763-1.287t-1.287-.763q-.375-.125-.6-.375T12 8.15q0-.5.35-.812t.775-.213q1.4.325 2.413 1.338t1.337 2.412q.1.425-.225.775t-.825.35m4.125 9q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9m8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475zm0 0"
                ></path>
              </svg>
              <h4 className="font-semibold">Phone Number</h4>
              <p>+91 8610538884</p>
            </div>
            <div className="bg-slate-800  text-white rounded-lg shadow-md flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                viewBox="0 0 24 24"
                className="text-orange-500 mb-2"
              >
                <path
                  fill="currentColor"
                  d="M7 17q-.825 0-1.412-.587T5 15V5q0-.825.588-1.412T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.587 1.413T21 17zm6.425-5.1L7 7.425V15h14V7.425L14.575 11.9q-.275.2-.575.2t-.575-.2M14 9.85L21 5H7zM3 21q-.825 0-1.412-.587T1 19V7.5q0-.425.288-.712T2 6.5t.713.288T3 7.5V19h15.5q.425 0 .713.288T19.5 20t-.288.713T18.5 21zM21 7.35V5H7v2.35V5h14z"
                ></path>
              </svg>
              <h4 className="font-semibold">Email Us </h4>
              <p>kaipulla555@gmail.com</p>
            </div>
            <div className="bg-slate-800  text-white rounded-lg shadow-md flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                viewBox="0 0 24 24"
                className="text-orange-500 mb-2"
              >
                <path
                  fill="currentColor"
                  d="m13 12.175l2.25 2.25q.275.275.275.688t-.275.712q-.3.3-.712.3t-.713-.3L11.3 13.3q-.15-.15-.225-.337T11 12.575V9q0-.425.288-.712T12 8t.713.288T13 9zM12 6q-.425 0-.712-.288T11 5V4h2v1q0 .425-.288.713T12 6m6 6q0-.425.288-.712T19 11h1v2h-1q-.425 0-.712-.288T18 12m-6 6q.425 0 .713.288T13 19v1h-2v-1q0-.425.288-.712T12 18m-6-6q0 .425-.288.713T5 13H4v-2h1q.425 0 .713.288T6 12m6 10q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m8-10q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20t5.675-2.325T20 12m-8 0"
                ></path>
              </svg>
              <h4 className="font-semibold">Our Location</h4>
              <p>Dubai Muttu Sandhu</p>
            </div>
          </div>
        </div>
        {/* Form  */}
        <div className="max-w-6xl mx-auto p-3 m-10 bg-sky-950 flex flex-col lg:flex-row gap-10 rounded-lg text-white">
          {/* Image */}
          <div>
            <img
              src="https://i.pinimg.com/736x/4e/a1/ed/4ea1edf19d608508487740464ca01fac.jpg"
              alt="map image"
              className="w-96 h-96 object-cover shadow rounded"
            />
          </div>

          {/* Form */}
          <div className="flex-1 space-y-5">
            <div>
              <FormInput
                name="fullName" 
                label="Fullname"
                placeholder="Enter you full name"
              />
              <FormInput
                name="emailAddress"
                label="Email address"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <FormButton text="Submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
