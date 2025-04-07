<script lang="ts">

    import { ChevronDown, ArrowRight} from 'lucide-svelte';

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

</script>

<main class="min-h-screen bg-[#110D0A]">

    <section>
        <h1 class="text-white font-semi-bold font-inter"> Any questions?</h1>
            <div class="flex flex-col items-start w-2xl"> 
                {#each questions as question, i}
                    <button on:click={() => questionsShow[i] = !questionsShow[i]} class="text-[#878787] m-3 flex flex-row justify-between">
                        {question}
                        <ChevronDown/>
                    </button>   
                    {#if questionsShow[i] === true}
                    <div class="text-white m-3 ml-7">{defaultAnswer}</div>
                    {/if}
                {/each}
            </div>
    </section>

    <section class="bg-[#14100E] md:w-lg flex flex-col rounded-2xl items-end pr-4">
        <h1 class="text-white font-semibold m-6 text-xl"> Message Us!</h1>
        <input type="text" placeholder="Your Name*" 
        class="text-white bg-[#1B1715] mb-4 w-2/3 h-14 p-3 rounded-xl"/>
        <input type="text" placeholder="Email Address*" 
        class="text-white bg-[#1B1715] mb-4 w-2/3 h-14 p-3 rounded-xl"/>
        <input type="text" placeholder="Reason" 
        class="text-white bg-[#1B1715] mb-4 w-2/3 h-14 p-3 rounded-xl"/>
        <input type="text" placeholder="Leave your message" 
        class="text-white bg-[#1B1715] mb-4 w-2/3 h-40 p-3 rounded-xl"/>
        <button class="bg-[#0358f1] text-white flex flex-row p-3 rounded-xl"> <ArrowRight class="mr-2"/> Send</button>
    </section>

</main>
