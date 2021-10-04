import styles from "./styles.module.scss";

export default function AboutMe({ about }: any) {
	return (
		<>
			<main className={styles.contentContainer}>
				<section className={styles.content}>
					<div className={styles.aboutMe}>
						<h1 className={styles.title}>Sobre mim</h1>
						<p
							className={styles.titleMe}
							dangerouslySetInnerHTML={{
								__html: about?.data[0][
									about?.data[0].type
								].text[0].text.content.replace(/\n/g, "<br />"),
							}}
						></p>
						<p
							className={styles.titleMeDescription}
							dangerouslySetInnerHTML={{
								__html: about?.data[1][
									about?.data[1].type
								].text[0].text.content.replace(/\n/g, "<br />"),
							}}
						></p>

						<div className={styles.hoobies}>
							<p className={styles.titleGroup}>
								{
									about?.data[2][about?.data[2].type].text[0]
										.text.content
								}
							</p>
							<div className={styles.items}>
								{about?.hobbies.map((hobbie: any): any => (
									<span className={styles.item} key={hobbie}>
										{hobbie}
									</span>
								))}
							</div>
						</div>
					</div>
					<div
						className={styles.frase}
						dangerouslySetInnerHTML={{
							__html: about?.data[4][
								about?.data[4].type
							].text[0].text.content.replace(/\n/g, "<br />"),
						}}
					></div>
				</section>
			</main>
		</>
	);
}
