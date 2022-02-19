<script>
	import { onMount } from 'svelte';
	import { issues, pageID, currentIssueID } from '$lib/store.js';
	import { getIssues } from '$lib/dummy-data.js';

	const PageTitle = 'こんな時どうする？';
	const PageSubTitle = '叩けば直るかな';

	let inputIssue = '';

	const changeIssueID = (issueID) => {
		$currentIssueID = issueID;
	};

	const changePostPage = (issueID) => {
		changeIssueID(issueID);
		$pageID = '2';
	};

	onMount(async () => {});
</script>

<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto flex items-center justify-evenly md:flex-row flex-col lg:w-4/5">
		<div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
			<h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">
				{PageTitle}
			</h1>
			<h2 class="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">
				{PageSubTitle}
			</h2>
		</div>
		<div class="flex items-center flex-shrink-0 space-x-4">
			<input
				type="text"
				placeholder="どんな"
				class="input input-bordered input-primary bg-white w-full max-w-xs mr-2"
				bind:value={inputIssue}
			/>
			時？
			<button
				class="btn btn-secondary btn-circle btn-sm text-white"
				on:click={() => {
					if (inputIssue) {
						let tmp = $issues;
						let data = {
							issueID: new Date().getTime().toString(),
							text: inputIssue,
							userID: '999'
						};
						tmp.push(data);
						$issues = tmp;
						$currentIssueID = data.issueID;
						$pageID = '2';
					}
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
					/>
				</svg>
			</button>
		</div>
	</div>
</section>

<section class="text-gray-600 body-font">
	<div class="container px-5 pb-24 mx-auto">
		<div class="text-2xl text-center mb-8">どうしますか？</div>
		<div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
			{#each $issues as item}
				<div class="p-2 sm:w-1/2 w-full">
					<div class="bg-gray-100 rounded flex p-4 h-full items-center">
						<svg
							fill="currentColor"
							stroke="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4"
							viewBox="0 0 24 24"
						>
							<path
								d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M12 14L10.8 12.8L12.6 11H8V9H12.5L10.7 7.2L12 6L16 10L12 14Z"
							/>
						</svg>
						<button
							class="title-font font-medium text-left"
							on:click={changePostPage(item.issueID)}
						>
							{item.text} 時
						</button>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
