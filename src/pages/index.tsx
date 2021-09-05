import { GetStaticProps } from "next";
import Head from "next/head";
import { api } from "../services/api";

import styles from "./home.module.scss";

export default function Home({ data, experence, projects, social }: any) {
	return (
		<>
			<Head>
				<title>Kleber | devkleber</title>
			</Head>
			<main className={styles.contentContainer}>
				{/* {JSON.stringify(data[0].type)} */}
				<section className={styles.content}>
					<span
						dangerouslySetInnerHTML={{
							__html: data[0][
								data[0].type
							].text[0].text.content.replace(/\n/g, "<br />"),
						}}
					></span>
					<h1
						className={styles.title}
						dangerouslySetInnerHTML={{
							__html: data[1][
								data[1].type
							].text[0].text.content.replace(/\n/g, "<br />"),
						}}
					></h1>

					<p className={styles.love}>
						<span
							dangerouslySetInnerHTML={{
								__html: data[2][
									data[2].type
								].text[0].text.content.replace(/\n/g, "<br />"),
							}}
						/>
					</p>
					<p>
						<span
							className={styles.letsChat}
							dangerouslySetInnerHTML={{
								__html: data[3][data[3].type].text[0].text
									.content,
							}}
						></span>
					</p>

					<div className={styles.experence}>
						<div className={styles.item}>
							<div className={styles.value}>
								{new Date().getFullYear() - experence?.value}
							</div>
							<div className={styles.name}>
								{experence?.label}
							</div>
						</div>
						<div className={styles.item}>
							<div className={styles.value}>{projects.value}</div>
							<div className={styles.name}>{projects.label}</div>
						</div>
					</div>
					<div className={styles.social}>
						{social.map((item: any) => (
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
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await api.get(
		"blocks/1df498f6-e4ea-4423-b57b-7f1680a5ff0c/children"
	);
	const experence =
		data.results[4][data.results[4].type].text[0].text.content.split(":");
	const projects =
		data.results[5][data.results[5].type].text[0].text.content.split(":");
	const social = data.results[6][data.results[6].type];
	console.log(social.text);

	return {
		props: {
			data: data.results,
			experence: { label: experence[0], value: experence[1] },
			projects: { label: projects[0], value: projects[1] },
			social: social.text,
		},
		//Quanto tempo em segundos devo refazer a busca na API
		revalidate: 60 * 60 * 24, // 24 Horas
	};
};
