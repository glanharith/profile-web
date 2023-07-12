

export default function Navbar() {
    return(
        <nav class="bg-white sticky top-0 z-50 " style={{paddingTop:7,paddingLeft:20, paddingBottom:10}}>     
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:border-0" id="navbar-cta">
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-black-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                <li>
                    <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-black" >Home</a>
                </li>
                <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-black" >About</a>
                </li>
                <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-black" >Services</a>
                </li>
                <li>
                <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-black" >Contact</a>
                </li>
                </ul>

            </div>
   
        </nav>
    )
}