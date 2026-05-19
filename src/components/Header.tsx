import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/indess-logo.png";

type Section = {
	id: string;
	label: string;
	route?: string;
};

const SECTIONS: Section[] = [
	{ id: "company", label: "Company", route: "/company" },
	{ id: "services", label: "Expertise" },
	{ id: "catalog", label: "Catalog", route: "/catalog" },
	{ id: "partners", label: "Partners", route: "/partners" },
	{ id: "clients", label: "Clients", route: "/clients" },
];

const cn = (...classes: Array<string | false | undefined>) => classes.filter(Boolean).join(" ");

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const isHomeRoute = location.pathname === "/";
	const useSolidHeader = scrolled || !isHomeRoute;

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

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
				"fixed top-0 inset-x-0 z-50 transition-all duration-500",
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

				<nav className="hidden items-center gap-8 lg:flex">
					{SECTIONS.map((section) => (
						section.route ? (
							<Link
								key={section.id}
								to={section.route}
								onClick={() => {
									setOpen(false);
									window.scrollTo({ top: 0, behavior: "smooth" });
								}}
								className={cn(
									"nav-link",
									useSolidHeader ? "text-neutral-700 hover:text-primary" : "text-white/85 hover:text-white"
								)}
							>
								{section.label}
							</Link>
						) : (
							<button
								key={section.id}
								onClick={() => goToSection(section.id)}
								className={cn(
									"nav-link",
									useSolidHeader ? "text-neutral-700 hover:text-primary" : "text-white/85 hover:text-white"
								)}
							>
								{section.label}
							</button>
						)
					))}
				</nav>

				<button onClick={() => goToSection("contact")} className="btn btn-primary btn-nav-cta hidden lg:inline-flex">
					Contact
				</button>

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
						{SECTIONS.map((section) => (
							section.route ? (
								<Link
									key={section.id}
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
									key={section.id}
									onClick={() => goToSection(section.id)}
									className="nav-link border-b border-neutral-200 px-2 py-3 text-left text-neutral-700 hover:text-primary"
								>
									{section.label}
								</button>
							)
						))}
						<button
							onClick={() => goToSection("contact")}
							className="nav-link px-2 py-3 text-left text-primary"
						>
							Contact
						</button>
					</nav>
				</div>
			)}
		</header>
	);
}
