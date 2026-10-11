<script>
  import Header from './components/Header.svelte';
  import StatsDashboard from './components/StatsDashboard.svelte';
  import Toolbar from './components/Toolbar.svelte';
  import TabNavigation from './components/TabNavigation.svelte';
  import GanttChart from './components/GanttChart.svelte';
  import { activeTab } from './stores/projectStore.js';
</script>

<Header />

<main class="main-container">
  <StatsDashboard />
  <Toolbar />
  <TabNavigation />

  {#if $activeTab === 'gantt'}
    <GanttChart totalDays={31} />
  {:else if $activeTab === 'dashboard'}
    <div class="placeholder-view">
      <h3>Projekt-Dashboard</h3>
      <p>Hier können erweiterte Unternehmens-Analysen und Diagramme angezeigt werden.</p>
    </div>
  {:else if $activeTab === 'ressourcen'}
    <div class="placeholder-view">
      <h3>Ressourcen-Planung</h3>
      <p>Hier wird die Auslastung von Maschinen und Personal verwaltet.</p>
    </div>
  {/if}
</main>

<style>
  :global(body) {
    margin: 0;
    background: #f8fafc;
    font-family: 'Inter', sans-serif;
    color: #0f172a;
  }

  .main-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 24px;
  }

  .placeholder-view {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 40px;
    text-align: center;
    color: #64748b;
  }

  .placeholder-view h3 {
    color: #0f172a;
    margin-bottom: 8px;
  }
</style>