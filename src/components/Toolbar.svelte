<script>
  import { projects, activeProjectId, viewMode, searchQuery } from '../stores/projectStore.js';

  let selectedDate = new Date().toISOString().split('T')[0];

  function handleSave() {
    alert("Projekt-Änderungen erfolgreich gespeichert!");
  }
</script>

<div class="toolbar">
  <div class="toolbar-left">
    <div class="dropdown-group">
      <select bind:value={$activeProjectId} class="select-project">
        {#each $projects as p}
          <option value={p.id}>{p.name}</option>
        {/each}
      </select>
      <div class="sub-info">{$projects.find(p => p.id === $activeProjectId)?.category || ''}</div>
    </div>

    <div class="date-picker-wrapper">
      <input type="date" bind:value={selectedDate} class="date-input" />
    </div>

    <button class="btn-today">Heute</button>
  </div>

  <div class="toolbar-center">
    <div class="view-switch">
      <button class="view-btn" class:active={$viewMode === 'day'} on:click={() => $viewMode = 'day'}>Tagesansicht</button>
      <button class="view-btn" class:active={$viewMode === 'week'} on:click={() => $viewMode = 'week'}>Wochenansicht</button>
    </div>
  </div>

  <div class="toolbar-right">
    <input type="text" placeholder="Aufgaben filtern..." bind:value={$searchQuery} class="search-input" />
    <button class="btn-save" on:click={handleSave}>Speichern</button>
  </div>
</div>

<style>
  .toolbar {
    background: #ffffff;
    border-radius: 12px;
    padding: 16px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    border: 1px solid #f1f5f9;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

  .toolbar-left, .toolbar-center, .toolbar-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .dropdown-group {
    display: flex;
    flex-direction: column;
  }

  .select-project {
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #cbd5e1;
    font-size: 14px;
    font-weight: 600;
    color: #0f172a;
    background: #fff;
    cursor: pointer;
  }

  .sub-info {
    font-size: 11px;
    color: #64748b;
    margin-top: 2px;
  }

  .date-input {
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #cbd5e1;
    font-size: 13px;
    background: #fff;
  }

  .btn-today {
    background: #f1f5f9;
    border: 1px solid #cbd5e1;
    padding: 8px 14px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    color: #334155;
  }

  .view-switch {
    background: #f1f5f9;
    padding: 4px;
    border-radius: 10px;
    display: flex;
    gap: 4px;
  }

  .view-btn {
    background: transparent;
    border: none;
    padding: 6px 14px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    color: #64748b;
    cursor: pointer;
    transition: all 0.2s;
  }

  .view-btn.active {
    background: #0f172a;
    color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .search-input {
    padding: 8px 14px;
    border-radius: 8px;
    border: 1px solid #cbd5e1;
    font-size: 13px;
    width: 180px;
  }

  .btn-save {
    background: #e2e8f0;
    border: none;
    padding: 8px 18px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 700;
    color: #0f172a;
    cursor: pointer;
    transition: background 0.2s;
  }

  .btn-save:hover {
    background: #cbd5e1;
  }
</style>