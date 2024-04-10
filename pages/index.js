import DashboardLayout from "../components/Layout";

export default function Home() {
  return (
    <>
      <DashboardLayout>
        <main>
          <div className="flex flex-col items-center mt-6">
            <h1 className="font-russo-one text-4xl font-bold text-neutral-300">Good for your training</h1>
            <h1 className="font-russo-one text-4xl font-bold text-neutral-300">Superfit for your health</h1>
            <div className="flex flex-row items-center mx-auto px-2">
              <img
                src="https://cdn.pixabay.com/photo/2021/01/04/06/21/fitness-5886573_1280.jpg"
                alt="training class"
                className="bg-cover w-1/3 mt-4 px-2"
              />

              <img
                src="https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_1280.jpg"
                alt="gym"
                className="bg-cover w-1/3 mt-4 px-2"
              />
              <img
                src="https://cdn.pixabay.com/photo/2023/12/19/22/46/man-8458535_1280.jpg"
                alt="gym"
                className="bg-cover w-1/3 mt-4 px-2"
              />

            </div>
            <button className="border border-solid rounded-md w-32 bg-blue-500 mt-4 p-1">Try us for free</button>
          </div>
          
        </main>
      </DashboardLayout>
    </>

  );
}
