<script lang="ts">

    import { ChevronDown, ArrowRight} from 'lucide-svelte';
    import InputTab from './InputTab.svelte';

    let questions =[
        "What hardware do I need to run Tap2?", 
        "Can I use Tap2 on my existing devices?", 
        "Does Tap2 support multi playment methods?", 
        "Can Tap2 handle multiple locations?", 
        "Can Tap2 be used for online orders and deliveries?", 
        "Is there a minimum contract period with Tap2?"
    ]

    let questionsShow = Array.from({ length: 6 }, () => false)

    let defaultAnswer = "Yes, but also no. Because while the answer appears obvious at first glance, "+
    "it's only through questioning the premise that we realize the distinction itself might be false."+
    " In some contexts, it's entirely true — but only if you're willing to let go of what truth meant before"+
    " you asked. And even then, there is a part that remains unknowable, but not because it cannot be known — rather, "+
    "because knowing it would change the question itself. So, in the end, maybe... but only if you understand that"+
    " 'end' is just another beginning."

    let isDark = false;
    function toggleDarkMode() {
    isDark = !isDark;
    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    console.log(document.documentElement.classList); // Should now show "dark" or not
}

</script>


<main class="min-h-screen bg-gray-100 dark:bg-[#110D0A] font-inter">
    <section class="flex lg:flex-row flex-col justify-center lg:items-start items-center lg:p-10 w-full mr-10">
    <section class="order-2 lg:order-1 mb-14 lg:w-lg w-4/5">
        <h1 class="text-black dark:text-white font-semibold m-3 text-l"> Any questions?</h1>
            <div class="flex flex-col items-start w-full"> 
                {#each questions as question, i}
                    <button on:click={() => questionsShow[i] = !questionsShow[i]} class="text-[#878787] m-4 flex flex-row justify-between items-center w-full pr-4">
                        <p class="whitespace-normal break-words text-left">{question}</p>
                        <ChevronDown class="ml-auto" />
                    </button>   
                    {#if questionsShow[i] === true}
                    <div class="text-black dark:text-white m-3 lg:w-lg w-sm">{defaultAnswer}</div>
                    {/if}
                {/each}
            </div>
    </section>

    <section class="h-96 lg:w-lg w-4/5 flex flex-col rounded-2xl items-end pr-4 pl-4 aspect-square order-1 lg:order-2 bg-[#DADADA] dark:bg-[#14100E] mb-14 ml-10">
        <h1 class="text-black dark:text-white font-semibold m-6 text-l"> Message Us!</h1>
        <InputTab placeholderText="Your Name*" ></InputTab>
        <InputTab placeholderText="Email Address*" > </InputTab>
        <InputTab placeholderText="Reason" ></InputTab>
        <InputTab placeholderText="Leave your message" height="h-24"></InputTab>
        <button class="bg-[#0358f1] text-white text-xs flex flex-row p-3 rounded-xl"> <ArrowRight class="mr-2 w-4 h-4"/> Send</button>
    </section>
    </section>

    <button class="bg-[#0358f1] text-white text-xs flex flex-row p-3 rounded-xl m-16" on:click={toggleDarkMode}>
        Toggle {isDark ? 'Light' : 'Dark'} Mode
    </button>

</main>
