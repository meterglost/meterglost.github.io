import type { Component } from "solid-js";

import "@/styles/global.css";

import { Container } from "@/components/Container";
import { github, linkedin, mail } from "@/components/icons";
import { Timeline } from "@/components/Timeline";

const App: Component = () => {
	return (
		<div class="transition-opacity duration-1000 starting:opacity-0">
			<header></header>
			<main class="py-8 max-w-4xl mx-auto">
				<Container>
					<div class="space-y-8">
						<section>
							<div class="flex flex-row gap-x-4 items-stretch">
								<div class="flex-auto">
									<h1>Meterglost</h1>
									<p>Junior security engineer.</p>
									<div class="grid grid-template-square-10 gap-4">
										<a
											class="button button-secondary p-2"
											target="_blank"
											rel="noopener noreferrer"
											href="https://github.com/meterglost"
											innerHTML={github}
										/>
										<a
											class="button button-secondary p-2"
											target="_blank"
											rel="noopener noreferrer"
											href="https://www.linkedin.com/in/meterglost"
											innerHTML={linkedin}
										/>
										<a
											class="button button-secondary p-2"
											target="_blank"
											rel="noopener noreferrer"
											href="mailto:meterglost@gmail.com"
											innerHTML={mail}
										/>
									</div>
								</div>
								<div class="flex-none">
									<img
										src="/avatar.png"
										alt="Avatar"
										class="lg:size-48 md:size-36 size-30 rounded-lg border-2"
									/>
								</div>
							</div>
						</section>
						<section>
							<h2>About</h2>
							<p>
								I'm a junior security engineer with a passion for web security and privacy. I enjoy
								learning about the latest security threats and implementing best practices to protect
								users and their data.
							</p>
						</section>
						<section>
							<h2>Work Experience</h2>
							<Timeline.Root>
								<Timeline.Item
									datetime="2025 - 2025"
									title="Security Analyst"
									subtitle="Tensor &bull; Short-term &bull; Remote"
								>
									<ul class="list-terminal space-y-1">
										<li>
											Conducted vulnerability assessment and penetration testing on web based
											applications.
										</li>
										<li>
											Deploy and manage security solutions such as firewalls, log monitors,
											network segmentation.
										</li>
										<li>
											Collaborate with dev team to integrate security into software development
											lifecycle (SAST tools & linters).
										</li>
									</ul>
								</Timeline.Item>
								<Timeline.Item
									datetime="2023 - 2024"
									title="Security Engineering"
									subtitle="IVS Joint Stock Company &bull; Internship &bull; Onsite"
								>
									<ul class="list-terminal space-y-1">
										<li>
											Studied fundamental knowledge of information security and risk management.
										</li>
										<li>
											Assisted in the development and implementation of security policies and
											procedures aligned with ISO 27001/27002.
										</li>
									</ul>
								</Timeline.Item>
								<Timeline.Item
									datetime="2022 - 2023"
									title="Security Engineering"
									subtitle="VNG Corporation &bull; Internship &bull; Onsite"
								>
									<ul class="list-terminal space-y-1">
										<li>
											Studied security vulnerabilities in web applications and pentesting
											techniques.
										</li>
										<li>Contributed in the development of security tools and scripts.</li>
									</ul>
								</Timeline.Item>
								<Timeline.Item
									datetime="2020 - 2022"
									title="CTF Web Exploitation Player"
									subtitle="Bach Khoa Information Security Club &bull; Member"
								>
									<ul class="list-terminal space-y-1">
										<li>
											Participated in Capture The Flag (CTF) competitions focused on web
											exploitation.
										</li>
									</ul>
								</Timeline.Item>
							</Timeline.Root>
						</section>
						<section>
							<h2>Education</h2>
							<Timeline.Root>
								<Timeline.Item
									datetime="2020 - 2025"
									title="Bachelor of Engineering, Computer Engineering"
									subtitle="VNU-HCMC University of Technology"
								>
									<ul class="list-terminal space-y-1">
										<li>
											Thesis on <i>Building a Security Compliance Monitoring System</i>
										</li>
									</ul>
								</Timeline.Item>
							</Timeline.Root>
						</section>
					</div>
				</Container>
			</main>
			<footer></footer>
		</div>
	);
};

export default App;
