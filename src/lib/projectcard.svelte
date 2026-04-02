<script>
    export let title;
    export let description;
    export let image;
    export let technologies;
    export let link;
</script>
<div class="project-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <ul>
        {#each technologies as tech}
            <li>{tech}</li>
        {/each}
    </ul>
    <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
</div>
