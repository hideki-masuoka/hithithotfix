<script>
	import { onMount } from 'svelte';
	import { issues, solutions, solutionList } from '$lib/store.js';
	import { getIssueFromID, getSolutionsFromIssueID } from '$lib/dummy-data.js';

	const PageTitle = 'パソコンの画面を画像ファイルにしたい';
	const PageSubTitle = 'こんな時どうする？';
	const LabelSNSShare = '皆はどうしたの？';
	const LabelAddSolution = '私はこうしました';

	let localsolutions = [
		{
			solutionID: '1',
			issueID: '1',
			textA: '「プリントスクリーン」を検索',
			textB: '画像ファイルを保存する方法が分かるように',
			userName: 'name01',
			userID: 'ID01',
			userImage: 'https://api.lorem.space/image/face?hash=92048'
		},
		{
			solutionID: '2',
			issueID: '1',
			textA: 'スマホで写真を取るように',
			textB: 'スマホのアルバムに保存できるように',
			userName: 'name02',
			userID: 'ID02',
			userImage: 'https://api.lorem.space/image/face?hash=92040'
		}
	];

	let currentIssueID = '1';
	let currentIssue;

	onMount(async () => {
		let query = new URLSearchParams(document.location.search.substring(1));
		currentIssueID = query.get('iid') ?? currentIssueID;

		$solutions = getSolutionsFromIssueID(currentIssueID);
		currentIssue = getIssueFromID(currentIssueID);
	});
</script>

{#if currentIssue}
	<section class="text-gray-600 body-font">
		<div class="container px-5 pt-24 mx-auto flex items-center md:flex-row flex-col lg:w-4/5">
			<div
				class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center"
			>
				<h2 class="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">
					{PageSubTitle}
				</h2>
				<h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">
					{currentIssue.text} 時
				</h1>
			</div>
		</div>
	</section>

	<section class="text-gray-600 body-font">
		<div
			class="container px-5 pt-4 pb-24 gap-4 mx-auto flex items-center justify-end md:flex-row flex-col lg:w-4/5"
		>
			<button class="btn btn-accent">
				{LabelSNSShare}
			</button>
			<button class="btn btn-primary">
				{LabelAddSolution} ＞
			</button>
		</div>
	</section>

	<section class="text-gray-600 body-font">
		<div class="container px-5 pt-8 pb-16 mx-auto">
			{#each $solutions as item}
				<div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center mb-16">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="inline-block w-8 h-8 text-gray-400 mb-8"
						viewBox="0 0 975.036 975.036"
					>
						<path
							d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
						/>
					</svg>
					<p class="leading-relaxed text-lg">
						{item.textA} する事で、
					</p>
					<p class="leading-relaxed text-lg">
						{item.textB} なりました。
					</p>
					<span class="inline-block h-1 w-10 rounded bg-yellow-500 mt-8 mb-6" />
					<div>
						<div class="avatar">
							<div class="w-24 rounded">
								<img src={item.userImage} />
							</div>
						</div>
					</div>
					<h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
						{item.userName}
					</h2>
					<p class="text-gray-500">
						{item.userID}
					</p>
				</div>
			{:else}
				<div class="text-center">No-Data</div>
			{/each}
		</div>
	</section>
{/if}
