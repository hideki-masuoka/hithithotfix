<script>
	import { onMount } from 'svelte';
	import { issues, solutions, solutionList, pageID, currentIssueID } from '$lib/store.js';
	import { getIssueFromID, getSolutionsFromIssueID } from '$lib/dummy-data.js';

	const PageTitle = 'パソコンの画面を画像ファイルにしたい';
	const PageSubTitle = 'こんな時どうする？';
	const LabelSNSShare = '皆はどうしたの？';
	const LabelAddSolution = '私はこうしました';

	let currentIssue;
	let currentSolutions = [];

	let inputTextA = null;
	let inputTextB = null;

	const setCurrentSolutions = () => {
		currentSolutions = getSolutionsFromIssueID($currentIssueID, $solutions, $solutionList);
	};

	const setSolutionList = (issueID, solutionID) => {
		let data = $solutionList[issueID] ?? false;
		if (data) {
			data.push(solutionID);
		} else {
			$solutionList[issueID] = [solutionID];
		}
	};

	onMount(async () => {
		currentIssue = getIssueFromID($currentIssueID, $issues);
		setCurrentSolutions();
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
			<a href="#modal-sns" class="btn btn-accent">
				{LabelSNSShare}
				<svg class="ml-2" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"
					><path
						d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M14 16V13C10.39 13 7.81 14.43 6 17C6.72 13.33 8.94 9.73 14 9V6L19 11L14 16Z"
					/></svg
				>
			</a>
			<a href="#modal-solution" class="btn btn-primary">
				{LabelAddSolution}
				<svg class="ml-2" width="24" height="24" viewBox="0 0 24 24"
					><path
						d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22H9M11,6V9H8V11H11V14H13V11H16V9H13V6H11Z"
					/></svg
				>
			</a>
		</div>

		<div class="modal" id="modal-sns">
			<div class="modal-box">
				<h3 class="font-bold text-lg">SNSでOGP画像的なものを共有して回答を促そう！！</h3>
				<p class="py-4">続編にご期待ください</p>
				<div class="modal-action">
					<a href="#" class="btn">
						<svg fill="currentColor" width="24" height="24" viewBox="0 0 24 24"
							><path
								d="M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M11,14H13L12.3,15.39C12.5,16.03 13.06,16.5 13.75,16.5A1.5,1.5 0 0,0 15.25,15H15.75A2,2 0 0,1 13.75,17C13,17 12.35,16.59 12,16V16H12C11.65,16.59 11,17 10.25,17A2,2 0 0,1 8.25,15H8.75A1.5,1.5 0 0,0 10.25,16.5C10.94,16.5 11.5,16.03 11.7,15.39L11,14Z"
							/></svg
						>
					</a>
				</div>
			</div>
		</div>

		<div class="modal" id="modal-solution">
			<div class="modal-box">
				<h3 class="font-bold text-lg">{currentIssue.text} 時...</h3>
				<div class="form-control w-full max-w-xs">
					<input
						type="text"
						placeholder="何を？"
						class="input input-bordered w-full max-w-xs"
						bind:value={inputTextA}
					/>
					<label class="label">
						<span class="label-text-alt" />
						<span class="label-text-alt">する事で、</span>
					</label>
				</div>
				<div class="form-control w-full max-w-xs">
					<input
						type="text"
						placeholder="どういう事に？"
						class="input input-bordered w-full max-w-xs"
						bind:value={inputTextB}
					/>
					<label class="label">
						<span class="label-text-alt" />
						<span class="label-text-alt">なりました。</span>
					</label>
				</div>
				<div class="modal-action">
					<a href="#" class="btn"> キャンセル </a>
					<a
						href="#"
						class="btn btn-secondary"
						on:click={() => {
							if(!inputTextA || !inputTextB) {
								return;
							}
							let data = {
								textA: inputTextA,
								textB: inputTextB,
								issueID: $currentIssueID,
								solutionID: new Date().getTime().toString(),
								userID: 'ID999',
								userName: 'ツクアソくん',
								userImage: 'https://api.lorem.space/image/face?hash=93055'
							};
							inputTextA = null;
							inputTextB = null;
							$solutions.push(data);
							setSolutionList($currentIssueID, data.solutionID);
							setCurrentSolutions();
						}}
					>
						回答
					</a>
				</div>
			</div>
		</div>
	</section>

	<section class="text-gray-600 body-font">
		<div class="container px-5 pt-8 pb-16 mx-auto">
			{#each currentSolutions as item}
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
				<div class="text-center">
					前人未到です
					<br>
					まだ誰も成し遂げていません
				</div>
			{/each}
			<div class="text-center mt-16">
				<button
					class="btn btn-secondary"
					on:click={() => {
						$pageID = '1';
					}}
				>
					←戻る
				</button>
			</div>
		</div>
	</section>
{/if}
