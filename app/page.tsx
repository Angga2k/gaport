import Image from "next/image";

export default function Home() {
  return (
    <div className="m-auto h-screen border justify-between bg-gray-950 border-black overflow-hidden">
      <div className="grid grid-cols-3 border border-black h-2/6">
        <div className="flex m-1 border">
          <div className="bg-primary w-full px-4 py-1 ">
            <div className="flex flex-col text-primary-text gap-2">
              <h1 className="text-4xl font-extrabold">ABOUT ME</h1>
              <p className="text-md text-secondary-text">I am an active student in the Informatics Study Program at the University of Jember. I have experience in programming, specifically as a Frontend Developer, Backend Developer, public speaking, and participating in several programming competitions. I am actively involved in campus organizations and committees. I am interested in Android Development, Machine Learning, and Frontend Development.</p>
            </div>
          </div>
        </div>
        <div className="flex m-1 border">
          <div className="bg-secondary w-full px-4 py-1 ">
            <div className="flex flex-col text-primary-text gap-2">
              <h1 className="text-4xl font-extrabold text-center">IT's ME</h1>
              <h1 className="text-center font-medium">Angga Dwi Kurniawan</h1>
            </div>
          </div>
        </div>
        <div className="flex m-1 border">
          <div className="bg-primary w-full px-4 py-1 ">
            <div className="flex flex-col text-primary-text gap-2">
              <h1 className="text-4xl font-extrabold">EDUCATION LEVEL</h1>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <p className="text-lg">Universitas Jember - </p>
                  <p className="text-sm text-secondary-text">Jember, Indonesia</p>
                </div>
                <div className="flex flex-col">
                  <h1>Ungraduated in Informatics, 3.82/4.00</h1>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <p className="text-lg">SMKN 1 Kraksaan - </p>
                  <p className="text-sm text-secondary-text">Kraksaan, Indonesia</p>
                </div>
                <div className="flex flex-col">
                  <h1>High School Diploma in Software Engineering</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mx-1  bg-secondary h-2/6">
        <div className="border py-12 flex justify-center items-center h-full">
          <h1 className="text-9xl font-black text-center text-primary-text">ANGGA DWI K.</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 border border-black h-2/6">
        <div className="flex m-1 border h-full">
          <div className="bg-primary w-full px-4 py-1 pb-2 ">
            <div className="flex flex-col text-primary-text gap-2">
              <h1 className="text-4xl font-extrabold">Project Experience</h1>
              <div className="flex flex-col w-full">
                <div className="flex w-full justify-between">
                  <h2>Company Profile - Frontend Developer</h2>
                  <p>Mar 2024 - May 2024</p>
                </div>
                <div className="mt-2">
                  <a href="https://hmifunej.id/" target="_blank" className="bg-white text-primary py-1 px-10">LINK</a>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex w-full justify-between">
                  <h2>Shortlink - Backend Developer</h2>
                  <p>Feb 2024 - Apr 2024</p>
                </div>
                <div className="mt-2">
                  <a href="https://s.hmifunej.id/" target='_blank' className="bg-white text-primary py-1 px-10">LINK</a>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex w-full justify-between">
                  <h2>HAJAR IF - Frontend Developer</h2>
                  <p>Jun 2023 - Sep 2024</p>
                </div>
                <div className="mt-2">
                  <a href="https://hajarif.hmifunej.id/" target="_blank" className="bg-white text-primary py-1 px-10">LINK</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex m-1 border h-full">
          <div className="bg-secondary w-full px-4 py-1 ">
            <div className="flex flex-col text-primary-text gap-2 text-right">
              <h1 className="text-4xl font-extrabold">Curriculum Vitae</h1>
              <h1 className="">Discover my latest projects and innovations in Frontend and Backend Development, Android Development, and Machine Learning. Dive into a showcase of my work and achievements, and download my curriculum vitae to explore how I can contribute to your next big project.
              </h1>
              <div className="my-2">
                <a href="" className="bg-white py-2 px-8 text-primary">Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}