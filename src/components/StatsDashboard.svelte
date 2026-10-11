<script>
  import { activeProjectStats } from '../stores/projectStore.js';
</script>

<div class="dashboard-grid">
  <!-- Karte 1: Projekt Name & Fortschrittsbalken -->
  <div class="card card-main">
    <div class="card-title">{$activeProjectStats.name}</div>
    <div class="card-sub">{$activeProjectStats.category}</div>
    <div class="progress-bar-bg">
      <div class="progress-bar-fill" style="width: {$activeProjectStats.progress}%"></div>
    </div>
  </div>

  <!-- Karte 2: Fortschritt % -->
  <div class="card">
    <div class="card-label">Fortschritt</div>
    <div class="card-value">{$activeProjectStats.progress}%</div>
  </div>

  <!-- Karte 3: Aufgaben -->
  <div class="card">
    <div class="card-label">Aufgaben</div>
    <div class="card-value">{$activeProjectStats.total}</div>
  </div>

  <!-- Karte 4: Kritisch -->
  <div class="card">
    <div class="card-label">Kritisch</div>
    <div class="card-value text-red">{$activeProjectStats.critical}</div>
  </div>

  <!-- Karte 5: Überfällig -->
  <div class="card">
    <div class="card-label">Überfällig</div>
    <div class="card-value text-orange">{$activeProjectStats.overdue}</div>
  </div>
</div>

<style>
  .dashboard-grid {
    display: grid;
    grid-template-columns: 2fr repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 20px;
  }

  .card {
    background: #ffffff;
    border-radius: 12px;
    padding: 16px 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    border: 1px solid #f1f5f9;
  }

  .card-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .card-title {
    font-weight: 800;
    font-size: 16px;
    color: #0f172a;
  }

  .card-sub {
    font-size: 12px;
    color: #64748b;
    margin-top: 4px;
    margin-bottom: 12px;
  }

  .progress-bar-bg {
    height: 8px;
    background: #e2e8f0;
    border-radius: 4px;
    overflow: hidden;
  }

  .progress-bar-fill {
    height: 100%;
    background: #4f46e5;
    border-radius: 4px;
    transition: width 0.3s ease;
  }

  .card-label {
    font-size: 12px;
    color: #64748b;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .card-value {
    font-size: 28px;
    font-weight: 800;
    color: #0f172a;
  }

  .text-red {
    color: #ef4444;
  }

  .text-orange {
    color: #f97316;
  }

  @media (max-width: 900px) {
    .dashboard-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>