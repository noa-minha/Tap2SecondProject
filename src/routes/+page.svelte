<script lang="ts">

    import { ChevronDown } from 'lucide-svelte';

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

<main class="min-h-screen bg-black">

    <section>
        <h1 class="text-white"> Any questions?</h1>
            <div class="flex flex-col items-start w-1/2"> 
                {#each questions as question, i}
                    <button on:click={() => questionsShow[i] = !questionsShow[i]} class="text-white m-3">
                        {question}
                    </button>   
                    {#if questionsShow[i] === true}
                    <div class="text-white m-3 ml-7">{defaultAnswer}</div>
                    {/if}
                {/each}
            </div>
    </section>

    <section>
        <h1 class="text-white"> Message Us!</h1>

    </section>
</main>