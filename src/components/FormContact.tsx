export default function FormContact() {
  return (
    <>
      <div>
        <p className="text-2xl">
          LET´S CHAT
        </p>
      </div>
      <form className="px-8 pt-6 pb-8 mb-4">
        <div className="flex">
          <div className="flex items-center text-sm font-thin w-80 h-10 mb-2  bg-white text-black shadow-sm">       
            <input className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"  
                  type="text" 
                  placeholder="First Name" 
            />
          </div>
          <div className="flex items-center text-sm font-thin w-80 h-10 mb-2  bg-white text-black shadow-sm ml-5">       
            <input className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"  
                  type="text" 
                  placeholder="Last Name" 
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center text-sm font-thin w-80 h-10 mb-2  bg-white text-black shadow-sm">       
            <input className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"  
                  type="email" 
                  placeholder="Email" 
            />
          </div>
          <div className="flex items-center text-sm font-thin w-80 h-10 mb-2  bg-white text-black shadow-sm ml-5">       
            <input className="appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"  
                  type="phone" 
                  placeholder="Phone" 
            />
          </div>
        </div>
        <div className="flex flex-col">
        <div className="flex items-start text-sm font-thin w-full h-32 mb-2 bg-white text-black shadow-sm">       
            <textarea className="w-full h-full appearance-none py-4 px-4 text-gray-700 leading-tight focus:outline-none"  
                  placeholder="Tell us a secret..." 
            />
        </div>
        <div className="flex justify-end">
          <button className="bg-zinc-800 hover:bg-zinc-900 text-white font-bold py-2 px-4 w-36 focus:outline-none focus:shadow-outline" type="button">
            Ok
          </button>
        </div>
        </div>
      </form>
    </>
  )
}