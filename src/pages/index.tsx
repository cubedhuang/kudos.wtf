import Image from "next/future/image";
import Head from "next/head";

import DiscordBox from "../components/DiscordBox";
import DiscordMessage from "../components/DiscordMessage";
import Heading from "../components/Heading";
import RoleIcon from "../components/RoleIcon";

export default function Home() {
	return (
		<>
			<Head>
				<title>Camper Kudos?!</title>

				<meta name="description" content="Camper Kudos, explained." />
				<meta name="keywords" content="camper, kudos, camper kudos" />

				<meta property="og:title" content="Camper Kudos?!" />
				<meta
					property="og:description"
					content="Camper Kudos, explained."
				/>
				<meta property="og:url" content="https://kudos.wtf/" />
				<meta
					property="og:image"
					content="https://kudos.wtf/images/ck.png"
				/>
			</Head>

			<div className="text-slate-800">
				<div className="hero">
					<h1 className="heading text-white text-8xl sm:text-9xl px-8 pt-20 md:pt-32 pb-24 md:pb-40 text-center">
						Camper Kudos?!
					</h1>
				</div>

				<main className="fade-in max-w-prose mx-auto px-8 pt-10 pb-24 font-body font-semibold gap-8 text-lg sm:text-xl">
					<Heading id="what">What are Camper Kudos?</Heading>

					<Image
						src="/images/no.webp"
						width={256}
						height={256}
						className="w-full sm:w-auto sm:float-right sm:ml-4 sm:mb-4 mt-4 sm:mt-8 rounded-lg"
						priority={true}
					/>

					<p>
						Camper Kudos are points primarily given out by
						instructors and teachers at AI Camp that mark
						participation and achievement by campers! They are used
						to incentivize students to go above and beyond during
						their time in camp!
					</p>
					<p>
						Students can give out kudos too! They can give out up to
						5 per week, totalling 15 over 3 week batch, and students
						who give out all 5 kudos are given a bonus kudo for
						their engagement! And no, you can&apos;t give yourself
						kudos. We&apos;ve tried.
					</p>
					<p>
						Kudos don&apos;t do anything on their own, but as you
						amass more kudos over camp, you can unlock roles on the
						Discord server.
					</p>
					<p>
						Remember that kudos are strictly for fun, and while
						lighthearted competition is welcome, you shouldn&apos;t
						take anything too seriously!
					</p>

					<h2 className="heading text-6xl mt-12">
						What can I earn with Camper Kudos?
					</h2>

					<p>
						As you gain kudos, you can unlock roles on the Discord
						server along with a few other cosmetics. Here&apos;s a
						list of some of the roles you can earn:
					</p>

					<ul className="mt-4 -indent-8 ml-8">
						<li>
							5 Kudos &ndash;{" "}
							<span className="text-[#9f450b]">
								star-camper role
							</span>
						</li>
						<li>
							10 Kudos &ndash;{" "}
							<span className="text-[#f1c40f]">
								elite-camper role
							</span>
						</li>
						<li>
							20 Kudos &ndash;{" "}
							<span className="text-[#4aa9f7]">
								master-camper role
							</span>{" "}
							+ <RoleIcon src="/images/ie.webp" /> icon +
							permissions to send images in{" "}
							<DiscordBox>#general</DiscordBox>
						</li>
						<li>
							35 Kudos &ndash;{" "}
							<span className="text-[#ec0000]">
								enlightened-camper role
							</span>
						</li>
						<li>
							50 Kudos &ndash;{" "}
							<span className="text-[#2ecc71]">
								prestige-camper role
							</span>
						</li>
						<li>
							75 Kudos &ndash;{" "}
							<span className="text-[#624533]">
								java-lover role
							</span>{" "}
							+ <RoleIcon src="/images/java.webp" /> icon
						</li>
						<li>
							100 Kudos &ndash;{" "}
							<span className="text-[#ff00b8]">
								we-should-hire-you role
							</span>
						</li>
					</ul>

					<p>
						The roles listed don&apos;t mean anything or guarantee
						anything. Amassing 100 kudos and earning the{" "}
						<span className="text-[#ff00b8]">
							we-should-hire-you role
						</span>{" "}
						does NOT guarantee that you will be offered a position
						on Team Tomorrow &ndash; it&apos;s just for fun!
					</p>
					<p>
						While nothing is guaranteed, getting kudos can indicate
						that you may be a good fit for Team Tomorrow, and they
						show that you work hard and are dedicated. Those who
						show an aptitude for learning, contribute ideas
						frequently, and are shown to put a genuine effort into
						everything they do in, and outside of camp are the
						people who will be considered for a position.
					</p>
					<p>
						Do not let this discourage you from making an effort!
						Kudos are a great measure that you&apos;ve been working
						hard, and your efforts will not go unnoticed!
					</p>

					<h2 className="heading text-6xl mt-12">
						How do I interact with Kudos?
					</h2>

					<p>
						There are a few commands you can use in the{" "}
						<DiscordBox>#camper-kudos</DiscordBox> channel on the
						Discord server:
					</p>

					<DiscordMessage img="/images/dh.webp" name="Daniel Huang">
						$ck <DiscordBox>@Abigail Smith</DiscordBox> for being
						cool
					</DiscordMessage>

					<p>
						This command can be run by students and instructors. In
						this case, Daniel is giving Abigail a kudo for being
						cool. Keep in mind a few things:
					</p>

					<ul className="mt-2 list-disc ml-8">
						<li>
							You must provide a reason for the kudo after
							mentioning the user &ndash; in this case, the reason
							is &ldquo;for being cool&rdquo;.
						</li>
						<li>
							You can only give kudos to one user at a time, so
							mentioning multiple people won't work.
						</li>
						<li>Students can only give five kudos per week.</li>
						<li>
							If a student gives out a kudo, it does NOT subtract
							from the number of kudos they've received.
						</li>
					</ul>

					<DiscordMessage img="/images/ta.webp" name="Autumn Fisk">
						$cks
					</DiscordMessage>

					<p>
						This command can be run by anyone. Running this will
						list the top 15 recipients of kudos by their adjusted
						score. This will be explained later.
					</p>

					<DiscordMessage
						img="/images/abby.webp"
						name="Abigail Smith"
					>
						$cks <DiscordBox>@Autumn Fisk</DiscordBox>
					</DiscordMessage>

					<p>
						This command can be run by anyone, and it display&apos;s
						a student&apos;s adjusted score as well the number of
						kudos they have received. You can also mention yourself
						to see your own score and kudo count.
					</p>

					<h2 className="heading text-6xl mt-12">Adjusted Scores</h2>

					<p>
						A large issue with the past Camper Kudos system was that
						instructors varied in the number of kudos they gave out
						to their students. This led to a skew where many
						students received more kudos than others simply because
						their instructors were more generous, even though other
						students were working just as hard.
					</p>

					<Image
						src="/images/skew.png"
						width={398}
						height={262}
						className="w-full sm:w-72 sm:float-right sm:ml-4 sm:mb-4 mt-4 rounded-lg"
						priority={true}
					/>

					<p>
						To solve this, the system has been adjusted to rank
						students not by the number of kudos they&apos;ve
						received, but by a score calculated by placing the
						students into three quantiles.
					</p>
					<p>
						Every student is in a quantile from 1 to 3, with Q1
						containing the students with the stingiest instructors
						and Q3 containing the students with the most generous
						instructors. A student&apos;s adjusted score is the
						number of kudos they&apos;ve received divided by the
						number of kudos the student with the most kudos in the
						quantile has received.
					</p>
					<p>
						For example, let&apos;s consider a few students. Abigail
						is in Q1 and has received 10 kudos, and Autumn is in Q3
						and has received 20 kudos. However, the student with the
						most kudos in Q1 has received 11 kudos, while the
						student with the most kudos in Q3 has received 25 kudos.
						Therefore, Abigail&apos;s adjusted score is 10&divide;11
						= 0.909, and Autumn&apos;s adjusted score is
						20&divide;25 = 0.800. Abigail is then ranked higher than
						Autumn.
					</p>
					<p>
						More information about the reasoning behind this can be
						found at this{" "}
						<a
							href="https://rb.gy/lf9rkc"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block text-blue-500 relative transition hover:opacity-80 after:absolute after:bottom-0 after:w-full after:left-0 after:bg-blue-500 after:h-0.5 after:rounded after:scale-x-0 hover:after:scale-x-100 after:transition after:origin-right hover:after:origin-left"
						>
							Google slides document
						</a>{" "}
						by Blake Martin.
					</p>
				</main>
			</div>
		</>
	);
}
