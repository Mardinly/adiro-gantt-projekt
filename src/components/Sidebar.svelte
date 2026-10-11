<script>
  import { projects, activeProjectId } from '../stores/projectStore.js';
</script>

<aside>
  <div class="side-title">Projekte</div>
  {#each $projects as project}
    <div 
      class="project" 
      class:active={project.id === $activeProjectId}
      on:click={() => $activeProjectId = project.id}
    >
      {project.name}
    </div>
  {/each}
</aside>

<style>
  aside { background: #fff; border-right: 1px solid #e3e8f0; padding: 18px 12px; }
  .side-title { font-size: 11px; color: #68758a; font-weight: 700; text-transform: uppercase; margin: 8px 10px; }
  .project { padding: 11px; border-radius: 9px; cursor: pointer; margin: 4px 0; }
  .project:hover { background: #f1f3f8; }
  .project.active { background: #eef2ff; color: #4238ca; font-weight: 700; }
</style>