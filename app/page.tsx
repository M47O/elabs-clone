import Image from "next/image"
import Header from "./components/Header/Header"
import PromptContainer from "./components/PromptContainer/PromptContainer"
import styles from "./page.module.css"
import Instructional from "./components/Instructional/Instructional"

export default function Home() {
	return (
		<main>
			<Instructional />
			<PromptContainer />
		</main>
	)
}
