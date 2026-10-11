<script>
  import { activeTab } from '../stores/projectStore.js';
</script>

<div class="tabs">
  <button class="tab-btn" class:active={$activeTab === 'gantt'} on:click={() => $activeTab = 'gantt'}>Gantt</button>
  <button class="tab-btn" class:active={$activeTab === 'dashboard'} on:click={() => $activeTab = 'dashboard'}>Dashboard</button>
  <button class="tab-btn" class:active={$activeTab === 'ressourcen'} on:click={() => $activeTab = 'ressourcen'}>Ressourcen</button>
</div>

<style>
  .tabs {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
  }

  .tab-btn {
    background: #e2e8f0;
    border: none;
    padding: 10px 24px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 700;
    color: #334155;
    cursor: pointer;
    transition: all 0.2s;
  }

  .tab-btn.active {
    background: #0f172a;
    color: #ffffff;
    box-shadow: 0 4px 10px rgba(15, 23, 42, 0.2);
  }

  .tab-btn:hover:not(.active) {
    background: #cbd5e1;
  }
</style>