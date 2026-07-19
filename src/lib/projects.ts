import emojiRegex from 'emoji-regex';
import { log } from 'next-axiom';

import type { GitHubRepos, Project, ProjectPost } from '~/types';

/**
 * Fetch Projects
 *
 * Make a GET request to the GitHub API to gather all repositories
 * under my `vini.thedev.id` username & then filter them down to only
 * include those that contain the `portfolio` topic
 *
 * @TODO Switch to v3 API using GraphQL to save over-fetching
 */
export async function fetchProjects(): Promise<Array<Project> | null> {
	const repos: GitHubRepos = [];
	let page = 1;

	while (true) {
		const response = await fetch(
			`https://api.github.com/users/vncsmnl/repos?per_page=100&page=${page}`,
			{
				headers: {
					accept: 'application/vnd.github+json',
					'X-GitHub-Api-Version': '2022-11-28',
					...(process.env.GITHUB_PAT && {
						authorization: `token ${process.env.GITHUB_PAT}`,
					}),
				},
			},
		);
		if (response.status !== 200) {
			const json = (await response.json()) as {
				documentation_url: string;
				message: string;
			};

			console.error({ error: json });
			log.error('Failed to fetch projects', {
				error: json,
			});

			return null;
		}

		const pageRepos = (await response.json()) as GitHubRepos;
		repos.push(...pageRepos);

		if (pageRepos.length < 100) break;

		page += 1;
	}

	const { default: rawProjectPosts } = await import('~/data/projects.json');
	const projectPosts = rawProjectPosts as Array<ProjectPost>;

	const projects: Array<Project> = repos
		.map((repo) => {
			const topics = repo.topics ?? [];
			if (!topics.includes('portfolio')) return null;

			if (repo.archived) return null;

			// Strip the emoji suffix from the repo description
			const trimmedDescription = (repo.description ?? '').split(' ');
			trimmedDescription.shift();
			const description = trimmedDescription.join(' ');

			// Check if there is a matching blog post to attach
			const repoPost =
				projectPosts.length > 0 &&
				projectPosts.find(
					(post) => post.repository.toLowerCase() === repo.full_name.toLowerCase(),
				);

			return {
				description,
				icon: ((): string => {
					if (!repo.description) return undefined;

					const char = repo.description.split(' ')[0];

					return emojiRegex().test(char) ? char : undefined;
				})(),
				homepage: repo.homepage ?? undefined,
				name: repo.name,
				post: repoPost ? `/blog/${repoPost.post}` : undefined,
				template: false,
				url: repo.html_url.toLowerCase(),
			} as Project;
		})
		.filter((project) => project !== null);

	return projects;
}
