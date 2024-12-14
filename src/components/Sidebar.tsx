export default function Sidebar (){
    return (
    <nav className="w-[250px] bg-white flex justify-start flex-col h-[100vh] item-start px-10 py-10 gap-10">
            <div>
            <h2 className="text-gray-600">Type</h2>
            <ul className="text-xs flex flex-col gap-2 pt-2 ">
                <li className="flex gap-3">
                    <input type="checkbox" />
                    <p>sport <span className="text-gray-500"> (10)</span></p>
                    </li>
                <li className="flex gap-3">
                    <input type="Checkbox" />
                    <p>SUV <span className="text-gray-500"> (12)</span></p>
                </li>
                <li className="flex gap-3">
                <input type="Checkbox" />
                <p>MPV <span className="text-gray-500"> (16)</span></p>
                </li>
                <li className="flex gap-3">
                <input type="Checkbox" />
                <p>Sedan <span className="text-gray-500"> (20)</span></p>
                </li>
                <li className="flex gap-3">
                <input type="Checkbox" />
                <p>Coupe <span className="text-gray-500"> (14)</span></p>
                </li>
                <li className="flex gap-3">
                <input type="Checkbox" />
                <p>Hatchback <span className="text-gray-500"> (14)</span></p>
                </li>
            </ul>
        </div>

        {/* div 2 */}
        
        <div>
        <h2 className="text-gray-600">Capacity</h2>
        <ul className="text-xs flex flex-col gap-2 pt-2 ">
                <li className="flex gap-3">
                    <input type="Checkbox" />
                <p>2 Person <span className="text-gray-500"> (10)</span></p>
                </li>
                <li className="flex gap-3">
                <input type="Checkbox" />
                <p>4 Person<span className="text-gray-500"> (14)</span></p>
                </li>
                <li className="flex gap-3">
                <input type="Checkbox" />
                <p>6 Person<span className="text-gray-500"> (12)</span></p>
                </li>
                <li className="flex gap-3">
                <input type="Checkbox" />
                <p>8 Or More <span className="text-gray-500"> (16)</span></p>
                
                </li>
                </ul>

        </div>
        <div>
            <h2 className="text-gray-600">Price</h2>
            <input type="range" />
            <p className="text-gray-800 text-sm">Max. $100.00</p>
        </div>
    </nav>
    )
}