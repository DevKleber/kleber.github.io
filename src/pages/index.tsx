import { GetStaticProps } from "next";
import { api } from "../services/api";
import Head from "next/head";
import AboutMe from "./AboutMe";
import Home from "./Home";

export default function Index({ home, aboutMe }: any) {
	return (
		<>
			<Head>
				<title>Kleber | devkleber</title>
			</Head>
			<Home home={home} />
			<AboutMe about={aboutMe} />
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await api.get(
		"blocks/1df498f6-e4ea-4423-b57b-7f1680a5ff0c/children"
	);
	const experence =
		data.results[4][data?.results[4].type].text[0].text.content.split(":");
	const projects =
		data.results[5][data.results[5].type].text[0].text.content.split(":");
	const social = data.results[6][data.results[6].type];

	const about = await api.get(
		"blocks/6608e58d-235d-4a81-a6cb-ed93c38a739b/children"
	);

	const aboutData = about.data.results;

	const hobbies = aboutData[3][aboutData[3].type].text[0].text.content;

	return {
		props: {
			home: {
				data: data?.results,
				experence: { label: experence[0], value: experence[1] },
				projects: { label: projects[0], value: projects[1] },
				social: social.text,
			},
			aboutMe: {
				data: aboutData,
				hobbies: hobbies.split(","),
			},
		},
		//Quanto tempo em segundos devo refazer a busca na API
		revalidate: 60 * 60 * 24, // 24 Horas
	};
};
