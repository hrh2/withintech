import {useState, useEffect} from 'react'
import {Dialog, DialogPanel} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'

const navigation = [
    {name: 'Home', href: '/'},
    {name: 'About us', href: '/about'},
    {name: 'Programs', href: '/programs'},
    {
        name: 'Impact', href: '#', dropdown: [
            {name: "2023-2024", href: 'https://drive.google.com/drive/search/'},
            {name: "2025", href: 'https://drive.google.com/drive/search/'},
        ]
    },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
            }`}
        >
            <nav aria-label="Global" className="container flex items-center justify-between p- lg:px-8 mx-auto">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <img
                            alt="WithinTech Rwanda Logo"
                            src="/WiT_Logo/logo.png"
                            className="h-20 w-auto"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
                            isScrolled ? 'text-gray-900' : 'text-gray-200'
                        }`}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6"/>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <div key={item.name} className="relative group">
                            {/* Trigger */}
                            <div className="cursor-pointer">
                                <a
                                    href={item.href}
                                    className={`text-sm font-semibold transition-colors ${
                                        isScrolled ? 'text-gray-900' : 'text-white'
                                    }`}
                                >
                                    {item.name}
                                </a>
                            </div>

                            {/* Dropdown */}
                            {item.dropdown && (
                                <div className="absolute left-0 top-full pt-2 opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transition-all duration-150">
                                    <div className="w-44 rounded-md bg-white shadow-lg">
                                        {item.dropdown.map((sub) => (
                                            <a
                                                key={sub.name}
                                                href={sub.href}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                {sub.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                    ))}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
                    <a
                        href="#"
                        className={`text-sm/6 px-5 py-3 font-semibold transition-colors ${
                            isScrolled ? 'text-gray-900' : 'text-white'
                        }`}
                    >
                        Join Us
                    </a>
                    <a
                        href="#"
                        className={`text-sm/6 font-semibold transition-colors  text-white px-5 py-3 bg-purple-950 rounded`}
                    >
                        Donate
                    </a>
                </div>
            </nav>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50"/>
                <DialogPanel
                    className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">WithinTech Rwanda</span>
                            <img
                                alt="WithinTech Rwanda Logo"
                                src="/WiT_Logo/logo.png"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-200"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-white/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                                >
                                    Join Us
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                                >
                                    Donate
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}