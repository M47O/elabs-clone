import Link from "next/link"
import styles from "./Header.module.css"

export default function Header() {
	return (
		<header className={styles.header}>
			<Link href="#">Login</Link>
			<span>|</span>
			<Link href="#">Signup</Link>
		</header>
	)
}
