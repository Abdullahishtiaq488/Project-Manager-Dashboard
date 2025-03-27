import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Bell, HelpCircle } from 'lucide-react';

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
            className={`flex items-center gap-3 py-4 px-6 ${active ? 'text-teal-500' : 'text-gray-800 hover:text-teal-500'
                }`}
        >
            <div className="w-6">{icon}</div>
            <span className="text-[15px]">{text}</span>
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
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>}
                    text="Dashboard"
                    href="/dashboard"
                />
                <SidebarItem
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"></path></svg>}
                    text="Clients"
                    href="/clients"
                />
                <SidebarItem
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>}
                    text="Proposals"
                    href="/proposals"
                />
                <SidebarItem
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0"><path d="M21.2 8.4c-.5-1.2-1.9-1.8-3.1-1.4l-6.3 2.4-6.3-2.4c-1.2-.5-2.6.1-3.1 1.4-.5 1.2.1 2.6 1.4 3.1l7.6 2.9c.2.1.5.1.7 0l7.6-2.9c1.3-.5 1.9-1.9 1.5-3.1z" /><path d="M3.6 12.4l7.6 2.9c.2.1.5.1.7 0l7.6-2.9c.9-.3 1.6-1.1 1.7-2.1v4.6c0 .9-.5 1.7-1.3 2.1l-7.5 3.6c-.5.2-1.1.2-1.6 0L3.3 17c-.8-.4-1.3-1.2-1.3-2.1v-4.6c.3 1 1 1.8 1.6 2.1z" /></svg>}
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
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>}
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