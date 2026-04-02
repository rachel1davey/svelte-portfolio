<script>
    export let title;
    export let description;
    export let image;
    export let technologies;
    export let link;

    // Normalize `technologies` so the template always iterates over an array.
    // Supports both array input and comma-separated string input.
    $: technologyList = Array.isArray(technologies)
        ? technologies
        : typeof technologies === 'string'
            ? technologies
                .split(',')
                .map((t) => t.trim())
                .filter((t) => t.length > 0)
            : [];
</script>

<div class="project-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <ul>
        {#each technologyList as tech}
            <li>{tech}</li>
        {/each}
    </ul>
    <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
</div>