import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Bell, HelpCircle, FolderClosed, Tags, Users, Calendar, House } from 'lucide-react';

interface SidebarItemProps {
    icon: React.ReactNode;
    text: string;
    href: string;
    active?: boolean;
}

const SidebarItem = ({ icon, text, href, active }: SidebarItemProps) => {
    return (
        <Link
            href={href}
            className={`flex items-center gap-3 py-4 px-8 relative ${
                active 
                ? 'text-pink-600 bg-pink-50 border-l-4 border-pink-600' 
                : 'text-gray-800 hover:text-teal-500'
            }`}
        >
            <div className="w-6">{icon}</div>
            <span className="text-md font-roboto">{text}</span>
            {active && (
                <span className="absolute left-0 top-0 h-full bg-pink-600 w-1"></span>
            )}
        </Link>
    );
};

export function Sidebar() {
    return (
        <div className="fixed top-0 left-0 w-[261px] h-screen flex flex-col bg-white border-r border-gray-100 overflow-hidden">
            <div className="p-6">
                <Image src="/images/logo.png" alt="Centrixhub" width={180} height={40} />
            </div>

            <div className="py-2">
                <SidebarItem
                    icon={<House size={20} />}
                    text="Dashboard"
                    href="/dashboard"
                />
                <SidebarItem
                    icon={<FolderClosed size={20} />}
                    text="Clients"
                    href="/clients"
                />
                <SidebarItem
                    icon={<Tags size={20} />}
                    text="Proposals"
                    href="/proposals"
                />
                <SidebarItem
                    icon={<Users size={20} />}
                    text="Projects"
                    href="/projects"
                    active
                />
                <SidebarItem
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
                    text="Team"
                    href="/team"
                />
                <SidebarItem
                    icon={<Calendar size={20} />}
                    text="Calendar"
                    href="/calendar"
                />
                <SidebarItem
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>}
                    text="Report"
                    href="/report"
                />
            </div>

            <div className="mt-auto flex justify-around py-4 px-6 border-t border-gray-100">
                <button className="p-2 text-gray-500 hover:text-gray-700">
                    <MessageCircle size={22} />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700">
                    <Bell size={22} />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700">
                    <HelpCircle size={22} />
                </button>
            </div>

            <div className="px-6 py-5 border-t border-gray-100">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <Image
                            src="/images/avatar1.png"
                            alt="User avatar"
                            width={40}
                            height={40}
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <p className="text-sm font-medium">Unknown</p>
                        <p className="text-xs text-gray-500">unknown@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="px-6 py-3 text-xs text-gray-400">
                © 2024 centrixhub.ai.
            </div>
        </div>
    );
} 