import styles from "./Home.module.scss";

export default function Home({ home }: any) {
	return (
		<div className={styles.contentContainer}>
			<main className={styles.size}>
				{/* {JSON.stringify(data[0].type)} */}
				<section className={styles.content}>
					<div className={styles.dot} />
					<div className={styles.topLeftImage} />
					<span
						dangerouslySetInnerHTML={{
							__html: home.data[0][
								home.data[0].type
							].text[0].text.content.replace(/\n/g, "<br />"),
						}}
					></span>
					<h1
						className={styles.title}
						dangerouslySetInnerHTML={{
							__html: home.data[1][
								home.data[1].type
							].text[0].text.content.replace(/\n/g, "<br />"),
						}}
					></h1>

					<p className={styles.love}>
						<span
							dangerouslySetInnerHTML={{
								__html: home.data[2][
									home.data[2].type
								].text[0].text.content.replace(/\n/g, "<br />"),
							}}
						/>
					</p>
					<p>
						<span
							className={styles.letsChat}
							dangerouslySetInnerHTML={{
								__html: home.data[3][home.data[3].type].text[0]
									.text.content,
							}}
						></span>
					</p>

					<div className={styles.experence}>
						<div className={styles.item}>
							<div className={styles.value}>
								{new Date().getFullYear() -
									home.experence?.value}
							</div>
							<div className={styles.name}>
								{home.experence?.label}
							</div>
						</div>
						<div className={styles.item}>
							<div className={styles.value}>
								{home.projects.value}
							</div>
							<div className={styles.name}>
								{home.projects.label}
							</div>
						</div>
					</div>
					<div className={styles.social}>
						{home.social.map((item: any) => (
							<div key={item.plain_text}>
								<a
									target="_blank"
									href={item.href}
									rel="noreferrer"
								>
									<img
										src={`img/social/${item.plain_text.replace(
											/\s/g,
											""
										)}.png`}
										alt=""
									/>
								</a>
							</div>
						))}
					</div>
				</section>
				<div className={styles.photoMe}>
					<div className={styles.backgroud} />
					<div className={styles.icons}>
						{/* <img src="img/profile/binary-code.png" alt="" /> */}
					</div>
					<div className={styles.icons}>
						<img src="img/profile/javascript.png" alt="" />
					</div>
					<div className={styles.icons}>
						<img src="img/profile/php.png" alt="" />
					</div>
					<div className={styles.icons}>
						<img src="img/profile/linux.png" alt="" />
					</div>
					<div className={styles.icons}>
						<img src="img/profile/node.png" alt="" />
					</div>
					<div className={styles.icons}>
						<img src="img/profile/html.png" alt="" />
					</div>

					<img
						src="http://john.wethemez.com/static/media/man.107d9562.png"
						alt="Girl coding"
					/>
				</div>
			</main>
			<div className={styles.scrolldown} />
		</div>
	);
}
