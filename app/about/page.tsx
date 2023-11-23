
export default function About() {
  return  <section className="w-screen mt-12">
    <div className="flex flex-1 justify-start items-center flex-col gap-6">
        <h5 className="font-bold text-4xl "> Activities</h5>
        <p className="text-2xl uppercase font-light">
            Sataiva Technologies
        </p>
        <p className="w-3/5 text-center text-2xl">
        Javascript experts. Backend, Web, Mobile apps. Anything javascript. We primarily work on Reactjs and React native. We are good at making feature rich web or mobile apps like many others. We have a dharma (work ethic) to listen and reply to our clients and continue the relationship even after our work. 
        </p>
        <div className="flex xs:flex-col  md:flex-row justify-center items-center gap-6">
        <img className="w-1/4 shadow-lg hover:shadow-2xl" src="https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg" alt="Img1"/>
        <img className="w-1/4 shadow-lg hover:shadow-2xl" src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg" alt="Img2"/>
        <img className="w-1/4 shadow-lg hover:shadow-2xl" src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg" alt="Img3"/>
       
        
        </div>
        <button className="border-red-500 border-2 p-2 rounded-md">View More</button>
    </div>
  </section>
  
}
