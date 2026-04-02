<script>
	import Projectcard from '../lib/projectcard.svelte';

  let technologies = [
    { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-plain.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "SvelteKit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
  ];

  let tools = [
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
  ];

  let learning_technologies = [
    { name: "Scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-plain.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
  ];

  let project = [
    {
      name: "Hemascan",
      description: "Blood sample analysis and Triage System built with Flask. Full API and admin dashboard for managing patient data and test results. ML model for predicting sickle cell disease based on blood sample images.",
      technologies: "Flask, Tailwind CSS",
      image: "https://placehold.co/400x200.png",
      link: "https://example.com"
    },
    {
      name: "Moviebucket",
      description: "A personal movie tracker and recommendation system built with Django. Uses TMDB API.",
      technologies: "Django, PostgreSQL, Tailwind CSS",
      image: "https://placehold.co/400x200.png",
      link: "https://example.com"
    },
    {
      name: "Customs Cafe",
      description: "A social media platform for Custom 1/6 Figures built with SvelteKit.",
      technologies: "SvelteKit, Tailwind CSS, MongoDB",
      image: "https://placehold.co/400x200.png",
      link: "https://example.com"
    }
  ];
</script>

<!-- Header Section -->
<section class="grid min-h-[70vh] grid-cols-1 items-center gap-10 md:grid-cols-2 px-6">
  <div class="space-y-4">
    <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Portfolio</p>
    <h1 class="text-5xl font-bold leading-tight text-pink-600 md:text-7xl">Rachel Davey</h1>
    <p class="max-w-xl text-lg text-slate-300">Full Stack Developer building clean, useful digital experiences.</p>
    <div class="flex items-center gap-4">
            <!-- svelte-ignore a11y_consider_explicit_label -->
            <a href="https://github.com/rachel1davey" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
            </a>
    </div>
    </div>
    
  <div class="space-y-4 rounded-2xl p-6 md:justify-self-end">
    <div class="flex flex-col items-end gap-3">
      <a href="#projects" class="w-40 rounded-md bg-pink-600 px-4 py-2 text-center font-medium text-black transition hover:bg-pink-700">Projects</a>
      <a href="#contact" class="w-40 rounded-md border border-slate-500 px-4 py-2 text-center font-medium text-white transition hover:border-slate-300">Contact</a>
    </div>
  </div>
</section>

<!-- Technologies Section -->
<section id="technologies" class="py-16 text-center">
  <h2 class="text-3xl font-bold text-pink-600">Technologies</h2>
  <p class="text-lg text-slate-300">I work with a variety of technologies! Here are some of my favorites:</p>

  <div class="mt-6 space-y-6 flex flex-col items-center">
    <!-- Core Technologies -->
    <div class="flex flex-wrap justify-center gap-3">
      {#each technologies as tech}
        <div class="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
          {#if tech.logo}
            <img src={tech.logo} alt={tech.name} class="w-6 h-6 object-contain" />
          {/if}
          <span class="text-gray-900 font-medium">{tech.name}</span>
        </div>
      {/each}
    </div>

    <!-- Tools -->
    <div class="flex flex-wrap justify-center gap-3">
    <p>I also use these tools:</p>
      {#each tools as tech}
        <div class="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
          {#if tech.logo}
            <img src={tech.logo} alt={tech.name} class="w-6 h-6 object-contain" />
          {/if}
          <span class="text-gray-900 font-medium">{tech.name}</span>
        </div>
      {/each}
    </div>

    <!-- Learning -->
    <div class="flex flex-wrap justify-center gap-3">
    <p>I am currently learning:</p>
      {#each learning_technologies as tech}
        <div class="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm">
          {#if tech.logo}
            <img src={tech.logo} alt={tech.name} class="w-6 h-6 object-contain" />
          {/if}
          <span class="text-gray-900 font-medium">{tech.name}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Projects Section -->
<section id="projects" class="space-y-8 py-16 px-6">
  <h2 class="text-3xl font-bold text-pink-600 text-center">Projects</h2>
  <p class="text-lg text-slate-300 text-center">Here are some of my recent projects. Check out my GitHub for more!</p>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each project as proj}
      <Projectcard 
        title={proj.name} 
        description={proj.description} 
        image={proj.image} 
        technologies={proj.technologies}
        link={proj.link} 
      />
    {/each}
  </div>
</section>
<!-- Contact Section -->
<section id="contact" class="space-y-6 py-16 px-6">
  <h2 class="text-3xl font-bold text-white">Contact</h2>
  <p class="text-lg text-slate-300">Feel free to reach out via email or LinkedIn!</p>
  <p>Email: <a href="mailto:rachel@a.com" class="text-slate-400 underline hover:text-white">rachel@example.com</a></p>
</section>