<script>
	import { onMount } from 'svelte';
	import { pageID, issues, solutions, solutionList } from '$lib/store.js';
	import { getIssues, getSolutions, getSolutionList, setRESTData, getRESTData } from '$lib/dummy-data.js';

	import TopPage from '$lib/topPage/topPage.svelte';
	import PostPage from '$lib/postPage/postPage.svelte';

	let inputIssue;


	onMount(async () => {
		//$issues = getIssues();
		$issues = await getRESTData(1);
		//$solutions = getSolutions();
		$solutions = await getRESTData(2);
		//$solutionList = getSolutionList();
		$solutionList = await getRESTData(3);
		//$pageID = '2';
	});
</script>

<svelte:head>
	<title>叩くと直るかな？ 既知を集めて未知を照らそう｜Hit Hit Hot-Fix</title>
</svelte:head>

{#if '1' === $pageID}
	<TopPage />
{:else if '2' === $pageID}
	<PostPage />
{:else}
	no-data
{/if}

<div class="container m-auto">
	<div class="m-auto alert shadow-lg justify-center">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="stroke-current flex-shrink-0 h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
			/></svg
		>
		<span>続編にご期待ください。</span>
	</div>
</div>
