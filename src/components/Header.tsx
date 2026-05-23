import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import logo from "../assets/indess-logo.png";

const navTriggerBaseClass =
	"group inline-flex h-10 w-max items-center justify-center rounded-md px-3 py-2 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors focus:outline-none";

type Section = {
	label: string;
	route?: string;
	id?: string;
};

const ABOUT_LINKS: Section[] = [
	{ label: "Company", route: "/company" },
	{ label: "Clients", route: "/clients" },
	{ label: "Career", route: "/career" },
];

const MAIN_LINKS: Section[] = [
	{ label: "Products", route: "/catalog" },
	{ label: "HSE Services", route: "/hse-services" },
	{ label: "Partners", route: "/partners" },
	{ label: "Projects", route: "/projects" },
	{ label: "Contact", id: "contact" },
];

const TRANSPARENT_HEADER_ROUTES = ["/"] as const;

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [headerVisible, setHeaderVisible] = useState(true);
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const useTransparentAtTop = TRANSPARENT_HEADER_ROUTES.includes(location.pathname as (typeof TRANSPARENT_HEADER_ROUTES)[number]);
	const useSolidHeader = scrolled || !useTransparentAtTop;

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const onScroll = () => {
			const currentScrollY = window.scrollY;
			setScrolled(currentScrollY > 12);

			if (open) {
				setHeaderVisible(true);
				lastScrollY = currentScrollY;
				return;
			}

			if (currentScrollY <= 12) {
				setHeaderVisible(true);
			} else if (currentScrollY > lastScrollY + 4) {
				setHeaderVisible(false);
			} else if (currentScrollY < lastScrollY - 4) {
				setHeaderVisible(true);
			}

			lastScrollY = currentScrollY;
		};

		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, [open]);

	useEffect(() => {
		setHeaderVisible(true);
	}, [location.pathname]);

	const goToSection = (id: string) => {
		setOpen(false);
		const target = document.getElementById(id);

		if (target) {
			target.scrollIntoView({ behavior: "smooth", block: "start" });
			return;
		}

		if (location.pathname !== "/") {
			navigate("/");
			setTimeout(() => {
				document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
			}, 80);
			return;
		}

		document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<header
			className={cn(
				"fixed top-0 inset-x-0 z-50 transform transition-all duration-500",
				headerVisible ? "translate-y-0" : "-translate-y-full",
				useSolidHeader ? "bg-white/95 backdrop-blur-xl border-b border-neutral-200" : "bg-transparent"
			)}
		>
			<div className="page-shell header-shell">
				<Link
					to="/"
					onClick={() => {
						setOpen(false);
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
					className={cn("flex items-center gap-3", useSolidHeader ? "" : "bg-white/95 px-3 py-1.5 rounded")}
				>
					<img src={logo} alt="INDESS" className="h-8 w-auto" width={160} height={32} />
				</Link>

				<div className="hidden flex-1 justify-center lg:flex">
					<NavigationMenu>
						<NavigationMenuList className="gap-1">
						<NavigationMenuItem>
							<NavigationMenuTrigger
								className={cn(
									navTriggerBaseClass,
									useSolidHeader
										? "text-neutral-700 hover:text-primary"
										: "bg-transparent text-white/85 hover:bg-white/10 hover:text-white data-[state=open]:bg-white/10"
								)}
							>
								About
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid w-[220px] gap-1">
									{ABOUT_LINKS.map((link) => (
										<li key={link.label}>
											<Link
												to={link.route ?? "/"}
												onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
												className="block rounded-md px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-foreground/75 transition-colors hover:bg-background-subtle hover:text-primary"
											>
												{link.label}
											</Link>
										</li>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>

						{MAIN_LINKS.map((section) => {
							if (section.route) {
								return (
									<NavigationMenuItem key={section.id}>
										<Link
											to={section.route}
											onClick={() => {
												setOpen(false);
												window.scrollTo({ top: 0, behavior: "smooth" });
											}}
											className={cn(
												navTriggerBaseClass,
												useSolidHeader
													? "text-neutral-700 hover:bg-background-subtle hover:text-primary"
													: "bg-transparent text-white/85 hover:bg-white/10 hover:text-white"
											)}
										>
											{section.label}
										</Link>
									</NavigationMenuItem>
								);
							}

							if (section.id) {
								return (
									<NavigationMenuItem key={section.label}>
										<button
											onClick={() => goToSection(section.id ?? "")}
											className={cn(
												navTriggerBaseClass,
												useSolidHeader
													? "text-neutral-700 hover:bg-background-subtle hover:text-primary"
													: "bg-transparent text-white/85 hover:bg-white/10 hover:text-white"
											)}
										>
											{section.label}
										</button>
									</NavigationMenuItem>
								);
							}

							return null;
						})}
						</NavigationMenuList>
					</NavigationMenu>
				</div>

				<div className="hidden w-[160px] lg:block" aria-hidden="true" />

				<button
					onClick={() => setOpen((value) => !value)}
					className={cn("p-2 lg:hidden", useSolidHeader ? "text-neutral-900" : "text-white")}
					aria-label="Toggle menu"
				>
					{open ? <X size={22} /> : <Menu size={22} />}
				</button>
			</div>

			{open && (
				<div className="border-t border-neutral-200 bg-white lg:hidden">
					<nav className="page-shell flex flex-col py-4">
						<p className="nav-link border-b border-neutral-200 px-2 py-3 text-left text-neutral-700">About</p>
						{ABOUT_LINKS.map((link) => (
							<Link
								key={link.label}
								to={link.route ?? "/"}
								onClick={() => {
									setOpen(false);
									window.scrollTo({ top: 0, behavior: "smooth" });
								}}
								className="nav-link border-b border-neutral-200 px-6 py-3 text-left text-neutral-700 hover:text-primary"
							>
								{link.label}
							</Link>
						))}

						{MAIN_LINKS.map((section) => (
							section.route ? (
								<Link
									key={section.label}
									to={section.route}
									onClick={() => {
										setOpen(false);
										window.scrollTo({ top: 0, behavior: "smooth" });
									}}
									className="nav-link border-b border-neutral-200 px-2 py-3 text-left text-neutral-700 hover:text-primary"
								>
									{section.label}
								</Link>
							) : (
								<button
									key={section.label}
									onClick={() => goToSection(section.id ?? "")}
									className="nav-link border-b border-neutral-200 px-2 py-3 text-left text-neutral-700 hover:text-primary"
								>
									{section.label}
								</button>
							)
						))}
					</nav>
				</div>
			)}
		</header>
	);
}
