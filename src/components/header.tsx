import Image from "next/image"

const Header = () => {
return (
    <nav className="w-full bg-white shadow-sm shadow-gray-400 sticky top-0 z-50 py-5 px-5">
        <div className="flex justify-between items-center">
            <Image 
                src="/logo.png"
                alt="logo"
                width={100}
                height={100}
            />
            <div className="flex gap-2">
                <Image 
                    src="/logo.png"
                    alt="logo"
                    width={30}
                    height={30}
                    className="rounded-full object-cover"
                />
                <p>Username</p>
            </div>
        </div>
    </nav>
)
}

export default Header