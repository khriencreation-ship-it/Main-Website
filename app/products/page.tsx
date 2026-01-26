import Footer from "@/components/Footer"

const page = () => {
    return (
        <>
        <main className="px-4 lg:px-9 min-h-screen bg-red-300 mt-[12vh] md:mt-[14vh]">
           <section className=" mx-10">
            <div className="flex justify-center items-center">
                <div className="bg-brandGreen"></div>
                <div className="bg-brandGreen"></div>
                <div className="bg-brandGreen"></div>
            </div>
            </section> 
        </main>
        <Footer/>
        </>
    )
}
export default page
